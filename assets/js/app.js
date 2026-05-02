(function() {
'use strict';

// ═══════════════════════════════════════════════════════
//  STATION DATABASE
// ═══════════════════════════════════════════════════════
let STATIONS = {
  // ── East Rail Line ──
  hk_hung_hom:      { name:'Hung Hom',          coords:[22.30244,114.18239], system:'hk' },
  hk_mok_east:      { name:'Mong Kok East',      coords:[22.32381,114.17409], system:'hk' },
  hk_kln_tong:      { name:'Kowloon Tong',       coords:[22.33693,114.17605], system:'hk' },
  hk_tai_wai:       { name:'Tai Wai',             coords:[22.37266,114.17879], system:'hk' },
  hk_sha_tin:       { name:'Sha Tin',             coords:[22.38197,114.18760], system:'hk' },
  hk_fo_tan:        { name:'Fo Tan',              coords:[22.39575,114.19799], system:'hk' },
  hk_university:    { name:'University',          coords:[22.41342,114.21009], system:'hk' },
  hk_tai_po:        { name:'Tai Po Market',       coords:[22.44411,114.17028], system:'hk' },
  hk_tai_wo:        { name:'Tai Wo',              coords:[22.45710,114.16387], system:'hk' },
  hk_fanling:       { name:'Fanling',             coords:[22.49207,114.13883], system:'hk' },
  hk_sheung_shui:   { name:'Sheung Shui',         coords:[22.50162,114.12818], system:'hk' },
  hk_lo_wu:         { name:'Lo Wu',               coords:[22.52813,114.11172], system:'hk', border:true },
  hk_lok_ma_chau:   { name:'Lok Ma Chau',         coords:[22.51477,114.07902], system:'hk', border:true },
  // ── Tsuen Wan Line ──
  hk_central:       { name:'Central',             coords:[22.28191,114.15827], system:'hk' },
  hk_admiralty:     { name:'Admiralty',           coords:[22.27912,114.16506], system:'hk' },
  hk_tst:           { name:'Tsim Sha Tsui',       coords:[22.29751,114.17222], system:'hk' },
  hk_jordan:        { name:'Jordan',              coords:[22.30535,114.17174], system:'hk' },
  hk_ymt:           { name:'Yau Ma Tei',          coords:[22.31299,114.16955], system:'hk' },
  hk_mong_kok:      { name:'Mong Kok',            coords:[22.31934,114.16944], system:'hk' },
  hk_prince_ed:     { name:'Prince Edward',       coords:[22.32438,114.16854], system:'hk' },
  hk_ssp:           { name:'Sham Shui Po',        coords:[22.33027,114.16207], system:'hk' },
  hk_csw:           { name:'Cheung Sha Wan',      coords:[22.33845,114.15215], system:'hk' },
  hk_lck:           { name:'Lai Chi Kok',         coords:[22.33794,114.14753], system:'hk' },
  hk_mei_foo:       { name:'Mei Foo',             coords:[22.33828,114.13721], system:'hk' },
  hk_lai_king:      { name:'Lai King',            coords:[22.34833,114.12764], system:'hk' },
  hk_kwai_fong:     { name:'Kwai Fong',           coords:[22.35698,114.12820], system:'hk' },
  hk_kwai_hing:     { name:'Kwai Hing',           coords:[22.36324,114.13118], system:'hk' },
  hk_tai_wo_hau:    { name:'Tai Wo Hau',          coords:[22.37126,114.12524], system:'hk' },
  hk_tsuen_wan:     { name:'Tsuen Wan',           coords:[22.36959,114.11546], system:'hk' },
  // ── Island Line ──
  hk_kennedy_town:  { name:'Kennedy Town',        coords:[22.28117,114.12880], system:'hk' },
  hk_hku:           { name:'HKU',                 coords:[22.28407,114.13600], system:'hk' },
  hk_sai_ying_pun:  { name:'Sai Ying Pun',        coords:[22.28607,114.14251], system:'hk' },
  hk_sheung_wan:    { name:'Sheung Wan',          coords:[22.28659,114.15036], system:'hk' },
  hk_hk_stn:        { name:'Hong Kong',           coords:[22.28430,114.15762], system:'hk' },
  hk_west_kowloon:  { name:'West Kowloon HSR',    coords:[22.3046,114.1631], system:'hk' },
  hk_exhibition:    { name:'Exhibition',           coords:[22.28330,114.17200], system:'hk' },
  hk_wan_chai:      { name:'Wan Chai',            coords:[22.27826,114.17465], system:'hk' },
  hk_cwb:           { name:'Causeway Bay',        coords:[22.28056,114.18398], system:'hk' },
  hk_tin_hau:       { name:'Tin Hau',             coords:[22.28323,114.19175], system:'hk' },
  hk_fortress_hill: { name:'Fortress Hill',       coords:[22.28689,114.19421], system:'hk' },
  hk_north_point:   { name:'North Point',         coords:[22.29068,114.20204], system:'hk' },
  hk_quarry_bay:    { name:'Quarry Bay',          coords:[22.28726,114.20892], system:'hk' },
  hk_tai_koo:       { name:'Tai Koo',             coords:[22.28428,114.21600], system:'hk' },
  hk_sai_wan_ho:    { name:'Sai Wan Ho',          coords:[22.28007,114.22190], system:'hk' },
  hk_shau_kei_wan:  { name:'Shau Kei Wan',        coords:[22.27977,114.22944], system:'hk' },
  hk_heng_fa:       { name:'Heng Fa Chuen',       coords:[22.27474,114.23909], system:'hk' },
  hk_chai_wan:      { name:'Chai Wan',            coords:[22.26416,114.23728], system:'hk' },
  // ── Tung Chung Line + Airport Express ──
  hk_kowloon:       { name:'Kowloon (Austin)',    coords:[22.30451,114.16059], system:'hk' },
  hk_tsing_yi:      { name:'Tsing Yi',            coords:[22.35814,114.10773], system:'hk' },
  hk_sunny_bay:     { name:'Sunny Bay',           coords:[22.33195,113.94349], system:'hk' },
  hk_tung_chung:    { name:'Tung Chung',          coords:[22.28901,113.94295], system:'hk' },
  hk_airport:       { name:'Airport (HKIA)',      coords:[22.31611,113.93576], system:'hk' },
  // ── Kwun Tong Line ──
  hk_tiu_keng_leng: { name:'Tiu Keng Leng',       coords:[22.30490,114.25217], system:'hk' },
  hk_yau_tong:      { name:'Yau Tong',            coords:[22.29768,114.23985], system:'hk' },
  hk_lam_tin:       { name:'Lam Tin',             coords:[22.30680,114.23313], system:'hk' },
  hk_kwun_tong:     { name:'Kwun Tong',           coords:[22.31199,114.22655], system:'hk' },
  hk_ntk:           { name:'Ngau Tau Kok',        coords:[22.31558,114.21673], system:'hk' },
  hk_kowloon_bay:   { name:'Kowloon Bay',         coords:[22.32358,114.21426], system:'hk' },
  hk_choi_hung:     { name:'Choi Hung',           coords:[22.33524,114.20993], system:'hk' },
  hk_diamond_hill:  { name:'Diamond Hill',        coords:[22.33889,114.20172], system:'hk' },
  hk_wong_tai_sin:  { name:'Wong Tai Sin',        coords:[22.34166,114.19336], system:'hk' },
  hk_lok_fu:        { name:'Lok Fu',              coords:[22.33923,114.18731], system:'hk' },
  hk_skm:           { name:'Shek Kip Mei',        coords:[22.33143,114.17705], system:'hk' },
  // ── South Island Line ──
  hk_ocean_park:    { name:'Ocean Park',          coords:[22.24851,114.17440], system:'hk' },
  hk_wch:           { name:'Wong Chuk Hang',      coords:[22.24676,114.17186], system:'hk' },
  hk_lei_tung:      { name:'Lei Tung',            coords:[22.24203,114.14906], system:'hk' },
  hk_south_hor:     { name:'South Horizons',      coords:[22.24178,114.14473], system:'hk' },
  // ── SZ Metro ──
  sz_luohu:         { name:'罗湖 Luohu',               coords:[22.5466,114.1105], system:'sz', border:true },
  sz_guomao:        { name:'国贸 Guomao',              coords:[22.5464,114.1062], system:'sz' },
  sz_laojie:        { name:'老街 Laojie',              coords:[22.5477,114.0975], system:'sz' },
  sz_dajuyuan:      { name:'大剧院 Grand Theater',     coords:[22.5461,114.0879], system:'sz' },
  sz_hqlu:          { name:'华强路 Huaqianglu',        coords:[22.5463,114.0811], system:'sz' },
  sz_gangxia:       { name:'岗厦 Gangxia',             coords:[22.5419,114.0736], system:'sz' },
  sz_gouwu:         { name:'购物公园 COCO Park',       coords:[22.5403,114.0507], system:'sz' },
  sz_huizhan:       { name:'会展中心 Convention Ctr',  coords:[22.5360,114.0451], system:'sz' },
  sz_chegong:       { name:'车公庙 Chegongmiao',       coords:[22.5302,114.0350], system:'sz' },
  sz_xiangmihu:     { name:'香蜜湖 Xiangmihu',         coords:[22.5340,114.0259], system:'sz' },
  sz_zhuzilin:      { name:'竹子林 Zhuzilin',          coords:[22.5374,114.0062], system:'sz' },
  sz_oct_east:      { name:'侨城东 OCT East',          coords:[22.5368,113.9978], system:'sz' },
  sz_oct:           { name:'华侨城 OCT',               coords:[22.5344,113.9910], system:'sz' },
  sz_winworld:      { name:'世界之窗 Window World',    coords:[22.5373,113.9886], system:'sz' },
  sz_baishi:        { name:'白石洲 Baishizhou',        coords:[22.5370,113.9773], system:'sz' },
  sz_hitech:        { name:'高新园 Hi-Tech Park',      coords:[22.5394,113.9602], system:'sz' },
  sz_sz_univ:       { name:'深大 SZ University',       coords:[22.5401,113.9470], system:'sz' },
  sz_taoyuan:       { name:'桃园 Taoyuan',             coords:[22.5400,113.9297], system:'sz' },
  sz_qianhai:       { name:'前海湾 Qianhai Bay',       coords:[22.5241,113.8899], system:'sz' },
  sz_airport_e:     { name:'机场东 Airport East',      coords:[22.6456,113.8210], system:'sz' },
  sz_longhua:       { name:'龙华 Longhua',             coords:[22.6297,114.0315], system:'sz' },
  sz_hongshan:      { name:'红山 Hongshan',            coords:[22.6121,114.0304], system:'sz' },
  sz_sz_north:      { name:'深圳北 SZ North Stn',      coords:[22.6097,114.0290], system:'sz' },
  sz_minle:         { name:'民乐 Minle',               coords:[22.5898,114.0287], system:'sz' },
  sz_shangmei:      { name:'上梅林 Shangmeilin',       coords:[22.5743,114.0287], system:'sz' },
  sz_meilin:        { name:'梅林 Meilin',              coords:[22.5646,114.0264], system:'sz' },
  sz_lianhua:       { name:'莲花北 Lianhuabei',        coords:[22.5542,114.0277], system:'sz' },
  sz_futian:        { name:'福田 Futian',              coords:[22.5274,114.0557], system:'sz' },
  sz_civic:         { name:'市民中心 Civic Center',    coords:[22.5354,114.0514], system:'sz' },
  sz_ft_port:       { name:'福田口岸 Futian Port',     coords:[22.5200,114.0560], system:'sz', border:true },
  sz_chiwan:        { name:'赤湾 Chiwan',              coords:[22.4649,113.9009], system:'sz' },
  sz_shekou_p:      { name:'蛇口港 Shekou Port',       coords:[22.4776,113.9013], system:'sz' },
  sz_sea_world:     { name:'海上世界 Sea World',       coords:[22.4844,113.9085], system:'sz' },
  sz_qinghu:        { name:'清湖 Qinghu',              coords:[22.6512,114.0306], system:'sz' },
  sz_bao_ctr:       { name:"宝安中心 Bao'an Ctr",      coords:[22.5560,113.8852], system:'sz' },
  sz_airport:       { name:"机场 Airport (Bao'an)",    coords:[22.6398,113.8108], system:'sz' },
};

// ═══════════════════════════════════════════════════════
//  TRANSIT LINES
// ═══════════════════════════════════════════════════════
let LINES = [
  { id:'erl',    name:'East Rail Line',    color:'#5eb6e4', system:'hk',
    stations:['hk_admiralty','hk_exhibition','hk_hung_hom','hk_mok_east','hk_kln_tong','hk_tai_wai','hk_sha_tin','hk_fo_tan','hk_university','hk_tai_po','hk_tai_wo','hk_fanling','hk_sheung_shui','hk_lo_wu'] },
  { id:'erl',    name:'East Rail Line',    color:'#5eb6e4', system:'hk',
    stations:['hk_sheung_shui','hk_lok_ma_chau'] },
  { id:'twl',    name:'Tsuen Wan Line',    color:'#e60012', system:'hk',
    stations:['hk_central','hk_tst','hk_jordan','hk_ymt','hk_mong_kok','hk_prince_ed','hk_ssp','hk_csw','hk_lck','hk_mei_foo','hk_lai_king','hk_kwai_fong','hk_kwai_hing','hk_tai_wo_hau','hk_tsuen_wan'] },
  { id:'isl',    name:'Island Line',       color:'#0860a8', system:'hk',
    stations:['hk_kennedy_town','hk_hku','hk_sai_ying_pun','hk_sheung_wan','hk_central','hk_admiralty','hk_wan_chai','hk_cwb','hk_tin_hau','hk_fortress_hill','hk_north_point','hk_quarry_bay','hk_tai_koo','hk_sai_wan_ho','hk_shau_kei_wan','hk_heng_fa','hk_chai_wan'] },
  { id:'tcl',    name:'Tung Chung Line',   color:'#f5a500', system:'hk',
    stations:['hk_hk_stn','hk_kowloon','hk_tsing_yi','hk_sunny_bay','hk_tung_chung'] },
  { id:'ael',    name:'Airport Express',   color:'#1d6fad', system:'hk',
    stations:['hk_hk_stn','hk_kowloon','hk_tsing_yi','hk_airport'] },
  { id:'ktl',    name:'Kwun Tong Line',    color:'#00ab55', system:'hk',
    stations:['hk_tiu_keng_leng','hk_yau_tong','hk_lam_tin','hk_kwun_tong','hk_ntk','hk_kowloon_bay','hk_choi_hung','hk_diamond_hill','hk_wong_tai_sin','hk_lok_fu','hk_kln_tong','hk_skm','hk_prince_ed','hk_mong_kok'] },
  { id:'sil',    name:'South Island Line', color:'#B5BD00', system:'hk',
    stations:['hk_admiralty','hk_ocean_park','hk_wch','hk_lei_tung','hk_south_hor'] },
  { id:'sz1',    name:'SZ Metro Line 1',   color:'#00a651', system:'sz',
    stations:['sz_luohu','sz_guomao','sz_laojie','sz_dajuyuan','sz_hqlu','sz_gangxia','sz_gouwu','sz_huizhan','sz_chegong','sz_xiangmihu','sz_zhuzilin','sz_oct_east','sz_oct','sz_winworld','sz_baishi','sz_hitech','sz_sz_univ','sz_taoyuan','sz_qianhai'] },
  { id:'sz4',    name:'SZ Metro Line 4',   color:'#ED1C24', system:'sz',
    stations:['sz_qinghu','sz_longhua','sz_hongshan','sz_sz_north','sz_minle','sz_shangmei','sz_meilin','sz_lianhua','sz_futian','sz_civic','sz_huizhan','sz_ft_port'] },
  { id:'sz2',    name:'SZ Metro Line 2',   color:'#ef7c00', system:'sz',
    stations:['sz_chiwan','sz_shekou_p','sz_sea_world','sz_qianhai','sz_chegong','sz_hqlu','sz_laojie'] },
  { id:'sz11',   name:'SZ Metro Line 11',  color:'#C9A028', system:'sz',
    stations:['sz_futian','sz_chegong','sz_bao_ctr','sz_airport'] },
];

const INTERCHANGE_LINKS = [
  { a:'hk_hk_stn', b:'hk_central', cost: 4.8, system:'hk', lineId:'xfer_hk_hk_stn_central', lineName:'Station Link', lineColor:'#6b7280' },
  { a:'hk_kowloon', b:'hk_west_kowloon', cost: 9, system:'hk', lineId:'xfer_hk_kowloon_wk', lineName:'Station Link', lineColor:'#6b7280' },
  { a:'hk_tst', b:'hk_west_kowloon', cost: 11, system:'hk', lineId:'xfer_hk_tst_wk', lineName:'Station Link', lineColor:'#6b7280' },
];

const HSR_STATION_PROCESS_MIN = 25;
const HSR_BOARDING_CUTOFF_MIN = 4;
const HSR_TIMETABLES = {
  sz_futian: {
    label: 'Futian',
    departFrom: 'West Kowloon',
    first: '07:07',
    last: '23:00',
    fareHkd: 78,
  },
  sz_sz_north: {
    label: 'Shenzhen North',
    departFrom: 'West Kowloon',
    first: '07:01',
    last: '23:00',
    fareHkd: 86,
  },
};

const HSR_SERVICE_TIMES = [
  { trainNo:'G5624', departure:'07:01', sz_sz_north:'07:19' },
  { trainNo:'G5820', departure:'07:07', sz_futian:'07:21' },
  { trainNo:'G5610', departure:'07:20', sz_futian:'07:34', sz_sz_north:'07:44' },
  { trainNo:'G6390', departure:'07:26', sz_futian:'07:40', sz_sz_north:'07:50' },
  { trainNo:'G6536', departure:'07:31', sz_futian:'07:45', sz_sz_north:'07:55' },
  { trainNo:'G6566', departure:'07:41', sz_sz_north:'07:59' },
  { trainNo:'G6080', departure:'08:07', sz_sz_north:'08:27' },
  { trainNo:'G5822', departure:'08:12', sz_futian:'08:26' },
  { trainNo:'G5626', departure:'08:17', sz_sz_north:'08:35' },
  { trainNo:'G6582', departure:'08:22', sz_sz_north:'08:40' },
  { trainNo:'G6552', departure:'08:37', sz_sz_north:'08:56' },
  { trainNo:'G924', departure:'08:48', sz_futian:'09:02', sz_sz_north:'09:12' },
  { trainNo:'G5638', departure:'08:58', sz_sz_north:'09:17' },
  { trainNo:'G914', departure:'09:02', sz_futian:'09:16', sz_sz_north:'09:26' },
  { trainNo:'G6510', departure:'09:08', sz_futian:'09:22', sz_sz_north:'09:32' },
  { trainNo:'G904', departure:'09:18', sz_sz_north:'09:36' },
  { trainNo:'G5812', departure:'09:28', sz_futian:'09:42' },
  { trainNo:'G6554', departure:'09:28', sz_sz_north:'09:46' },
  { trainNo:'G6528', departure:'09:35', sz_sz_north:'09:53' },
  { trainNo:'G6518', departure:'09:40', sz_sz_north:'10:00' },
  { trainNo:'G918', departure:'10:02', sz_sz_north:'10:23' },
  { trainNo:'G5640', departure:'10:13', sz_sz_north:'10:31' },
  { trainNo:'G6048', departure:'10:18', sz_futian:'10:32', sz_sz_north:'10:43' },
  { trainNo:'G5816', departure:'10:23', sz_futian:'10:37' },
  { trainNo:'G6528', departure:'10:29', sz_futian:'10:43', sz_sz_north:'10:54' },
  { trainNo:'G6534', departure:'10:35', sz_futian:'10:49', sz_sz_north:'11:03' },
  { trainNo:'G6546', departure:'10:40', sz_sz_north:'10:59' },
  { trainNo:'G6530', departure:'10:45', sz_futian:'10:59', sz_sz_north:'11:09' },
  { trainNo:'G6584', departure:'11:02', sz_sz_north:'11:20' },
  { trainNo:'G908', departure:'11:14', sz_sz_north:'11:32' },
  { trainNo:'G304', departure:'11:19', sz_sz_north:'11:38' },
  { trainNo:'G5818', departure:'11:25', sz_futian:'11:39' },
  { trainNo:'G6542', departure:'11:30', sz_sz_north:'11:48' },
  { trainNo:'G902', departure:'11:35', sz_sz_north:'11:54' },
  { trainNo:'G6568', departure:'11:41', sz_sz_north:'11:59' },
  { trainNo:'G906', departure:'11:52', sz_sz_north:'12:12' },
  { trainNo:'G6574', departure:'11:58', sz_sz_north:'12:16' },
  { trainNo:'G6540', departure:'12:03', sz_sz_north:'12:22' },
  { trainNo:'G6532', departure:'12:13', sz_sz_north:'12:31' },
  { trainNo:'G6516', departure:'12:18', sz_sz_north:'12:36' },
  { trainNo:'G6556', departure:'12:23', sz_sz_north:'12:41' },
  { trainNo:'G5858', departure:'12:34', sz_futian:'12:48' },
  { trainNo:'G6520', departure:'12:39', sz_sz_north:'12:57' },
  { trainNo:'G5644', departure:'12:45', sz_futian:'12:59', sz_sz_north:'13:09' },
  { trainNo:'G6392', departure:'12:55', sz_sz_north:'13:13' },
  { trainNo:'G6530', departure:'13:15', sz_futian:'13:29', sz_sz_north:'13:40' },
  { trainNo:'G5808', departure:'13:23', sz_futian:'13:37' },
  { trainNo:'G6536', departure:'13:33', sz_futian:'13:47', sz_sz_north:'13:57' },
  { trainNo:'G6558', departure:'13:44', sz_sz_north:'14:02' },
  { trainNo:'G5620', departure:'13:49', sz_sz_north:'14:07' },
  { trainNo:'G5646', departure:'14:00', sz_futian:'14:14', sz_sz_north:'14:28' },
  { trainNo:'G6386', departure:'14:05', sz_sz_north:'14:23' },
  { trainNo:'G920', departure:'14:14', sz_sz_north:'14:33' },
  { trainNo:'G6548', departure:'14:32', sz_futian:'14:46', sz_sz_north:'14:56' },
  { trainNo:'G5810', departure:'14:38', sz_futian:'14:52' },
  { trainNo:'G5860', departure:'14:46', sz_futian:'15:01' },
  { trainNo:'G922', departure:'14:54', sz_sz_north:'15:12' },
  { trainNo:'G6508', departure:'14:59', sz_sz_north:'15:17' },
  { trainNo:'G6522', departure:'15:06', sz_sz_north:'15:24' },
  { trainNo:'G6522', departure:'15:11', sz_sz_north:'15:31' },
  { trainNo:'G6538', departure:'15:17', sz_sz_north:'15:35' },
  { trainNo:'G5806', departure:'15:27', sz_futian:'15:41' },
  { trainNo:'G928', departure:'15:34', sz_sz_north:'15:52' },
  { trainNo:'G5634', departure:'15:46', sz_sz_north:'16:04' },
  { trainNo:'G6570', departure:'15:51', sz_sz_north:'16:09' },
  { trainNo:'G6580', departure:'16:04', sz_futian:'16:18', sz_sz_north:'16:28' },
  { trainNo:'G5828', departure:'16:10', sz_futian:'16:24' },
  { trainNo:'G6512', departure:'16:16', sz_sz_north:'16:34' },
  { trainNo:'G6586', departure:'16:27', sz_sz_north:'16:45' },
  { trainNo:'G6548', departure:'16:32', sz_sz_north:'16:50' },
  { trainNo:'G6560', departure:'16:51', sz_sz_north:'17:09' },
  { trainNo:'G6526', departure:'17:01', sz_sz_north:'17:19' },
  { trainNo:'G5814', departure:'17:10', sz_futian:'17:24' },
  { trainNo:'G6114', departure:'17:16', sz_sz_north:'17:34' },
  { trainNo:'G5830', departure:'17:36', sz_futian:'17:51' },
  { trainNo:'G6562', departure:'17:43', sz_sz_north:'18:01' },
  { trainNo:'G5650', departure:'17:55', sz_sz_north:'18:13' },
  { trainNo:'G6524', departure:'18:00', sz_futian:'18:14', sz_sz_north:'18:24' },
  { trainNo:'G5678', departure:'18:08', sz_sz_north:'18:29' },
  { trainNo:'G6590', departure:'18:13', sz_futian:'18:27', sz_sz_north:'18:38' },
  { trainNo:'G5862', departure:'18:20', sz_futian:'18:35' },
  { trainNo:'G5656', departure:'18:31', sz_sz_north:'18:49' },
  { trainNo:'G926', departure:'18:38', sz_sz_north:'18:56' },
  { trainNo:'G9614', departure:'18:43', sz_futian:'18:57', sz_sz_north:'19:07' },
  { trainNo:'G5832', departure:'18:49', sz_futian:'19:03' },
  { trainNo:'G6550', departure:'18:54', sz_sz_north:'19:12' },
  { trainNo:'G6514', departure:'19:00', sz_sz_north:'19:17' },
  { trainNo:'G5652', departure:'19:13', sz_futian:'19:27', sz_sz_north:'19:38' },
  { trainNo:'G6398', departure:'19:21', sz_futian:'19:35', sz_sz_north:'19:45' },
  { trainNo:'G5680', departure:'19:28', sz_futian:'19:42', sz_sz_north:'19:52', weekdays:[6] },
  { trainNo:'G6588', departure:'19:49', sz_sz_north:'20:07' },
  { trainNo:'G5824', departure:'19:54', sz_futian:'20:09' },
  { trainNo:'G5658', departure:'20:05', sz_sz_north:'20:23' },
  { trainNo:'G5612', departure:'20:11', sz_futian:'20:25', sz_sz_north:'20:35' },
  { trainNo:'G5618', departure:'20:20', sz_futian:'20:34', sz_sz_north:'20:49' },
  { trainNo:'G5866', departure:'20:45', sz_futian:'20:59', weekdays:[6] },
  { trainNo:'G5654', departure:'20:36', sz_futian:'20:50', sz_sz_north:'21:01' },
  { trainNo:'G5670', departure:'20:55', sz_sz_north:'21:13' },
  { trainNo:'G6564', departure:'21:00', sz_sz_north:'21:18' },
  { trainNo:'G6532', departure:'21:05', sz_sz_north:'21:24' },
  { trainNo:'G5826', departure:'21:10', sz_futian:'21:24' },
  { trainNo:'G5660', departure:'21:44', sz_futian:'21:58', sz_sz_north:'22:08' },
  { trainNo:'G5604', departure:'22:03', sz_futian:'22:17', sz_sz_north:'22:27' },
  { trainNo:'G6502', departure:'22:11', sz_futian:'22:25', sz_sz_north:'22:35' },
  { trainNo:'G6506', departure:'22:26', sz_futian:'22:40', sz_sz_north:'22:50' },
  { trainNo:'G6504', departure:'22:43', sz_sz_north:'23:01' },
  { trainNo:'G5608', departure:'23:00', sz_futian:'23:14', sz_sz_north:'23:25' },
];

// ═══════════════════════════════════════════════════════
//  BORDER CROSSINGS
// ═══════════════════════════════════════════════════════
const CROSSINGS = {
  lo_wu: {
    name: 'Lo Wu / Luohu',
    hkStation: 'hk_lo_wu',
    szStation:  'sz_luohu',
    walkMin: 15,
    desc: 'MTR East Rail ↔ SZ Metro Line 1',
  },
  lok_ma_chau: {
    name: 'Lok Ma Chau / Futian Port',
    hkStation: 'hk_lok_ma_chau',
    szStation:  'sz_ft_port',
    walkMin: 25,
    desc: 'MTR East Rail ↔ SZ Metro Line 4',
  },
  hung_hom_ferry: {
    name: 'Hung Hom Ferry',
    hkStation: 'hk_hung_hom',
    szStation:  'sz_shekou_p',
    walkMin: 60,
    desc: 'Ferry — Hung Hom ↔ Shekou Port',
    ferryOnly: true,
  },
};

const CROSS_BORDER_COACHS = [
  {
    id: 'huanggang',
    name: 'Cross-Boundary Coach',
    routeName: 'Coach via Huanggang / Lok Ma Chau',
    crossingName: 'Lok Ma Chau (Huanggang)',
    hkCoords: [22.5192, 114.0638],
    szCoords: [22.5310, 114.0665],
    crossingMin: 24,
    fare: 45,
    operators: ['CTS', 'Kwoon Chung', 'Eternal East'],
  },
  {
    id: 'sz_bay',
    name: 'Cross-Boundary Coach',
    routeName: 'Coach via Shenzhen Bay',
    crossingName: 'Shenzhen Bay Port',
    hkCoords: [22.5008, 113.9474],
    szCoords: [22.5052, 113.9518],
    crossingMin: 20,
    fare: 52,
    operators: ['CTS', 'Trans-Island', 'Kwoon Chung'],
  },
  {
    id: 'liantang',
    name: 'Cross-Boundary Coach',
    routeName: 'Coach via Heung Yuen Wai / Liantang',
    crossingName: 'Heung Yuen Wai / Liantang',
    hkCoords: [22.5477, 114.1835],
    szCoords: [22.5510, 114.1867],
    crossingMin: 22,
    fare: 50,
    operators: ['Eternal East', 'Motor Transport Gd/HK', 'CTS'],
  },
];

function crossBorderSideCoords(originCoords, destCoords, originSystem) {
  const hkIsOrigin = originSystem === 'hk';
  return {
    hkCoords: hkIsOrigin ? originCoords : destCoords,
    szCoords: hkIsOrigin ? destCoords : originCoords,
    hkIsOrigin,
  };
}

function getCrossRouteAccessMetrics(route, originCoords, destCoords, originSystem, destSystem) {
  if (originSystem === destSystem || !route) return null;
  const { hkCoords, szCoords } = crossBorderSideCoords(originCoords, destCoords, originSystem);

  if (route.crossingId && CROSSINGS[route.crossingId]) {
    const cross = CROSSINGS[route.crossingId];
    const hkBorderCoords = STATIONS[cross.hkStation]?.coords;
    const szBorderCoords = STATIONS[cross.szStation]?.coords;
    if (!hkBorderCoords || !szBorderCoords) return null;
    const hkAccessKm = haversine(hkCoords, hkBorderCoords);
    const szAccessKm = haversine(szCoords, szBorderCoords);
    return {
      hkAccessKm,
      szAccessKm,
      accessKm: hkAccessKm + szAccessKm,
    };
  }

  if (Array.isArray(route.hkBorderCoords) && Array.isArray(route.szBorderCoords)) {
    const hkAccessKm = haversine(hkCoords, route.hkBorderCoords);
    const szAccessKm = haversine(szCoords, route.szBorderCoords);
    return {
      hkAccessKm,
      szAccessKm,
      accessKm: hkAccessKm + szAccessKm,
    };
  }

  return null;
}

function pruneCrossBorderDetours(routes, originCoords, destCoords, originSystem, destSystem) {
  if (!Array.isArray(routes) || originSystem === destSystem) return routes;

  const metricEntries = routes
    .map(route => ({
      route,
      metrics: getCrossRouteAccessMetrics(route, originCoords, destCoords, originSystem, destSystem),
    }))
    .filter(entry => entry.metrics);

  if (!metricEntries.length) return routes;

  metricEntries.sort((a, b) =>
    a.metrics.accessKm - b.metrics.accessKm
    || a.route.totalMin - b.route.totalMin
    || a.route.fare - b.route.fare
  );

  const bestEntry = metricEntries[0];
  const bestAccessKm = bestEntry.metrics.accessKm;
  const bestTotalMin = bestEntry.route.totalMin;
  const hardPinnedCrossing = bestAccessKm <= 1.25;

  return routes.filter(route => {
    const metrics = getCrossRouteAccessMetrics(route, originCoords, destCoords, originSystem, destSystem);
    if (!metrics) return true;

    const farMoreAccess = metrics.accessKm > bestAccessKm + 5;
    const muchSlower = route.totalMin > bestTotalMin + 10;
    if (farMoreAccess && muchSlower) return false;

    const relativeDetour = metrics.accessKm > bestAccessKm * 1.65;
    const moderateDelay = route.totalMin > bestTotalMin + 7;
    if (relativeDetour && moderateDelay) return false;

    if (hardPinnedCrossing && metrics.accessKm > bestAccessKm + 1.6) return false;

    return true;
  });
}

const STATIC_STATIONS = JSON.parse(JSON.stringify(STATIONS));
const STATIC_LINES = LINES.map(line => ({ ...line, stations: [...line.stations] }));
const LIVE_TRANSIT_BBOX = { south: 22.10, west: 113.70, north: 22.75, east: 114.50 };
const MAX_TRANSIT_WALK_KM = 1.35;
const MAX_CROSS_BORDER_WALK_KM = 1.6;
const MAX_BUS_WALK_KM = 1.1;
const HK_LOCATION_SEARCH_URL = 'https://www.map.gov.hk/gs/api/v1.0.0/locationSearch';
const MTR_LINES_CSV_URL = 'https://opendata.mtr.com.hk/data/mtr_lines_and_stations.csv';
const TRAM_STOPS_CSV_URL = 'https://static.data.gov.hk/tramways/datasets/tram_stops/summary_tram_stops_en.csv';
const TRAM_STOPS_SCRIPT_URL = 'https://www.hktramways.com/js/nextTramData.js';
const TRAM_LIVE_ETA_URL = 'https://www.hktramways.com/nextTram/geteat.php';
const TRAM_LIVE_MSG_URL = 'https://www.hktramways.com/nextTram/getmessage.php';
const HK80_PROJ4 = '+proj=tmerc +lat_0=22.3121333333333 +lon_0=114.178555555556 +k=1 +x_0=836694.05 +y_0=819069.8 +ellps=intl +towgs84=-162.619,-276.959,-161.764,-0.067753,2.243648,1.158828,-1.094246 +units=m +no_defs +type=crs';
const MTR_LINE_META = {
  AEL: { name:'Airport Express', color:'#00888A' },
  DRL: { name:'Disneyland Resort Line', color:'#E88DBF' },
  EAL: { name:'East Rail Line', color:'#5EB6E4' },
  ISL: { name:'Island Line', color:'#0075C2' },
  KTL: { name:'Kwun Tong Line', color:'#00A040' },
  SIL: { name:'South Island Line', color:'#B5BD00' },
  TKL: { name:'Tseung Kwan O Line', color:'#7B3F98' },
  TCL: { name:'Tung Chung Line', color:'#F39200' },
  TML: { name:'Tuen Ma Line', color:'#9C6B3C' },
  TWL: { name:'Tsuen Wan Line', color:'#E2231A' },
};
const BUS_PROVIDER_META = {
  KMB: { label:'KMB', color:'#E60012' },
  LWB: { label:'LWB', color:'#FF6B00' },
  CTB: { label:'Citybus', color:'#F5A31A' },
  GMB: { label:'GMB', color:'#16A34A' },
  NLB: { label:'NLB', color:'#3B82F6' },
  MTRB: { label:'MTR Bus', color:'#A16207' },
};
const SZ_METRO_LINE_META = {
  '1':  { name:'SZ Metro Line 1',  color:'#00A651' },
  '2':  { name:'SZ Metro Line 2',  color:'#EF7C00' },
  '3':  { name:'SZ Metro Line 3',  color:'#F6C21E' },
  '4':  { name:'SZ Metro Line 4',  color:'#ED1C24' },
  '5':  { name:'SZ Metro Line 5',  color:'#8E44AD' },
  '6':  { name:'SZ Metro Line 6',  color:'#00A0E9' },
  '7':  { name:'SZ Metro Line 7',  color:'#6E3E97' },
  '8':  { name:'SZ Metro Line 8',  color:'#A1D884' },
  '9':  { name:'SZ Metro Line 9',  color:'#8B5E3C' },
  '10': { name:'SZ Metro Line 10', color:'#F59E0B' },
  '11': { name:'SZ Metro Line 11', color:'#C9A028' },
  '12': { name:'SZ Metro Line 12', color:'#8DC63F' },
  '13': { name:'SZ Metro Line 13', color:'#E84C3D' },
  '14': { name:'SZ Metro Line 14', color:'#B39DDB' },
  '16': { name:'SZ Metro Line 16', color:'#4DB6AC' },
  '20': { name:'SZ Metro Line 20', color:'#4FC3F7' },
};
let transitDataVersion = 'static';
let transitDataReady = false;
let transitDataPromise = null;
let _officialBusCatalog = null;
let _officialBusCatalogPromise = null;
let _officialBusSignIndex = null;
let _gmbPatternCache = Object.create(null);
let _officialBusSearchCache = Object.create(null);
let _osmBusPatternCache = Object.create(null);
let _busEtaCache = Object.create(null);
let _hkBusStopIndex = null;
let _hkBusStopIndexPromise = null;
let _busStopRouteCache = Object.create(null);
let _tramStopsPromise = null;
let _tramStopsCatalog = null;
let _tramLiveRefreshTimer = null;
let _tramAnimationFrame = null;
let _tramLiveState = { vehicles: [], updatedAt: 0, message: '', hadLiveRows: false, stale: false };
const TRAM_LIVE_STALE_MS = 12 * 60 * 1000;
const tramViewport = {
  scale: 1.06,
  tx: -26,
  ty: -18,
  minScale: 0.7,
  maxScale: 3.4,
  dragging: false,
  dragStartX: 0,
  dragStartY: 0,
  startTx: 0,
  startTy: 0,
};
const TRAM_MTR_ZONE_BANDS = [
  { label:'Kennedy Town', color:'#9dc8a2', start:'KTT', end:'07E' },
  { label:'HKU', color:'#a9c7d8', start:'05E', end:'09E' },
  { label:'Sai Ying Pun', color:'#c7b6dd', start:'11E', end:'17E' },
  { label:'Sheung Wan', color:'#e8c49a', start:'19E', end:'23E' },
  { label:'Central', color:'#d89b8f', start:'25E', end:'31E' },
  { label:'Admiralty', color:'#8fb2cf', start:'33E', end:'39E' },
  { label:'Wan Chai', color:'#d9a9bf', start:'41E', end:'47E' },
  { label:'Causeway Bay', color:'#e9b792', start:'49E', end:'57E' },
  { label:'Tin Hau', color:'#9ecfc8', start:'59E', end:'63E' },
  { label:'Fortress Hill', color:'#c5b2db', start:'65E', end:'67E' },
  { label:'North Point', color:'#a9cfaf', start:'69E', end:'73E' },
  { label:'Quarry Bay', color:'#9fb8df', start:'75E', end:'81E' },
  { label:'Tai Koo', color:'#ecb6c2', start:'83E', end:'89E' },
  { label:'Sai Wan Ho', color:'#dbc99f', start:'91E', end:'95E' },
  { label:'Shau Kei Wan', color:'#d6a2b0', start:'97E', end:'SKT' },
];

function isSupportedHongKongBusAgency(value) {
  const agency = String(value || '').toUpperCase().trim();
  return ['KMB', 'LWB', 'CTB', 'NLB', 'MTRB'].includes(agency)
    || agency.includes('KMB')
    || agency.includes('CTB');
}

function officialHongKongBusPatterns(catalog) {
  return (catalog?.patterns || []).filter(pattern =>
    isSupportedHongKongBusAgency(pattern.agency)
  );
}

if (window.proj4 && !window.proj4.defs('EPSG:2326')) {
  window.proj4.defs('EPSG:2326', HK80_PROJ4);
}

function normalizeSearchText(value) {
  return String(value || '')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[()'".,/_-]+/g, ' ')
    .replace(/\b(station|stn|metro|line|railway|mtr|exit|platform|bus|terminal|port)\b/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function slugifyId(value) {
  return String(value || '')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '')
    || 'station';
}

function stationSearchTerms(station) {
  return [
    station.name,
    // Include any Chinese portion of the name as a standalone search term
    ...(station.name ? [station.name.split(/\s+/).find(t => /[\u4e00-\u9fff]/.test(t)) || ''].filter(Boolean) : []),
    ...(Array.isArray(station.aliases) ? station.aliases : []),
  ].filter(Boolean);
}

function mergeStationAliases(target, aliases) {
  const merged = new Set(stationSearchTerms(target));
  for (const alias of (aliases || [])) {
    if (alias) merged.add(alias);
  }
  target.aliases = [...merged];
}

function wgs84FromHK80(x, y) {
  if (!window.proj4 || !Number.isFinite(x) || !Number.isFinite(y)) return null;
  try {
    const [lon, lat] = window.proj4('EPSG:2326', 'EPSG:4326', [x, y]);
    return Number.isFinite(lat) && Number.isFinite(lon) ? [lat, lon] : null;
  } catch (error) {
    return null;
  }
}

function parseCsvRows(text) {
  const rows = [];
  let row = [];
  let cell = '';
  let inQuotes = false;
  const input = String(text || '').replace(/^\uFEFF/, '');
  for (let i = 0; i < input.length; i += 1) {
    const ch = input[i];
    const next = input[i + 1];
    if (ch === '"') {
      if (inQuotes && next === '"') {
        cell += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (ch === ',' && !inQuotes) {
      row.push(cell);
      cell = '';
    } else if ((ch === '\n' || ch === '\r') && !inQuotes) {
      if (ch === '\r' && next === '\n') i += 1;
      row.push(cell);
      if (row.some(value => value !== '')) rows.push(row);
      row = [];
      cell = '';
    } else {
      cell += ch;
    }
  }
  if (cell || row.length) {
    row.push(cell);
    if (row.some(value => value !== '')) rows.push(row);
  }
  if (!rows.length) return [];
  const headers = rows[0];
  return rows.slice(1).map(values => {
    const obj = {};
    headers.forEach((header, index) => {
      obj[header] = values[index] ?? '';
    });
    return obj;
  });
}

function loadScriptOnce(src, globalCheck) {
  if (typeof globalCheck === 'function' && globalCheck()) return Promise.resolve();
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[data-dynamic-src="${src}"]`);
    if (existing) {
      existing.addEventListener('load', () => resolve(), { once: true });
      existing.addEventListener('error', () => reject(new Error(`Failed to load ${src}`)), { once: true });
      return;
    }
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.dataset.dynamicSrc = src;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.head.appendChild(script);
  });
}

async function fetchTextWithFallback(url) {
  const candidates = [
    url,
    `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
    `https://corsproxy.io/?${encodeURIComponent(url)}`,
  ];
  let lastError = null;
  for (const candidate of candidates) {
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 9000);
      const resp = await fetch(candidate, { signal: controller.signal });
      clearTimeout(timer);
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
      const text = await resp.text();
      if (text) return text;
    } catch (error) {
      lastError = error;
    }
  }
  if (lastError) throw lastError;
  return '';
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function pointsToPath(points) {
  if (!Array.isArray(points) || !points.length) return '';
  return points.map((point, index) => `${index === 0 ? 'M' : 'L'} ${point[0].toFixed(1)} ${point[1].toFixed(1)}`).join(' ');
}

function interpolatePointOnPolyline(points, t) {
  if (!Array.isArray(points) || !points.length) return [0, 0];
  if (points.length === 1) return [...points[0]];
  const lengths = [0];
  for (let i = 1; i < points.length; i += 1) {
    const prev = points[i - 1];
    const cur = points[i];
    const segLen = Math.hypot(cur[0] - prev[0], cur[1] - prev[1]);
    lengths[i] = lengths[i - 1] + segLen;
  }
  const total = lengths[lengths.length - 1] || 1;
  const target = clamp(t, 0, 1) * total;
  for (let i = 1; i < points.length; i += 1) {
    if (target <= lengths[i]) {
      const span = lengths[i] - lengths[i - 1] || 1;
      const localT = (target - lengths[i - 1]) / span;
      return [
        lerp(points[i - 1][0], points[i][0], localT),
        lerp(points[i - 1][1], points[i][1], localT),
      ];
    }
  }
  return [...points[points.length - 1]];
}

function distributeStopsOnTrack(stops, anchors) {
  if (!stops.length) return [];
  if (stops.length === 1) {
    const [x, y] = anchors[0] || [0, 0];
    return [{ ...stops[0], x, y }];
  }
  return stops.map((stop, index) => {
    const t = index / (stops.length - 1);
    const [x, y] = interpolatePointOnPolyline(anchors, t);
    return { ...stop, x, y };
  });
}

function tramLabelStops(stops) {
  const priorityCodes = new Set(['SKT', 'NPT', 'CBT', 'HVT_K', 'HVT_B', 'WMT', 'KTT', 'WST', '35E', '64W']);
  return stops.filter((stop, index) =>
    priorityCodes.has(stop.code) || index === 0 || index === stops.length - 1 || index % 12 === 0
  );
}

function svgEscape(text) {
  return escapeHtml(text);
}

function normalizeTramDirection(value) {
  const text = String(value || '').trim().toLowerCase();
  if (text.includes('west')) return 'west';
  if (text.includes('east')) return 'east';
  return text;
}

function normalizeTramStopCode(code) {
  return String(code || '').trim().toUpperCase();
}

function mergeGovTramNames(primary, govRows) {
  const govMap = new Map();
  for (const row of govRows) {
    const direction = normalizeTramDirection(row['Traveling Direction']);
    const key = `${direction}:${normalizeTramStopCode(row['Stops Code'])}`;
    govMap.set(key, row['Stops Name'] || '');
  }
  return primary.map(stop => {
    const key = `${stop.direction}:${stop.code}`;
    return {
      ...stop,
      govName: govMap.get(key) || stop.name,
    };
  });
}

function buildTramTrackLayout(direction, stops) {
  const useGeoOrder = direction === 'east' ? [...stops] : [...stops].reverse();
  const codes = useGeoOrder.map(stop => stop.code);
  const branchStart = direction === 'east' ? Math.max(0, codes.indexOf('53E')) : Math.max(0, codes.indexOf('50W'));
  const branchEnd = direction === 'east' ? Math.max(branchStart + 1, codes.indexOf('49E')) : Math.max(branchStart + 1, codes.indexOf('48W'));
  const trunkX = direction === 'east' ? 364 : 424;
  const upper = distributeStopsOnTrack(
    useGeoOrder.slice(0, branchStart + 1),
    [[trunkX, 132], [trunkX, 354], [trunkX, 590], [trunkX, 842], [trunkX, 1102], [trunkX, 1366]]
  );
  const branch = distributeStopsOnTrack(
    useGeoOrder.slice(branchStart + 1, branchEnd),
    [
      [trunkX, 1402],
      [476, 1402],
      [510, 1402],
      [510, 1538],
      [510, 1674],
      [510, 1810],
      [510, 1946],
      [510, 2082],
      [488, 2082],
      [476, 1946],
      [472, 1810],
      [468, 1674],
      [466, 1538],
      [466, 1440],
      [trunkX, 1440],
    ]
  );
  const lower = distributeStopsOnTrack(
    useGeoOrder.slice(branchEnd),
    [[trunkX, 1468], [trunkX, 1730], [trunkX, 1996], [trunkX, 2256], [trunkX, 2450]]
  );
  const positioned = [...upper, ...branch, ...lower];
  const coordByCode = new Map(positioned.map(stop => [stop.code, stop]));
  return stops.map(stop => {
    const match = coordByCode.get(stop.code);
    return match ? { ...stop, x: match.x, y: match.y } : stop;
  });
}

function buildTramCatalogFromSources(govRows) {
  const westRaw = Array.isArray(window.nextTramStopsW) ? window.nextTramStopsW : [];
  const eastRaw = Array.isArray(window.nextTramStopsE) ? [...window.nextTramStopsE].reverse() : [];
  const westStops = mergeGovTramNames(westRaw.map((row, index) => ({
    code: normalizeTramStopCode(row[0]),
    name: row[1],
    nameTc: row[2],
    direction: 'west',
    order: index,
  })), govRows);
  const eastStops = mergeGovTramNames(eastRaw.map((row, index) => ({
    code: normalizeTramStopCode(row[0]),
    name: row[1],
    nameTc: row[2],
    direction: 'east',
    order: index,
  })), govRows);
  return {
    west: buildTramTrackLayout('west', westStops),
    east: buildTramTrackLayout('east', eastStops),
  };
}

async function loadTramStopsCatalog() {
  if (_tramStopsCatalog) return _tramStopsCatalog;
  if (_tramStopsPromise) return _tramStopsPromise;

  _tramStopsPromise = (async () => {
    const [govCsv] = await Promise.all([
      fetch(TRAM_STOPS_CSV_URL).then(resp => resp.ok ? resp.text() : '').catch(() => ''),
      loadScriptOnce(TRAM_STOPS_SCRIPT_URL, () => Array.isArray(window.nextTramStopsW) && Array.isArray(window.nextTramStopsE)),
    ]);
    const govRows = govCsv ? parseCsvRows(govCsv) : [];
    _tramStopsCatalog = buildTramCatalogFromSources(govRows);
    _tramStopsPromise = null;
    return _tramStopsCatalog;
  })().catch(error => {
    _tramStopsPromise = null;
    _tramStopsCatalog = { west: [], east: [] };
    return _tramStopsCatalog;
  });

  return _tramStopsPromise;
}

function buildTramTrackPath(stops) {
  return pointsToPath(stops.map(stop => [stop.x, stop.y]));
}

function buildTramMtrZoneMarkup(catalog) {
  const eastStops = catalog?.east || [];
  if (!eastStops.length) return '';
  const stopByCode = new Map(eastStops.map(stop => [stop.code, stop]));
  const bandX = 234;

  return TRAM_MTR_ZONE_BANDS.map(zone => {
    const start = stopByCode.get(zone.start);
    const end = stopByCode.get(zone.end);
    if (!start || !end) return '';
    const y1 = Math.min(start.y, end.y) - 24;
    const y2 = Math.max(start.y, end.y) + 24;
    const labelY = (y1 + y2) / 2;
    return `
      <g class="tram-mtr-zone">
        <line class="tram-mtr-zone-line" x1="${bandX}" y1="${y1.toFixed(1)}" x2="${bandX}" y2="${y2.toFixed(1)}" stroke="${zone.color}"></line>
        <text class="tram-mtr-zone-label" x="${(bandX - 26).toFixed(1)}" y="${labelY.toFixed(1)}" fill="${zone.color}" text-anchor="end" dominant-baseline="middle">${svgEscape(zone.label)}</text>
      </g>
    `;
  }).join('');
}

function tramStopPosition(catalog, direction, index) {
  const stops = catalog?.[direction] || [];
  const safeIndex = clamp(index, 0, Math.max(0, stops.length - 1));
  const stop = stops[safeIndex];
  return stop ? [stop.x, stop.y] : [0, 0];
}

function tramPositionBetweenStops(catalog, direction, fromIndex, toIndex, progress) {
  const from = tramStopPosition(catalog, direction, fromIndex);
  const to = tramStopPosition(catalog, direction, toIndex);
  return [
    lerp(from[0], to[0], progress),
    lerp(from[1], to[1], progress),
  ];
}

function parseTramEtaXml(text) {
  const xml = new DOMParser().parseFromString(String(text || ''), 'text/xml');
  return Array.from(xml.getElementsByTagName('metadata')).map(node => ({
    arriveSeconds: Number(node.getAttribute('arrive_in_second') || node.getAttribute('arrive_in_minute') || 0),
    isArrived: String(node.getAttribute('is_arrived') || '') === '1',
    destCode: normalizeTramStopCode(node.getAttribute('dest_stop_code') || ''),
    destName: node.getAttribute('tram_dest_en') || '',
  }));
}

function parseTramMsgXml(text) {
  const xml = new DOMParser().parseFromString(String(text || ''), 'text/xml');
  const node = xml.getElementsByTagName('metadata')[0];
  if (!node) return '';
  return String(node.getAttribute('msg_en') || '').trim();
}

function sampledTramStops(stops, step = 5) {
  const keyCodes = new Set(['SKT', 'NPT', 'CBT', 'KTT', 'WST', 'WMT', 'HVT_B', 'HVT_K']);
  return stops.filter((stop, index) => index === 0 || index === stops.length - 1 || index % step === 0 || keyCodes.has(stop.code));
}

function dedupeTramVehicles(vehicles) {
  const deduped = [];
  for (const vehicle of vehicles) {
    const dupe = deduped.find(item =>
      item.direction === vehicle.direction
      && item.destCode === vehicle.destCode
      && Math.abs(item.positionIndex - vehicle.positionIndex) < 2.2
    );
    if (!dupe) deduped.push(vehicle);
  }
  return deduped;
}

async function fetchTramLiveState(catalog) {
  const representativeStop = '53E';
  let serviceMessage = '';
  try {
    const msgText = await fetchTextWithFallback(`${TRAM_LIVE_MSG_URL}?stop_code=${encodeURIComponent(representativeStop)}`);
    serviceMessage = parseTramMsgXml(msgText);
  } catch (error) {}

  const directionEntries = [
    ['west', sampledTramStops(catalog.west)],
    ['east', sampledTramStops(catalog.east)],
  ];
  const vehicles = [];
  let hadLiveRows = false;

  for (const [direction, stops] of directionEntries) {
    const snapshots = await Promise.all(stops.map(async stop => {
      try {
        return {
          stop,
          arrivals: parseTramEtaXml(await fetchTextWithFallback(`${TRAM_LIVE_ETA_URL}?stop_code=${encodeURIComponent(stop.code)}`)),
        };
      } catch (error) {
        return { stop, arrivals: [] };
      }
    }));

    for (const snapshot of snapshots) {
      const arrivals = snapshot.arrivals
        .map((row, index) => ({
          ...row,
          etaMinutes: row.isArrived ? 0 : Math.max(0, Math.round((row.arriveSeconds || 0) / 60)),
          ordinal: index,
        }))
        .filter(row => Number.isFinite(row.etaMinutes))
        .slice(0, 2);

      if (arrivals.length) hadLiveRows = true;
      for (const arrival of arrivals) {
        const travelStops = clamp(Math.round(arrival.etaMinutes / 1.6), 1, 9);
        const arrivalIndex = snapshot.stop.order;
        const fromIndex = Math.max(0, arrivalIndex - travelStops);
        const segmentProgress = clamp(1 - (arrival.etaMinutes / Math.max(1.6 * travelStops, 1)), 0, 1);
        const [x, y] = tramPositionBetweenStops(catalog, direction, fromIndex, arrivalIndex, segmentProgress);
        vehicles.push({
          id: `${direction}:${snapshot.stop.code}:${arrival.destCode || 'tram'}:${arrival.ordinal}`,
          direction,
          destCode: arrival.destCode || '',
          x,
          y,
          positionIndex: lerp(fromIndex, arrivalIndex, segmentProgress),
          etaMinutes: arrival.etaMinutes,
          destName: arrival.destName,
        });
      }
    }
  }

  return {
    message: serviceMessage,
    vehicles: dedupeTramVehicles(vehicles),
    updatedAt: Date.now(),
    hadLiveRows,
    stale: false,
  };
}

function bindTramHoverInteractions() {
  const svg = document.getElementById('tram-map-svg');
  const hoverCard = document.getElementById('tram-hover-card');
  if (!svg || !hoverCard || svg.dataset.hoverBound === '1') return;
  svg.dataset.hoverBound = '1';

  svg.addEventListener('mousemove', event => {
    const stopNode = event.target.closest('.tram-stop-hit');
    if (!stopNode) {
      hoverCard.classList.add('hidden');
      hoverCard.style.transform = 'translate(-9999px, -9999px)';
      return;
    }
    hoverCard.textContent = stopNode.dataset.stopName || stopNode.dataset.stopCode || '';
    hoverCard.classList.remove('hidden');
    const shell = document.querySelector('.tram-map-shell');
    const shellRect = (shell || svg).getBoundingClientRect();
    const cardRect = hoverCard.getBoundingClientRect();
    const offsetX = 8;
    const offsetY = 6;
    const maxX = Math.max(12, shellRect.width - cardRect.width - 12);
    const maxY = Math.max(10, shellRect.height - cardRect.height - 10);
    const x = clamp(event.clientX - shellRect.left + offsetX, 10, maxX);
    const y = clamp(event.clientY - shellRect.top + offsetY, 8, maxY);
    hoverCard.style.transform = `translate(${x}px, ${y}px)`;
  });

  svg.addEventListener('mouseleave', () => {
    hoverCard.classList.add('hidden');
    hoverCard.style.transform = 'translate(-9999px, -9999px)';
  });
}

function applyTramViewport() {
  const svg = document.getElementById('tram-map-svg');
  if (!svg) return;
  svg.style.transform = `translate(${tramViewport.tx}px, ${tramViewport.ty}px) scale(${tramViewport.scale})`;
}

function constrainTramViewport() {
  const shell = document.querySelector('.tram-map-shell');
  const svg = document.getElementById('tram-map-svg');
  if (!shell || !svg) return;
  const shellRect = shell.getBoundingClientRect();
  const svgRect = svg.getBoundingClientRect();
  const scaledWidth = svgRect.width;
  const scaledHeight = svgRect.height;
  const minX = Math.min(0, shellRect.width - scaledWidth);
  const minY = Math.min(0, shellRect.height - scaledHeight);
  tramViewport.tx = clamp(tramViewport.tx, minX - 40, 40);
  tramViewport.ty = clamp(tramViewport.ty, minY - 40, 40);
}

function zoomTramAt(clientX, clientY, factor) {
  const shell = document.querySelector('.tram-map-shell');
  const svg = document.getElementById('tram-map-svg');
  if (!shell || !svg) return;
  const rect = shell.getBoundingClientRect();
  const localX = clientX - rect.left;
  const localY = clientY - rect.top;
  const prevScale = tramViewport.scale;
  const nextScale = clamp(prevScale * factor, tramViewport.minScale, tramViewport.maxScale);
  if (Math.abs(nextScale - prevScale) < 0.001) return;
  const worldX = (localX - tramViewport.tx) / prevScale;
  const worldY = (localY - tramViewport.ty) / prevScale;
  tramViewport.scale = nextScale;
  tramViewport.tx = localX - worldX * nextScale;
  tramViewport.ty = localY - worldY * nextScale;
  constrainTramViewport();
  applyTramViewport();
}

function bindTramPanZoom() {
  const shell = document.querySelector('.tram-map-shell');
  const svg = document.getElementById('tram-map-svg');
  if (!shell || !svg || svg.dataset.panzoomBound === '1') {
    applyTramViewport();
    return;
  }
  svg.dataset.panzoomBound = '1';
  applyTramViewport();

  shell.addEventListener('wheel', event => {
    event.preventDefault();
    if (event.ctrlKey) {
      const factor = event.deltaY < 0 ? 1.12 : 0.9;
      zoomTramAt(event.clientX, event.clientY, factor);
      return;
    }
    tramViewport.tx -= event.deltaX;
    tramViewport.ty -= event.deltaY;
    constrainTramViewport();
    applyTramViewport();
  }, { passive: false });

  svg.addEventListener('pointerdown', event => {
    tramViewport.dragging = true;
    tramViewport.dragStartX = event.clientX;
    tramViewport.dragStartY = event.clientY;
    tramViewport.startTx = tramViewport.tx;
    tramViewport.startTy = tramViewport.ty;
    svg.classList.add('dragging');
    svg.setPointerCapture(event.pointerId);
  });

  svg.addEventListener('pointermove', event => {
    if (!tramViewport.dragging) return;
    tramViewport.tx = tramViewport.startTx + (event.clientX - tramViewport.dragStartX);
    tramViewport.ty = tramViewport.startTy + (event.clientY - tramViewport.dragStartY);
    constrainTramViewport();
    applyTramViewport();
  });

  const endDrag = event => {
    tramViewport.dragging = false;
    svg.classList.remove('dragging');
    if (event && svg.hasPointerCapture && svg.hasPointerCapture(event.pointerId)) {
      svg.releasePointerCapture(event.pointerId);
    }
  };

  svg.addEventListener('pointerup', endDrag);
  svg.addEventListener('pointercancel', endDrag);
  svg.addEventListener('pointerleave', event => {
    if (tramViewport.dragging && (event.buttons & 1) === 0) endDrag(event);
  });
}

function syncTramPanelScrollbar() {
  const body = document.getElementById('tram-side-body');
  const rail = document.getElementById('tram-scrollbar');
  const thumb = document.getElementById('tram-scroll-thumb');
  if (!body || !rail || !thumb) return;
  const trackHeight = Math.max(0, rail.clientHeight - 8);
  const scrollRange = Math.max(0, body.scrollHeight - body.clientHeight);
  const thumbHeight = clamp(trackHeight * (body.clientHeight / Math.max(body.scrollHeight, 1)), 72, trackHeight || 72);
  const maxTop = Math.max(0, trackHeight - thumbHeight);
  const top = scrollRange > 0 ? (body.scrollTop / scrollRange) * maxTop : 0;
  thumb.style.height = `${thumbHeight}px`;
  thumb.style.transform = `translateY(${(4 + top).toFixed(1)}px)`;
  rail.classList.toggle('inactive', scrollRange <= 4);
}

function bindTramPanelScrollbar() {
  const body = document.getElementById('tram-side-body');
  const rail = document.getElementById('tram-scrollbar');
  const thumb = document.getElementById('tram-scroll-thumb');
  if (!body || !rail || !thumb || rail.dataset.bound === '1') {
    syncTramPanelScrollbar();
    return;
  }
  rail.dataset.bound = '1';

  let dragState = null;
  const moveThumbTo = clientY => {
    const railRect = rail.getBoundingClientRect();
    const thumbHeight = thumb.offsetHeight;
    const trackTop = railRect.top + 4;
    const maxTop = Math.max(0, railRect.height - 8 - thumbHeight);
    const desired = clamp(clientY - trackTop - thumbHeight / 2, 0, maxTop);
    const scrollRange = Math.max(0, body.scrollHeight - body.clientHeight);
    body.scrollTop = maxTop > 0 ? (desired / maxTop) * scrollRange : 0;
    syncTramPanelScrollbar();
  };

  body.addEventListener('scroll', syncTramPanelScrollbar, { passive: true });
  window.addEventListener('resize', syncTramPanelScrollbar);

  rail.addEventListener('pointerdown', event => {
    if (event.target === thumb) return;
    event.preventDefault();
    moveThumbTo(event.clientY);
  });

  thumb.addEventListener('pointerdown', event => {
    event.preventDefault();
    dragState = {
      startY: event.clientY,
      startScrollTop: body.scrollTop,
      scrollRange: Math.max(0, body.scrollHeight - body.clientHeight),
      maxTop: Math.max(1, rail.clientHeight - 8 - thumb.offsetHeight),
    };
    thumb.classList.add('dragging');
    thumb.setPointerCapture(event.pointerId);
  });

  thumb.addEventListener('pointermove', event => {
    if (!dragState) return;
    const deltaY = event.clientY - dragState.startY;
    const scrollDelta = dragState.scrollRange * (deltaY / dragState.maxTop);
    body.scrollTop = dragState.startScrollTop + scrollDelta;
    syncTramPanelScrollbar();
  });

  const endDrag = event => {
    dragState = null;
    thumb.classList.remove('dragging');
    if (event && thumb.hasPointerCapture && thumb.hasPointerCapture(event.pointerId)) {
      thumb.releasePointerCapture(event.pointerId);
    }
  };

  thumb.addEventListener('pointerup', endDrag);
  thumb.addEventListener('pointercancel', endDrag);
  syncTramPanelScrollbar();
}

function renderTramLiveVehicles(liveLayer, liveState) {
  const ns = 'http://www.w3.org/2000/svg';
  const existing = new Map(Array.from(liveLayer.querySelectorAll('[data-vehicle-id]')).map(node => [node.dataset.vehicleId, node]));
  const seen = new Set();

  for (const vehicle of (liveState.vehicles || [])) {
    let node = existing.get(vehicle.id);
    if (!node) {
      node = document.createElementNS(ns, 'g');
      node.dataset.vehicleId = vehicle.id;
      node.setAttribute('class', 'tram-live');
      node.innerHTML = `
        <rect class="tram-live-dot" x="-14" y="-13.8" width="28" height="27.6"></rect>
        <title></title>
      `;
      liveLayer.appendChild(node);
    }
    const offsetX = vehicle.direction === 'west' ? 30 : -30;
    node.setAttribute('transform', `translate(${(vehicle.x + offsetX).toFixed(1)} ${vehicle.y.toFixed(1)})`);
    const title = node.querySelector('title');
    if (title) {
      title.textContent = `${vehicle.direction === 'west' ? 'Westbound' : 'Eastbound'} tram${vehicle.destName ? ` to ${vehicle.destName}` : ''}`;
    }
    seen.add(vehicle.id);
  }

  existing.forEach((node, id) => {
    if (!seen.has(id)) node.remove();
  });
}

function renderTramMap(catalog, liveState = _tramLiveState) {
  const mapLayer = document.getElementById('tram-map-layer');
  const stopLayer = document.getElementById('tram-stop-layer');
  const liveLayer = document.getElementById('tram-live-layer');
  if (!mapLayer || !stopLayer || !liveLayer) return;

  const westPath = buildTramTrackPath(catalog.west);
  const eastPath = buildTramTrackPath(catalog.east);
  const zoneMarkup = buildTramMtrZoneMarkup(catalog);
  mapLayer.innerHTML = `
    ${zoneMarkup}
    <path class="tram-track-west tram-track-glow" d="${westPath}"></path>
    <path class="tram-track-east tram-track-glow" d="${eastPath}"></path>
    <path class="tram-track-west" d="${westPath}"></path>
    <path class="tram-track-east" d="${eastPath}"></path>
  `;

  const renderStops = (stops, direction) => {
    return stops.map(stop => {
      const interchange = /HVT|WMT|CBT|NPT|SKT|KTT|WST/.test(stop.code);
      return `
        <g class="tram-stop tram-stop-hit" data-stop-name="${svgEscape(stop.govName || stop.name)}" data-stop-code="${svgEscape(stop.code)}" transform="translate(${stop.x.toFixed(1)} ${stop.y.toFixed(1)})">
          <rect class="tram-stop-node ${direction}${interchange ? ' interchange' : ''}" x="${interchange ? -15.2 : -11.2}" y="${interchange ? -15.2 : -11.2}" width="${interchange ? 30.4 : 22.4}" height="${interchange ? 30.4 : 22.4}"></rect>
          <title>${svgEscape(stop.govName || stop.name)} (${stop.code})</title>
        </g>
      `;
    }).join('');
  };

  stopLayer.innerHTML = `${renderStops(catalog.west, 'west')}${renderStops(catalog.east, 'east')}`;
  renderTramLiveVehicles(liveLayer, liveState);
  bindTramHoverInteractions();
  bindTramPanZoom();
  bindTramPanelScrollbar();
  requestAnimationFrame(syncTramPanelScrollbar);

  const banner = document.getElementById('tram-service-banner');
  const statusText = document.getElementById('tram-status-text');
  if (statusText) {
    if (liveState.hadLiveRows) {
      statusText.textContent = liveState.stale
        ? `${liveState.vehicles.length} live trams · cached positions`
        : `${liveState.vehicles.length} live trams`;
    } else if (liveState.message) {
      statusText.textContent = 'Official service update';
    } else {
      statusText.textContent = '';
    }
  }
  if (banner) {
    if (liveState.stale && liveState.vehicles.length) {
      banner.classList.remove('hidden');
      banner.textContent = liveState.message || 'Official live feed is temporarily empty, so the map is holding the latest confirmed tram positions.';
    } else if (liveState.message) {
      banner.classList.remove('hidden');
      banner.textContent = liveState.message;
    } else if (!liveState.hadLiveRows) {
      banner.classList.remove('hidden');
      banner.textContent = 'Live tram feed is temporarily unavailable, but the full Ding Ding stop map is ready.';
    } else {
      banner.classList.add('hidden');
      banner.textContent = '';
    }
  }
}

async function refreshTramPanel(force = false) {
  const panel = document.getElementById('tram-panel');
  if (!panel || (!panel.classList.contains('open') && !force)) return;
  const catalog = await loadTramStopsCatalog();
  const previousState = _tramLiveState;
  const nextState = await fetchTramLiveState(catalog).catch(() => ({
    message: 'Live tram feed could not be reached right now.',
    vehicles: [],
    updatedAt: Date.now(),
    hadLiveRows: false,
    stale: false,
  }));
  const canReusePrevious = !nextState.hadLiveRows
    && Array.isArray(previousState.vehicles)
    && previousState.vehicles.length > 0
    && (Date.now() - (previousState.updatedAt || 0)) <= TRAM_LIVE_STALE_MS;

  _tramLiveState = canReusePrevious ? {
    ...previousState,
    updatedAt: Date.now(),
    message: nextState.message || 'Official live feed is temporarily empty, so the latest confirmed tram positions are being held on the map.',
    hadLiveRows: true,
    stale: true,
  } : nextState;

  renderTramMap(catalog, _tramLiveState);
}

function startTramPanelRefresh() {
  if (_tramLiveRefreshTimer) clearInterval(_tramLiveRefreshTimer);
  refreshTramPanel(true);
  _tramLiveRefreshTimer = setInterval(() => refreshTramPanel(false), 45000);
}

function stopTramPanelRefresh() {
  if (_tramLiveRefreshTimer) clearInterval(_tramLiveRefreshTimer);
  _tramLiveRefreshTimer = null;
  if (_tramAnimationFrame) cancelAnimationFrame(_tramAnimationFrame);
  _tramAnimationFrame = null;
}

function findStationIdByNames(system, names, stationMap = STATIONS) {
  const normalizedTargets = [...new Set((names || []).map(normalizeSearchText).filter(Boolean))];
  if (!normalizedTargets.length) return null;
  let partial = null;
  for (const [id, station] of Object.entries(stationMap)) {
    if (station.system !== system) continue;
    const terms = stationSearchTerms(station).map(normalizeSearchText).filter(Boolean);
    if (terms.some(term => normalizedTargets.includes(term))) return id;
    if (!partial && terms.some(term => normalizedTargets.some(target => term.includes(target) || target.includes(term)))) {
      partial = id;
    }
  }
  return partial;
}

function mergeOfficialMtrNetwork(stationMap, fallbackLines) {
  return fetch(MTR_LINES_CSV_URL)
    .then(resp => resp.ok ? resp.text() : Promise.reject(new Error(`HTTP ${resp.status}`)))
    .then(text => {
      const rows = parseCsvRows(text);
      if (!rows.length) return { stations: stationMap, lines: fallbackLines, version:'live-osm' };

      const mergedStations = JSON.parse(JSON.stringify(stationMap));
      const sequences = new Map();
      for (const row of rows) {
        const lineCode = row['Line Code'];
        const direction = row['Direction'];
        if (!MTR_LINE_META[lineCode] || !direction) continue;
        const englishName = row['English Name'];
        const chineseName = row['Chinese Name'];
        const stationId = findStationIdByNames('hk', [englishName, chineseName], mergedStations);
        if (!stationId) continue;
        mergeStationAliases(mergedStations[stationId], [englishName, chineseName, row['Station Code']]);
        const key = `${lineCode}|${direction}`;
        if (!sequences.has(key)) sequences.set(key, []);
        sequences.get(key).push({
          stationId,
          seq: Number(row.Sequence || row['Sequence'] || 0),
        });
      }

      const officialLines = [];
      const seenSeq = new Set();
      for (const [key, items] of sequences.entries()) {
        items.sort((a, b) => a.seq - b.seq);
        const stationIds = items.map(item => item.stationId).filter((id, index, arr) => index === 0 || arr[index - 1] !== id);
        if (stationIds.length < 2) continue;
        const [lineCode, direction] = key.split('|');
        const canonical = stationIds.join('>');
        const reverse = [...stationIds].reverse().join('>');
        const dedupeKey = canonical < reverse ? canonical : reverse;
        if (seenSeq.has(`${lineCode}|${dedupeKey}`)) continue;
        seenSeq.add(`${lineCode}|${dedupeKey}`);
        officialLines.push({
          id: `mtr_${lineCode.toLowerCase()}_${slugifyId(direction)}`,
          name: MTR_LINE_META[lineCode].name,
          color: MTR_LINE_META[lineCode].color,
          system: 'hk',
          source: 'mtr-open-data',
          lineCode,
          stations: stationIds,
        });
      }

      const nonHongKongLines = fallbackLines.filter(line => line.system !== 'hk');
      // Always preserve static border-connector lines the official CSV may omit
      // (e.g. Sheung Shui → Lok Ma Chau spur, Lo Wu branch)
      const offStationSet = new Set(officialLines.flatMap(l => l.stations));
      const hkBorderBackups = STATIC_LINES.filter(line =>
        line.system === 'hk' &&
        line.stations.some(id => (STATIC_STATIONS[id] || {}).border && !offStationSet.has(id))
      );
      return {
        stations: mergedStations,
        lines: [...nonHongKongLines, ...officialLines, ...hkBorderBackups],
        version: officialLines.length ? 'live-official' : 'live-osm',
      };
    })
    .catch(() => ({
      stations: stationMap,
      lines: fallbackLines,
      version: 'live-osm',
    }));
}

function routeKey(parts) {
  return parts.map(v => String(v ?? '')).join('|');
}

function hhmmToMinutes(value) {
  const match = String(value || '').trim().match(/^(\d{1,2}):(\d{2})$/);
  if (!match) return null;
  return Number(match[1]) * 60 + Number(match[2]);
}

function minutesToHhmm(totalMinutes) {
  const minutes = ((Number(totalMinutes) % (24 * 60)) + (24 * 60)) % (24 * 60);
  const hh = Math.floor(minutes / 60);
  const mm = minutes % 60;
  return `${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}`;
}

function todayAtHhmm(hhmm) {
  const now = new Date();
  const match = String(hhmm || '').trim().match(/^(\d{1,2}):(\d{2})$/);
  if (!match) return null;
  const dt = new Date(now);
  dt.setHours(Number(match[1]), Number(match[2]), 0, 0);
  return dt;
}

function serviceRunsToday(service, date = new Date()) {
  if (!Array.isArray(service?.weekdays) || !service.weekdays.length) return true;
  return service.weekdays.includes(date.getDay());
}

function buildGraphs() {
  return {
    hk: buildGraph('hk'),
    sz: buildGraph('sz'),
    all: buildGraph(null),
  };
}

function pickTransitSystem(tags, coords) {
  const text = [
    tags?.network, tags?.operator, tags?.name, tags?.['name:en'], tags?.['name:zh'],
  ].filter(Boolean).join(' ');
  if (/shenzhen|深圳/i.test(text)) return 'sz';
  if (/mtr|hong kong|港鐵|港铁/i.test(text)) return 'hk';
  return coords[0] > 22.44 ? 'sz' : 'hk';
}

function normalizeHexColor(value) {
  const raw = String(value || '').trim().replace(/^colour:/i, '');
  if (/^#?[0-9a-f]{6}$/i.test(raw)) return raw.startsWith('#') ? raw : `#${raw}`;
  return null;
}

function inferShenzhenMetroMeta(tags) {
  const ref = String(tags?.ref || '').trim();
  const text = [
    tags?.name,
    tags?.['name:en'],
    tags?.['name:zh'],
    tags?.network,
  ].filter(Boolean).join(' ');
  const match = ref.match(/\d{1,2}/) || text.match(/(?:line|线路|號線|号线)\s*([0-9]{1,2})/i);
  return match ? SZ_METRO_LINE_META[match[1]] || null : null;
}

function isTransitMemberNode(node, role) {
  if (!node) return false;
  const tags = node.tags || {};
  const roleText = String(role || '').toLowerCase();
  if (/(stop|platform|station)/.test(roleText)) return true;
  if (tags.railway && /station|halt|platform|stop/.test(tags.railway)) return true;
  if (tags.station && /subway|light_rail|train/.test(tags.station)) return true;
  if (tags.public_transport && /platform|station|stop_position/.test(tags.public_transport)) return true;
  return false;
}

function bestTransitName(node) {
  const tags = node?.tags || {};
  return tags['name:en']
    || tags.name
    || tags['official_name:en']
    || tags['official_name']
    || tags['name:zh']
    || '';
}

function stationCandidateId(system, name, coords, aliases, stationMap = STATIONS) {
  const targetTerms = new Set([name, ...(aliases || [])].map(normalizeSearchText).filter(Boolean));
  let best = null;
  let bestScore = Infinity;
  for (const [id, station] of Object.entries(stationMap)) {
    if (station.system !== system) continue;
    const dist = haversine(coords, station.coords);
    const sameName = stationSearchTerms(station)
      .map(normalizeSearchText)
      .some(term => term && targetTerms.has(term));
    if (sameName && dist < 0.9) return id;
    if (dist < bestScore && dist < 0.18) {
      best = id;
      bestScore = dist;
    }
  }
  return best;
}

function lineColorForRelation(tags, system) {
  const raw = normalizeHexColor(tags?.colour || tags?.color);
  if (raw) return raw;
  const ref = String(tags?.ref || '').toUpperCase();
  const name = String(tags?.['name:en'] || tags?.name || '').toLowerCase();
  if (system === 'hk') {
    if (ref && MTR_LINE_META[ref]) return MTR_LINE_META[ref].color;
    if (name.includes('south island')) return MTR_LINE_META.SIL.color;
    if (name.includes('east rail')) return MTR_LINE_META.EAL.color;
    if (name.includes('island')) return MTR_LINE_META.ISL.color;
    if (name.includes('tsuen wan')) return MTR_LINE_META.TWL.color;
    if (name.includes('kwun tong')) return MTR_LINE_META.KTL.color;
    if (name.includes('tung chung')) return MTR_LINE_META.TCL.color;
    if (name.includes('airport express')) return MTR_LINE_META.AEL.color;
    if (name.includes('tuen ma')) return MTR_LINE_META.TML.color;
    if (name.includes('tseung kwan o')) return MTR_LINE_META.TKL.color;
    if (name.includes('disney')) return MTR_LINE_META.DRL.color;
  } else {
    const meta = inferShenzhenMetroMeta(tags);
    if (meta) return meta.color;
  }
  return system === 'hk' ? '#5eb6e4' : '#00a651';
}

function parseLiveTransitData(elements) {
  const nodes = new Map();
  const relations = [];
  for (const element of (elements || [])) {
    if (element.type === 'node') nodes.set(element.id, element);
    if (element.type === 'relation') relations.push(element);
  }

  const mergedStations = JSON.parse(JSON.stringify(STATIC_STATIONS));
  const liveLinesById = new Map();

  for (const relation of relations) {
    const tags = relation.tags || {};
    const system = pickTransitSystem(tags, [22.4, 114.1]);
    const szMeta = system === 'sz' ? inferShenzhenMetroMeta(tags) : null;
    const name = szMeta?.name || tags['name:en'] || tags.name || tags.ref || '';
    if (!name) continue;
    const stationIds = [];
    const seenOnLine = new Set();

    for (const member of (relation.members || [])) {
      if (member.type !== 'node') continue;
      const node = nodes.get(member.ref);
      if (!isTransitMemberNode(node, member.role)) continue;
      const stationName = bestTransitName(node);
      if (!stationName) continue;
      const coords = [node.lat, node.lon];
      const aliases = [
        node.tags?.name,
        node.tags?.['name:en'],
        node.tags?.['name:zh'],
        node.tags?.['official_name'],
        node.tags?.['official_name:en'],
      ].filter(Boolean);
      let stationId = stationCandidateId(system, stationName, coords, aliases, mergedStations);
      if (!stationId) {
        stationId = `${system}_${slugifyId(stationName)}`;
        let suffix = 2;
        while (mergedStations[stationId]) {
          stationId = `${system}_${slugifyId(stationName)}_${suffix}`;
          suffix += 1;
        }
        mergedStations[stationId] = {
          name: stationName,
          coords,
          system,
          border: /lo wu|luohu|lok ma chau|futian port|口岸/i.test(stationName),
          aliases: [...new Set(aliases)],
        };
      } else {
        mergeStationAliases(mergedStations[stationId], aliases);
      }

      if (!seenOnLine.has(stationId)) {
        stationIds.push(stationId);
        seenOnLine.add(stationId);
      }
    }

    if (stationIds.length < 2) continue;
    const lineId = `${system}_${slugifyId(tags.ref || name)}`;
    const liveLine = {
      id: lineId,
      name,
      color: lineColorForRelation(tags, system),
      system,
      stations: stationIds,
      live: true,
    };
    const existing = liveLinesById.get(lineId);
    if (!existing || liveLine.stations.length > existing.stations.length) {
      liveLinesById.set(lineId, liveLine);
    }
  }

  return {
    stations: mergedStations,
    lines: [...STATIC_LINES, ...liveLinesById.values()],
  };
}

async function fetchOverpassJson(query) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 20000);
  try {
    const response = await fetch('https://overpass-api.de/api/interpreter', {
      method: 'POST',
      body: 'data=' + encodeURIComponent(query),
      signal: controller.signal,
    });
    return await response.json();
  } finally {
    clearTimeout(timer);
  }
}

async function ensureTransitData() {
  if (transitDataReady) return;
  if (transitDataPromise) return transitDataPromise;

  transitDataPromise = (async () => {
    const q = `[out:json][timeout:35];
(
  relation["type"="route"]["route"~"subway|light_rail"](${LIVE_TRANSIT_BBOX.south},${LIVE_TRANSIT_BBOX.west},${LIVE_TRANSIT_BBOX.north},${LIVE_TRANSIT_BBOX.east});
);
(._;>;);
out body;`;
    try {
      const data = await fetchOverpassJson(q);
      const parsed = parseLiveTransitData(data.elements || []);
      if (parsed.lines.length >= 4) {
        const enriched = await mergeOfficialMtrNetwork(parsed.stations, parsed.lines);
        STATIONS = enriched.stations;
        LINES = enriched.lines;
        ({ hk: HK_GRAPH, sz: SZ_GRAPH, all: ALL_GRAPH } = buildGraphs());
        transitDataVersion = enriched.version;
      }
    } catch (error) {
      console.warn('Live transit load failed; using fallback network.', error);
    } finally {
      transitDataReady = true;
      transitDataPromise = null;
    }
  })();

  return transitDataPromise;
}

// ═══════════════════════════════════════════════════════
//  UTILITY FUNCTIONS
// ═══════════════════════════════════════════════════════
function haversine([lat1, lon1], [lat2, lon2]) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat/2)**2
          + Math.cos(lat1*Math.PI/180) * Math.cos(lat2*Math.PI/180) * Math.sin(dLon/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

function toLocalKm([lat, lon], refLat = lat) {
  const latKm = (lat - refLat) * 111.32;
  const lonKm = lon * 111.32 * Math.cos(refLat * Math.PI / 180);
  return [lonKm, latKm];
}

function pointSegmentDistanceKm(point, start, end) {
  const refLat = (point[0] + start[0] + end[0]) / 3;
  const [px, py] = toLocalKm(point, refLat);
  const [ax, ay] = toLocalKm(start, refLat);
  const [bx, by] = toLocalKm(end, refLat);
  const abx = bx - ax;
  const aby = by - ay;
  const lenSq = abx * abx + aby * aby;
  if (lenSq < 1e-9) return Math.hypot(px - ax, py - ay);
  const t = Math.max(0, Math.min(1, ((px - ax) * abx + (py - ay) * aby) / lenSq));
  const cx = ax + abx * t;
  const cy = ay + aby * t;
  return Math.hypot(px - cx, py - cy);
}

function routeSectionMetrics(stopInfos, originCoords, destCoords, rideKm) {
  const directKm = Math.max(0.2, haversine(originCoords, destCoords));
  const refLat = (originCoords[0] + destCoords[0]) / 2;
  const [ox, oy] = toLocalKm(originCoords, refLat);
  const [dx, dy] = toLocalKm(destCoords, refLat);
  const vx = dx - ox;
  const vy = dy - oy;
  const vLen = Math.hypot(vx, vy) || 1;
  let maxOffsetKm = 0;
  let backwardKm = 0;
  let prevProjection = null;

  for (const stop of (stopInfos || [])) {
    const [sx, sy] = toLocalKm(stop.coords, refLat);
    const projection = ((sx - ox) * vx + (sy - oy) * vy) / vLen;
    if (prevProjection != null && projection + 0.18 < prevProjection) {
      backwardKm += (prevProjection - projection);
    }
    prevProjection = projection;
    maxOffsetKm = Math.max(maxOffsetKm, pointSegmentDistanceKm(stop.coords, originCoords, destCoords));
  }

  const detourRatio = rideKm / directKm;
  return { directKm, detourRatio, maxOffsetKm, backwardKm };
}

function fmtMin(totalMinutes) {
  const m = Math.round(totalMinutes);
  if (m < 60) return `${m}m`;
  const h = Math.floor(m / 60);
  const rem = m % 60;
  return rem === 0 ? `${h}h` : `${h}h ${rem}m`;
}

function fmtHKD(v) {
  return `HK$${Math.round(v)}`;
}

function nearestStation(coords, system) {
  let bestId = null, bestDist = Infinity;
  for (const [id, st] of Object.entries(STATIONS)) {
    if (system && st.system !== system) continue;
    const d = haversine(coords, st.coords);
    if (d < bestDist) { bestDist = d; bestId = id; }
  }
  return { id: bestId, dist: bestDist };
}

// ═══════════════════════════════════════════════════════
//  GRAPH BUILDER + DIJKSTRA
// ═══════════════════════════════════════════════════════

// Build adjacency graph from LINES
function buildGraph(systemFilter) {
  const adj = {}; // id → [{to, cost, lineId, lineName, lineColor}]

  function addEdge(a, b, lineId, lineName, lineColor, explicitCost = null, isTransfer = false) {
    if (!STATIONS[a] || !STATIONS[b]) return;
    if (systemFilter && STATIONS[a].system !== systemFilter) return;
    const dist = haversine(STATIONS[a].coords, STATIONS[b].coords);
    // cost in minutes: metro ~30km/h avg = 0.5km/min
    const cost = Number.isFinite(explicitCost) ? explicitCost : (dist / 0.5) + 0.5; // +0.5 min dwell time per station
    if (!adj[a]) adj[a] = [];
    if (!adj[b]) adj[b] = [];
    adj[a].push({ to:b, cost, lineId, lineName, lineColor, isTransfer });
    adj[b].push({ to:a, cost, lineId, lineName, lineColor, isTransfer });
  }

  for (const line of LINES) {
    if (systemFilter && line.system !== systemFilter) continue;
    const stns = line.stations;
    for (let i = 0; i < stns.length - 1; i++) {
      addEdge(stns[i], stns[i+1], line.id, line.name, line.color);
    }
  }

  for (const link of INTERCHANGE_LINKS) {
    if (systemFilter && link.system !== systemFilter) continue;
    addEdge(link.a, link.b, link.lineId, link.lineName, link.lineColor, link.cost, true);
  }
  return adj;
}

let HK_GRAPH  = buildGraph('hk');
let SZ_GRAPH  = buildGraph('sz');
let ALL_GRAPH = buildGraph(null);

function graphStateKey(stationId, lineId) {
  return `${stationId}|${lineId || ''}`;
}

function buildLineUsePenalty(startId, endId, system = 'hk') {
  const penalties = {};
  if (system !== 'hk') return penalties;

  const aelStations = new Set(
    LINES
      .filter(line => line.system === 'hk' && /airport express/i.test(line.name || ''))
      .flatMap(line => line.stations || [])
  );
  const onAirportExpress = aelStations.has(startId) || aelStations.has(endId);
  if (!onAirportExpress) penalties.__airportExpress = 8.5;
  return penalties;
}

// Dijkstra with line-state tracking so transfers cost time
function dijkstra(graph, startId, endId, options = {}) {
  if (startId === endId) return { path:[{stationId:startId, edge:null}], costMin:0 };

  const transferPenalty = Number.isFinite(options.transferPenalty) ? options.transferPenalty : 5.5;
  const lineUsePenalty = options.lineUsePenalty || {};
  const dist   = Object.create(null);
  const prev   = Object.create(null);
  const prevEdge = Object.create(null);
  const states = Object.create(null);
  const visited = new Set();
  const startKey = graphStateKey(startId, null);
  dist[startKey] = 0;
  states[startKey] = { stationId: startId, lineId: null };
  const pq = [[0, startKey]];
  let bestEndKey = null;
  let bestEndCost = Infinity;

  while (pq.length) {
    pq.sort((a,b) => a[0] - b[0]);
    const [d, key] = pq.shift();
    if (visited.has(key)) continue;
    visited.add(key);
    const state = states[key];
    if (!state) continue;
    if (d > bestEndCost) break;

    if (state.stationId === endId) {
      bestEndKey = key;
      bestEndCost = d;
      continue;
    }

    for (const edge of (graph[state.stationId] || [])) {
      let nd = d + edge.cost;
      let nextLineId = edge.lineId;
      if (edge.isTransfer) {
        nextLineId = state.lineId;
      } else {
        if (state.lineId && state.lineId !== edge.lineId) nd += transferPenalty;
        nd += (lineUsePenalty[edge.lineId] || 0);
        if (/airport express/i.test(edge.lineName || '')) {
          nd += lineUsePenalty.__airportExpress || 0;
        }
      }
      const nextKey = graphStateKey(edge.to, nextLineId);
      if (nd < (dist[nextKey] ?? Infinity)) {
        dist[nextKey] = nd;
        prev[nextKey] = key;
        prevEdge[nextKey] = edge;
        states[nextKey] = { stationId: edge.to, lineId: nextLineId };
        pq.push([nd, nextKey]);
      }
    }
  }

  if (!bestEndKey || bestEndCost === Infinity) return null;

  // Reconstruct path
  const path = [];
  let cur = bestEndKey;
  while (cur !== undefined && cur !== null) {
    const state = states[cur];
    path.unshift({ stationId: state.stationId, edge: prevEdge[cur] || null });
    if (state.stationId === startId && !prev[cur]) break;
    cur = prev[cur];
    if (!cur && path[0]?.stationId !== startId) return null;
  }

  return { path, costMin: bestEndCost };
}

// Group path into line segments: [{lineId, lineName, lineColor, stationIds[]}]
function pathToSegments(path) {
  if (!path || path.length < 2) return [];
  const segments = [];
  let curEdge = path[1].edge;
  let curIds  = [path[0].stationId, path[1].stationId];

  for (let i = 2; i < path.length; i++) {
    const edge = path[i].edge;
    if (edge?.isTransfer) {
      if (curEdge && !curEdge.isTransfer) {
        segments.push({
          lineId:    curEdge.lineId,
          lineName:  curEdge.lineName,
          lineColor: curEdge.lineColor,
          stationIds: [...curIds],
        });
      }
      curEdge = null;
      curIds = [path[i].stationId];
      continue;
    }
    if (edge && curEdge && !curEdge.isTransfer && edge.lineId === curEdge.lineId) {
      curIds.push(path[i].stationId);
    } else {
      if (curEdge && !curEdge.isTransfer) {
        segments.push({
          lineId:    curEdge.lineId,
          lineName:  curEdge.lineName,
          lineColor: curEdge.lineColor,
          stationIds: [...curIds],
        });
      }
      curEdge = edge;
      curIds  = [path[i-1].stationId, path[i].stationId];
    }
  }
  if (curEdge && !curEdge.isTransfer) {
    segments.push({
      lineId:    curEdge.lineId,
      lineName:  curEdge.lineName,
      lineColor: curEdge.lineColor,
      stationIds: [...curIds],
    });
  }
  return segments;
}

function nearestReachableHsrDestination(destCoords) {
  const candidates = Object.keys(HSR_TIMETABLES).map(id => ({
    id,
    distKm: haversine(destCoords, STATIONS[id]?.coords || destCoords),
  }));
  candidates.sort((a, b) => a.distKm - b.distKm);
  return candidates[0] || null;
}

function nextHsrService(destStationId, earliestDepartureTs) {
  const today = new Date(earliestDepartureTs);
  const candidates = HSR_SERVICE_TIMES
    .filter(service => serviceRunsToday(service, today) && service[destStationId])
    .map(service => {
      const departure = todayAtHhmm(service.departure);
      const arrival = todayAtHhmm(service[destStationId]);
      if (!departure || !arrival) return null;
      return { service, departure, arrival };
    })
    .filter(Boolean)
    .sort((a, b) => a.departure - b.departure);

  return candidates.find(item => item.departure.getTime() >= earliestDepartureTs) || null;
}

function buildHsrSegment(destStationId, option, departureTs, arrivalTs, trainNo = '') {
  return {
    mode: 'rail',
    lineId: 'hsr',
    lineName: 'High Speed Rail',
    lineColor: '#22c55e',
    stationIds: ['hk_west_kowloon', destStationId],
    departureTs,
    arrivalTs,
    lineRef: trainNo || option?.label || 'HSR',
    fare: option?.fareHkd || 0,
  };
}

function buildHsrPills(hasMetroAfter) {
  return hasMetroAfter
    ? ['WALK', '›', 'MTR', '›', 'HSR', '›', 'METRO', '›', 'WALK']
    : ['WALK', '›', 'MTR', '›', 'HSR', '›', 'WALK'];
}

function formatClock(ts) {
  if (!Number.isFinite(ts)) return '';
  return new Date(ts).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
}

function buildHsrRouteTitle(option, finalStopName) {
  if (finalStopName && option?.label && normalizeSearchText(finalStopName) !== normalizeSearchText(option.label)) {
    return `HSR ${option.label} → ${finalStopName}`;
  }
  return `HSR ${option?.label || 'Shenzhen'}`;
}

function buildHsrRouteWindowText(route) {
  if (!Number.isFinite(route?.hsrDepartureTs) || !Number.isFinite(route?.hsrFinalArrivalTs)) return '';
  const prefix = route?.hsrTrainNo ? `${route.hsrTrainNo} ` : '';
  return `${prefix}${formatClock(route.hsrDepartureTs)} - ${formatClock(route.hsrFinalArrivalTs)}`;
}

// ═══════════════════════════════════════════════════════
//  OSRM ROAD ROUTING
// ═══════════════════════════════════════════════════════
async function osrmRoute(from, to, profile = 'driving') {
  const url = `https://router.project-osrm.org/route/v1/${profile}/${from[1].toFixed(5)},${from[0].toFixed(5)};${to[1].toFixed(5)},${to[0].toFixed(5)}?overview=full&geometries=geojson`;
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 8000);
    const r = await fetch(url, { signal: controller.signal });
    clearTimeout(timer);
    const d = await r.json();
    if (d.code === 'Ok' && d.routes && d.routes[0]) {
      return {
        coords: d.routes[0].geometry.coordinates.map(c => [c[1], c[0]]),
        km:     d.routes[0].distance / 1000,
        sec:    d.routes[0].duration,
        ok:     true,
      };
    }
  } catch(e) { /* network error / timeout */ }

  // Fallback: straight line
  const km = haversine(from, to);
  return {
    coords: [from, to],
    km,
    sec: (km / 28) * 3600, // 28 km/h urban average
    ok: false,
  };
}

// ═══════════════════════════════════════════════════════
//  FARE ESTIMATES
// ═══════════════════════════════════════════════════════
function hkMtrFare(numStops) {
  // Rough approximation: HK$4.50 base + HK$0.85 per stop
  return Math.max(4.5, 4.5 + numStops * 0.85);
}
function szMetroFare(numStops) {
  // SZ metro: RMB 2 base + RMB 1 per 2 stops; ×1.1 HKD/RMB approx
  const rmb = 2 + Math.floor(numStops / 2);
  return Math.max(2.2, rmb * 1.1);
}
function taxiFare(km, system) {
  if (system === 'hk') {
    return Math.max(27, 27 + Math.max(0, km - 2) * 8.5);
  } else if (system === 'sz') {
    const rmb = Math.max(10, 10 + Math.max(0, km - 2.5) * 2.4);
    return rmb * 1.1;
  } else {
    // Cross-border — high estimate
    return Math.max(300, 280 + km * 3.5);
  }
}
function busFare(km, system) {
  if (system === 'hk') return Math.max(4.5, 2.5 + km * 0.65);
  if (system === 'sz') return Math.max(2.2, (1 + km * 0.35) * 1.1);
  return Math.max(45, 40 + km * 0.6); // cross-border bus
}

// ═══════════════════════════════════════════════════════
//  BUS DATA — official KMB / Citybus / GMB + OSM fallback
// ═══════════════════════════════════════════════════════
function busColor(operator) {
  const key = String(operator || '').toUpperCase();
  return BUS_PROVIDER_META[key]?.color
    || (key.includes('CITY') ? '#F5A31A'
    : key.includes('KMB') ? '#E60012'
    : key.includes('NLB') ? '#3B82F6'
    : key.includes('MTR') ? '#A16207'
    : key.includes('GMB') ? '#16A34A'
    : key.includes('深圳') || key.includes('SHENZHEN') ? '#14B8A6'
    : '#A78BFA');
}

function dedupeCoords(coords) {
  const out = [];
  for (const pt of (coords || [])) {
    if (!Array.isArray(pt) || pt.length < 2) continue;
    if (!out.length || out[out.length - 1][0] !== pt[0] || out[out.length - 1][1] !== pt[1]) {
      out.push(pt);
    }
  }
  return out;
}

function buildStopMap(rows, mapFn) {
  const map = Object.create(null);
  for (const row of (rows || [])) {
    const stop = mapFn(row);
    if (!stop || !stop.id || !Array.isArray(stop.coords)) continue;
    map[stop.id] = stop;
  }
  return map;
}

function decoratePattern(pattern) {
  let cumulativeKm = [0];
  for (let i = 1; i < pattern.stops.length; i += 1) {
    cumulativeKm[i] = cumulativeKm[i - 1] + haversine(pattern.stops[i - 1].coords, pattern.stops[i].coords);
  }
  pattern.cumulativeKm = cumulativeKm;
  pattern.totalKm = cumulativeKm[cumulativeKm.length - 1] || 0;
  return pattern;
}

function buildPatternsFromGroups(groups, metaByKey, stopMap, patternBuilder) {
  const patterns = [];
  for (const [key, entries] of groups.entries()) {
    const meta = metaByKey[key] || {};
    const stops = entries
      .sort((a, b) => Number(a.seq) - Number(b.seq))
      .map(entry => stopMap[entry.stop])
      .filter(Boolean);
    const dedupedStops = stops.filter((stop, index, arr) => index === 0 || arr[index - 1].id !== stop.id);
    if (dedupedStops.length < 2) continue;
    const pattern = patternBuilder(key, meta, dedupedStops);
    patterns.push(decoratePattern(pattern));
  }
  return patterns;
}

function pickFirstArray(...candidates) {
  for (const candidate of candidates) {
    if (Array.isArray(candidate)) return candidate;
  }
  return [];
}

function xmlTagText(node, tagName) {
  return String(node?.getElementsByTagName(tagName)?.[0]?.textContent || '').trim();
}

function parseNumber(value) {
  const num = Number(value);
  return Number.isFinite(num) ? num : null;
}

function parseDataGovBusPatterns(routeXmlText, routeStopXmlText, stopXmlText) {
  if (!routeXmlText || !routeStopXmlText || !stopXmlText || !window.DOMParser) return [];

  try {
    const parser = new DOMParser();
    const routeDoc = parser.parseFromString(routeXmlText, 'text/xml');
    const routeStopDoc = parser.parseFromString(routeStopXmlText, 'text/xml');
    const stopDoc = parser.parseFromString(stopXmlText, 'text/xml');

    const stopCoordsById = new Map();
    for (const stopNode of Array.from(stopDoc.getElementsByTagName('STOP'))) {
      const rawId = xmlTagText(stopNode, 'STOP_ID');
      const x = parseNumber(xmlTagText(stopNode, 'X'));
      const y = parseNumber(xmlTagText(stopNode, 'Y'));
      if (!rawId || x === null || y === null) continue;
      const coords = wgs84FromHK80(x, y);
      if (!Array.isArray(coords) || coords.length < 2) continue;
      stopCoordsById.set(rawId, {
        id: `td_${rawId}`,
        rawId,
        coords,
      });
    }

    const metaByRouteId = Object.create(null);
    for (const routeNode of Array.from(routeDoc.getElementsByTagName('ROUTE'))) {
      const routeId = xmlTagText(routeNode, 'ROUTE_ID');
      if (!routeId) continue;
      const agency = String(xmlTagText(routeNode, 'COMPANY_CODE') || '').toUpperCase();
      metaByRouteId[routeId] = {
        routeId,
        agency,
        route: xmlTagText(routeNode, 'ROUTE_NAMEE') || xmlTagText(routeNode, 'ROUTE_NAMEC') || routeId,
        originName: xmlTagText(routeNode, 'LOC_START_NAMEE') || xmlTagText(routeNode, 'LOC_START_NAMEC'),
        destName: xmlTagText(routeNode, 'LOC_END_NAMEE') || xmlTagText(routeNode, 'LOC_END_NAMEC'),
        fullFare: parseNumber(xmlTagText(routeNode, 'FULL_FARE')),
        journeyTime: parseNumber(xmlTagText(routeNode, 'JOURNEY_TIME')),
        serviceMode: xmlTagText(routeNode, 'SERVICE_MODE') || '1',
        specialType: xmlTagText(routeNode, 'SPECIAL_TYPE') || '0',
      };
    }

    const groupedStops = new Map();
    for (const stopNode of Array.from(routeStopDoc.getElementsByTagName('RSTOP'))) {
      const routeId = xmlTagText(stopNode, 'ROUTE_ID');
      const routeSeq = xmlTagText(stopNode, 'ROUTE_SEQ') || '1';
      const stopId = xmlTagText(stopNode, 'STOP_ID');
      const stopSeq = parseNumber(xmlTagText(stopNode, 'STOP_SEQ'));
      if (!routeId || !stopId || stopSeq === null) continue;
      const key = routeKey([routeId, routeSeq]);
      if (!groupedStops.has(key)) groupedStops.set(key, []);
      groupedStops.get(key).push({
        routeId,
        routeSeq,
        stopId,
        stopSeq,
        stopName: xmlTagText(stopNode, 'STOP_NAMEE') || xmlTagText(stopNode, 'STOP_NAMEC') || stopId,
        stopNameZh: xmlTagText(stopNode, 'STOP_NAMEC') || xmlTagText(stopNode, 'STOP_NAMES') || xmlTagText(stopNode, 'STOP_NAMEE') || stopId,
      });
    }

    const patterns = [];
    for (const [key, entries] of groupedStops.entries()) {
      const [routeId, routeSeq] = key.split('|');
      const meta = metaByRouteId[routeId];
      if (!meta || !isSupportedHongKongBusAgency(meta.agency)) continue;
      const stops = entries
        .sort((a, b) => a.stopSeq - b.stopSeq)
        .map(entry => {
          const stopMeta = stopCoordsById.get(entry.stopId);
          if (!stopMeta) return null;
          return {
            id: stopMeta.id,
            rawId: entry.stopId,
            name: entry.stopName,
            nameZh: entry.stopNameZh,
            coords: stopMeta.coords,
          };
        })
        .filter(Boolean)
        .filter((stop, index, arr) => index === 0 || arr[index - 1].id !== stop.id);

      if (stops.length < 2) continue;
      const originName = stops[0]?.name || meta.originName || '';
      const destName = stops[stops.length - 1]?.name || meta.destName || '';
      patterns.push(decoratePattern({
        id: `td_${routeId}_${routeSeq}`,
        routeId,
        routeSeq,
        agency: meta.agency,
        route: meta.route,
        direction: routeSeq,
        serviceType: meta.specialType || meta.serviceMode || '1',
        originName,
        destName,
        color: busColor(meta.agency),
        stops,
        fullFare: meta.fullFare,
        journeyTime: meta.journeyTime,
        source: 'data_gov',
      }));
    }

    return patterns;
  } catch (error) {
    return [];
  }
}

function normalizeRouteStopRows(rows) {
  return (rows || []).map(row => ({
    ...row,
    seq: Number(
      row.seq
      ?? row.sequence
      ?? row.stop_seq
      ?? row.route_seq
      ?? row.order
      ?? row.index
      ?? 0
    ),
    stop: row.stop
      ?? row.stop_id
      ?? row.stopId
      ?? row.stop_code
      ?? row.stopCode
      ?? '',
  })).filter(row => row.stop);
}

async function loadOfficialBusCatalog() {
  if (_officialBusCatalog) return _officialBusCatalog;
  if (_officialBusCatalogPromise) return _officialBusCatalogPromise;

  _officialBusCatalogPromise = (async () => {
    const [
      kmbRoutesR, kmbStopsR, kmbRouteStopsR,
      ctbRoutesR, ctbStopsR, ctbRouteStopsR,
      nlbRoutesR, nlbStopsR, nlbRouteStopsR,
      mtrbRoutesR, mtrbStopsR, mtrbRouteStopsR,
      dataGovRouteXml, dataGovRouteStopXml, dataGovStopXml,
    ] = await Promise.all([
      fetch('https://data.etabus.gov.hk/v1/transport/kmb/route/').then(r => r.json()).catch(() => ({ data: [] })),
      fetch('https://data.etabus.gov.hk/v1/transport/kmb/stop').then(r => r.json()).catch(() => ({ data: [] })),
      fetch('https://data.etabus.gov.hk/v1/transport/kmb/route-stop').then(r => r.json()).catch(() => ({ data: [] })),
      fetch('https://rt.data.gov.hk/v2/transport/citybus/route/ctb').then(r => r.json()).catch(() => ({ data: [] })),
      fetch('https://rt.data.gov.hk/v2/transport/citybus/stop').then(r => r.json()).catch(() => ({ data: [] })),
      fetch('https://rt.data.gov.hk/v2/transport/citybus/route-stop/ctb').then(r => r.json()).catch(() => ({ data: [] })),
      fetch('https://rt.data.gov.hk/v2/transport/nlb/route.php?action=list').then(r => r.json()).catch(() => ({ routes: [] })),
      fetch('https://rt.data.gov.hk/v2/transport/nlb/stop.php?action=list').then(r => r.json()).catch(() => ({ stops: [] })),
      fetch('https://rt.data.gov.hk/v2/transport/nlb/route-stop.php?action=list').then(r => r.json()).catch(() => ({ routeStops: [] })),
      fetch('https://data.etabus.gov.hk/v1/transport/mtr/bus/getRoutes').then(r => r.json()).catch(() => ({ routes: [] })),
      fetch('https://data.etabus.gov.hk/v1/transport/mtr/bus/getStops').then(r => r.json()).catch(() => ({ stops: [] })),
      fetch('https://data.etabus.gov.hk/v1/transport/mtr/bus/getRouteStops').then(r => r.json()).catch(() => ({ routeStops: [] })),
      fetch('https://static.data.gov.hk/td/routes-fares-xml/ROUTE_BUS.xml').then(r => r.text()).catch(() => ''),
      fetch('https://static.data.gov.hk/td/routes-fares-xml/RSTOP_BUS.xml').then(r => r.text()).catch(() => ''),
      fetch('https://static.data.gov.hk/td/routes-fares-xml/STOP_BUS.xml').then(r => r.text()).catch(() => ''),
    ]);

    const kmbStopMap = buildStopMap(kmbStopsR.data, row => ({
      id: row.stop,
      name: row.name_en || row.name_tc || row.name_sc || row.stop,
      nameZh: row.name_tc || row.name_sc || row.name_en || row.stop,
      coords: [parseFloat(row.lat), parseFloat(row.long)],
    }));
    const ctbStopMap = buildStopMap(ctbStopsR.data, row => ({
      id: row.stop,
      name: row.name_en || row.name_tc || row.name_sc || row.stop,
      nameZh: row.name_tc || row.name_sc || row.name_en || row.stop,
      coords: [parseFloat(row.lat), parseFloat(row.long)],
    }));
    const nlbStopMap = buildStopMap(pickFirstArray(nlbStopsR.stops, nlbStopsR.data), row => ({
      id: row.stopId || row.stop_id || row.stop || row.stopCode,
      name: row.stopName_e || row.name_en || row.stopName_c || row.name_tc || row.name_sc || row.stopId,
      nameZh: row.stopName_c || row.name_tc || row.name_sc || row.stopName_e || row.name_en || row.stopId,
      coords: [parseFloat(row.latitude || row.lat), parseFloat(row.longitude || row.long || row.lng)],
    }));
    const mtrbStopMap = buildStopMap(
      pickFirstArray(mtrbStopsR.stops, mtrbStopsR.data?.routes, mtrbStopsR.data),
      row => ({
        id: row.busStopId || row.stopId || row.stop || row.stop_code || row.code,
        name: row.busStopNameEn || row.name_en || row.busStopNameTc || row.name_tc || row.stopNameEn || row.stopNameTc || row.busStopId,
        nameZh: row.busStopNameTc || row.name_tc || row.name_sc || row.stopNameTc || row.busStopNameEn || row.name_en || row.busStopId,
        coords: [parseFloat(row.latitude || row.lat), parseFloat(row.longitude || row.long || row.lng)],
      })
    );

    const kmbMeta = Object.create(null);
    for (const row of (kmbRoutesR.data || [])) {
      kmbMeta[routeKey([row.route, row.bound, row.service_type])] = row;
    }
    const ctbMeta = Object.create(null);
    for (const row of (ctbRoutesR.data || [])) {
      ctbMeta[routeKey([row.route, row.dir])] = row;
    }
    const nlbMeta = Object.create(null);
    for (const row of pickFirstArray(nlbRoutesR.routes, nlbRoutesR.data)) {
      nlbMeta[routeKey([row.routeId || row.route_id || row.routeNo || row.route, row.direction || row.bound || row.dir || row.routeSeq || row.route_seq || '1'])] = row;
    }
    const mtrbMeta = Object.create(null);
    for (const row of pickFirstArray(mtrbRoutesR.routes, mtrbRoutesR.data)) {
      mtrbMeta[routeKey([row.routeName || row.route || row.routeNo || row.route_number, row.bound || row.direction || row.routeDir || '1'])] = row;
    }

    const kmbGroups = new Map();
    for (const row of (kmbRouteStopsR.data || [])) {
      const key = routeKey([row.route, row.bound, row.service_type]);
      if (!kmbGroups.has(key)) kmbGroups.set(key, []);
      kmbGroups.get(key).push(row);
    }
    const ctbGroups = new Map();
    for (const row of (ctbRouteStopsR.data || [])) {
      const key = routeKey([row.route, row.dir]);
      if (!ctbGroups.has(key)) ctbGroups.set(key, []);
      ctbGroups.get(key).push(row);
    }
    const nlbGroups = new Map();
    for (const row of normalizeRouteStopRows(pickFirstArray(nlbRouteStopsR.routeStops, nlbRouteStopsR.data))) {
      const key = routeKey([row.routeId || row.route_id || row.routeNo || row.route, row.direction || row.bound || row.dir || row.routeSeq || row.route_seq || '1']);
      if (!nlbGroups.has(key)) nlbGroups.set(key, []);
      nlbGroups.get(key).push(row);
    }
    const mtrbGroups = new Map();
    for (const row of normalizeRouteStopRows(pickFirstArray(mtrbRouteStopsR.routeStops, mtrbRouteStopsR.data))) {
      const key = routeKey([row.routeName || row.route || row.routeNo || row.route_number, row.bound || row.direction || row.routeDir || '1']);
      if (!mtrbGroups.has(key)) mtrbGroups.set(key, []);
      mtrbGroups.get(key).push(row);
    }

    const kmbPatterns = buildPatternsFromGroups(kmbGroups, kmbMeta, kmbStopMap, (key, meta, stops) => {
      const [route, bound, serviceType] = key.split('|');
      const operator = String(meta.co || meta.operator || 'KMB').toUpperCase();
      return {
        id: `kmb_${route}_${bound}_${serviceType}`,
        agency: operator,
        route,
        direction: bound,
        serviceType,
        originName: meta.orig_en || meta.orig_tc || '',
        destName: meta.dest_en || meta.dest_tc || '',
        color: busColor(operator),
        stops,
      };
    });

    const ctbPatterns = buildPatternsFromGroups(ctbGroups, ctbMeta, ctbStopMap, (key, meta, stops) => {
      const [route, dir] = key.split('|');
      return {
        id: `ctb_${route}_${dir}`,
        agency: 'CTB',
        route,
        direction: dir,
        serviceType: '1',
        originName: meta.orig_en || meta.orig_tc || '',
        destName: meta.dest_en || meta.dest_tc || '',
        color: busColor('CTB'),
        stops,
      };
    });
    const nlbPatterns = buildPatternsFromGroups(nlbGroups, nlbMeta, nlbStopMap, (key, meta, stops) => {
      const [route, dir] = key.split('|');
      return {
        id: `nlb_${route}_${dir}`,
        agency: 'NLB',
        route: route || meta.routeNo || meta.route || meta.routeId || '',
        direction: dir,
        serviceType: '1',
        originName: meta.routeName_e || meta.orig_en || meta.from_en || meta.orig_tc || '',
        destName: meta.routeDest_e || meta.dest_en || meta.to_en || meta.dest_tc || '',
        color: busColor('NLB'),
        stops,
      };
    });
    const mtrbPatterns = buildPatternsFromGroups(mtrbGroups, mtrbMeta, mtrbStopMap, (key, meta, stops) => {
      const [route, dir] = key.split('|');
      return {
        id: `mtrb_${route}_${dir}`,
        agency: 'MTRB',
        route: route || meta.routeName || meta.route || '',
        direction: dir,
        serviceType: '1',
        originName: meta.originEn || meta.orig_en || meta.routeFromEn || meta.originTc || '',
        destName: meta.destinationEn || meta.dest_en || meta.routeToEn || meta.destinationTc || '',
        color: busColor('MTRB'),
        stops,
      };
    });
    const dataGovPatterns = parseDataGovBusPatterns(dataGovRouteXml, dataGovRouteStopXml, dataGovStopXml);

    _officialBusCatalog = {
      patterns: [...kmbPatterns, ...ctbPatterns, ...nlbPatterns, ...mtrbPatterns, ...dataGovPatterns],
    };
    _officialBusSignIndex = buildOfficialBusSignIndex(_officialBusCatalog.patterns);
    _officialBusCatalogPromise = null;
    return _officialBusCatalog;
  })().catch(error => {
    _officialBusCatalogPromise = null;
    _officialBusSignIndex = null;
    return { patterns: [] };
  });

  return _officialBusCatalogPromise;
}

function bestBoardAlightForPattern(pattern, originCoords, destCoords, maxWalkKm = MAX_BUS_WALK_KM) {
  const boardChoices = [];
  const alightChoices = [];
  for (let i = 0; i < pattern.stops.length; i += 1) {
    const stop = pattern.stops[i];
    const originDist = haversine(originCoords, stop.coords);
    const destDist = haversine(destCoords, stop.coords);
    if (originDist <= maxWalkKm) boardChoices.push({ index: i, dist: originDist, stop });
    if (destDist <= maxWalkKm) alightChoices.push({ index: i, dist: destDist, stop });
  }
  if (!boardChoices.length || !alightChoices.length) return null;

  let best = null;
  for (const board of boardChoices) {
    for (const alight of alightChoices) {
      if (alight.index <= board.index) continue;
      const rideKm = Math.max(0.15, pattern.cumulativeKm[alight.index] - pattern.cumulativeKm[board.index]);
      const stopCount = alight.index - board.index;
      const walkMinO = board.dist / (5 / 60);
      const walkMinD = alight.dist / (5 / 60);
      const rideMin = (rideKm / 18) * 60 + stopCount * 0.55;
      const totalMin = walkMinO + walkMinD + rideMin + 4.5;
      const stopInfos = pattern.stops.slice(board.index, alight.index + 1);
      const metrics = routeSectionMetrics(stopInfos, originCoords, destCoords, rideKm);
      // Filter out "technically reachable but clearly绕路" options for ranking quality.
      if (metrics.detourRatio > 2.1 && metrics.maxOffsetKm > 2.1) continue;
      if (metrics.detourRatio > 1.8 && rideKm > Math.max(4.2, metrics.directKm * 1.85)) continue;
      const score = totalMin
        + board.dist * 8
        + alight.dist * 8
        + stopCount * 0.22
        + Math.max(0, metrics.detourRatio - 1.25) * 34
        + Math.max(0, metrics.maxOffsetKm - Math.max(0.7, metrics.directKm * 0.24)) * 30
        + metrics.backwardKm * 36;
      const candidate = {
        score,
        totalMin,
        walkMinO,
        walkMinD,
        rideMin,
        rideKm,
        stopCount,
        boardIndex: board.index,
        alightIndex: alight.index,
        boardStop: board.stop,
        alightStop: alight.stop,
        stopInfos,
      };
      if (!best || candidate.score < best.score) best = candidate;
    }
  }
  return best;
}

function bestLooseBoardAlightForPattern(pattern, originCoords, destCoords, hardLimitKm = 2.2) {
  let best = null;
  for (let i = 0; i < pattern.stops.length - 1; i += 1) {
    const boardStop = pattern.stops[i];
    const originDist = haversine(originCoords, boardStop.coords);
    if (!Number.isFinite(originDist) || originDist > hardLimitKm) continue;

    for (let j = i + 1; j < pattern.stops.length; j += 1) {
      const alightStop = pattern.stops[j];
      const destDist = haversine(destCoords, alightStop.coords);
      if (!Number.isFinite(destDist) || destDist > hardLimitKm) continue;

      const rideKm = Math.max(0.15, pattern.cumulativeKm[j] - pattern.cumulativeKm[i]);
      const stopCount = j - i;
      const walkMinO = originDist / (5 / 60);
      const walkMinD = destDist / (5 / 60);
      const rideMin = (rideKm / 18) * 60 + stopCount * 0.55;
      const totalMin = walkMinO + walkMinD + rideMin + 5.5;
      const walkPenalty = Math.max(0, originDist - MAX_BUS_WALK_KM) + Math.max(0, destDist - MAX_BUS_WALK_KM);
      const stopInfos = pattern.stops.slice(i, j + 1);
      const metrics = routeSectionMetrics(stopInfos, originCoords, destCoords, rideKm);
      if (metrics.detourRatio > 2.05) continue;
      if (metrics.maxOffsetKm > Math.max(1.6, metrics.directKm * 0.5)) continue;
      if (metrics.backwardKm > Math.max(1.4, metrics.directKm * 0.38)) continue;
      if (metrics.detourRatio > 1.75 && rideKm > Math.max(4.6, metrics.directKm * 1.9)) continue;
      const score = totalMin
        + walkPenalty * 28
        + stopCount * 0.25
        + Math.max(0, metrics.detourRatio - 1.22) * 34
        + Math.max(0, metrics.maxOffsetKm - Math.max(0.7, metrics.directKm * 0.24)) * 30
        + metrics.backwardKm * 36;
      const candidate = {
        score,
        totalMin,
        walkMinO,
        walkMinD,
        rideMin,
        rideKm,
        stopCount,
        boardIndex: i,
        alightIndex: j,
        boardStop,
        alightStop,
        stopInfos,
        approximate: walkPenalty > 0,
      };
      if (!best || candidate.score < best.score) best = candidate;
    }
  }
  return best;
}

async function buildOfficialBusRoutes(originCoords, destCoords) {
  const catalog = await loadOfficialBusCatalog();
  const patterns = officialHongKongBusPatterns(catalog);
  const routes = [];
  for (const pattern of patterns) {
    const match = bestBoardAlightForPattern(pattern, originCoords, destCoords);
    if (!match) continue;
    routes.push(buildBusRouteFromPattern(
      { ...pattern, source: 'official', system: 'hk' },
      match,
      originCoords,
      destCoords,
      'hk'
    ));
  }
  routes.sort((a, b) => a.score - b.score || a.totalMin - b.totalMin);
  return routes.slice(0, 5);
}

async function buildLooseOfficialBusRoutes(originCoords, destCoords, patterns) {
  const directKm = Math.max(0.3, haversine(originCoords, destCoords));
  const routes = [];
  for (const pattern of (patterns || []).filter(pattern => isSupportedHongKongBusAgency(pattern.agency))) {
    const match = bestLooseBoardAlightForPattern(pattern, originCoords, destCoords, 2.4);
    if (!match) continue;
    if (match.rideKm < Math.max(0.6, directKm * 0.45)) continue;
    if (match.rideKm > Math.max(18, directKm * 3.4)) continue;
    if (match.totalMin > 140) continue;
    routes.push(buildBusRouteFromPattern(pattern, match, originCoords, destCoords, 'hk'));
  }
  routes.sort((a, b) => a.score - b.score || a.totalMin - b.totalMin);
  return routes.slice(0, 6);
}

async function loadGMBRouteVariants(routeCode, region) {
  const key = routeKey([region, routeCode]);
  if (_gmbPatternCache[key]) return _gmbPatternCache[key];

  const routePayload = await fetch(`https://data.etagmb.gov.hk/route/${region}/${encodeURIComponent(routeCode)}`)
    .then(r => r.json())
    .catch(() => ({ data: { routes: [] } }));
  const variants = Array.isArray(routePayload?.data?.routes)
    ? routePayload.data.routes
    : Array.isArray(routePayload?.data) ? routePayload.data : [];
  const patterns = [];

  for (const variant of variants) {
    const routeId = variant.route_id || variant.routeId || variant.route;
    const routeSeq = variant.route_seq || variant.routeSeq;
    if (!routeId || !routeSeq) continue;
    const stopPayload = await fetch(`https://data.etagmb.gov.hk/route-stop/${routeId}/${routeSeq}`)
      .then(r => r.json())
      .catch(() => ({ data: { route_stops: [] } }));
    const stops = Array.isArray(stopPayload?.data?.route_stops)
      ? stopPayload.data.route_stops.map((row, index) => ({
          id: row.stop_id || row.stop || `${routeId}_${routeSeq}_${index}`,
          name: row.name_en || row.name_tc || row.name_sc || row.stop_name_en || row.stop_name_tc || `Stop ${index + 1}`,
          nameZh: row.name_tc || row.name_sc || row.stop_name_tc || row.name_en || '',
          coords: [parseFloat(row.latitude || row.lat), parseFloat(row.longitude || row.long || row.lng)],
        })).filter(stop => Number.isFinite(stop.coords[0]) && Number.isFinite(stop.coords[1]))
      : [];
    if (stops.length < 2) continue;
    patterns.push(decoratePattern({
      id: `gmb_${region}_${routeCode}_${routeSeq}`,
      agency: 'GMB',
      route: routeCode,
      direction: String(routeSeq),
      serviceType: '1',
      routeId,
      routeSeq: String(routeSeq),
      originName: variant.orig_en || variant.from_en || variant.orig_tc || '',
      destName: variant.dest_en || variant.to_en || variant.dest_tc || '',
      color: busColor('GMB'),
      stops,
    }));
  }

  _gmbPatternCache[key] = patterns;
  return patterns;
}

async function buildRoadPathFromStops(stopCoords) {
  const coords = dedupeCoords(stopCoords);
  if (coords.length < 2) return { coords, km: 0, sec: 0, ok: false };
  if (coords.length === 2) return osrmRoute(coords[0], coords[1], 'driving');

  const chunks = [];
  const chunkSize = 24;
  for (let i = 0; i < coords.length; i += (chunkSize - 1)) {
    const chunk = coords.slice(i, i + chunkSize);
    if (chunk.length > 1) chunks.push(chunk);
    if (i + chunkSize >= coords.length) break;
  }

  const merged = [];
  let totalKm = 0;
  let totalSec = 0;
  let allOk = true;

  for (const chunk of chunks) {
    const coordStr = chunk.map(([lat, lon]) => `${lon.toFixed(5)},${lat.toFixed(5)}`).join(';');
    const url = `https://router.project-osrm.org/route/v1/driving/${coordStr}?overview=full&geometries=geojson`;
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 10000);
      const r = await fetch(url, { signal: controller.signal });
      clearTimeout(timer);
      const d = await r.json();
      if (d.code !== 'Ok' || !d.routes?.[0]) throw new Error('OSRM road path unavailable');
      const part = d.routes[0];
      merged.push(...part.geometry.coordinates.map(([lon, lat]) => [lat, lon]));
      totalKm += part.distance / 1000;
      totalSec += part.duration;
    } catch (error) {
      allOk = false;
      merged.push(...chunk);
      let fallbackKm = 0;
      for (let i = 1; i < chunk.length; i += 1) {
        fallbackKm += haversine(chunk[i - 1], chunk[i]);
      }
      totalKm += fallbackKm;
      totalSec += (fallbackKm / 22) * 3600;
    }
  }

  return {
    coords: dedupeCoords(merged),
    km: totalKm,
    sec: totalSec,
    ok: allOk,
  };
}

