import tkinter as tk
from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg
from matplotlib.figure import Figure
import random
import math

window = tk.Tk()
window.title("Map")
window.geometry("1280x720")

stops = []
num_stops = 40
seg_set = set()
name_idx = {}
stop_x, stop_y = [], []
original_lines = []
route_lines = []

class PlaceholderEntry(tk.Entry):
    def __init__(self, master=None, placeholder="", *args, **kwargs):
        super().__init__(master, *args, **kwargs)
        self.placeholder = placeholder
        self.placeholder_color = 'gray'
        self.default_color = self['fg']

        self.bind("<FocusIn>", self._on_focus_in)
        self.bind("<FocusOut>", self._on_focus_out)

        self._show_placeholder()
    
    def _show_placeholder(self):
        if not self.get():
            self.insert(0, self.placeholder)
            self.config(fg=self.placeholder_color)
    
    def _on_focus_in(self, event):
        if self.get() == self.placeholder:
            self.delete(0, tk.END)
            self.config(fg=self.default_color)
    
    def _on_focus_out(self, event):
        self._show_placeholder()
    
    def get_value(self):
        #returns stop_value or empty string
        value = self.get()
        if value == self.placeholder:
            return ""
        return value

def generate_map(num_stops, width=1000):

    global ax, canvas, stops, seg_set, line_info, hover_connection, stop_x, stop_y, original_lines

    def _random_weight(next_stop, mode, linear_dist):

        if mode == 0:       #taxi
            dist = linear_dist * random.randint(12, 15) / 200
            time = dist / random.randint(35, 60) * 60
            if dist <= 2:
                cost = 20
            elif dist <= 10:
                cost = 20 + (dist - 2) * 8
            else:
                cost = 84 + (dist - 10) * 6

        elif mode == 1:     #bus
            dist = linear_dist * random.randint(14, 23) / 200
            time = dist / random.randint(20, 30) * 60
            if dist <= 5:
                cost = 10
            elif dist <= 20:
                cost = 20
            elif dist <= 30:
                cost = 30
            elif dist <= 40:
                cost = 40
            elif dist <= 50:
                cost = 50
            else:
                cost = 50 + (dist - 50) * 0.6

        elif mode == 2:     #metro
            dist = linear_dist * random.randint(13, 26) / 200
            time = dist / random.randint(30, 50) * 60
            cost = 10 if dist <= 5 else 10 + (dist - 5) * 0.6

        return round(time), round(cost)

    def on_mouse_hover(event):
        #hover to display segment info (optional), DeepSeek v3 generated

        if event.inaxes != ax:
            return

        for line, (i, j), info in line_info:
            contains, _ = line.contains(event)
            if contains:
                text = f"Stop{i} -- Stop{j}\n" + "\n".join(info)
                annotation.set_text(text)
                
                x, y = event.xdata, event.ydata                
                x_pixel, y_pixel = ax.transData.transform((x, y))
                
                bbox = ax.get_window_extent().transformed(fig.dpi_scale_trans.inverted())
                canvas_width_pixel = bbox.width * fig.dpi
                canvas_height_pixel = bbox.height * fig.dpi
                
                offset_x, offset_y = 15, -15
                
                if x_pixel + offset_x + 150 > canvas_width_pixel:
                    offset_x = -150
                if y_pixel + offset_y - 50 < 0:
                    offset_y = 20
                
                annotation.xy = (x, y)
                annotation.xytext = (offset_x, offset_y)
                annotation.set_visible(True)
                canvas.draw_idle()
                return

        annotation.set_visible(False)
        fig.canvas.draw_idle()

    for line in original_lines:
        line.remove()
    original_lines.clear()
    
    ax.clear()
    stops.clear()
    seg_set.clear()
    stop_x.clear()
    stop_y.clear()

    if 'hover_connection' in globals() and hover_connection:
        fig.canvas.mpl_disconnect(hover_connection)
        
    line_info = []

    for i in range(num_stops):

        stop_x.append(random.randint(0, width))
        stop_y.append(random.randint(0, width))
        stops.append([0, {}])
        name = f"stop{i}"
        name_idx[name] = i

        ax.annotate(
            name, 
            (stop_x[i], stop_y[i]), 
            xytext=(5, 5),          
            textcoords='offset points',  
            fontsize=8
        )

    for i in range(num_stops):

        t, attempts, max_attempts = 0, 0, (num_stops - 1) * 2
        diff = random.randint(1, 3) - stops[i][0]

        while t < diff and attempts < max_attempts:

            next_stop = random.randint(0, num_stops - 1)
            crt_seg = (i, next_stop) if i < next_stop else (next_stop, i)
            linear_dist  = math.sqrt((stop_y[next_stop] - stop_y[i]) ** 2 + (stop_x[next_stop] - stop_x[i]) ** 2)

            if next_stop != i and crt_seg not in seg_set and linear_dist <= 350:

                seg_set.add(crt_seg)
                seg_info = []
                stops[i][1][next_stop] = [[], [], []]
                stops[next_stop][1][i] = [[], [], []]
                # stops = [[num_seg, {next_stop: [[time, cost], [], []], }]]

                for j in range(3):
                        
                    has_mode = random.choices([True, False], weights=[0.7, 0.3])[0] if j != 0 else True
                    
                    if has_mode:
                        time, cost = _random_weight(next_stop, j, linear_dist)
                        stops[i][1][next_stop][j] = [time, cost]
                        stops[next_stop][1][i][j] = [time, cost]
                        seg_info.append(f"{j}: {time} min, ${cost}")

                line, = ax.plot([stop_x[i], stop_x[next_stop]], [stop_y[i], stop_y[next_stop]], 'gray', linewidth=2, alpha=0.3, picker=True, pickradius=5)
                line_info.append((line, crt_seg, seg_info))
                original_lines.append(line)

                t += 1
                stops[i][0] += 1
                stops[next_stop][0] += 1

            attempts += 1        

    annotation = ax.annotate("", xy=(0,0), xytext=(10,10),
                             textcoords='offset points',
                             bbox=dict(boxstyle='round', facecolor='yellow', alpha=0.8),
                             fontsize=9,
                             visible=False)
    
    ax.scatter(stop_x, stop_y, s=10)

    ax.set_axis_off()
    ax.set_xlim(0, width)
    ax.set_ylim(0, width)
    ax.grid(False)
    canvas.draw()

    fig = canvas.figure
    fig.canvas.mpl_connect('motion_notify_event', on_mouse_hover)
    canvas.draw_idle()

