/**
 * Mocking client-server processing
 */
const positionArray = [{
  code: 9,
  name: "商圈",
  selectMode: 1,
  positionArray: [{ "code": 52506, "name": "南京", "glat": "31.2122", "glng": "121.393997" },
  { "code": 52503, "name": "南京", "glat": "31.193899", "glng": "121.455002" },
  { "code": 52505, "name": "青岛34", "glat": "31.1646", "glng": "121.428001" },
  { "code": 52507, "name": "青岛67", "glat": "31.2278", "glng": "121.432999" },
  { "code": 52508, "name": "青岛56", "glat": "31.2278", "glng": "121.432999" },
  { "code": 52509, "name": "青岛78", "glat": "31.2278", "glng": "121.432999" }],
},
{
  code: 12,
  name: "机场车站",
  selectMode: 1,
  positionArray: [{ "code": 72506, "name": "徽州", "glat": "31.2122", "glng": "121.393997" },
  { "code": 73503, "name": "徽州1", "glat": "31.193899", "glng": "121.455002" },
  { "code": 73505, "name": "重庆2", "glat": "31.1646", "glng": "121.428001" },
  { "code": 73507, "name": "重庆3", "glat": "31.2278", "glng": "121.432999" },
  { "code": 735071, "name": "重庆5", "glat": "31.2278", "glng": "121.432999" },
  { "code": 735072, "name": "重庆6", "glat": "31.2278", "glng": "121.432999" },
  { "code": 735073, "name": "重庆7", "glat": "31.2278", "glng": "121.432999" },
  { "code": 735074, "name": "重庆8", "glat": "31.2278", "glng": "121.432999" },
  { "code": 735075, "name": "重庆9", "glat": "31.2278", "glng": "121.432999" }],
},
{
  code: 9,
  name: "地铁",
  selectMode: 2,
  positionArray: [
    {
      code: 0,
      name: "一号线",
      selectMode: 1,
      positionArray: [{ "code": 1112506, "name": "南京站", "glat": "31.2122", "glng": "121.393997" },
      { "code": 113503, "name": "新模范马路站", "glat": "31.193899", "glng": "121.455002" },
      { "code": 113505, "name": "玄武门站", "glat": "31.1646", "glng": "121.428001" },
      { "code": 113507, "name": "鼓楼站", "glat": "31.2278", "glng": "121.432999" },
      { "code": 1135071, "name": "珠江路站", "glat": "31.2278", "glng": "121.432999" },
      { "code": 1135072, "name": "新街口站", "glat": "31.2278", "glng": "121.432999" },
      { "code": 1135073, "name": "张府园站", "glat": "31.2278", "glng": "121.432999" },
      { "code": 1135074, "name": "三山街站", "glat": "31.2278", "glng": "121.432999" },
      { "code": 1135075, "name": "中华门站", "glat": "31.2278", "glng": "121.432999" }],
    },
    {
      code: 0,
      name: "二号线",
      selectMode: 1,
      positionArray: [{ "code": 2222506, "name": "上海路站", "glat": "31.2122", "glng": "121.393997" },
      { "code": 2263503, "name": "新街口站", "glat": "31.193899", "glng": "121.455002" },
      { "code": 2263505, "name": "大行宫站", "glat": "31.1646", "glng": "121.428001" },
      { "code": 2263507, "name": "西安门站", "glat": "31.2278", "glng": "121.432999" },
      { "code": 22635071, "name": "明故宫站", "glat": "31.2278", "glng": "121.432999" },
      { "code": 22635072, "name": "苜蓿园站", "glat": "31.2278", "glng": "121.432999" },
      { "code": 22635073, "name": "下马坊站", "glat": "31.2278", "glng": "121.432999" },
      { "code": 22635074, "name": "孝陵卫站", "glat": "31.2278", "glng": "121.432999" },
      { "code": 22635075, "name": "钟灵街站	", "glat": "31.2278", "glng": "121.432999" }],
    },
    {
      code: 0,
      name: "三号线",
      selectMode: 1,
      positionArray: [{ "code": 3522506, "name": "大行宫站", "glat": "31.2122", "glng": "121.393997" },
      { "code": 3263503, "name": "夫子庙站", "glat": "31.193899", "glng": "121.455002" },
      { "code": 3263504, "name": "武定门站", "glat": "31.193899", "glng": "121.455002" }],
    },
    {
      code: 0,
      name: "四号线",
      selectMode: 1,
      positionArray: [{ "code": 4432506, "name": "南京南站", "glat": "31.2122", "glng": "121.393997" },
      { "code": 44363503, "name": "胜太西路站", "glat": "31.193899", "glng": "121.455002" }],
    },
    {
      code: 0,
      name: "五号线",
      selectMode: 1,
      positionArray: [{ "code": 125542506, "name": "九龙湖站", "glat": "31.2122", "glng": "121.393997" },
      { "code": 125542506, "name": "诚信大道站", "glat": "31.2122", "glng": "121.393997" },
      { "code": 1255463503, "name": "东大九龙湖校区站", "glat": "31.193899", "glng": "121.455002" }],
    },
    {
      code: 0,
      name: "六号线",
      selectMode: 1,
      positionArray: [{ "code": 135542506, "name": "上元门站", "glat": "31.2122", "glng": "121.393997" },
      { "code": 1355463503, "name": "五塘广场站", "glat": "31.193899", "glng": "121.455002" }],
    },
  ]
}];
const pois = {
    sort: [{ code: 0, text: '推荐排序' }, { code: 1, text: '距离排序' }],
    star:[{code: 0, text: '不限'},{code: 2, text: '二星'},{code: 3, text: '三星'},{code: 4, text: '四星'},{code: 5, text: '五星'}],
    positionArray:positionArray
};

export default {
  getPois(cb) {
    setTimeout(() => cb(pois), 100)
  },

  buyProducts(products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
        ? cb()
        : errorCb()
    }, 100)
  },
}