// Use Overpass to find bus/minibus relations that have stops near BOTH endpoints
async function findOverpassBusRoutes(oCoords, dCoords, radiusM = 650) {
  const [oLat, oLon] = oCoords;
  const [dLat, dLon] = dCoords;
  const q = `[out:json][timeout:25];
node["highway"="bus_stop"](around:${radiusM},${oLat},${oLon})->.o;
node["highway"="bus_stop"](around:${radiusM},${dLat},${dLon})->.d;
relation["route"~"bus|share_taxi"](bn.o)->.ro;
relation["route"~"bus|share_taxi"](bn.d)->.rd;
relation.ro.rd;
out tags;`;
  try {
    const controller = new AbortController();
    setTimeout(() => controller.abort(), 20000);
    const r = await fetch('https://overpass-api.de/api/interpreter', {
      method: 'POST',
      body: 'data=' + encodeURIComponent(q),
      signal: controller.signal,
    });
    const d = await r.json();
    const seen = new Set();
    const routes = [];
    for (const el of (d.elements || [])) {
      const ref = el.tags?.ref;
      if (!ref || seen.has(ref)) continue;
      seen.add(ref);
      routes.push({
        ref,
        name: el.tags?.name || el.tags?.['name:en'] || `Route ${ref}`,
        operator: el.tags?.operator || el.tags?.network || '',
        colour: el.tags?.colour || null,
        osmId: el.id,
        type: el.tags?.route || 'bus',
      });
    }
    // Sort: short refs (route numbers) first
    routes.sort((a, b) => (isNaN(a.ref) ? 1 : 0) - (isNaN(b.ref) ? 1 : 0) || a.ref.localeCompare(b.ref, undefined, {numeric:true}));
    return routes;
  } catch(e) {
    return [];
  }
}