def find_route(mode_filter, opt_goal, start_name, way_pt_entries, end_name):

    global route_lines, original_lines, stop_x, stop_y

    for line in route_lines:
        try:
            line.remove()
        except:
            pass
    route_lines.clear()
    
    for line in original_lines:
        try:
            line.set_alpha(0.1)
        except:
            pass
    
    if start_name not in name_idx or end_name not in name_idx:
        print("name not found")
        return

    start_idx = name_idx[start_name]
    end_idx = name_idx[end_name]

    mode_idx = 0
    selected_modes = []

    for mode in mode_filter:
        if mode_filter[mode].get() == 1:
            selected_modes.append(mode_idx)        
        mode_idx += 1

    goal_idx = opt_goal.get()

    def _dijkstra(start, end, banned_edges=None):
        # banned_edges: list of (curr, prev, mode)
        banned_set = set()
        if banned_edges:
            for (curr, prev, mode) in banned_edges:
                banned_set.add((prev, curr, mode))

        crt_best = [99999 for _ in range(num_stops)]
        prev_stop = [None for _ in range(num_stops)]
        used_mode = [None for _ in range(num_stops)]

        crt_stop = start
        crt_best[crt_stop] = 0
        optimized_stops = set()
        nonoptimized = set()

        while True:
            accm_weight = crt_best[crt_stop]
            nonoptimized.add(crt_stop)
            segs = stops[crt_stop][1]

            for next_stop in segs:
                if next_stop not in optimized_stops:
                    for mode in selected_modes:
                        if segs[next_stop][mode]:
                            if (crt_stop, next_stop, mode) in banned_set:
                                continue
                            weight = segs[next_stop][mode][goal_idx]
                            if accm_weight + weight < crt_best[next_stop]:
                                crt_best[next_stop] = accm_weight + weight
                                prev_stop[next_stop] = crt_stop
                                used_mode[next_stop] = mode
                    nonoptimized.add(next_stop)

            optimized_stops.add(crt_stop)
            nonoptimized.remove(crt_stop)

            if crt_stop == end:
                best_route = []
                temp_stop = end
                while temp_stop != start:
                    prev = prev_stop[temp_stop]
                    mode = used_mode[temp_stop]
                    best_route.append((temp_stop, prev, mode))
                    temp_stop = prev
                best_route.reverse()
                return best_route, len(best_route), crt_best[end]

            min_val = 99999
            min_idx = -1
            for i in nonoptimized:
                val = crt_best[i]
                if val < min_val:
                    min_val, min_idx = val, i
            if min_idx == -1:
                return [], 0, 99999
            crt_stop = min_idx

    def _yens_alg(k):

        #DeepSeek-R1 modified

        global stops

        def prefix_subsets(tpl, n):
            result = {()}
            for i in range(1, n + 1):
                result.add(tpl[:i])
            return result

        A1, A1_len, A1_weight = _dijkstra(start_idx, end_idx)
        top_k_routes = [A1]
        top_k_routes_len = [A1_len]
        top_k_weights = [A1_weight]
        footprint = [prefix_subsets(tuple(A1), A1_len)]

        if not A1:
            print("Not connected")
            return

        draw_route(A1, "blue", 1)
        colors = ["green", "orange"]

        for i in range(k - 1):
            A_k = top_k_routes[i]
            A_k_len = top_k_routes_len[i]
            min_weight = 99999
            opt_route = []
            opt_route_len = -1

            for j in range(A_k_len):
                prefix_edges = A_k[:j]
                if j == 0:
                    dev_node = start_idx
                    prefix_weight = 0
                else:
                    dev_node = prefix_edges[-1][0]
                    prefix_weight = 0
                    for (curr, prev, mode) in prefix_edges:
                        prefix_weight += stops[prev][1][curr][mode][goal_idx]

                banned_edges = []
                sub_route_tuple = tuple(prefix_edges)
                for s in range(len(footprint)):
                    if sub_route_tuple in footprint[s]:
                        edge = top_k_routes[s][j]
                        if edge not in banned_edges:
                            banned_edges.append(edge)
  
                current_edge = A_k[j]
                if current_edge not in banned_edges:
                    banned_edges.append(current_edge)

                temp_val = []
                for curr, prev, mode in banned_edges:
                    temp_val.append(stops[prev][1][curr][mode])
                    stops[prev][1][curr][mode] = []
                    stops[curr][1][prev][mode] = []

                suffix_path, suffix_len, suffix_weight = _dijkstra(dev_node, end_idx, banned_edges)

                for (curr, prev, mode), val in zip(banned_edges, temp_val):
                    stops[prev][1][curr][mode] = val
                    stops[curr][1][prev][mode] = val

                if suffix_path:
                    full_path = prefix_edges + suffix_path
                    full_weight = prefix_weight + suffix_weight
                    if full_weight < min_weight:
                        min_weight = full_weight
                        opt_route = full_path
                        opt_route_len = len(full_path)

            if opt_route:
                top_k_routes.append(opt_route)
                top_k_routes_len.append(opt_route_len)
                top_k_weights.append(min_weight)
                footprint.append(prefix_subsets(tuple(opt_route), opt_route_len))
                draw_route(opt_route, colors[i], i + 2)
            else:
                print("Not connected")
                break                

    def draw_route(route, color, k):

        for curr, prev, mode in route:
            x_coords = [stop_x[prev], stop_x[curr]]
            y_coords = [stop_y[prev], stop_y[curr]]
            line, = ax.plot(x_coords, y_coords, color, linewidth=3, alpha=0.8)
            route_lines.append(line)
        
        total_time = 0
        total_cost = 0
        print(f"\nroute{k}:")
        for curr, prev, mode in route:
            edge_data = stops[prev][1][curr][mode]
            if not edge_data:
                print(f"  Warning: ({prev}->{curr}) mode {mode} has no data")
                continue
            time_val = edge_data[0]
            cost_val = edge_data[1]
            total_time += time_val
            total_cost += cost_val
            mode_name = ["Taxi", "Bus", "Metro"][mode]
            print(f"  {prev} -> {curr}: {mode_name}, {time_val}min, ${cost_val}")
        
        print(f"  Total: {total_time}min, ${total_cost}")
        
        canvas.draw_idle()
    
    if way_pt_entries:
        temp_idx = end_idx
        end_idx = name_idx[way_pt_entries[0].get()]
        _yens_alg(1)
        start_idx = end_idx
        end_idx = temp_idx
        _yens_alg(1)
    else:
        _yens_alg(3)
   

