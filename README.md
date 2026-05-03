# HK-SZ Route Planner

A lightweight journey planner for **Hong Kong** and **Shenzhen** commuting.

It compares different transport options such as:

- `MTR / SZ Metro`
- `Bus`
- `Taxi`
- `Cross-border routes`
- `High Speed Rail (HSR)`

The project is designed as a visual route advisor with route cards, map display, and transport-specific details such as bus route numbers and cross-border suggestions.

## Features

I. Search routes between places in Hong Kong and Shenzhen
II. Compare `fastest`, `cheapest`, and `balanced` options
III. Show metro, bus, taxi, cross-border coach, and HSR routes
IV. Display bus route numbers and route segments on cards
V. Draw selected routes on the map
VI. Save routes into folders for later review
VII. Provide a tram side panel and simplified tram network view

## Run Locally

I think running through the github pages is better but locally is fine though😊

Do **not** open `index.html` directly by double-clicking it!

This project uses external CSS/JS files and live API requests, so should construct a small local server first.

### Option 1: Python

```bash
cd route-planner
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

### Option 2: VS Code Live Server

If you use VS Code, you can open the folder and run it with the **Live Server** extension.

## Project Structure

```text
route-planner/
├── index.html
├── assets/
│   ├── css/
│   │   └── main.css
│   └── js/
│       └── app.js
└── README.md
```

## Notes

- Some route and live transport features depend on public APIs.
- If an API is unavailable or blocked by browser/network policy, some live features may not load correctly.
- For best results, use a modern browser and run the project through `http://localhost`.

## Authors

Max Zeng Jingda
Jack See Chun Lui
Cami Qi Yifei
Shawn Xiao Zhiping