function compactBusOperatorLabel(value, system = 'hk') {
  const raw = String(value || '').trim();
  if (!raw) return system === 'sz' ? 'SZ Bus' : 'Bus';
  if (/^ctb$|citybus/i.test(raw)) return 'CTB';
  if (/^kmb$|kowloon motor bus/i.test(raw)) return 'KMB';
  if (/^lwb$|long win/i.test(raw)) return 'LWB';
  if (/^nlb$|new lantao/i.test(raw)) return 'NLB';
  if (/green minibus|gmb/i.test(raw)) return 'GMB';
  if (system === 'sz') {
    return raw
      .replace(/深圳市?/g, '')
      .replace(/公共交通|公交集团|巴士集团|巴士|公交|有限公司|有限责任公司/g, '')
      .trim() || 'SZ Bus';
  }
  return raw;
}

function isBusMemberNode(node, role) {
  if (!node) return false;
  const tags = node.tags || {};
  const roleText = String(role || '').toLowerCase();
  if (/(stop|platform)/.test(roleText)) return true;
  if (tags.highway === 'bus_stop') return true;
  if (tags.public_transport && /platform|stop_position/.test(tags.public_transport)) return true;
  return false;
}

function busStopName(node, fallback = 'Bus Stop') {
  const tags = node?.tags || {};
  return tags['name:en']
    || tags.name
    || tags['official_name:en']
    || tags['official_name']
    || tags['name:zh']
    || fallback;
}