map_frame = tk.Frame(window, bg='white', relief='sunken', bd=2)
map_frame.pack(side=tk.LEFT, fill=tk.BOTH, expand=True, padx=5, pady=5)

fig = Figure(figsize=(5, 5), dpi=100)
ax = fig.add_subplot(111)
canvas = FigureCanvasTkAgg(fig, master=map_frame)
canvas.get_tk_widget().pack(fill=tk.BOTH, expand=True)

generate_map(num_stops)

opr_frame = tk.Frame(window, relief='raised', bd=2)
opr_frame.pack(side=tk.RIGHT, fill=tk.BOTH, padx=5, pady=5)

start_entry = PlaceholderEntry(opr_frame, width=30, placeholder="Enter Origin")
start_entry.pack(pady=10)

way_pt_entries = []
num_way_pt = 0

def add_waypoint():
    global num_way_pt
    if num_way_pt < 1:
        entry = PlaceholderEntry(way_pt_frame, width=30, placeholder=f"Enter Waypoint{num_way_pt + 1}")
        entry.pack(pady=5)
        way_pt_entries.append(entry)
        num_way_pt += 1

def remove_waypoint():
    global num_way_pt
    if way_pt_entries:
        entry = way_pt_entries.pop()
        entry.destroy()
        num_way_pt -= 1