function busColorForTags(tags, system = 'hk') {
  const raw = normalizeHexColor(tags?.colour || tags?.color);
  if (raw) return raw;
  return busColor(compactBusOperatorLabel(tags?.operator || tags?.network || '', system));
}

function busRouteDisplayText(segment) {
  if (segment?.routeSign) {
    const op = segment.operator ? `${segment.operator} ` : '';
    return `${op}${segment.routeSign}`.trim();
  }
  return segment?.route
    ? `${segment.operator ? segment.operator + ' ' : ''}${segment.route}`.trim()
    : (segment?.lineName || segment?.operator || 'Bus');
}

function escapeHtml(text) {
  return String(text ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function segmentRouteRef(segment) {
  return String(segment?.route || segment?.lineId || segment?.routeSign || '').trim();
}

function routePrimaryBusRef(route) {
  if (route?.busRoute) return String(route.busRoute).trim();
  const firstBusSeg = (route?.segments || []).find(seg => seg.mode === 'bus');
  return segmentRouteRef(firstBusSeg);
}

function officialBusSignFromMeta(route, originName, destName) {
  const ref = String(route || '').trim();
  const origin = String(originName || '').trim();
  const dest = String(destName || '').trim();
  if (!ref) return '';
  if (origin && dest) return `${ref} ${origin} -> ${dest}`;
  if (dest) return `${ref} -> ${dest}`;
  return ref;
}

function buildOfficialBusSignIndex(patterns) {
  const byExact = Object.create(null);
  const byRoute = Object.create(null);
  for (const pattern of (patterns || [])) {
    const operator = compactBusOperatorLabel(pattern.agency || pattern.operator || '', 'hk');
    const route = String(pattern.route || '').trim();
    if (!operator || !route) continue;
    const direction = String(pattern.direction || '').trim();
    const serviceType = String(pattern.serviceType || '1').trim();
    const routeSign = officialBusSignFromMeta(route, pattern.originName, pattern.destName);
    const payload = { routeSign, originName: pattern.originName || '', destName: pattern.destName || '' };
    byExact[routeKey([operator, route, direction, serviceType])] = payload;
    if (!byRoute[routeKey([operator, route])]) byRoute[routeKey([operator, route])] = payload;
  }
  return { byExact, byRoute };
}

function lookupOfficialBusSign(operator, route, direction = '', serviceType = '1') {
  if (!_officialBusSignIndex) return null;
  const op = compactBusOperatorLabel(operator || '', 'hk');
  const ref = String(route || '').trim();
  if (!op || !ref) return null;
  const exact = _officialBusSignIndex.byExact[routeKey([op, ref, String(direction || ''), String(serviceType || '1')])];
  if (exact?.routeSign) return exact;
  const fallback = _officialBusSignIndex.byRoute[routeKey([op, ref])];
  return fallback?.routeSign ? fallback : null;
}

function busDirectionLabel(segmentLike) {
  const ref = String(segmentLike?.route || segmentLike?.lineId || '').trim();
  const dest = String(
    segmentLike?.destName
    || segmentLike?.routeDestName
    || segmentLike?.alightStop?.name
    || ''
  ).trim();
  if (ref && dest) return `${ref} ${dest}`;
  if (segmentLike?.routeSign && /->/.test(segmentLike.routeSign)) {
    const parts = String(segmentLike.routeSign).split(/->/);
    const tail = String(parts[parts.length - 1] || '').trim();
    return ref && tail ? `${ref} ${tail}` : (tail || ref || String(segmentLike.routeSign).trim());
  }
  return ref || String(segmentLike?.routeSign || '').trim() || 'Bus';
}

function segmentHoverText(segment) {
  if (segment?.mode === 'bus') {
    return `${busRouteDisplayText(segment)} · ${segment.boardStop?.name || 'Board'} -> ${segment.alightStop?.name || 'Alight'} · ${segment.stopCount || 0} stops`;
  }
  const stops = (segment?.stationIds?.length || 1) - 1;
  return `${segment?.lineName || segment?.lineId || 'Rail'} · ${Math.max(0, stops)} stops`;
}

function formatEtaLabel(raw) {
  const value = String(raw || '').trim();
  if (!value) return '';
  if (/arriving|departed|即將|已離開|已开出|departing/i.test(value)) return value;
  return value.replace(/\s+/g, ' ');
}

function minutesUntil(isoString) {
  const ts = Date.parse(isoString);
  if (!Number.isFinite(ts)) return null;
  return Math.max(0, Math.round((ts - Date.now()) / 60000));
}

function parseLooseEtaMinutes(value) {
  const text = String(value || '').trim();
  if (!text) return null;
  if (/arriving|即將|到站|到达/i.test(text)) return 0;
  const match = text.match(/(\d+)\s*(min|mins|minute|minutes|分鐘|分钟)/i);
  if (match) return Number(match[1]);
  return null;
}

function isUnavailableEtaText(value) {
  const text = String(value || '').trim().toLowerCase();
  if (!text) return false;
  return /no service|not in service|service ended|suspended|no scheduled|last bus departed|停止服務|暂停服务|尾班車已開|尾班车已开|停止营运/.test(text);
}

function etaInfoFromMinutes(minutes, text = '') {
  if (!Number.isFinite(minutes)) return null;
  return {
    text: text || `${minutes} min`,
    minutes,
    departureTs: Date.now() + minutes * 60000,
    status: 'live',
  };
}

function etaStopIdForSegment(segment) {
  const raw = String(segment?.boardStop?.rawId || '').trim();
  if (raw) return raw;
  const stopId = String(segment?.boardStop?.id || '').trim();
  if (!stopId) return '';
  return stopId.replace(/^td_/i, '');
}

function formatClockTime(ts) {
  if (!Number.isFinite(ts)) return '';
  const dt = new Date(ts);
  const hh = String(dt.getHours()).padStart(2, '0');
  const mm = String(dt.getMinutes()).padStart(2, '0');
  return `${hh}:${mm}`;
}

function resetRouteRealtime(route) {
  route.hiddenBySchedule = false;
  route.realtimeStatus = 'unknown';
  route.realtimeDepartureTs = null;
  route.realtimeArrivalTs = null;
  route.realtimeTotalMin = null;
  route.realtimeWindowText = '';
  route.realtimeNote = '';
}

function effectiveRouteMinutes(route) {
  return Number.isFinite(route?.realtimeTotalMin) ? route.realtimeTotalMin : route.totalMin;
}

function effectiveRouteArrivalTs(route) {
  if (Number.isFinite(route?.realtimeArrivalTs)) return route.realtimeArrivalTs;
  return Date.now() + effectiveRouteMinutes(route) * 60000;
}

function effectiveRouteDepartureTs(route) {
  if (Number.isFinite(route?.realtimeDepartureTs)) return route.realtimeDepartureTs;
  return null;
}

function applyRouteTagsAndSort(routes) {
  if (!Array.isArray(routes) || !routes.length) return routes;

  for (const route of routes) {
    route.tags = (route.tags || []).filter(tag => !['cheapest', 'fastest', 'balanced'].includes(tag));
  }

  routes.sort((a, b) => {
    const aHidden = a.hiddenBySchedule ? 1 : 0;
    const bHidden = b.hiddenBySchedule ? 1 : 0;
    if (aHidden !== bHidden) return aHidden - bHidden;
    const arrivalDiff = effectiveRouteArrivalTs(a) - effectiveRouteArrivalTs(b);
    if (arrivalDiff) return arrivalDiff;
    const depA = effectiveRouteDepartureTs(a) ?? Infinity;
    const depB = effectiveRouteDepartureTs(b) ?? Infinity;
    if (depA !== depB) return depA - depB;
    return a.fare - b.fare || a.totalMin - b.totalMin;
  });

  const visibleRoutes = routes.filter(route => !route.hiddenBySchedule);
  if (!visibleRoutes.length) return routes;

  const minFare = Math.min(...visibleRoutes.map(route => route.fare));
  const cheapest = visibleRoutes.find(route => route.fare === minFare);
  if (cheapest) cheapest.tags.push('cheapest');

  const minTime = Math.min(...visibleRoutes.map(route => effectiveRouteMinutes(route)));
  const fastest = visibleRoutes.find(route => effectiveRouteMinutes(route) === minTime);
  if (fastest) fastest.tags.push('fastest');

  const minScore = Math.min(...visibleRoutes.map(route => effectiveRouteMinutes(route) * route.fare));
  const balanced = visibleRoutes.find(route => effectiveRouteMinutes(route) * route.fare === minScore);
  if (balanced) balanced.tags.push('balanced');

  return routes;
}

function evaluateRouteRealtime(route) {
  resetRouteRealtime(route);
  if (!route || route.type !== 'bus') return route;

  const firstBusSeg = (route.segments || []).find(seg => seg.mode === 'bus');
  if (!firstBusSeg) return route;

  if (firstBusSeg.etaStatus === 'no_service') {
    route.hiddenBySchedule = true;
    route.realtimeStatus = 'unavailable';
    route.realtimeNote = firstBusSeg.etaText || 'No service now';
    return route;
  }

  if (!Number.isFinite(firstBusSeg.etaMinutes)) {
    route.realtimeStatus = firstBusSeg.etaStatus || 'unknown';
    return route;
  }

  const walkToBoardMin = Number(route.walkMinO || 0);
  const initialWaitMin = Number.isFinite(route.initialWaitMin) ? route.initialWaitMin : 4.5;
  const actualWaitMin = Math.max(0, firstBusSeg.etaMinutes - walkToBoardMin);
  const effectiveMin = Math.max(1, route.totalMin - initialWaitMin + actualWaitMin);
  const departureTs = Date.now() + firstBusSeg.etaMinutes * 60000;
  const arrivalTs = Date.now() + effectiveMin * 60000;

  route.realtimeStatus = 'live';
  route.realtimeDepartureTs = departureTs;
  route.realtimeArrivalTs = arrivalTs;
  route.realtimeTotalMin = effectiveMin;
  route.realtimeWindowText = `${formatClockTime(departureTs)} - ${formatClockTime(arrivalTs)}`;
  route.realtimeNote = actualWaitMin > 0
    ? `Board ${formatClockTime(departureTs)} · arrive ${formatClockTime(arrivalTs)}`
    : `Reach stop by ${formatClockTime(departureTs)} · arrive ${formatClockTime(arrivalTs)}`;
  return route;
}

function etaCacheKey(segment) {
  return [
    segment.operator,
    segment.route,
    segment.serviceType,
    segment.direction,
    segment.boardStop?.id,
    segment.boardSeq,
    segment.routeId,
    segment.routeSeq,
  ].join('|');
}

async function fetchBusEtaForSegment(segment, leadMinutes = 0) {
  if (!segment || !segment.boardStop?.id) return null;
  const key = etaCacheKey(segment);
  const cached = _busEtaCache[key];
  if (cached && Date.now() - cached.ts < 45000) return cached.value;
  const stopId = etaStopIdForSegment(segment);
  if (!stopId) return null;

  const minLead = Math.max(0, Number(leadMinutes || 0) - 0.5);
  const pickFeasibleInfo = rows => {
    const liveRows = rows
      .map(row => {
        const etaIso = row.eta || row.timestamp || '';
        const minutes = minutesUntil(etaIso);
        if (!Number.isFinite(minutes)) return null;
        return { row, minutes, etaIso };
      })
      .filter(Boolean)
      .sort((a, b) => a.minutes - b.minutes);
    const feasible = liveRows.find(item => item.minutes >= minLead) || null;
    if (feasible) return etaInfoFromMinutes(feasible.minutes, `${feasible.minutes} min`);
    if (liveRows.length) {
      return {
        text: 'Just missed current bus',
        minutes: null,
        departureTs: null,
        status: 'unknown',
      };
    }
    return null;
  };

  let etaInfo = null;
  try {
    if (segment.operator === 'KMB' || segment.operator === 'LWB') {
      const url = `https://data.etabus.gov.hk/v1/transport/kmb/eta/${encodeURIComponent(stopId)}/${encodeURIComponent(segment.route)}/${encodeURIComponent(segment.serviceType || '1')}`;
      const payload = await fetch(url).then(r => r.json());
      const rows = Array.isArray(payload?.data) ? payload.data : [];
      const matchedRows = rows.filter(row =>
        !segment.direction || String(row.dir || row.bound || '').toUpperCase() === String(segment.direction).toUpperCase()
      );
      etaInfo = pickFeasibleInfo(matchedRows.length ? matchedRows : rows);
      if (!etaInfo) {
        const remark = formatEtaLabel((matchedRows[0]?.rmk_en || matchedRows[0]?.rmk_tc || rows[0]?.rmk_en || rows[0]?.rmk_tc || '').trim());
        etaInfo = {
          text: remark || 'Check live ETA',
          minutes: parseLooseEtaMinutes(remark),
          departureTs: null,
          status: isUnavailableEtaText(remark) ? 'no_service' : 'unknown',
        };
      }
    } else if (segment.operator === 'CTB' || segment.operator === 'NLB') {
      const company = segment.operator;
      const url = `https://rt.data.gov.hk/v1/transport/batch/stop-eta/${encodeURIComponent(company)}/${encodeURIComponent(stopId)}?lang=en`;
      const payload = await fetch(url).then(r => r.json());
      const rows = Array.isArray(payload?.data) ? payload.data : [];
      const matchedRows = rows.filter(row =>
        String(row.route || '').toUpperCase() === String(segment.route || '').toUpperCase()
        && (!segment.direction || String(row.dir || '').toUpperCase() === String(segment.direction).toUpperCase())
      );
      const sameRouteRows = rows.filter(row =>
        String(row.route || '').toUpperCase() === String(segment.route || '').toUpperCase()
      );
      etaInfo = pickFeasibleInfo(matchedRows.length ? matchedRows : sameRouteRows);
      if (!etaInfo) {
        const remark = formatEtaLabel((matchedRows[0]?.rmk || sameRouteRows[0]?.rmk || '').trim());
        etaInfo = {
          text: remark || 'Check live ETA',
          minutes: parseLooseEtaMinutes(remark),
          departureTs: null,
          status: isUnavailableEtaText(remark) ? 'no_service' : 'unknown',
        };
      }
    } else if (segment.operator === 'GMB' && segment.routeId && segment.routeSeq && segment.boardSeq) {
      const url = `https://data.etagmb.gov.hk/eta/route-stop/${encodeURIComponent(segment.routeId)}/${encodeURIComponent(segment.routeSeq)}/${encodeURIComponent(segment.boardSeq)}`;
      const payload = await fetch(url).then(r => r.json());
      const rows = Array.isArray(payload?.data) ? payload.data : Array.isArray(payload?.eta) ? payload.eta : [];
      etaInfo = pickFeasibleInfo(rows);
      if (!etaInfo) {
        const remark = formatEtaLabel((rows[0]?.remarks_en || rows[0]?.remarks_tc || '').trim());
        etaInfo = {
          text: remark || 'Check live ETA',
          minutes: parseLooseEtaMinutes(remark),
          departureTs: null,
          status: isUnavailableEtaText(remark) ? 'no_service' : 'unknown',
        };
      }
    } else if (segment.operator === 'MTRB' && segment.route) {
      const url = `https://rt.data.gov.hk/v1/transport/mtr/bus/getSchedule?language=en&routeName=${encodeURIComponent(segment.route)}`;
      const payload = await fetch(url).then(r => r.json());
      const stopRows = Array.isArray(payload?.busStop) ? payload.busStop : [];
      const stopEntry = stopRows.find(row =>
        String(row.busStopId || row.stopId || '').toUpperCase() === String(stopId).toUpperCase()
      ) || stopRows.find(row => Array.isArray(row.bus) && row.bus.length);
      const pick = Array.isArray(stopEntry?.bus) ? stopEntry.bus[0] : null;
      const etaText = formatEtaLabel(pick?.arrivalTimeText || '');
      const mins = parseLooseEtaMinutes(etaText);
      etaInfo = Number.isFinite(mins)
        ? etaInfoFromMinutes(mins, etaText || `${mins} min`)
        : {
            text: etaText || 'Check live ETA',
            minutes: null,
            departureTs: null,
            status: isUnavailableEtaText(etaText) ? 'no_service' : 'unknown',
          };
    }
  } catch (error) {}

  _busEtaCache[key] = { ts: Date.now(), value: etaInfo };
  return etaInfo;
}

async function hydrateRouteEtas(routes) {
  const jobs = [];
  for (const route of (routes || [])) {
    const firstBusSegment = (route.segments || []).find(seg => seg.mode === 'bus');
    for (const segment of (route.segments || [])) {
      if (segment.mode !== 'bus') continue;
      jobs.push(
        fetchBusEtaForSegment(segment, segment === firstBusSegment ? (route.walkMinO || 0) : 0).then(info => {
          if (!info) return;
          segment.etaText = info.text || null;
          segment.etaMinutes = Number.isFinite(info.minutes) ? info.minutes : null;
          segment.etaTimestamp = Number.isFinite(info.departureTs) ? info.departureTs : null;
          segment.etaStatus = info.status || 'unknown';
        })
      );
    }
  }
  await Promise.all(jobs);
  for (const route of (routes || [])) evaluateRouteRealtime(route);
  applyRouteTagsAndSort(routes);
}

function routeRideSummary(route) {
  const pieces = [];
  for (const segment of (route.segments || [])) {
    if (segment.mode === 'bus') {
      pieces.push(busRouteDisplayText(segment));
    } else if (segment.lineName) {
      pieces.push(segment.lineName);
    }
  }
  if (!pieces.length && route.type === 'taxi') return 'Taxi';
  if (!pieces.length && Array.isArray(route.routeHints) && route.routeHints.length) {
    return route.routeHints.join(' · ');
  }
  if (!pieces.length && route.displayLabel) return route.displayLabel;
  return [...new Set(pieces)].join(' · ');
}

function buildBusSegment(pattern, match, system, legIndex, legCount) {
  const operator = compactBusOperatorLabel(pattern.agency || pattern.operator || '', system);
  const officialSign = system === 'hk'
    ? lookupOfficialBusSign(operator, pattern.route, pattern.direction, pattern.serviceType || '1')
    : null;
  const patternFare = Number(pattern.fullFare);
  return {
    mode: 'bus',
    legIndex,
    legCount,
    lineId: pattern.route || pattern.id,
    lineName: pattern.name || `${operator} ${pattern.route || ''}`.trim() || 'Bus',
    lineColor: pattern.color || busColor(operator),
    operator,
    route: pattern.route || '',
    routeSign: officialSign?.routeSign || officialBusSignFromMeta(pattern.route, pattern.originName, pattern.destName),
    routeDestName: officialSign?.destName || pattern.destName || '',
    direction: pattern.direction || '',
    serviceType: pattern.serviceType || '1',
    routeId: pattern.routeId || pattern.id || '',
    routeSeq: pattern.routeSeq || pattern.direction || '',
    boardSeq: match.boardIndex + 1,
    alightSeq: match.alightIndex + 1,
    boardStop: match.boardStop,
    alightStop: match.alightStop,
    stopCount: match.stopCount,
    stopInfos: match.stopInfos,
    stopCoords: dedupeCoords(match.stopInfos.map(stop => stop.coords)),
    rideKm: match.rideKm,
    rideMin: match.rideMin,
    fare: Number.isFinite(patternFare) && patternFare > 0 ? patternFare : busFare(match.rideKm, system),
    etaText: null,
  };
}

function buildBusPillsFromSegments(segments) {
  const pills = ['WALK'];
  segments.forEach((segment, index) => {
    pills.push('›');
    pills.push(segment.route ? `BUS ${segment.route}` : 'BUS');
    if (index < segments.length - 1) {
      pills.push('›');
      pills.push('WALK');
    }
  });
  pills.push('›');
  pills.push('WALK');
  return pills;
}

function summarizeBusRouteLabel(segments) {
  return segments
    .map(segment => segment.route || segment.operator || 'BUS')
    .filter(Boolean)
    .join(' + ');
}

function routePathCoords(route) {
  if (route.fullPathCoords?.length > 1) return dedupeCoords(route.fullPathCoords);
  const all = [];
  for (const segment of (route.segments || [])) {
    if (segment.mode === 'bus') {
      const coords = segment.pathCoords || segment.stopCoords || [];
      all.push(...coords);
    }
  }
  if (all.length) return dedupeCoords(all);
  return route.busPathCoords || route.busStopCoords || route.osrmCoords || [];
}

function bestStopChoicesForCoords(pattern, coords, maxWalkKm) {
  const choices = [];
  for (let i = 0; i < pattern.stops.length; i += 1) {
    const stop = pattern.stops[i];
    const dist = haversine(coords, stop.coords);
    if (dist <= maxWalkKm) choices.push({ index: i, dist, stop });
  }
  choices.sort((a, b) => a.dist - b.dist || a.index - b.index);
  return choices.slice(0, 6);
}

function buildBusRouteFromPattern(pattern, match, originCoords, destCoords, system) {
  const segment = buildBusSegment(pattern, match, system, 1, 1);
  const officialBonus = pattern.source === 'official' ? 5 : 0;
  return {
    id: `${pattern.id}_${match.boardIndex}_${match.alightIndex}`,
    type: 'bus',
    label: pattern.route ? `Bus ${pattern.route}` : 'Bus',
    displayLabel: busRouteDisplayText(segment),
    totalMin: match.totalMin,
    drivingMin: match.rideMin,
    walkMinO: match.walkMinO,
    walkMinD: match.walkMinD,
    fare: segment.fare,
    km: match.rideKm,
    segments: [segment],
    osrmCoords: dedupeCoords([originCoords, ...segment.stopCoords, destCoords]),
    osrmOk: false,
    official: pattern.source === 'official',
    busRoute: segment.route,
    busOperator: segment.operator,
    busColor: segment.lineColor,
    busStopCoords: segment.stopCoords,
    busStopInfos: segment.stopInfos,
    boardStop: segment.boardStop,
    alightStop: segment.alightStop,
    stopCount: segment.stopCount,
    originName: pattern.originName,
    destName: pattern.destName,
    direction: pattern.direction,
    serviceType: pattern.serviceType,
    initialWaitMin: 4.5,
    pills: buildBusPillsFromSegments([segment]),
    tags: match.approximate ? ['balanced'] : [],
    approximate: Boolean(match.approximate),
    score: match.score - officialBonus,
  };
}

function bestTransferMatchBetweenPatterns(patternA, patternB, originCoords, destCoords, maxWalkKm = MAX_BUS_WALK_KM) {
  const boardChoices = bestStopChoicesForCoords(patternA, originCoords, maxWalkKm);
  const alightChoices = bestStopChoicesForCoords(patternB, destCoords, maxWalkKm);
  if (!boardChoices.length || !alightChoices.length) return null;

  let best = null;
  for (const board of boardChoices) {
    for (const alight of alightChoices) {
      if (alight.index < 1) continue;
      for (let i = board.index + 1; i < patternA.stops.length; i += 1) {
        const transferA = patternA.stops[i];
        const rideKmA = Math.max(0.12, patternA.cumulativeKm[i] - patternA.cumulativeKm[board.index]);
        const stopCountA = i - board.index;
        const rideMinA = (rideKmA / 18) * 60 + stopCountA * 0.55;

        for (let j = 0; j < alight.index; j += 1) {
          const transferB = patternB.stops[j];
          const transferDist = haversine(transferA.coords, transferB.coords);
          const sameName = normalizeSearchText(transferA.name) === normalizeSearchText(transferB.name);
          if (transferDist > 0.38 && !sameName) continue;

          const rideKmB = Math.max(0.12, patternB.cumulativeKm[alight.index] - patternB.cumulativeKm[j]);
          const stopCountB = alight.index - j;
          if (stopCountB < 1) continue;
          const rideMinB = (rideKmB / 18) * 60 + stopCountB * 0.55;
          const walkMinO = board.dist / (5 / 60);
          const walkMinD = alight.dist / (5 / 60);
          const transferWalkMin = transferDist / (5 / 60);
          const totalMin = walkMinO + rideMinA + 4.5 + transferWalkMin + 3.5 + rideMinB + 4.5 + walkMinD;
          const score = totalMin + board.dist * 8 + alight.dist * 8 + transferDist * 16;
          const candidate = {
            score,
            totalMin,
            walkMinO,
            walkMinD,
            transferWalkMin,
            transferWaitMin: 3.5,
            first: {
              boardIndex: board.index,
              alightIndex: i,
              boardStop: board.stop,
              alightStop: transferA,
              stopInfos: patternA.stops.slice(board.index, i + 1),
              stopCount: stopCountA,
              rideKm: rideKmA,
              rideMin: rideMinA,
            },
            second: {
              boardIndex: j,
              alightIndex: alight.index,
              boardStop: transferB,
              alightStop: alight.stop,
              stopInfos: patternB.stops.slice(j, alight.index + 1),
              stopCount: stopCountB,
              rideKm: rideKmB,
              rideMin: rideMinB,
            },
          };
          if (!best || candidate.score < best.score) best = candidate;
        }
      }
    }
  }
  return best;
}

function buildTransferBusRoute(patternA, patternB, match, system) {
  const first = buildBusSegment(patternA, match.first, system, 1, 2);
  const second = buildBusSegment(patternB, match.second, system, 2, 2);
  const fare = first.fare + second.fare;
  const km = first.rideKm + second.rideKm;
  const officialBonus = (patternA.source === 'official' ? 2 : 0) + (patternB.source === 'official' ? 2 : 0);
  const transferPenalty = 16;
  return {
    id: `${patternA.id}_${match.first.boardIndex}_${match.first.alightIndex}__${patternB.id}_${match.second.boardIndex}_${match.second.alightIndex}`,
    type: 'bus',
    label: 'Bus Transfer',
    displayLabel: summarizeBusRouteLabel([first, second]),
    official: patternA.source === 'official' || patternB.source === 'official',
    totalMin: match.totalMin,
    drivingMin: first.rideMin + second.rideMin,
    walkMinO: match.walkMinO,
    walkMinD: match.walkMinD,
    transferWalkMin: match.transferWalkMin,
    transferWaitMin: match.transferWaitMin,
    fare,
    km,
    segments: [first, second],
    osrmOk: false,
    busRoute: `${first.route}${second.route ? ` + ${second.route}` : ''}`,
    busOperator: `${first.operator}${second.operator ? ` / ${second.operator}` : ''}`,
    busColor: first.lineColor,
    initialWaitMin: 4.5,
    pills: buildBusPillsFromSegments([first, second]),
    tags: [],
    score: match.score + transferPenalty - officialBonus,
  };
}

function busPatternCandidateSummary(pattern, originCoords, destCoords, maxWalkKm = MAX_BUS_WALK_KM) {
  const boardChoices = bestStopChoicesForCoords(pattern, originCoords, maxWalkKm);
  const alightChoices = bestStopChoicesForCoords(pattern, destCoords, maxWalkKm);
  return {
    pattern,
    originChoices: boardChoices,
    destChoices: alightChoices,
    nearOrigin: boardChoices[0]?.dist ?? Infinity,
    nearDest: alightChoices[0]?.dist ?? Infinity,
    directMatch: bestBoardAlightForPattern(pattern, originCoords, destCoords, maxWalkKm),
  };
}

function dedupeBusRoutes(routes, limit = 7) {
  const seen = new Set();
  const deduped = [];
  const sorted = [...routes].sort((a, b) =>
    ((b.official ? 1 : 0) - (a.official ? 1 : 0))
    || ((a.segments?.length || 0) - (b.segments?.length || 0))
    || a.score - b.score
    || a.totalMin - b.totalMin
  );
  for (const route of sorted) {
    const key = route.segments?.length
      ? route.segments
          .map(segment => [
            segment.operator || '',
            segment.route || '',
            segment.direction || '',
            segment.serviceType || '',
            segment.routeSign || '',
            segment.boardStop?.id || '',
            segment.alightStop?.id || '',
          ].join(':'))
          .join('>')
      : [
          route.type || '',
          route.busOperator || '',
          route.busRoute || '',
          route.displayLabel || '',
          route.boardStop?.id || '',
          route.alightStop?.id || '',
        ].join(':');
    if (seen.has(key)) continue;
    seen.add(key);
    deduped.push(route);
    if (deduped.length >= limit) break;
  }
  return deduped;
}

async function loadHongKongBusStopIndex() {
  if (_hkBusStopIndex) return _hkBusStopIndex;
  if (_hkBusStopIndexPromise) return _hkBusStopIndexPromise;

  _hkBusStopIndexPromise = (async () => {
    const [kmbStopsR, ctbStopsR, nlbStopsR] = await Promise.all([
      fetch('https://data.etabus.gov.hk/v1/transport/kmb/stop').then(r => r.json()).catch(() => ({ data: [] })),
      fetch('https://rt.data.gov.hk/v2/transport/citybus/stop').then(r => r.json()).catch(() => ({ data: [] })),
      fetch('https://rt.data.gov.hk/v1/transport/nlb/stop.php?action=list').then(r => r.json()).catch(() => ({ stops: [] })),
    ]);

    const stops = [];
    for (const row of (kmbStopsR.data || [])) {
      const lat = parseFloat(row.lat);
      const lon = parseFloat(row.long);
      if (!Number.isFinite(lat) || !Number.isFinite(lon)) continue;
      stops.push({
        id: row.stop,
        operator: String(row.name_en || '').includes('Lantau') ? 'LWB' : 'KMB',
        coords: [lat, lon],
        name: row.name_en || row.name_tc || row.stop,
      });
    }
    for (const row of (ctbStopsR.data || [])) {
      const lat = parseFloat(row.lat);
      const lon = parseFloat(row.long);
      if (!Number.isFinite(lat) || !Number.isFinite(lon)) continue;
      stops.push({
        id: row.stop,
        operator: 'CTB',
        coords: [lat, lon],
        name: row.name_en || row.name_tc || row.stop,
      });
    }
    for (const row of pickFirstArray(nlbStopsR.stops, nlbStopsR.data)) {
      const lat = parseFloat(row.latitude || row.lat);
      const lon = parseFloat(row.longitude || row.long || row.lng);
      if (!Number.isFinite(lat) || !Number.isFinite(lon)) continue;
      stops.push({
        id: row.stopId || row.stop_id || row.stop || row.stopCode,
        operator: 'NLB',
        coords: [lat, lon],
        name: row.stopName_e || row.name_en || row.stopName_c || row.name_tc || row.stopId,
      });
    }

    _hkBusStopIndex = stops;
    _hkBusStopIndexPromise = null;
    return stops;
  })().catch(error => {
    _hkBusStopIndexPromise = null;
    return [];
  });

  return _hkBusStopIndexPromise;
}

function nearestBusStopsForOperator(stops, coords, operator, limit = 4, radiusKm = 1.3) {
  return (stops || [])
    .filter(stop => stop.operator === operator)
    .map(stop => ({ ...stop, distKm: haversine(coords, stop.coords) }))
    .filter(stop => stop.distKm <= radiusKm)
    .sort((a, b) => a.distKm - b.distKm)
    .slice(0, limit);
}

async function fetchRoutesAtBusStop(stop) {
  if (!stop?.id || !stop?.operator) return [];
  const key = `${stop.operator}|${stop.id}`;
  if (_busStopRouteCache[key]) return _busStopRouteCache[key];

  let rows = [];
  try {
    if (stop.operator === 'KMB' || stop.operator === 'LWB') {
      const payload = await fetch(`https://data.etabus.gov.hk/v1/transport/kmb/stop-eta/${encodeURIComponent(stop.id)}`)
        .then(r => r.json())
        .catch(() => ({ data: [] }));
      rows = (payload.data || []).map(row => ({
        operator: row.co || stop.operator,
        route: row.route,
        direction: row.dir || '',
        serviceType: row.service_type || '1',
      }));
    } else if (stop.operator === 'CTB' || stop.operator === 'NLB') {
      const payload = await fetch(`https://rt.data.gov.hk/v1.1/transport/batch/stop-route/${encodeURIComponent(stop.operator)}/${encodeURIComponent(stop.id)}`)
        .then(r => r.json())
        .catch(() => ({ data: [] }));
      rows = (payload.data || []).map(row => ({
        operator: row.co || stop.operator,
        route: row.route,
        direction: row.dir || '',
        routeId: row.route_id || row.routeId || '',
      }));
    }
  } catch (error) {}

  const deduped = [];
  const seen = new Set();
  for (const row of rows) {
    const route = String(row.route || '').trim();
    if (!route) continue;
    const operator = compactBusOperatorLabel(row.operator || stop.operator, 'hk');
    const dedupeKey = `${operator}|${route}|${row.direction || ''}|${row.serviceType || ''}`;
    if (seen.has(dedupeKey)) continue;
    seen.add(dedupeKey);
    deduped.push({
      operator,
      route,
      direction: row.direction || '',
      serviceType: row.serviceType || '1',
      routeId: row.routeId || '',
    });
  }

  _busStopRouteCache[key] = deduped;
  return deduped;
}

async function buildBusRouteHintsForTrip(originCoords, destCoords, system) {
  if (system !== 'hk') return [];

  const stopIndex = await loadHongKongBusStopIndex().catch(() => []);
  const originStops = [
    ...nearestBusStopsForOperator(stopIndex, originCoords, 'KMB'),
    ...nearestBusStopsForOperator(stopIndex, originCoords, 'CTB'),
  ];
  const destStops = [
    ...nearestBusStopsForOperator(stopIndex, destCoords, 'KMB'),
    ...nearestBusStopsForOperator(stopIndex, destCoords, 'CTB'),
  ];

  const scored = new Map();
  const addScore = (routeRow, stop, side) => {
    const label = `${routeRow.operator} ${routeRow.route}`.trim();
    const entry = scored.get(label) || {
      label,
      operator: routeRow.operator,
      route: routeRow.route,
      score: 0,
      originHits: 0,
      destHits: 0,
      bestOrigin: Infinity,
      bestDest: Infinity,
    };
    const weight = Math.max(0, 14 - stop.distKm * 10);
    entry.score += weight;
    if (side === 'origin') {
      entry.originHits += 1;
      entry.bestOrigin = Math.min(entry.bestOrigin, stop.distKm);
    } else {
      entry.destHits += 1;
      entry.bestDest = Math.min(entry.bestDest, stop.distKm);
    }
    scored.set(label, entry);
  };

  await Promise.all(originStops.map(async stop => {
    const rows = await fetchRoutesAtBusStop(stop);
    rows.forEach(row => addScore(row, stop, 'origin'));
  }));
  await Promise.all(destStops.map(async stop => {
    const rows = await fetchRoutesAtBusStop(stop);
    rows.forEach(row => addScore(row, stop, 'dest'));
  }));

  const prioritized = [...scored.values()]
    .map(item => ({
      ...item,
      score: item.score
        + (item.originHits > 0 && item.destHits > 0 ? 40 : 0)
        - (item.bestOrigin === Infinity ? 0 : item.bestOrigin * 8)
        - (item.bestDest === Infinity ? 0 : item.bestDest * 8),
    }))
    .sort((a, b) => b.score - a.score || a.label.localeCompare(b.label))
    .slice(0, 4)
    .map(item => item.label);

  if (prioritized.length) return prioritized;

  const fallbackHints = [];
  const seen = new Set();
  try {
    const catalog = await loadOfficialBusCatalog();
    const matches = officialHongKongBusPatterns(catalog)
      .map(pattern => ({
        pattern,
        match: bestLooseBoardAlightForPattern(pattern, originCoords, destCoords, 3),
      }))
      .filter(item => item.match)
      .sort((a, b) => a.match.score - b.match.score)
      .slice(0, 6);

    for (const item of matches) {
      const operator = compactBusOperatorLabel(item.pattern.agency || item.pattern.operator || '', system);
      const label = item.pattern.route ? `${operator} ${item.pattern.route}` : (item.pattern.name || operator || 'Bus');
      if (seen.has(label)) continue;
      seen.add(label);
      fallbackHints.push(label);
    }
  } catch (error) {}

  return fallbackHints.slice(0, 4);
}

function parseBusHintLabel(label, system = 'hk') {
  const raw = String(label || '').trim();
  if (!raw) return { operator: '', route: '' };
  const match = raw.match(/^([A-Za-z]+)\s+(.+)$/);
  if (!match) return { operator: '', route: raw };
  return {
    operator: compactBusOperatorLabel(match[1], system),
    route: String(match[2] || '').trim(),
  };
}

function buildBusHintFallbackRoutes(routeHints, roadRoute, system, isCross = false) {
  const fare = busFare(roadRoute.km, system);
  const dedupedHints = [...new Set((routeHints || []).map(label => String(label || '').trim()).filter(Boolean))];
  if (!dedupedHints.length) return [];

  return dedupedHints.slice(0, 4).map((label, index) => {
    const parsed = parseBusHintLabel(label, system);
    const routeRef = parsed.route || label;
    const operator = parsed.operator || '';
    const displayLabel = operator && routeRef ? `${operator} ${routeRef}` : label;
    return {
      id: `bus_hint_${slugifyId(displayLabel)}_${index}`,
      type: 'bus',
      label: 'Bus',
      displayLabel,
      totalMin: (roadRoute.sec / 60) * 1.3 + 14 + index * 0.3,
      drivingMin: (roadRoute.sec / 60) * 1.3 + 6,
      walkMinO: 4,
      walkMinD: 4,
      fare,
      km: roadRoute.km,
      segments: [],
      osrmCoords: roadRoute.coords,
      osrmOk: roadRoute.ok,
      pills: ['WALK', '›', `BUS ${routeRef}`, '›', 'WALK'],
      tags: [],
      routeHints: [displayLabel],
      busRoute: routeRef,
      busOperator: operator,
      busColor: busColor(operator || (isCross ? 'cross' : 'bus')),
      initialWaitMin: 6,
      approximate: true,
    };
  });
}

async function buildHongKongBusFallbackRoutes(originCoords, destCoords, roadRoute) {
  const stopIndex = await loadHongKongBusStopIndex().catch(() => []);
  if (!stopIndex.length) return [];

  const originStops = [
    ...nearestBusStopsForOperator(stopIndex, originCoords, 'KMB', 6, 1.4),
    ...nearestBusStopsForOperator(stopIndex, originCoords, 'CTB', 6, 1.4),
    ...nearestBusStopsForOperator(stopIndex, originCoords, 'NLB', 6, 1.6),
  ];
  const destStops = [
    ...nearestBusStopsForOperator(stopIndex, destCoords, 'KMB', 6, 1.4),
    ...nearestBusStopsForOperator(stopIndex, destCoords, 'CTB', 6, 1.4),
    ...nearestBusStopsForOperator(stopIndex, destCoords, 'NLB', 6, 1.6),
  ];

  const candidateMap = new Map();
  const addCandidate = (row, stop, side) => {
    const operator = compactBusOperatorLabel(row.operator || stop.operator, 'hk');
    const route = String(row.route || '').trim();
    if (!route) return;
    const key = `${operator}|${route}|${row.direction || ''}|${row.serviceType || '1'}`;
    const current = candidateMap.get(key) || {
      operator,
      route,
      direction: row.direction || '',
      serviceType: row.serviceType || '1',
      routeId: row.routeId || '',
      originStop: null,
      destStop: null,
    };
    if (side === 'origin') {
      if (!current.originStop || stop.distKm < current.originStop.distKm) current.originStop = stop;
    } else {
      if (!current.destStop || stop.distKm < current.destStop.distKm) current.destStop = stop;
    }
    candidateMap.set(key, current);
  };

  await Promise.all(originStops.map(async stop => {
    const rows = await fetchRoutesAtBusStop(stop);
    rows.forEach(row => addCandidate(row, stop, 'origin'));
  }));
  await Promise.all(destStops.map(async stop => {
    const rows = await fetchRoutesAtBusStop(stop);
    rows.forEach(row => addCandidate(row, stop, 'dest'));
  }));

  const candidates = [...candidateMap.values()]
    .filter(item => item.originStop && item.destStop)
    .map((item, index) => {
      const walkMinO = item.originStop.distKm / (5 / 60);
      const walkMinD = item.destStop.distKm / (5 / 60);
      const totalMin = (roadRoute.sec / 60) * 1.3 + walkMinO + walkMinD + 6;
      const label = `${item.operator} ${item.route}`.trim();
      return {
        id: `bus_fallback_${slugifyId(label)}_${index}`,
        type: 'bus',
        label: 'Bus',
        displayLabel: label,
        totalMin,
        drivingMin: (roadRoute.sec / 60) * 1.3,
        walkMinO,
        walkMinD,
        fare: busFare(roadRoute.km, 'hk'),
        km: roadRoute.km,
        segments: [],
        osrmCoords: roadRoute.coords,
        osrmOk: roadRoute.ok,
        pills: ['WALK', '›', `BUS ${item.route}`, '›', 'WALK'],
        tags: [],
        routeHints: [label],
        busRoute: item.route,
        busOperator: item.operator,
        busColor: busColor(item.operator),
        boardStop: item.originStop,
        alightStop: item.destStop,
        initialWaitMin: 6,
        approximate: true,
        score: totalMin + item.originStop.distKm * 6 + item.destStop.distKm * 6,
      };
    })
    .sort((a, b) => a.score - b.score || a.displayLabel.localeCompare(b.displayLabel));

  return candidates.slice(0, 5);
}

function parseOsmBusPatterns(elements, fallbackSystem) {
  const nodes = new Map();
  const relations = [];
  for (const element of (elements || [])) {
    if (element.type === 'node') nodes.set(element.id, element);
    if (element.type === 'relation') relations.push(element);
  }

  const patterns = [];
  for (const relation of relations) {
    const tags = relation.tags || {};
    const routeRef = String(tags.ref || '').trim();
    if (!routeRef) continue;
    const stops = [];
    const seenStops = new Set();
    for (const member of (relation.members || [])) {
      if (member.type !== 'node') continue;
      const node = nodes.get(member.ref);
      if (!isBusMemberNode(node, member.role)) continue;
      const coords = [node.lat, node.lon];
      const id = `ovp_stop_${node.id}`;
      if (seenStops.has(id)) continue;
      seenStops.add(id);
      stops.push({
        id,
        name: busStopName(node, `${routeRef} Stop`),
        nameZh: node.tags?.['name:zh'] || node.tags?.name || '',
        coords,
      });
    }
    if (stops.length < 2) continue;
    const inferredSystem = pickTransitSystem(tags, stops[0].coords || [22.4, 114.1]) || fallbackSystem;
    const agency = compactBusOperatorLabel(tags.operator || tags.network || '', inferredSystem);
    patterns.push(decoratePattern({
      id: `ovpbus_${relation.id}`,
      agency,
      operator: agency,
      route: routeRef,
      name: tags['name:en'] || tags.name || routeRef,
      direction: tags.to || tags.from || '',
      serviceType: '1',
      originName: tags.from || tags['from:en'] || '',
      destName: tags.to || tags['to:en'] || '',
      color: busColorForTags(tags, inferredSystem),
      system: inferredSystem,
      source: 'overpass',
      stops,
    }));
  }
  return patterns;
}

async function loadOsmBusPatternsForTrip(originCoords, destCoords, system, radiusM = 720) {
  const cacheKey = routeKey([
    system,
    originCoords[0].toFixed(3), originCoords[1].toFixed(3),
    destCoords[0].toFixed(3), destCoords[1].toFixed(3),
    radiusM,
  ]);
  if (_osmBusPatternCache[cacheKey]) return _osmBusPatternCache[cacheKey];

  const [oLat, oLon] = originCoords;
  const [dLat, dLon] = destCoords;
  const q = `[out:json][timeout:28];
(
  node["highway"="bus_stop"](around:${radiusM},${oLat},${oLon});
  node["public_transport"~"platform|stop_position"](around:${radiusM},${oLat},${oLon});
)->.o;
(
  node["highway"="bus_stop"](around:${radiusM},${dLat},${dLon});
  node["public_transport"~"platform|stop_position"](around:${radiusM},${dLat},${dLon});
)->.d;
relation["type"="route"]["route"~"bus|share_taxi|trolleybus"](bn.o)->.ro;
relation["type"="route"]["route"~"bus|share_taxi|trolleybus"](bn.d)->.rd;
(.ro;.rd;);
(._;>;);
out body;`;

  try {
    const data = await fetchOverpassJson(q);
    const patterns = parseOsmBusPatterns(data.elements || [], system)
      .filter(pattern => pattern.system === system);
    _osmBusPatternCache[cacheKey] = patterns;
    return patterns;
  } catch (error) {
    return [];
  }
}

async function collectBusPatternsForTrip(originCoords, destCoords, system) {
  const patterns = [];

  if (system === 'hk') {
    try {
      const catalog = await loadOfficialBusCatalog();
      patterns.push(...(catalog.patterns || []).map(pattern => ({
        ...pattern,
        agency: compactBusOperatorLabel(pattern.agency || '', 'hk'),
        system: 'hk',
        source: 'official',
      })));
    } catch (error) {}

    try {
      const osmPatterns = await loadOsmBusPatternsForTrip(originCoords, destCoords, system);
      const seen = new Set(patterns.map(pattern => `${pattern.agency}|${pattern.route}|${pattern.direction}|${pattern.stops[0]?.name}`));
      for (const pattern of osmPatterns) {
        const key = `${pattern.agency}|${pattern.route}|${pattern.direction}|${pattern.stops[0]?.name}`;
        if (seen.has(key)) continue;
        seen.add(key);
        patterns.push(pattern);
      }
    } catch (error) {}

    try {
      const osmBusRoutes = await findOverpassBusRoutes(originCoords, destCoords);
      const gmbCandidates = osmBusRoutes
        .filter(route => /minibus|gmb|green/i.test(`${route.operator} ${route.name} ${route.type}`))
        .slice(0, 4);
      for (const candidate of gmbCandidates) {
        const routeCode = String(candidate.ref || '').trim();
        const regions = ['HKI', 'KLN', 'NT'];
        for (const region of regions) {
          const variants = await loadGMBRouteVariants(routeCode, region);
          for (const variant of variants) {
            patterns.push({
              ...variant,
              agency: 'GMB',
              system: 'hk',
              source: 'official',
            });
          }
        }
      }
    } catch (error) {}
  } else if (system === 'sz') {
    patterns.push(...await loadOsmBusPatternsForTrip(originCoords, destCoords, system));
  }

  return patterns;
}

async function buildBusRoutesForTrip(originCoords, destCoords, system) {
  if (system !== 'hk') {
    const patterns = await collectBusPatternsForTrip(originCoords, destCoords, system);
    if (!patterns.length) return [];

    const summaries = patterns
      .map(pattern => busPatternCandidateSummary(pattern, originCoords, destCoords))
      .filter(item => item.originChoices.length || item.destChoices.length || item.directMatch);

    const directRoutes = summaries
      .filter(item => item.directMatch)
      .map(item => buildBusRouteFromPattern(item.pattern, item.directMatch, originCoords, destCoords, system));

    const originCandidates = summaries
      .filter(item => item.originChoices.length)
      .sort((a, b) => a.nearOrigin - b.nearOrigin)
      .slice(0, 40);
    const destCandidates = summaries
      .filter(item => item.destChoices.length)
      .sort((a, b) => a.nearDest - b.nearDest)
      .slice(0, 40);

    const transferRoutes = [];
    for (const fromItem of originCandidates) {
      for (const toItem of destCandidates) {
        if (fromItem.pattern.id === toItem.pattern.id) continue;
        const match = bestTransferMatchBetweenPatterns(fromItem.pattern, toItem.pattern, originCoords, destCoords);
        if (!match) continue;
        transferRoutes.push(buildTransferBusRoute(fromItem.pattern, toItem.pattern, match, system));
      }
    }

    const bestDirectMin = directRoutes.length ? Math.min(...directRoutes.map(route => route.totalMin)) : Infinity;
    const preferredTransfers = directRoutes.length
      ? transferRoutes.filter(route => route.totalMin + 5 < bestDirectMin)
      : transferRoutes;
    return dedupeBusRoutes([...directRoutes, ...preferredTransfers], 7);
  }

  const catalog = await loadOfficialBusCatalog().catch(() => ({ patterns: [] }));
  const officialPatterns = officialHongKongBusPatterns(catalog);
  const seededRoutes = await buildOfficialBusRoutes(originCoords, destCoords).catch(() => []);
  if (!officialPatterns.length) return seededRoutes;

  const summaries = officialPatterns
    .map(pattern => busPatternCandidateSummary(pattern, originCoords, destCoords))
    .filter(item => item.originChoices.length || item.destChoices.length || item.directMatch);

  const directRoutes = summaries
    .filter(item => item.directMatch)
    .map(item => buildBusRouteFromPattern(item.pattern, item.directMatch, originCoords, destCoords, system));

  const originCandidates = summaries
    .filter(item => item.originChoices.length)
    .sort((a, b) => a.nearOrigin - b.nearOrigin)
    .slice(0, 40);
  const destCandidates = summaries
    .filter(item => item.destChoices.length)
    .sort((a, b) => a.nearDest - b.nearDest)
    .slice(0, 40);

  const transferRoutes = [];
  for (const fromItem of originCandidates) {
    for (const toItem of destCandidates) {
      if (fromItem.pattern.id === toItem.pattern.id) continue;
      const match = bestTransferMatchBetweenPatterns(fromItem.pattern, toItem.pattern, originCoords, destCoords);
      if (!match) continue;
      transferRoutes.push(buildTransferBusRoute(fromItem.pattern, toItem.pattern, match, system));
    }
  }

  let looseRoutes = [];
  if (system === 'hk' && seededRoutes.length + directRoutes.length + transferRoutes.length < 4) {
    looseRoutes = await buildLooseOfficialBusRoutes(originCoords, destCoords, officialPatterns);
  }

  const mergedDirectRoutes = [...seededRoutes, ...directRoutes];
  const bestDirectMin = mergedDirectRoutes.length ? Math.min(...mergedDirectRoutes.map(route => route.totalMin)) : Infinity;
  const preferredTransfers = mergedDirectRoutes.length
    ? transferRoutes.filter(route => route.totalMin + 5 < bestDirectMin)
    : transferRoutes;

  return dedupeBusRoutes([...mergedDirectRoutes, ...preferredTransfers, ...looseRoutes], 7);
}

async function buildCrossBorderCoachRoutes(originCoords, destCoords, originSystem, destSystem) {
  const hkToSz = originSystem === 'hk' && destSystem === 'sz';
  const szToHk = originSystem === 'sz' && destSystem === 'hk';
  if (!hkToSz && !szToHk) return [];
  const routes = [];

  for (const coach of CROSS_BORDER_COACHS) {
    try {
      const startBorder = hkToSz ? coach.hkCoords : coach.szCoords;
      const endBorder = hkToSz ? coach.szCoords : coach.hkCoords;
      const startLeg = await osrmRoute(originCoords, startBorder, 'driving');
      const endLeg = await osrmRoute(endBorder, destCoords, 'driving');
      const approachMin = startLeg.sec / 60;
      const exitMin = endLeg.sec / 60;
      const waitMin = 12;
      const totalMin = approachMin + coach.crossingMin + exitMin + waitMin + 6;
      const fullPathCoords = dedupeCoords([
        ...startLeg.coords,
        endBorder,
        ...endLeg.coords,
      ]);
      const boardStop = hkToSz
        ? { id: `${coach.id}_hk`, name: `${coach.crossingName} coach pickup`, coords: coach.hkCoords }
        : { id: `${coach.id}_sz`, name: `${coach.crossingName} coach pickup`, coords: coach.szCoords };
      const alightStop = hkToSz
        ? { id: `${coach.id}_sz`, name: `${coach.crossingName} coach drop-off`, coords: coach.szCoords }
        : { id: `${coach.id}_hk`, name: `${coach.crossingName} coach drop-off`, coords: coach.hkCoords };
      const coachSegment = {
        mode: 'bus',
        legIndex: 1,
        legCount: 1,
        lineId: coach.id,
        lineName: coach.routeName,
        lineColor: '#60a5fa',
        operator: coach.operators[0],
        route: '',
        boardStop,
        alightStop,
        stopCount: 1,
        stopInfos: [boardStop, alightStop],
        stopCoords: [boardStop.coords, alightStop.coords],
        pathCoords: fullPathCoords,
        rideKm: startLeg.km + endLeg.km + haversine(coach.hkCoords, coach.szCoords),
        rideMin: approachMin + exitMin + coach.crossingMin + waitMin,
        fare: coach.fare + Math.max(0, (startLeg.km + endLeg.km - 12) * 0.4),
        etaText: 'Check operator timetable',
      };

      routes.push({
        id: `cross_coach_${coach.id}`,
        type: 'bus',
        label: 'Cross-Boundary Coach',
        displayLabel: `${coach.operators[0]} ${coach.routeName}`,
        official: true,
        totalMin,
        drivingMin: coachSegment.rideMin,
        walkMinO: 3,
        walkMinD: 3,
        fare: coachSegment.fare,
        km: coachSegment.rideKm,
        segments: [coachSegment],
        fullPathCoords,
        osrmCoords: fullPathCoords,
        osrmOk: startLeg.ok && endLeg.ok,
        busRoute: coach.routeName,
        busOperator: coach.operators.join(' / '),
        busColor: coachSegment.lineColor,
        crossingName: coach.crossingName,
        hkBorderCoords: coach.hkCoords,
        szBorderCoords: coach.szCoords,
        crossMin: coach.crossingMin,
        pills: ['WALK', '›', 'BUS COACH', '›', 'CROSS', '›', 'WALK'],
        tags: ['cross'],
        score: totalMin + coach.fare,
      });
    } catch (error) {}
  }

  routes.sort((a, b) => a.totalMin - b.totalMin || a.fare - b.fare);
  return routes.slice(0, 3);
}

async function buildHsrCommuteRoutes(originCoords, destCoords, originSystem, destSystem) {
  if (originSystem !== 'hk' || destSystem !== 'sz' || !state.hsrModeEnabled) return [];

  const nowTs = Date.now();
  const nearO = nearestStation(originCoords, 'hk');
  if (!nearO.id || nearO.dist > MAX_TRANSIT_WALK_KM) return [];

  const supportedDestinations = Object.keys(HSR_TIMETABLES);
  const exactOrNearest = nearestReachableHsrDestination(destCoords);
  const orderedDestinationIds = exactOrNearest
    ? [exactOrNearest.id, ...supportedDestinations.filter(id => id !== exactOrNearest.id)]
    : supportedDestinations;

  const routes = [];
  for (const hsrDestId of orderedDestinationIds.slice(0, 2)) {
    const option = HSR_TIMETABLES[hsrDestId];
    const destStation = STATIONS[hsrDestId];
    if (!option || !destStation) continue;

    const hkPath = dijkstra(HK_GRAPH, nearO.id, 'hk_west_kowloon', {
      lineUsePenalty: buildLineUsePenalty(nearO.id, 'hk_west_kowloon', 'hk'),
    });
    if (!hkPath) continue;

    const hkSegs = pathToSegments(hkPath.path);
    const walkMinO = nearO.dist / (5 / 60);
    const accessMin = hkPath.costMin + walkMinO;
    const earliestDepartureTs = nowTs + (accessMin + HSR_STATION_PROCESS_MIN + HSR_BOARDING_CUTOFF_MIN) * 60000;
    const departure = nextHsrService(hsrDestId, earliestDepartureTs);
    if (!departure) continue;

    const hsrDepartureTs = departure.departure.getTime();
    const hsrArrivalTs = departure.arrival.getTime();
    const hsrRideMin = Math.max(1, (hsrArrivalTs - hsrDepartureTs) / 60000);
    const nearDest = nearestStation(destCoords, 'sz');
    let szSegs = [];
    let transitSzMin = 0;
    let walkMinD = 0;
    let szStops = 0;

    if (nearDest.id && nearDest.dist <= MAX_TRANSIT_WALK_KM) {
      const szPath = dijkstra(SZ_GRAPH, hsrDestId, nearDest.id);
      if (szPath) {
        szSegs = pathToSegments(szPath.path);
        transitSzMin = szPath.costMin;
        walkMinD = nearDest.dist / (5 / 60);
        szStops = Math.max(0, szPath.path.length - 1);
      } else {
        walkMinD = haversine(destStation.coords, destCoords) / (5 / 60);
      }
    } else {
      walkMinD = haversine(destStation.coords, destCoords) / (5 / 60);
    }

    const hsrSegment = buildHsrSegment(hsrDestId, option, hsrDepartureTs, hsrArrivalTs, departure.service.trainNo);
    const segments = [...hkSegs, hsrSegment, ...szSegs];
    const totalMin = ((hsrDepartureTs - nowTs) / 60000) + hsrRideMin + transitSzMin + walkMinD;
    const finalArrivalTs = nowTs + totalMin * 60000;
    const finalStopName = nearDest.id ? (STATIONS[nearDest.id]?.name || destStation.name) : destStation.name;
    const hkStops = Math.max(0, hkPath.path.length - 1);
    const totalFare = hkMtrFare(hkStops) + (option.fareHkd || 0) + (szStops ? szMetroFare(szStops) : 0);

    routes.push({
      id: `hsr_${hsrDestId}`,
      type: 'hsr',
      label: 'HSR',
      displayLabel: buildHsrRouteTitle(option, finalStopName),
      totalMin,
      transitMin: hkPath.costMin + transitSzMin + hsrRideMin,
      walkMinO,
      walkMinD,
      fare: totalFare,
      stops: Math.max(0, hkPath.path.length - 1) + Math.max(0, szSegs.reduce((sum, seg) => sum + ((seg.stationIds?.length || 1) - 1), 0)),
      segments,
      pills: buildHsrPills(Boolean(szSegs.length)),
      tags: ['cross'],
      hsrDepartureTs,
      hsrArrivalTs,
      hsrFinalArrivalTs: finalArrivalTs,
      hsrTrainNo: departure.service.trainNo,
      hsrWindowText: buildHsrRouteWindowText({
        hsrDepartureTs,
        hsrFinalArrivalTs: finalArrivalTs,
        hsrTrainNo: departure.service.trainNo,
      }),
      realtimeDepartureTs: hsrDepartureTs,
      realtimeArrivalTs: finalArrivalTs,
      realtimeTotalMin: totalMin,
      hsrStationProcessMin: HSR_STATION_PROCESS_MIN,
      hsrBoardingCutoffMin: HSR_BOARDING_CUTOFF_MIN,
      hsrDestId,
      score: totalMin + (hsrDestId === 'sz_futian' ? 8 : 11),
    });
  }

  routes.sort((a, b) => a.totalMin - b.totalMin || a.fare - b.fare);
  return routes.slice(0, 2);
}

// ═══════════════════════════════════════════════════════
//  ROUTE GENERATION (async)
// ═══════════════════════════════════════════════════════
async function generateBaseRoutes(originCoords, destCoords, originSystem, destSystem, modeFilter) {
  await ensureTransitData();

  const routes = [];
  const isCross = (originSystem !== destSystem);
  const WALK_SPEED = 5; // km/h
  const WALK_SPEED_MIN = WALK_SPEED / 60; // km/min

  const walkMinutes = (distKm) => distKm / WALK_SPEED_MIN;

  // ── TRANSIT (MTR/Metro) — same city ──
  if ((modeFilter === 'all' || modeFilter === 'mtr') && !isCross) {
    const graph = originSystem === 'hk' ? HK_GRAPH : SZ_GRAPH;
    const nearO = nearestStation(originCoords, originSystem);
    const nearD = nearestStation(destCoords, destSystem);

    if (
      nearO.id && nearD.id && nearO.id !== nearD.id
      && nearO.dist <= MAX_TRANSIT_WALK_KM
      && nearD.dist <= MAX_TRANSIT_WALK_KM
    ) {
      const result = dijkstra(graph, nearO.id, nearD.id, {
        lineUsePenalty: buildLineUsePenalty(nearO.id, nearD.id, originSystem),
      });
      if (result) {
        const segs = pathToSegments(result.path);
        const stops = result.path.length - 1;
        const transitMin = result.costMin;
        const walkMinO = walkMinutes(nearO.dist);
        const walkMinD = walkMinutes(nearD.dist);
        const totalMin = transitMin + walkMinO + walkMinD;
        const fare = originSystem === 'hk' ? hkMtrFare(stops) : szMetroFare(stops);

        routes.push({
          id: 'transit_direct',
          type: originSystem === 'hk' ? 'mtr' : 'metro',
          label: originSystem === 'hk' ? 'MTR' : 'Metro',
          totalMin,
          transitMin,
          walkMinO,
          walkMinD,
          fare,
          stops,
          segments: segs,
          pills: ['WALK', '›', originSystem === 'hk' ? 'MTR' : 'METRO', '›', 'WALK'],
          tags: [],
          nearO, nearD,
        });
      }
    }
  }

  // ── CROSS-BORDER TRANSIT ──
  if ((modeFilter === 'all' || modeFilter === 'mtr') && isCross) {
    if (state.hsrModeEnabled) {
      const hsrRoutes = await buildHsrCommuteRoutes(originCoords, destCoords, originSystem, destSystem);
      if (hsrRoutes.length) routes.push(...hsrRoutes);
    }

    for (const [crossId, cross] of Object.entries(CROSSINGS)) {
      if (cross.ferryOnly) continue; // skip ferry for transit routing

      const hkStnCoords = STATIONS[cross.hkStation]?.coords;
      const szStnCoords = STATIONS[cross.szStation]?.coords;
      if (!hkStnCoords || !szStnCoords) continue;

      // Identify which side is origin/dest
      const hkIsOrigin = originSystem === 'hk';
      const hkOriginCoords = hkIsOrigin ? originCoords : destCoords;
      const szDestCoords   = hkIsOrigin ? destCoords   : originCoords;
      const hkNear = nearestStation(hkOriginCoords, 'hk');
      const szNear = nearestStation(szDestCoords, 'sz');

      if (
        !hkNear.id || !szNear.id
        || hkNear.dist > MAX_CROSS_BORDER_WALK_KM
        || szNear.dist > MAX_CROSS_BORDER_WALK_KM
      ) continue;

      const hkPath = dijkstra(HK_GRAPH, hkNear.id, cross.hkStation, {
        lineUsePenalty: buildLineUsePenalty(hkNear.id, cross.hkStation, 'hk'),
      });
      const szPath = dijkstra(SZ_GRAPH, cross.szStation, szNear.id);

      if (!hkPath || !szPath) continue;

      const hkSegs   = pathToSegments(hkPath.path);
      const szSegs   = pathToSegments(szPath.path);
      const allSegs  = hkIsOrigin ? [...hkSegs, ...szSegs] : [...szSegs, ...hkSegs];

      const hkStops  = hkPath.path.length - 1;
      const szStops  = szPath.path.length - 1;

      const transitHkMin = hkPath.costMin;
      const transitSzMin = szPath.costMin;
      const crossMin     = cross.walkMin;

      const walkMinO = walkMinutes(hkIsOrigin ? hkNear.dist : szNear.dist);
      const walkMinD = walkMinutes(hkIsOrigin ? szNear.dist : hkNear.dist);
      const totalMin = transitHkMin + transitSzMin + crossMin + walkMinO + walkMinD;

      const hkFare = hkMtrFare(hkStops);
      const szFare = szMetroFare(szStops);
      const fare = hkFare + szFare + 2; // +HK$2 crossing estimate

      routes.push({
        id: `cross_${crossId}`,
        type: 'cross',
        label: 'MTR+Metro',
        totalMin,
        transitHkMin,
        transitSzMin,
        crossMin,
        walkMinO,
        walkMinD,
        fare,
        stops: hkStops + szStops,
        segments: allSegs,
        pills: ['WALK', '›', 'MTR', '›', 'CROSS', '›', 'METRO', '›', 'WALK'],
        tags: [],
        crossingName: cross.name,
        crossingId: crossId,
        crossDesc: cross.desc,
        hkNear: hkIsOrigin ? hkNear : szNear,
        szNear: hkIsOrigin ? szNear : hkNear,
      });
    }
  }

  // ── TAXI ──
  if (modeFilter === 'all' || modeFilter === 'taxi') {
    const osrm = await osrmRoute(originCoords, destCoords, 'driving');
    const drivingMin = osrm.sec / 60;
    const sys2 = isCross ? 'cross' : originSystem;
    const fare = taxiFare(osrm.km, sys2);
    routes.push({
      id: 'taxi',
      type: 'taxi',
      label: 'Taxi',
      totalMin: drivingMin + 2,
      drivingMin,
      walkMinO: 1,
      walkMinD: 1,
      fare,
      km: osrm.km,
      segments: [],
      osrmCoords: osrm.coords,
      osrmOk: osrm.ok,
      pills: isCross ? ['WALK','›','TAXI','›','CROSS','›','TAXI','›','WALK'] : ['TAXI'],
      tags: [],
    });
  }

  // ── BUS ──
  if (modeFilter === 'all' || modeFilter === 'bus') {
    const osrmB = await osrmRoute(originCoords, destCoords, 'driving');
    const busDriveKm  = osrmB.km;
    const busDriveMin = (osrmB.sec / 60) * 1.3 + 6; // buses slower + wait time
    const sys2 = isCross ? 'cross' : originSystem;
    let specificBusRoutes = [];

    if (!isCross) {
      try {
        specificBusRoutes = await buildBusRoutesForTrip(originCoords, destCoords, originSystem);
        if (specificBusRoutes.length > 0) routes.push(...specificBusRoutes);
      } catch(e) {
        console.warn('Bus route generation failed:', e);
      }
    } else {
      try {
        specificBusRoutes = await buildCrossBorderCoachRoutes(originCoords, destCoords, originSystem, destSystem);
        if (specificBusRoutes.length > 0) routes.push(...specificBusRoutes);
      } catch(e) {
        console.warn('Cross-border coach generation failed:', e);
      }
    }

    // Fallback: generic bus card when no specific routes found (or cross-border)
    if (!specificBusRoutes.length) {
      const fare = busFare(busDriveKm, sys2);
      const routeHints = !isCross && originSystem === 'hk'
        ? await buildBusRouteHintsForTrip(originCoords, destCoords, originSystem).catch(() => [])
        : [];
      const hintedRoutes = !isCross && routeHints.length
        ? buildBusHintFallbackRoutes(routeHints, osrmB, originSystem, isCross)
        : [];
      if (hintedRoutes.length) {
        routes.push(...hintedRoutes);
      } else {
        routes.push({
          id: 'bus',
          type: 'bus',
          label: 'Bus',
          displayLabel: 'Bus',
          totalMin: busDriveMin + 8,
          drivingMin: busDriveMin,
          walkMinO: 4,
          walkMinD: 4,
          fare,
          km: busDriveKm,
          segments: [],
          osrmCoords: osrmB.coords,
          osrmOk: osrmB.ok,
          pills: ['WALK', '›', 'BUS', '›', 'WALK'],
          tags: [],
          routeHints: [],
        });
      }
    }
  }

  const filteredRoutes = pruneCrossBorderDetours(routes, originCoords, destCoords, originSystem, destSystem);
  applyRouteTagsAndSort(filteredRoutes);

  return filteredRoutes;
}

function routeModeFootprint(route) {
  const modes = new Set();
  if (route.type === 'taxi') modes.add('taxi');
  if (route.type === 'bus') modes.add('bus');
  for (const segment of (route.segments || [])) {
    if (segment.mode === 'bus') modes.add('bus');
    else modes.add('rail');
  }
  return modes;
}

function applyCustomizationRules(routes, customization) {
  let filtered = Array.isArray(routes) ? [...routes] : [];
  if (customization?.avoidTaxi) {
    filtered = filtered.filter(route => route.type !== 'taxi');
  }
  applyRouteTagsAndSort(filtered);
  return filtered;
}

function topLegCandidates(routes, limit = 2) {
  return (routes || [])
    .filter(route => !route.hiddenBySchedule)
    .slice(0, limit);
}

function routeCoordsForCombination(route, originCoords, destCoords) {
  const coords = routePathCoords(route);
  if (coords.length > 1) return coords;
  const railCoords = [];
  for (const segment of (route.segments || [])) {
    if (segment.mode === 'bus') continue;
    for (const stationId of (segment.stationIds || [])) {
      const coords = STATIONS[stationId]?.coords;
      if (coords) railCoords.push(coords);
    }
  }
  if (railCoords.length > 1) return dedupeCoords(railCoords);
  return dedupeCoords([originCoords, destCoords]);
}

function combineLegPills(legs) {
  const combined = [];
  legs.forEach((route, routeIndex) => {
    const pills = Array.isArray(route.pills) ? route.pills : [];
    pills.forEach((pill, pillIndex) => {
      if (!combined.length || !(pill === 'WALK' && combined[combined.length - 1] === 'WALK') && !(pill === '›' && combined[combined.length - 1] === '›')) {
        combined.push(pill);
      } else if (pill !== 'WALK' && pill !== '›') {
        combined.push(pill);
      }
      if (pillIndex === pills.length - 1 && routeIndex < legs.length - 1 && combined[combined.length - 1] !== '›') {
        combined.push('›');
      }
    });
  });
  return combined.filter((pill, index) => !(pill === '›' && combined[index - 1] === '›'));
}

function buildCustomCombinedRoute(legs, waypointNames, waypointCoords) {
  const idSuffix = legs.map(route => route.id).join('__');
  const allSegments = legs.flatMap(route => route.segments || []);
  const modes = new Set(legs.flatMap(route => [...routeModeFootprint(route)]));
  const inferredType = modes.size === 1
    ? [...modes][0] === 'rail'
      ? (legs.every(route => route.type === 'metro') ? 'metro' : 'mtr')
      : [...modes][0]
    : 'custom';
  const fullPathCoords = modes.size === 1 && modes.has('rail')
    ? []
    : dedupeCoords(legs.flatMap((route, index) => routeCoordsForCombination(route, waypointCoords[index], waypointCoords[index + 1])));
  return {
    id: `custom_${idSuffix}`,
    type: inferredType,
    label: inferredType === 'custom' ? 'Custom' : (legs[0]?.label || 'Custom'),
    displayLabel: `Custom via ${waypointNames.join(' / ')}`,
    totalMin: legs.reduce((sum, route) => sum + Number(route.totalMin || 0), 0),
    fare: legs.reduce((sum, route) => sum + Number(route.fare || 0), 0),
    walkMinO: Number(legs[0]?.walkMinO || 0),
    walkMinD: Number(legs[legs.length - 1]?.walkMinD || 0),
    transferWalkMin: legs.slice(1).reduce((sum, route) => sum + Number(route.walkMinO || 0), 0),
    km: legs.reduce((sum, route) => sum + Number(route.km || 0), 0),
    segments: allSegments,
    pills: combineLegPills(legs),
    tags: [],
    fullPathCoords,
    osrmOk: legs.every(route => route.osrmOk !== false),
    customViaNames: waypointNames,
    customLegCount: legs.length,
    customLegs: legs,
    busColor: legs.find(route => route.busColor)?.busColor || '#5eb6e4',
  };
}

async function generateCustomizedWaypointRoutes(originCoords, destCoords, originSystem, destSystem, modeFilter, customization) {
  const waypointIds = customization?.viaStationIds || [];
  const points = [
    { name: state.origin?.name || 'Origin', coords: originCoords, system: originSystem },
    ...waypointIds.map(id => ({ name: STATIONS[id].name, coords: STATIONS[id].coords, system: STATIONS[id].system, id })),
    { name: state.dest?.name || 'Destination', coords: destCoords, system: destSystem },
  ];

  const perLegCandidates = [];
  for (let i = 0; i < points.length - 1; i += 1) {
    const start = points[i];
    const end = points[i + 1];
    let legRoutes = await generateBaseRoutes(start.coords, end.coords, start.system, end.system, modeFilter);
    legRoutes = applyCustomizationRules(legRoutes, customization);
    const candidates = topLegCandidates(legRoutes, points.length > 3 ? 1 : 2);
    if (!candidates.length) return [];
    perLegCandidates.push(candidates);
  }

  const combos = [];
  const walk = (index, stack) => {
    if (combos.length >= 8) return;
    if (index >= perLegCandidates.length) {
      combos.push([...stack]);
      return;
    }
    for (const candidate of perLegCandidates[index]) {
      stack.push(candidate);
      walk(index + 1, stack);
      stack.pop();
      if (combos.length >= 8) return;
    }
  };
  walk(0, []);

  const viaNames = waypointIds.map(id => STATIONS[id]?.name).filter(Boolean);
  const waypointCoords = points.map(point => point.coords);
  const combinedRoutes = combos.map(legs => buildCustomCombinedRoute(legs, viaNames, waypointCoords));
  applyRouteTagsAndSort(combinedRoutes);
  return combinedRoutes;
}

async function generateRoutes(originCoords, destCoords, originSystem, destSystem, modeFilter, customization = state.customization) {
  const normalizedCustomization = cloneCustomizationState();
  normalizedCustomization.avoidTaxi = !!customization?.avoidTaxi;
  normalizedCustomization.viaStationIds = [...new Set((customization?.viaStationIds || []).filter(id => STATIONS[id]))];

  const routes = normalizedCustomization.viaStationIds.length
    ? await generateCustomizedWaypointRoutes(originCoords, destCoords, originSystem, destSystem, modeFilter, normalizedCustomization)
    : await generateBaseRoutes(originCoords, destCoords, originSystem, destSystem, modeFilter);

  return applyCustomizationRules(routes, normalizedCustomization);
}

// ═══════════════════════════════════════════════════════
//  MAP SETUP
// ═══════════════════════════════════════════════════════
const map = L.map('map', {
  center: [22.37, 114.05],
  zoom: 11,
  zoomControl: true,
  attributionControl: true,
});
map.zoomControl.setPosition('bottomright');

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://carto.com/">CARTO</a> &copy; OSM contributors',
  subdomains: 'abcd',
  maxZoom: 20,
}).addTo(map);

// Layer groups
const baseLineLayer  = L.layerGroup().addTo(map);
const routeLayer     = L.layerGroup().addTo(map);
const markerLayer    = L.layerGroup().addTo(map);

// Draw faint base network
function refreshBaseNetwork() {
  baseLineLayer.clearLayers();
  for (const line of LINES) {
    const pts = line.stations.map(id => STATIONS[id]?.coords).filter(Boolean);
    if (pts.length < 2) continue;
    L.polyline(pts, { color: line.color, weight: 1.5, opacity: 0.18 }).addTo(baseLineLayer);
  }
  // Station dots
  for (const [id, st] of Object.entries(STATIONS)) {
    const col = st.system === 'hk' ? '#5eb6e4' : '#00a651';
    L.circleMarker(st.coords, {
      radius: st.border ? 4 : 2.5,
      fillColor: col,
      color: '#0a0a0b',
      weight: 1,
      fillOpacity: st.border ? 0.85 : 0.55,
      opacity: 1,
    })
    .addTo(baseLineLayer)
    .bindTooltip(st.name, { permanent:false, direction:'top', offset:[0,-4] });
  }
}

refreshBaseNetwork();
ensureTransitData().then(refreshBaseNetwork);

// ── Map drawing helpers ──
function clearRouteLayers() {
  routeLayer.clearLayers();
  markerLayer.clearLayers();
}