way_pt_frame = tk.Frame(opr_frame)
way_pt_frame.pack()

end_entry = PlaceholderEntry(opr_frame, width=30, placeholder="Enter Destination")
end_entry.pack(pady=10)
#xxxEntry.get() gets the input

#add_waypoint button
tk.Button(
    opr_frame, 
    text = "+ Add Waypoint",
    bg = "blue",
    fg = "white",
    font = ("Arial", 10),
    command = add_waypoint,
).pack(pady=10)

tk.Button(
    opr_frame, 
    text = "- Remove Waypoint",
    bg = "red",
    fg = "white",
    font = ("Arial", 10),
    command = remove_waypoint,
).pack(pady=5)

def recover_map():
    #DeepSeek v3 generated    
    global route_lines, original_lines
    
    for line in route_lines:
        try:
            line.remove()
        except:
            pass
    route_lines.clear()
    
    for line in original_lines:
        try:
            line.set_alpha(0.3)
        except:
            pass

tk.Button(
    opr_frame, 
    text = "Reset Map",
    bg = "orange",
    fg = "white",
    font = ("Arial", 10),
    command = recover_map,
).pack(pady=5)

#optimization goals filter
opt_goal_frame = tk.Frame(opr_frame)
opt_goal_frame.pack(pady=15)
tk.Label(opt_goal_frame, text="Optimization Goal", font=("Arial", 12)).pack(pady=5)
opt_goal = tk.IntVar(value=0)
tk.Radiobutton(opt_goal_frame, text="fastest", variable=opt_goal, value=0, font=("Arial", 10)).pack(side=tk.LEFT, padx=5)
tk.Radiobutton(opt_goal_frame, text="cheapest", variable=opt_goal, value=1, font=("Arial", 10)).pack(side=tk.LEFT, padx=5)
#opt_goal.get() gets the value

#transportation modes filter
mode_frame = tk.Frame(opr_frame)
mode_frame.pack(pady=15)
tk.Label(mode_frame, text="Transportation Modes", font=("Arial", 12)).pack(pady=5)
mode_filter = {}
for mode in ["Taxi", "Bus", "Metro"]:
    var = tk.IntVar(value=1)
    cb = tk.Checkbutton(mode_frame, text=mode, variable=var, font=("Arial", 10))
    cb.pack(side=tk.LEFT, padx=5)
    mode_filter[mode] = var
# mode_filter[mode].get() gets the status

#find_route button
tk.Button(
    opr_frame, 
    text = "Find Routes",
    bg = "blue",
    fg = "white",
    font = ("Arial", 10),
    command = lambda: find_route(mode_filter, opt_goal, start_entry.get(), way_pt_entries, end_entry.get()),
).pack(pady=15)

tk.Button(
    opr_frame, 
    text = "Regenerate Random Map",
    bg = "red",
    fg = "white",
    font = ("Arial", 10),
    command = lambda: generate_map(num_stops),
).pack(pady=15)

window.mainloop()