function makePinIcon(color) {
  return L.divIcon({
    className: '',
    html: `<div style="
      width:12px;height:12px;border-radius:50%;
      background:${color};border:2px solid #0a0a0b;
      box-shadow:0 0 10px ${color},0 0 4px ${color};
    "></div>`,
    iconSize: [12,12],
    iconAnchor: [6,6],
  });
}

function makeLabelIcon(text, cls) {
  return L.divIcon({
    className: '',
    html: `<div class="map-label ${cls}">${text}</div>`,
    iconSize: null,
    iconAnchor: [-10, 10],
  });
}

function makeRouteBadgeIcon(text, color) {
  return L.divIcon({
    className: '',
    html: `<div style="
      display:inline-flex;align-items:center;justify-content:center;
      min-width:32px;height:24px;padding:0 8px;
      background:${color};color:#fff;border:2px solid rgba(255,255,255,0.9);
      border-radius:3px;font:700 12px/1 var(--body);letter-spacing:.5px;
      box-shadow:0 3px 14px rgba(0,0,0,.65);white-space:nowrap;
    ">${text}</div>`,
    iconSize: null,
    iconAnchor: [16, 12],
  });
}

function drawRouteOnMap(route, originCoords, destCoords, originName, destName) {
  clearRouteLayers();

  // Pins
  L.marker(originCoords, { icon: makePinIcon('#f59e0b'), zIndexOffset:1000 }).addTo(markerLayer);
  L.marker(originCoords, { icon: makeLabelIcon(originName || 'Origin', 'origin'), zIndexOffset:1001 }).addTo(markerLayer);
  L.marker(destCoords,   { icon: makePinIcon('#10b981'), zIndexOffset:1000 }).addTo(markerLayer);
  L.marker(destCoords,   { icon: makeLabelIcon(destName || 'Destination', 'dest'), zIndexOffset:1001 }).addTo(markerLayer);

  // Road polyline (taxi / generic bus)
  const busSegments = (route.segments || []).filter(seg => seg.mode === 'bus');
  const roadCoords = routePathCoords(route);
  if ((route.type === 'taxi' || !busSegments.length) && roadCoords && roadCoords.length > 1) {
    const lineColor = route.type === 'taxi' ? '#f59e0b' : (route.busColor || '#a78bfa');
    // Glow
    L.polyline(roadCoords, { color: lineColor, weight: 10, opacity: 0.12 }).addTo(routeLayer);
    // Main
    const genericRoad = L.polyline(roadCoords, { color: lineColor, weight: 3.5, opacity: 0.85 }).addTo(routeLayer);
    if (route.type === 'bus') {
      genericRoad.bindTooltip(route.displayLabel || route.busRoute || 'Bus', { sticky: true, direction: 'top', offset:[0,-6] });
    }
    // Bus stop dots when real stop coords available
    if (route.busStopInfos && route.busStopInfos.length) {
      for (let i = 0; i < route.busStopInfos.length; i += 1) {
        const stop = route.busStopInfos[i];
        const pt = stop.coords;
        const isBoard = route.boardStop?.id && stop.id === route.boardStop.id;
        const isAlight = route.alightStop?.id && stop.id === route.alightStop.id;
        L.circleMarker(pt, {
          radius: isBoard || isAlight ? 4.6 : 3.2,
          fillColor: lineColor,
          color: '#0a0a0b',
          weight: isBoard || isAlight ? 1.4 : 1,
          fillOpacity: 0.85,
        }).addTo(routeLayer).bindTooltip(stop.name, { direction:'top', offset:[0,-4] });
      }
    } else if (route.busStopCoords) {
      for (const pt of route.busStopCoords) {
        L.circleMarker(pt, {
          radius: 3,
          fillColor: lineColor,
          color: '#0a0a0b',
          weight: 1,
          fillOpacity: 0.85,
        }).addTo(routeLayer);
      }
    }

    if (route.type === 'bus' && route.busRoute) {
      // Show route number badge every ~30% of the polyline for visibility
      const positions = [
        Math.floor(roadCoords.length * 0.25),
        Math.floor(roadCoords.length * 0.55),
      ].filter(i => roadCoords[i]);
      const labelText = busDirectionLabel({
        route: route.busRoute,
        routeSign: route.displayLabel,
        routeDestName: route.destName || route.alightStop?.name || '',
        alightStop: route.alightStop,
      });
      for (const i of positions) {
        L.marker(roadCoords[i], {
          icon: makeRouteBadgeIcon(labelText, lineColor),
          zIndexOffset: 900,
        }).addTo(markerLayer);
      }
    }
  }

  // Bus segments with route-specific colors and badges
  for (const segment of busSegments) {
    const segCoords = segment.pathCoords || segment.stopCoords || [];
    if (segCoords.length < 2) continue;
    L.polyline(segCoords, { color: segment.lineColor, weight: 10, opacity: 0.12 }).addTo(routeLayer);
    const segLine = L.polyline(segCoords, { color: segment.lineColor, weight: 3.8, opacity: 0.9 }).addTo(routeLayer);
    segLine.bindTooltip(segmentHoverText(segment), { sticky: true, direction: 'top', offset:[0,-6] });

    for (let i = 0; i < segment.stopInfos.length; i += 1) {
      const stop = segment.stopInfos[i];
      const isBoard = segment.boardStop?.id && stop.id === segment.boardStop.id;
      const isAlight = segment.alightStop?.id && stop.id === segment.alightStop.id;
      L.circleMarker(stop.coords, {
        radius: isBoard || isAlight ? 4.8 : 3.1,
        fillColor: segment.lineColor,
        color: '#0a0a0b',
        weight: isBoard || isAlight ? 1.5 : 1,
        fillOpacity: 0.88,
      }).addTo(routeLayer).bindTooltip(stop.name, { direction:'top', offset:[0,-4] });
    }

    const badgeText = busDirectionLabel(segment);
    const badgePoints = [
      Math.floor(segCoords.length * 0.28),
      Math.floor(segCoords.length * 0.68),
    ].filter(index => segCoords[index]);
    for (const index of badgePoints) {
      L.marker(segCoords[index], {
        icon: makeRouteBadgeIcon(badgeText, segment.lineColor),
        zIndexOffset: 900,
      }).addTo(markerLayer);
    }
  }

  if (busSegments.length && route.osrmCoords?.length > 1) {
    L.polyline(route.osrmCoords, {
      color: route.busColor || '#a78bfa',
      weight: 2,
      opacity: 0.22,
      dashArray: '5 6',
    }).addTo(routeLayer);
  }

  // Transit segments
  for (const seg of (route.segments || [])) {
    if (seg.mode === 'bus') continue;
    const pts = seg.stationIds.map(id => STATIONS[id]?.coords).filter(Boolean);
    if (pts.length < 2) continue;
    // Glow layer
    L.polyline(pts, { color: seg.lineColor, weight: 12, opacity: 0.14 }).addTo(routeLayer);
    // Main layer
    const railLine = L.polyline(pts, { color: seg.lineColor, weight: 4.5, opacity: 0.92 }).addTo(routeLayer);
    railLine.bindTooltip(segmentHoverText(seg), { sticky: true, direction: 'top', offset:[0,-6] });
    // Station dots on route
    for (const id of seg.stationIds) {
      const st = STATIONS[id];
      if (!st) continue;
      L.circleMarker(st.coords, {
        radius: 4,
        fillColor: seg.lineColor,
        color: '#0a0a0b',
        weight: 1.5,
        fillOpacity: 0.9,
      }).addTo(routeLayer).bindTooltip(st.name, { direction:'top', offset:[0,-4] });
    }
  }

  // Border crossing dashed link
  if (route.crossingId) {
    const cross = CROSSINGS[route.crossingId];
    if (cross) {
      const hkC = STATIONS[cross.hkStation]?.coords;
      const szC = STATIONS[cross.szStation]?.coords;
      if (hkC && szC) {
        L.polyline([hkC, szC], {
          color: '#ef4444', weight: 2, opacity: 0.7, dashArray: '6 5',
        }).addTo(routeLayer);
      }
    }
  }

  // Fit bounds
  const allPts = [originCoords, destCoords];
  for (const seg of (route.segments||[])) {
    if (seg.mode === 'bus') {
      const coords = seg.pathCoords || seg.stopCoords || [];
      const step = Math.max(1, Math.floor(coords.length / 18));
      for (let i = 0; i < coords.length; i += step) allPts.push(coords[i]);
      continue;
    }
    seg.stationIds.forEach(id => { if (STATIONS[id]) allPts.push(STATIONS[id].coords); });
  }
  const routeCoords = routePathCoords(route);
  if (routeCoords.length > 1) {
    // sample coords to avoid fitting on tiny segments
    const step = Math.max(1, Math.floor(routeCoords.length / 20));
    for (let i = 0; i < routeCoords.length; i += step) allPts.push(routeCoords[i]);
  }
  if (allPts.length > 1) {
    map.fitBounds(L.latLngBounds(allPts).pad(0.08), { animate: true, maxZoom: 14 });
  }
}

// ═══════════════════════════════════════════════════════
//  NOMINATIM SEARCH
// ═══════════════════════════════════════════════════════
const BBOX = { minLat:22.1, maxLat:22.7, minLon:113.7, maxLon:114.5 };
let _nominatimCache = Object.create(null);
let _overpassSearchCache = Object.create(null);

function inBbox(lat, lon) {
  return lat >= BBOX.minLat && lat <= BBOX.maxLat
      && lon >= BBOX.minLon && lon <= BBOX.maxLon;
}

function detectCity(displayName) {
  return /shenzhen|深圳|guangdong/i.test(displayName) ? 'sz' : 'hk';
}

function cleanNominatimName(result) {
  const a = result.address || {};
  return a.building || a.amenity || a.shop || a.leisure || a.tourism
      || [a.road, a.suburb || a.neighbourhood].filter(Boolean).join(', ')
      || result.name
      || result.display_name.split(',')[0].trim();
}

function isNoisyLocationResult(name, subName = '') {
  const text = `${name} ${subName}`.toLowerCase();
  return /wifi|wi-fi|hotspot|apid|registered wifi|other name|self-service library|access point/.test(text);
}

async function searchHongKongOfficialLocations(query) {
  const key = `hkmap:${query.toLowerCase().trim()}`;
  if (_nominatimCache[key]) return _nominatimCache[key];
  if (!window.proj4) return [];

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 7000);
    const resp = await fetch(`${HK_LOCATION_SEARCH_URL}?q=${encodeURIComponent(query)}`, {
      headers: { 'Accept': 'application/json' },
      signal: controller.signal,
    });
    clearTimeout(timer);
    const data = await resp.json();
    const seen = new Set();
    const results = (Array.isArray(data) ? data : [])
      .map(item => {
        const coords = wgs84FromHK80(Number(item.x), Number(item.y));
        if (!coords || !inBbox(coords[0], coords[1])) return null;
        const name = item.nameEN || item.nameZH || item.addressEN || item.addressZH || query;
        const subParts = [item.addressEN || item.addressZH, item.districtEN || item.districtZH].filter(Boolean);
        if (isNoisyLocationResult(name, subParts.join(' '))) return null;
        const dedupeKey = `${normalizeSearchText(name)}:${coords[0].toFixed(4)}:${coords[1].toFixed(4)}`;
        if (seen.has(dedupeKey)) return null;
        seen.add(dedupeKey);
        return {
          id: `landsd_${item.x}_${item.y}_${slugifyId(name)}`,
          name,
          subName: subParts.join(' · '),
          coords,
          system: 'hk',
          type: 'place',
          source: 'landsd',
          score: scoreSearchTerms(normalizeSearchText(query), [
            item.nameEN, item.nameZH, item.addressEN, item.addressZH, item.districtEN, item.districtZH,
          ].filter(Boolean)),
        };
      })
      .filter(Boolean)
      .slice(0, 8);
    _nominatimCache[key] = results;
    return results;
  } catch (error) {
    return [];
  }
}

async function searchNominatim(query) {
  const key = query.toLowerCase().trim();
  if (_nominatimCache[key]) return _nominatimCache[key];

  const normalized = normalizeSearchText(query);
  const hasCityHint = /(hong kong|hongkong|shenzhen|深圳|香港)/i.test(query);
  const variants = hasCityHint
    ? [query]
    : [query, `${query} Hong Kong`, `${query} Shenzhen`, `${query} 香港`, `${query} 深圳`];

  try {
    const payloads = await Promise.all(variants.map(async variant => {
      const q = encodeURIComponent(variant);
      const url = `https://nominatim.openstreetmap.org/search?q=${q}&format=json&limit=6&viewbox=113.75,22.0,114.50,22.70&bounded=1&accept-language=zh-HK,zh-CN,en&addressdetails=1&namedetails=1`;
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 7000);
      try {
        const resp = await fetch(url, {
          headers: { 'Accept-Language':'zh-HK,zh-CN,en', 'User-Agent':'HK-SZ-Route-Planner/2.1' },
          signal: controller.signal,
        });
        return await resp.json();
      } finally {
        clearTimeout(timer);
      }
    }));

    const seen = new Set();
    const results = payloads
      .flatMap(data => Array.isArray(data) ? data : [])
      .filter(r => inBbox(parseFloat(r.lat), parseFloat(r.lon)))
      .map(r => ({
        id:      `osm_${r.place_id}`,
        name:    cleanNominatimName(r),
        subName: r.display_name.split(',').slice(1,4).join(',').trim(),
        coords:  [parseFloat(r.lat), parseFloat(r.lon)],
        system:  detectCity(r.display_name),
        type:    'place',
        score:   scoreSearchTerms(normalized, [
          cleanNominatimName(r),
          r.display_name,
          r.name,
          r.namedetails?.name,
          r.namedetails?.['name:en'],
          r.namedetails?.['name:zh'],
        ].filter(Boolean)),
      }))
      .filter(item => {
        const dedupeKey = `${normalizeSearchText(item.name)}:${item.coords[0].toFixed(4)}:${item.coords[1].toFixed(4)}`;
        if (seen.has(dedupeKey)) return false;
        seen.add(dedupeKey);
        return !isNoisyLocationResult(item.name, item.subName);
      })
      .sort((a, b) => (b.score || 0) - (a.score || 0))
      .slice(0, 10);

    _nominatimCache[key] = results;
    return results;
  } catch(e) {
    return [];
  }
}

function scoreSearchTerms(query, terms) {
  let best = -1;
  for (const term of terms) {
    const normalized = normalizeSearchText(term);
    if (!normalized) continue;
    if (normalized === query) best = Math.max(best, 100);
    else if (normalized.startsWith(query)) best = Math.max(best, 88);
    else if (normalized.split(' ').some(token => token.startsWith(query))) best = Math.max(best, 74);
    else if (normalized.includes(query)) best = Math.max(best, 60);
  }
  return best;
}

function mergeSearchRows(existing, item, dedupeKey, maxCount = 12) {
  if (!item || !dedupeKey) return existing;
  if (!existing.map) existing.map = new Map();
  const prev = existing.map.get(dedupeKey);
  if (!prev || (item.score || 0) > (prev.score || 0)) {
    existing.map.set(dedupeKey, item);
  }
  return existing;
}

async function searchOfficialBusStops(query) {
  const normalized = normalizeSearchText(query);
  if (!normalized || normalized.length < 2) return [];
  const key = `official-bus:${normalized}`;
  if (_officialBusSearchCache[key]) return _officialBusSearchCache[key];

  try {
    const catalog = await loadOfficialBusCatalog();
    const bag = { map: new Map() };
    for (const pattern of (catalog.patterns || [])) {
      for (const stop of (pattern.stops || [])) {
        const score = scoreSearchTerms(normalized, [
          stop.name,
          stop.nameZh,
          pattern.route ? `${pattern.route} ${stop.name}` : '',
        ].filter(Boolean));
        if (score < 0) continue;
        const item = {
          id: `busstop_${stop.id}`,
          name: stop.name,
          subName: `${pattern.agency} · ${pattern.route ? 'Route ' + pattern.route : 'Bus stop'}`,
          coords: stop.coords,
          system: 'hk',
          type: 'bus_stop',
          score: score + (pattern.route ? 4 : 0),
        };
        const dedupeKey = `${stop.id}:${normalizeSearchText(stop.name)}`;
        mergeSearchRows(bag, item, dedupeKey, 18);
      }
    }
    const results = [...bag.map.values()]
      .sort((a, b) => (b.score || 0) - (a.score || 0) || a.name.localeCompare(b.name))
      .slice(0, 8);
    _officialBusSearchCache[key] = results;
    return results;
  } catch (error) {
    return [];
  }
}

function searchLocalStations(query) {
  const normalized = normalizeSearchText(query);
  if (!normalized) return [];
  const results = [];
  for (const [id, st] of Object.entries(STATIONS)) {
    const score = scoreSearchTerms(normalized, stationSearchTerms(st));
    if (score < 0) continue;
    results.push({
      id,
      name: st.name,
      subName: `${st.system === 'hk' ? 'Hong Kong' : 'Shenzhen'} rail station${transitDataVersion !== 'static' ? ' · live network' : ''}`,
      coords: st.coords,
      system: st.system,
      type: 'station',
      score,
    });
  }
  results.sort((a,b) => b.score - a.score || a.name.localeCompare(b.name));
  return results.slice(0, 8);
}

function escapeOverpassRegex(value) {
  return String(value || '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function detectTransitItemType(tags) {
  if (tags?.amenity === 'ferry_terminal') return 'terminal';
  if (tags?.amenity === 'bus_station') return 'terminal';
  if (tags?.amenity === 'airport') return 'terminal';
  if (tags?.highway === 'bus_stop') return 'bus_stop';
  if (tags?.railway || tags?.station) return 'station';
  if (tags?.public_transport) return 'station';
  return 'place';
}

async function searchOverpassPlaces(query) {
  const normalized = normalizeSearchText(query);
  if (!normalized || normalized.length < 2) return [];
  if (_overpassSearchCache[normalized]) return _overpassSearchCache[normalized];

  const rx = escapeOverpassRegex(query.trim());
  const B = `${BBOX.minLat},${BBOX.minLon},${BBOX.maxLat},${BBOX.maxLon}`;
  const q = `[out:json][timeout:22];
(
  node["highway"="bus_stop"]["name"~"${rx}",i](${B});
  node["highway"="bus_stop"]["name:en"~"${rx}",i](${B});
  node["highway"="bus_stop"]["name:zh"~"${rx}",i](${B});
  node["public_transport"~"station|platform|stop_position"]["name"~"${rx}",i](${B});
  node["public_transport"~"station|platform|stop_position"]["name:en"~"${rx}",i](${B});
  node["public_transport"~"station|platform|stop_position"]["name:zh"~"${rx}",i](${B});
  nwr["amenity"~"bus_station|ferry_terminal|airport"]["name"~"${rx}",i](${B});
  nwr["amenity"~"bus_station|ferry_terminal|airport"]["name:en"~"${rx}",i](${B});
  nwr["amenity"~"bus_station|ferry_terminal|airport"]["name:zh"~"${rx}",i](${B});
  nwr["amenity"~"hospital|university|school|mall|marketplace|cinema"]["name"~"${rx}",i](${B});
  nwr["amenity"~"hospital|university|school|mall|marketplace|cinema"]["name:zh"~"${rx}",i](${B});
  nwr["tourism"~"attraction|museum|hotel"]["name"~"${rx}",i](${B});
  nwr["tourism"~"attraction|museum|hotel"]["name:zh"~"${rx}",i](${B});
  nwr["shop"~"mall|supermarket|department_store"]["name"~"${rx}",i](${B});
  nwr["shop"~"mall|supermarket|department_store"]["name:zh"~"${rx}",i](${B});
  nwr["place"~"suburb|neighbourhood|village|quarter"]["name"~"${rx}",i](${B});
  nwr["place"~"suburb|neighbourhood|village|quarter"]["name:zh"~"${rx}",i](${B});
  nwr["name"~"${rx}",i](${B});
  nwr["name:zh"~"${rx}",i](${B});
);
out center tags 40;`;

  try {
    const data = await fetchOverpassJson(q);
    const seen = new Set();
    const results = [];
    for (const element of (data.elements || [])) {
      const lat = element.lat ?? element.center?.lat;
      const lon = element.lon ?? element.center?.lon;
      if (!Number.isFinite(lat) || !Number.isFinite(lon) || !inBbox(lat, lon)) continue;
      const tags = element.tags || {};
      const name = tags['name:en'] || tags.name || tags['official_name:en'] || tags['official_name'] || tags['name:zh'];
      if (!name) continue;
      const key = `${normalizeSearchText(name)}:${lat.toFixed(4)}:${lon.toFixed(4)}`;
      if (seen.has(key)) continue;
      seen.add(key);
      const type = detectTransitItemType(tags);
      if (isNoisyLocationResult(name, tags.operator || tags.network || '')) continue;
      // Build a readable subtitle
      const subParts = [
        tags['name:zh'] && tags['name:zh'] !== name ? tags['name:zh'] : null,
        tags.network || tags.operator || null,
        tags.amenity || tags.tourism || tags.shop || tags.place || null,
      ].filter(Boolean);
      results.push({
        id: `ovp_${element.type}_${element.id}`,
        name,
        subName: subParts.slice(0, 2).join(' · ') || '',
        coords: [lat, lon],
        system: pickTransitSystem(tags, [lat, lon]),
        type,
        score: scoreSearchTerms(normalized, [
          name,
          tags.name,
          tags['name:en'],
          tags['name:zh'],
          tags['official_name'],
          tags['official_name:en'],
        ].filter(Boolean)),
      });
    }
    _overpassSearchCache[normalized] = results.slice(0, 8);
    return _overpassSearchCache[normalized];
  } catch (error) {
    return [];
  }
}

// ═══════════════════════════════════════════════════════
//  APP STATE
// ═══════════════════════════════════════════════════════
const state = {
  origin:      null, // {name, coords, system}
  dest:        null,
  modeFilter:  'all',
  routes:      [],
  activeRoute: null,
  activeFilter:'all',
  activeSideSheet: null,
  hsrModeEnabled: false,
  customization: {
    avoidTaxi: false,
    viaStationIds: [],
  },
  routeFolders: [],
  pendingRouteToSaveId: null,
};

const ROUTE_FOLDER_STORAGE_KEY = 'route_planner_saved_route_folders_v1';

function closeAllAutocompleteDropdowns() {
  document.querySelectorAll('.ac-dropdown.visible').forEach(el => el.classList.remove('visible'));
}

function cloneCustomizationState() {
  return {
    avoidTaxi: !!state.customization?.avoidTaxi,
    viaStationIds: [...new Set((state.customization?.viaStationIds || []).filter(id => STATIONS[id]))],
  };
}

function loadRouteFolders() {
  try {
    const raw = localStorage.getItem(ROUTE_FOLDER_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed)
      ? parsed.map(folder => ({
          id: String(folder.id || `folder_${Date.now()}`),
          name: String(folder.name || 'Untitled Folder'),
          items: Array.isArray(folder.items) ? folder.items : [],
        }))
      : [];
  } catch (error) {
    return [];
  }
}

function persistRouteFolders() {
  try {
    localStorage.setItem(ROUTE_FOLDER_STORAGE_KEY, JSON.stringify(state.routeFolders));
  } catch (error) {}
}

function syncHsrModeButton() {
  const button = document.getElementById('hsr-mode-btn');
  if (!button) return;
  button.classList.toggle('active', !!state.hsrModeEnabled);
  button.setAttribute('aria-pressed', state.hsrModeEnabled ? 'true' : 'false');
  button.textContent = state.hsrModeEnabled ? 'HSR ON' : 'HSR';
}

function routeFoldersSummaryText() {
  if (state.pendingRouteToSaveId) return 'Choose a folder for the selected route';
  if (!state.routeFolders.length) return 'No folders yet';
  const totalRoutes = state.routeFolders.reduce((sum, folder) => sum + (folder.items?.length || 0), 0);
  return `${state.routeFolders.length} folder${state.routeFolders.length !== 1 ? 's' : ''} · ${totalRoutes} saved route${totalRoutes !== 1 ? 's' : ''}`;
}

function currentRouteById(routeId) {
  return state.routes.find(route => route.id === routeId) || null;
}

function createFolderId() {
  return `folder_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

function sanitizeFolderName(name) {
  return String(name || '').replace(/\s+/g, ' ').trim();
}

function routeSnapshot(route) {
  if (!route) return null;
  return {
    id: `saved_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    savedAt: new Date().toISOString(),
    routeId: route.id,
    title: route.displayLabel || route.label || 'Route',
    type: route.type,
    originName: state.origin?.name || 'Origin',
    destName: state.dest?.name || 'Destination',
    totalMin: effectiveRouteMinutes(route),
    fare: route.fare,
    summary: routeRideSummary(route),
    pills: Array.isArray(route.pills) ? [...route.pills] : [],
    originCoords: Array.isArray(state.origin?.coords) ? [...state.origin.coords] : null,
    destCoords: Array.isArray(state.dest?.coords) ? [...state.dest.coords] : null,
    routeData: JSON.parse(JSON.stringify(route)),
  };
}

function saveRouteIntoFolder(folderId, routeId) {
  const folder = state.routeFolders.find(item => item.id === folderId);
  const route = currentRouteById(routeId);
  if (!folder || !route) return false;

  const snapshot = routeSnapshot(route);
  if (!snapshot) return false;

  folder.items = [snapshot, ...(folder.items || [])];
  persistRouteFolders();
  state.pendingRouteToSaveId = null;
  renderCustomizePanel();
  return true;
}

function createFolder(name, routeIdToSave = null) {
  const cleanName = sanitizeFolderName(name);
  if (!cleanName) return false;

  const existing = state.routeFolders.find(folder => folder.name.toLowerCase() === cleanName.toLowerCase());
  const targetFolder = existing || {
    id: createFolderId(),
    name: cleanName,
    items: [],
  };

  if (!existing) state.routeFolders = [targetFolder, ...state.routeFolders];
  if (routeIdToSave) saveRouteIntoFolder(targetFolder.id, routeIdToSave);
  persistRouteFolders();
  renderCustomizePanel();
  return true;
}

function removeFolder(folderId) {
  state.routeFolders = state.routeFolders.filter(folder => folder.id !== folderId);
  persistRouteFolders();
  renderCustomizePanel();
}

function removeSavedRoute(folderId, itemId) {
  const folder = state.routeFolders.find(item => item.id === folderId);
  if (!folder) return;
  folder.items = (folder.items || []).filter(item => item.id !== itemId);
  persistRouteFolders();
  renderCustomizePanel();
}

function findSavedRouteItem(folderId, itemId) {
  const folder = state.routeFolders.find(item => item.id === folderId);
  if (!folder) return null;
  return (folder.items || []).find(item => item.id === itemId) || null;
}

function previewSavedRoute(folderId, itemId) {
  const item = findSavedRouteItem(folderId, itemId);
  if (!item?.routeData || !Array.isArray(item.originCoords) || !Array.isArray(item.destCoords)) return false;

  drawRouteOnMap(
    item.routeData,
    item.originCoords,
    item.destCoords,
    item.originName,
    item.destName
  );
  return true;
}

function renderCustomizePanel() {
  const status = document.getElementById('customize-status-text');
  const list = document.getElementById('folder-list');
  const pendingBox = document.getElementById('folder-pending-box');
  if (!status || !list || !pendingBox) return;

  status.textContent = routeFoldersSummaryText();

  const pendingRoute = state.pendingRouteToSaveId ? currentRouteById(state.pendingRouteToSaveId) : null;
  if (pendingRoute) {
    pendingBox.classList.remove('hidden');
    pendingBox.innerHTML = `Ready to save <strong>${escapeHtml(pendingRoute.displayLabel || pendingRoute.label || 'Route')}</strong><br>${escapeHtml(state.origin?.name || 'Origin')} → ${escapeHtml(state.dest?.name || 'Destination')} · ${fmtMin(effectiveRouteMinutes(pendingRoute))} · ${fmtHKD(pendingRoute.fare)}`;
  } else {
    pendingBox.classList.add('hidden');
    pendingBox.innerHTML = '';
  }

  if (!state.routeFolders.length) {
    list.innerHTML = `<div class="folder-empty-copy">No folders yet. Create one above, then click <code>SAVE</code> on a route card.</div>`;
    return;
  }

  list.innerHTML = state.routeFolders.map(folder => {
    const items = Array.isArray(folder.items) ? folder.items : [];
    const saveBtn = pendingRoute
      ? `<button class="folder-action-btn save" type="button" data-save-folder="${folder.id}">Save Here</button>`
      : '';
    const entries = items.length
      ? `<div class="folder-route-list">
          ${items.map(item => `
            <div class="folder-route-entry">
              <div class="folder-item-head">
                <div class="folder-item-main">
                  <div class="folder-route-title">${escapeHtml(item.title || 'Route')}</div>
                  <div class="folder-route-meta">${escapeHtml(item.originName || 'Origin')} → ${escapeHtml(item.destName || 'Destination')} · ${fmtMin(item.totalMin || 0)} · ${fmtHKD(item.fare || 0)}</div>
                </div>
                <div class="folder-item-actions">
                  <button class="folder-action-btn replay" type="button" data-preview-route="${folder.id}:${item.id}" aria-label="Show saved route on map">■</button>
                  <button class="folder-action-btn ghost" type="button" data-remove-route="${folder.id}:${item.id}" aria-label="Remove saved route">✕</button>
                </div>
              </div>
              <div class="folder-route-summary">${escapeHtml(item.summary || 'No line summary')}</div>
            </div>
          `).join('')}
        </div>`
      : `<div class="folder-route-list"><div class="folder-empty-copy">No saved routes in this folder yet.</div></div>`;

    return `<div class="folder-item">
      <div class="folder-item-head">
        <div class="folder-item-main">
          <div class="folder-item-name">${escapeHtml(folder.name)}</div>
          <div class="folder-item-meta">${items.length} saved route${items.length !== 1 ? 's' : ''}</div>
        </div>
        <div class="folder-item-actions">
          ${saveBtn}
          <button class="folder-action-btn ghost" type="button" data-remove-folder="${folder.id}" aria-label="Delete folder">✕</button>
        </div>
      </div>
      ${entries}
    </div>`;
  }).join('');

  list.querySelectorAll('[data-save-folder]').forEach(button => {
    button.addEventListener('click', () => {
      saveRouteIntoFolder(button.dataset.saveFolder, state.pendingRouteToSaveId);
    });
  });
  list.querySelectorAll('[data-remove-folder]').forEach(button => {
    button.addEventListener('click', () => {
      removeFolder(button.dataset.removeFolder);
    });
  });
  list.querySelectorAll('[data-preview-route]').forEach(button => {
    button.addEventListener('click', () => {
      const [folderId, itemId] = button.dataset.previewRoute.split(':');
      previewSavedRoute(folderId, itemId);
    });
  });
  list.querySelectorAll('[data-remove-route]').forEach(button => {
    button.addEventListener('click', () => {
      const [folderId, itemId] = button.dataset.removeRoute.split(':');
      removeSavedRoute(folderId, itemId);
    });
  });
}

function bindCustomizePanel() {
  const folderNameInput = document.getElementById('folder-name-input');
  const createButton = document.getElementById('folder-create-btn');
  if (!folderNameInput || !createButton || createButton.dataset.bound === '1') return;
  createButton.dataset.bound = '1';

  const submitFolder = () => {
    const value = folderNameInput.value;
    const routeIdToSave = state.pendingRouteToSaveId;
    if (!createFolder(value, routeIdToSave)) return;
    folderNameInput.value = '';
  };

  createButton.addEventListener('click', submitFolder);
  folderNameInput.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      submitFolder();
    }
  });

  state.routeFolders = loadRouteFolders();
  renderCustomizePanel();
}

// ═══════════════════════════════════════════════════════
//  AUTOCOMPLETE COMPONENT
// ═══════════════════════════════════════════════════════
function createAutocomplete(inputEl, dropdownEl, clearEl, field) {
  let localResults = [];
  let apiResults   = [];
  let isLoading    = false;
  let apiTimer     = null;

  function getAll() {
    const combined = [];
    const seen = new Set();
    for (const r of localResults) {
      combined.push({ ...r });
      seen.add(`${normalizeSearchText(r.name)}:${r.coords[0].toFixed(3)},${r.coords[1].toFixed(3)}`);
    }
    for (const r of apiResults) {
      const k = `${normalizeSearchText(r.name)}:${r.coords[0].toFixed(3)},${r.coords[1].toFixed(3)}`;
      if (!seen.has(k)) { combined.push(r); seen.add(k); }
    }
    combined.sort((a, b) => (b.score || 0) - (a.score || 0));
    return combined.slice(0, 12);
  }

  function render() {
    const items = getAll();
    dropdownEl.innerHTML = '';

    if (isLoading) {
      dropdownEl.innerHTML += `<div class="ac-searching">
        <div class="spin" style="display:inline-block;width:10px;height:10px;border:1.5px solid #3f3f46;border-top-color:#f59e0b;border-radius:50%;animation:spin .7s linear infinite;"></div>
        Searching live HK · SZ transit + OSM…
      </div>`;
    }

    if (items.length === 0 && !isLoading) {
      dropdownEl.classList.remove('visible');
      return;
    }

    for (const item of items) {
      const iconMap = { station:'🚇', bus_stop:'🚌', terminal:'⛴', place:'📍' };
      const icon  = iconMap[item.type] || '📍';
      const badge = item.system === 'sz'
        ? '<span class="ac-badge sz">SZ</span>'
        : '<span class="ac-badge hk">HK</span>';
      const sub = item.subName
        ? `<div class="ac-sub">${item.subName}</div>`
        : '';
      const row = document.createElement('div');
      row.className = 'ac-item';
      row.dataset.id  = item.id;
      row.dataset.lat = item.coords[0];
      row.dataset.lon = item.coords[1];
      row.dataset.sys = item.system;
      row.dataset.name = item.name;
      row.innerHTML = `
        <span class="ac-icon">${icon}</span>
        <div class="ac-text">
          <div class="ac-name">${item.name}</div>${sub}
        </div>
        ${badge}`;
      row.addEventListener('mousedown', e => {
        e.preventDefault();
        selectItem(item);
      });
      dropdownEl.appendChild(row);
    }

    closeAllAutocompleteDropdowns();
    dropdownEl.classList.add('visible');
  }

  function selectItem(item) {
    state[field] = { name: item.name, coords: item.coords, system: item.system };
    inputEl.value = item.name;
    clearEl.classList.remove('hidden');
    closeAllAutocompleteDropdowns();
    updateSearchBtn();
  }

  function close() {
    dropdownEl.classList.remove('visible');
  }

  inputEl.addEventListener('input', () => {
    const q = inputEl.value.trim();
    clearEl.classList.toggle('hidden', !q);
    if (!q) { localResults = []; apiResults = []; isLoading = false; close(); return; }

    localResults = searchLocalStations(q);
    isLoading = true;
    render();

    clearTimeout(apiTimer);
    apiTimer = setTimeout(async () => {
      await ensureTransitData();
      localResults = searchLocalStations(q);
      const [officialHongKong, officialBusStops, transitResults, geocoderResults] = await Promise.all([
        searchHongKongOfficialLocations(q),
        searchOfficialBusStops(q),
        searchOverpassPlaces(q),
        searchNominatim(q),
      ]);
      apiResults = [...officialHongKong, ...officialBusStops, ...transitResults, ...geocoderResults];
      isLoading = false;
      render();
    }, 250);
  });

  inputEl.addEventListener('keydown', e => {
    if (e.key === 'Escape') { close(); inputEl.blur(); return; }

    if (e.key === 'Enter') {
      const active = dropdownEl.querySelector('.ac-item.kbd-active')
                  || dropdownEl.querySelector('.ac-item');
      if (active) {
        const item = { name: active.dataset.name, coords:[parseFloat(active.dataset.lat), parseFloat(active.dataset.lon)], system: active.dataset.sys };
        selectItem(item);
      } else {
        close();
        App.doSearch();
      }
      return;
    }

    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      const items = [...dropdownEl.querySelectorAll('.ac-item')];
      const cur = dropdownEl.querySelector('.ac-item.kbd-active');
      let idx = cur ? items.indexOf(cur) : -1;
      items.forEach(i => i.classList.remove('kbd-active'));
      if (e.key === 'ArrowDown') idx = Math.min(idx + 1, items.length - 1);
      else idx = Math.max(idx - 1, 0);
      if (items[idx]) items[idx].classList.add('kbd-active');
    }
  });

  inputEl.addEventListener('blur', () => {
    setTimeout(close, 180);
  });

  inputEl.addEventListener('focus', () => {
    closeAllAutocompleteDropdowns();
    if (inputEl.value.trim() && (localResults.length || apiResults.length || isLoading)) render();
  });

  clearEl.addEventListener('click', () => {
    inputEl.value = '';
    state[field] = null;
    localResults = []; apiResults = []; isLoading = false;
    clearEl.classList.add('hidden');
    close();
    updateSearchBtn();
  });
}

// Set up both inputs
createAutocomplete(
  document.getElementById('origin-input'),
  document.getElementById('origin-ac'),
  document.getElementById('origin-clear'),
  'origin'
);
createAutocomplete(
  document.getElementById('dest-input'),
  document.getElementById('dest-ac'),
  document.getElementById('dest-clear'),
  'dest'
);

document.addEventListener('mousedown', event => {
  if (!event.target.closest('.ac-wrap')) closeAllAutocompleteDropdowns();
});

// ─────────────────────────────────────────────
//  MODE CHIPS
// ─────────────────────────────────────────────
document.querySelectorAll('.opt-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.opt-chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    state.modeFilter = chip.dataset.mode;
  });
});

// ─────────────────────────────────────────────
//  SWAP BUTTON
// ─────────────────────────────────────────────
document.getElementById('swap-btn').addEventListener('click', () => {
  [state.origin, state.dest] = [state.dest, state.origin];
  const oi = document.getElementById('origin-input');
  const di = document.getElementById('dest-input');
  const oc = document.getElementById('origin-clear');
  const dc = document.getElementById('dest-clear');
  oi.value = state.origin?.name || '';
  di.value = state.dest?.name || '';
  oc.classList.toggle('hidden', !state.origin);
  dc.classList.toggle('hidden', !state.dest);
  updateSearchBtn();
});

// ─────────────────────────────────────────────
//  FILTER TABS
// ─────────────────────────────────────────────
document.querySelectorAll('.filter-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    state.activeFilter = tab.dataset.filter;
    renderRouteCards();
  });
});

// ─────────────────────────────────────────────
//  SEARCH BUTTON
// ─────────────────────────────────────────────
function updateSearchBtn() {
  document.getElementById('search-btn').disabled = !(state.origin && state.dest);
}
updateSearchBtn();
syncHsrModeButton();

document.getElementById('search-btn').addEventListener('click', () => App.doSearch());
document.getElementById('hsr-mode-btn')?.addEventListener('click', async () => {
  state.hsrModeEnabled = !state.hsrModeEnabled;
  syncHsrModeButton();
  if (state.origin && state.dest) {
    await App.doSearch();
  }
});

// ─────────────────────────────────────────────
//  DRAWER
// ─────────────────────────────────────────────
function openDrawer()  { document.getElementById('drawer').classList.add('open'); }
function closeDrawer() { document.getElementById('drawer').classList.remove('open'); }

function closeSideSheets() {
  document.querySelectorAll('.side-sheet.open').forEach(panel => {
    panel.classList.remove('open');
    panel.setAttribute('aria-hidden', 'true');
  });
  document.querySelectorAll('.edge-tool.active').forEach(btn => btn.classList.remove('active'));
  state.activeSideSheet = null;
  stopTramPanelRefresh();
}

function toggleSideSheet(panelId, buttonId) {
  const panel = document.getElementById(panelId);
  const button = document.getElementById(buttonId);
  if (!panel || !button) return;
  const alreadyOpen = panel.classList.contains('open');
  closeSideSheets();
  if (alreadyOpen) return;
  panel.classList.add('open');
  panel.setAttribute('aria-hidden', 'false');
  button.classList.add('active');
  state.activeSideSheet = panelId;
  if (panelId === 'tram-panel') {
    bindTramPanelScrollbar();
    requestAnimationFrame(syncTramPanelScrollbar);
    startTramPanelRefresh();
  } else if (panelId === 'slot-panel') {
    bindCustomizePanel();
    renderCustomizePanel();
  }
}

document.getElementById('drawer-close').addEventListener('click', closeDrawer);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeDrawer();
    closeSideSheets();
  }
});
document.getElementById('tram-tool-btn').addEventListener('click', () => toggleSideSheet('tram-panel', 'tram-tool-btn'));
document.getElementById('slot-tool-btn').addEventListener('click', () => toggleSideSheet('slot-panel', 'slot-tool-btn'));
document.getElementById('tram-panel-close').addEventListener('click', closeSideSheets);
document.getElementById('slot-panel-close').addEventListener('click', closeSideSheets);

function prewarmTramMap() {
  loadTramStopsCatalog().then(catalog => {
    renderTramMap(catalog, _tramLiveState);
    requestAnimationFrame(syncTramPanelScrollbar);
  }).catch(() => {});
}

prewarmTramMap();
bindCustomizePanel();

// ─────────────────────────────────────────────
//  ROUTE CARD RENDERING
// ─────────────────────────────────────────────
function filterRoutes() {
  const f = state.activeFilter;
  const visibleRoutes = state.routes.filter(route => !route.hiddenBySchedule);
  const hasMode = (route, mode) => routeModeFootprint(route).has(mode);
  if (f === 'all')      return visibleRoutes;
  if (f === 'cheapest') return visibleRoutes.filter(r => r.tags.includes('cheapest'));
  if (f === 'balanced') return visibleRoutes.filter(r => r.tags.includes('balanced'));
  if (f === 'fastest')  return visibleRoutes.filter(r => r.tags.includes('fastest'));
  if (f === 'mtr')      return visibleRoutes.filter(r => r.type === 'mtr' || r.type === 'metro' || r.type === 'cross' || r.type === 'hsr' || (r.type === 'custom' && hasMode(r, 'rail')));
  if (f === 'bus')      return visibleRoutes.filter(r => r.type === 'bus' || (r.type === 'custom' && hasMode(r, 'bus')));
  if (f === 'taxi')     return visibleRoutes.filter(r => r.type === 'taxi' || (r.type === 'custom' && hasMode(r, 'taxi')));
  return visibleRoutes;
}

function pillToClass(p) {
  if (p.startsWith('BUS')) return 'bus';
  const map = { WALK:'walk', MTR:'mtr', METRO:'metro', TAXI:'taxi', BUS:'bus', CROSS:'cross', HSR:'hsr' };
  return map[p] || 'walk';
}

function buildPillsHtml(pills) {
  return pills.map(p => {
    if (p === '›') return `<span class="pill-sep">›</span>`;
    return `<span class="pill ${pillToClass(p)}">${p}</span>`;
  }).join('');
}

function buildSegmentHtml(seg, index = 0, route = null) {
  const hoverText = segmentHoverText(seg).replace(/"/g, '&quot;');
  if (seg.mode === 'bus') {
    const bg = seg.lineColor + '20';
    const border = seg.lineColor + '55';
    const routeRef = segmentRouteRef(seg);
    const routeBadge = routeRef
      ? `<span class="seg-badge" style="background:${bg};border:1px solid ${border};color:${seg.lineColor}">${escapeHtml(routeRef)}</span>`
      : '';
    const legLabel = seg.legCount > 1
      ? `<span class="seg-meta">LEG ${index + 1}</span>`
      : '';
    const stopMeta = `${seg.stopCount} stop${seg.stopCount !== 1 ? 's' : ''}`;
    const fareStr = seg.fare ? `· ${fmtHKD(seg.fare)}` : '';
    const etaStr = seg.etaText
      ? `<span class="seg-meta">${seg.etaStatus === 'unavailable' ? escapeHtml(seg.etaText) : `ETA ${escapeHtml(seg.etaText)}`}</span>`
      : '';
    const transferHint = route && index < route.segments.length - 1
      ? `<div class="seg-stops"><span class="more">Transfer near ${seg.alightStop?.name || 'next stop'}</span></div>`
      : '';
    return `<div class="segment-row" title="${hoverText}">
      <div class="segment-header">
        ${routeBadge}
        <span class="seg-line-name">${escapeHtml(busRouteDisplayText(seg))}</span>
        ${legLabel}
        <span class="seg-meta">${stopMeta}</span>
        ${etaStr}
        <span class="seg-fare">${fareStr}</span>
      </div>
      <div class="seg-stops">
        <span class="sname">${seg.boardStop?.name || 'Board'}</span>
        <span class="more">→</span>
        <span class="sname">${seg.alightStop?.name || 'Alight'}</span>
      </div>
      ${transferHint}
    </div>`;
  }

  const stops    = seg.stationIds.length - 1;
  const names    = seg.stationIds.map(id => STATIONS[id]?.name || id);
  const maxNames = 4;
  let stopsStr;
  if (names.length <= maxNames + 1) {
    stopsStr = names.map(n => `<span class="sname">${n}</span>`).join(' · ');
  } else {
    const shown = names.slice(0, maxNames);
    const more  = names.length - maxNames;
    stopsStr = shown.map(n => `<span class="sname">${n}</span>`).join(' · ')
             + ` <span class="more">… ${more} more</span>`;
  }

  const bg     = seg.lineColor + '20';
  const border = seg.lineColor + '55';
  const rawFare = seg.stationIds[0]?.startsWith('sz')
    ? szMetroFare(stops) : hkMtrFare(stops);
  const fareValue = seg.lineId === 'hsr'
    ? Number(seg.fare || 0)
    : rawFare;
  const fareStr = `· ${fmtHKD(fareValue)}`;

  return `<div class="segment-row" title="${hoverText}">
    <div class="segment-header">
      <span class="seg-badge" style="background:${bg};border:1px solid ${border};color:${seg.lineColor}">${seg.lineId.toUpperCase()}</span>
      <span class="seg-line-name">${seg.lineName}</span>
      <span class="seg-meta">${stops} stop${stops !== 1 ? 's' : ''}</span>
      <span class="seg-fare">${fareStr}</span>
    </div>
    <div class="seg-stops">${stopsStr}</div>
  </div>`;
}

function buildRoadSegHtml(route) {
  const icon = route.type === 'taxi' ? '🚕' : '🚌';
  if (route.type === 'taxi') {
    return `<div class="road-seg" title="Taxi route">
      <span class="road-seg-icon">${icon}</span>
      <span>Taxi · ${route.km ? route.km.toFixed(1) + ' km' : '—'}${!route.osrmOk ? ' (est.)' : ''}</span>
    </div>`;
  }
  // Bus — show real route badge + operator when available
  const col = route.busColor || '#a78bfa';
  const ref = routePrimaryBusRef(route);
  const op  = route.busOperator || '';
  const badge = ref
    ? `<span style="display:inline-block;background:${col};color:#fff;font-size:10px;font-weight:700;padding:1px 6px;border-radius:2px;margin-right:5px;vertical-align:middle;">${escapeHtml(ref)}</span>`
    : '';
  const opStr = op ? ` · ${op}` : '';
  const stopMeta = route.stopCount
    ? ` · ${route.stopCount} stops`
    : '';
  const routeHintBadges = Array.isArray(route.routeHints) && route.routeHints.length
    ? `<div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:6px;">
        ${route.routeHints.map(label => {
          const ref = String(label).split(/\s+/).slice(1).join(' ') || label;
          return `<span style="display:inline-flex;align-items:center;justify-content:center;background:${col};color:#fff;font-size:10px;font-weight:700;padding:2px 7px;border-radius:3px;letter-spacing:.4px;">${escapeHtml(ref)}</span>`;
        }).join('')}
      </div>`
    : '';
  const routeHints = Array.isArray(route.routeHints) && route.routeHints.length
    ? `<div style="margin-top:4px;color:#a1a1aa;font-size:10px;">Routes · ${route.routeHints.join(' · ')}</div>`
    : '';
  const boardAlight = route.boardStop && route.alightStop
    ? `<div style="margin-top:4px;color:#71717a;font-size:10px;">${route.boardStop.name} → ${route.alightStop.name}</div>`
    : '';
  return `<div class="road-seg" title="${escapeHtml(route.displayLabel || routePrimaryBusRef(route) || 'Bus')}">
    <span class="road-seg-icon">${icon}</span>
    ${badge}<span>Bus${opStr} · ${route.km ? route.km.toFixed(1) + ' km' : '—'}${!route.osrmOk ? ' (est.)' : ''}${stopMeta}</span>
  </div>${routeHintBadges}${routeHints}${boardAlight}`;
}

function buildCardHtml(route) {
  const isActive = route.id === state.activeRoute;
  const tags = (route.tags || []).map(t => `<span class="card-tag ${t}">${t.toUpperCase()}</span>`).join('');
  const typeTagText = route.type === 'custom'
    ? 'CUSTOM'
    : route.type === 'hsr'
    ? 'HSR'
    : route.type === 'bus'
    ? (route.displayLabel || (routePrimaryBusRef(route) ? `${route.busOperator || 'BUS'} ${routePrimaryBusRef(route)}` : route.label)).toUpperCase()
    : route.label.toUpperCase();
  const typeTag = `<span class="card-tag ${route.type}">${typeTagText}</span>`;
  const displayTotalMin = effectiveRouteMinutes(route);

  // Progress bar — inverse time (max 60min = full bar)
  const maxRef = 120; // 2h reference
  const pct = Math.max(8, Math.min(100, (1 - displayTotalMin / maxRef) * 100));
  const busGradColor = route.busColor || '#a78bfa';
  const fillGrad = route.type === 'taxi' ? 'linear-gradient(90deg,#f59e0b,#fbbf24)'
                 : route.type === 'hsr'  ? 'linear-gradient(90deg,#22c55e,#16a34a)'
                 : route.type === 'bus'  ? `linear-gradient(90deg,${busGradColor},${busGradColor}cc)`
                 : route.type === 'cross'? 'linear-gradient(90deg,#5eb6e4,#00a651)'
                 : route.type === 'mtr'  ? 'linear-gradient(90deg,#5eb6e4,#3b82f6)'
                 :                         'linear-gradient(90deg,#00a651,#34d399)';
  const liveWindow = route.type === 'bus' && route.realtimeWindowText
    ? `<div class="card-live-window"><strong>Next</strong><span>${route.realtimeWindowText}</span></div>`
    : route.type === 'hsr' && route.hsrWindowText
    ? `<div class="card-live-window"><strong>HSR</strong><span>${route.hsrWindowText}</span></div>`
    : '';

  const segmentsHtml = route.segments && route.segments.length > 0
    ? route.segments.map((seg, index) => buildSegmentHtml(seg, index, route)).join('')
    : buildRoadSegHtml(route);
  const rideSummary = routeRideSummary(route);

  const viaNote = route.crossingName
    ? `<div class="card-via">
        <span>⤷</span>
        <span>Via <strong>${route.crossingName}</strong> · ${route.crossMin}min crossing</span>
       </div>`
    : '';
  const customViaNote = route.customViaNames?.length
    ? `<div class="card-via">
        <span>⤷</span>
        <span>Via <strong>${route.customViaNames.join(' → ')}</strong> · ${route.customLegCount} legs</span>
       </div>`
    : '';

  const walkTotal = (route.walkMinO || 0) + (route.walkMinD || 0) + (route.transferWalkMin || 0);
  const realtimeNote = route.type === 'bus' && route.realtimeNote
    ? `<div class="card-walk-note">${escapeHtml(route.realtimeNote)}</div>`
    : '';
  const walkNote = walkTotal
    ? `<div class="card-walk-note">
        🚶 ${Math.round(walkTotal)}min walk total${route.transferWalkMin ? ` · incl. ${Math.round(route.transferWalkMin)}min transfer` : ''}${route.approximate ? ' · route match widened' : ''}
       </div>`
    : '';

  return `<div class="route-card${isActive ? ' active' : ''}" data-id="${route.id}">
    <div class="card-top">
      <div class="card-tags">${typeTag}${tags}</div>
      <button class="card-save-btn" type="button" data-save-route="${route.id}" aria-label="Save this route">Save</button>
    </div>
    <div class="card-main">
      <span class="card-time">${fmtMin(displayTotalMin)}</span>
      <span class="card-unit">total</span>
      <span class="card-cost">${fmtHKD(route.fare)}</span>
    </div>
    ${liveWindow}
    ${rideSummary ? `<div class="card-walk-note">Lines · ${rideSummary}</div>` : ''}
    <div class="card-pills">${buildPillsHtml(route.pills)}</div>
    <div class="card-progress">
      <div class="card-progress-fill" style="width:${pct}%;background:${fillGrad}"></div>
    </div>
    <div class="card-segments">${segmentsHtml}</div>
    ${realtimeNote}
    ${walkNote}
    ${viaNote}
    ${customViaNote}
  </div>`;
}

function renderRouteCards() {
  const list   = document.getElementById('routes-list');
  const routes = filterRoutes();

  document.getElementById('drawer-count').textContent =
    `${routes.length} route${routes.length !== 1 ? 's' : ''}`;

  if (routes.length === 0) {
    list.innerHTML = `<div class="empty-state">
      <div class="empty-icon">🗺</div>
      <div class="empty-text">No routes match this filter</div>
    </div>`;
    return;
  }

  list.innerHTML = routes.map(buildCardHtml).join('');

  list.querySelectorAll('.route-card').forEach(card => {
    card.addEventListener('click', () => App.selectRoute(card.dataset.id));
  });
  list.querySelectorAll('[data-save-route]').forEach(button => {
    button.addEventListener('click', event => {
      event.stopPropagation();
      App.requestSaveRoute(button.dataset.saveRoute);
    });
  });
}

// ─────────────────────────────────────────────
//  KEYBOARD GLOBAL
// ─────────────────────────────────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'Enter' && !['INPUT','TEXTAREA','BUTTON'].includes(document.activeElement.tagName)) {
    App.doSearch();
  }
});

// ═══════════════════════════════════════════════════════
//  APP NAMESPACE (exposed to HTML onclick handlers)
// ═══════════════════════════════════════════════════════
window.App = {

  async doSearch() {
    if (!state.origin || !state.dest) return;

    const btn = document.getElementById('search-btn');
    const lbl = document.getElementById('btn-label');
    btn.disabled = true;
    lbl.innerHTML = '<span class="btn-spin"></span>';

    try {
      const routes = await generateRoutes(
        state.origin.coords,
        state.dest.coords,
        state.origin.system,
        state.dest.system,
        state.modeFilter,
        state.customization
      );

      state.routes      = routes;
      state.activeRoute = null;
      state.activeFilter = 'all';

      document.querySelectorAll('.filter-tab').forEach(t => {
        t.classList.toggle('active', t.dataset.filter === 'all');
      });

      openDrawer();
      renderRouteCards();

      if (routes.length > 0) {
        App.selectRoute(routes[0].id);
      }

      hydrateRouteEtas(routes).then(() => {
        const visibleRoutes = routes.filter(route => !route.hiddenBySchedule);
        if (!visibleRoutes.find(route => route.id === state.activeRoute)) {
          state.activeRoute = visibleRoutes[0]?.id || null;
        }
        renderRouteCards();
        if (state.activeRoute) {
          const active = state.routes.find(route => route.id === state.activeRoute);
          if (active) {
            drawRouteOnMap(
              active,
              state.origin.coords,
              state.dest.coords,
              state.origin.name,
              state.dest.name
            );
          }
        }
      });
    } catch(err) {
      console.error('Route generation error:', err);
    } finally {
      btn.disabled = !(state.origin && state.dest);
      lbl.textContent = 'FIND ROUTES';
    }
  },

  async selectRoute(id) {
    state.activeRoute = id;
    const route = state.routes.find(r => r.id === id);
    if (!route || route.hiddenBySchedule) return;

    renderRouteCards();

    if (route.type === 'bus') {
      hydrateRouteEtas([route]).then(() => renderRouteCards());
    }

    // Lazily snap bus stop sequences to the road network for cleaner map paths
    if (route.type === 'bus') {
      const busSegments = (route.segments || []).filter(seg => seg.mode === 'bus');
      if (busSegments.length) {
        for (const segment of busSegments) {
          if (segment.stopCoords?.length > 1 && !segment.pathCoords) {
            try {
              const snapped = await buildRoadPathFromStops(segment.stopCoords);
              segment.pathCoords = snapped.coords;
              segment.osrmOk = snapped.ok;
              if (snapped.km > 0) segment.rideKm = snapped.km;
            } catch(e) {}
          }
        }
      } else if (route.busStopCoords?.length > 1 && !route.busPathCoords) {
        try {
          const snapped = await buildRoadPathFromStops(route.busStopCoords);
          route.busPathCoords = snapped.coords;
          route.osrmOk = snapped.ok;
          if (snapped.km > 0) route.km = snapped.km;
        } catch(e) {}
      }
    }

    drawRouteOnMap(
      route,
      state.origin.coords,
      state.dest.coords,
      state.origin.name,
      state.dest.name
    );
  },

  selectCrossing(crossId) {
    const cross = CROSSINGS[crossId];
    if (!cross) return;
    const hkSt = STATIONS[cross.hkStation];
    const szSt = STATIONS[cross.szStation];
    if (!hkSt || !szSt) return;

    state.origin = { name: hkSt.name, coords: hkSt.coords, system: 'hk' };
    state.dest   = { name: szSt.name, coords: szSt.coords, system: 'sz' };

    document.getElementById('origin-input').value = hkSt.name;
    document.getElementById('dest-input').value   = szSt.name;
    document.getElementById('origin-clear').classList.remove('hidden');
    document.getElementById('dest-clear').classList.remove('hidden');

    updateSearchBtn();

    const mid = [
      (hkSt.coords[0] + szSt.coords[0]) / 2,
      (hkSt.coords[1] + szSt.coords[1]) / 2,
    ];
    map.flyTo(mid, 12, { duration: 1.2 });

    // Auto-search after short delay
    setTimeout(() => App.doSearch(), 400);
  },

  requestSaveRoute(routeId) {
    const route = currentRouteById(routeId);
    if (!route) return;
    state.pendingRouteToSaveId = routeId;
    if (state.activeSideSheet !== 'slot-panel') {
      toggleSideSheet('slot-panel', 'slot-tool-btn');
    }
    renderCustomizePanel();
  },
};

})(); // end IIFE
