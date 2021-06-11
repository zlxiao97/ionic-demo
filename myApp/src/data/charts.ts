export interface ChartItem {
  chartName: string;
  url: string;
  type: string;
  id: number;
}

const charts: ChartItem[] = [
  {
    chartName: "总体毕业生生源地结构",
    url: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=3&standalone=1`,
    type: "柱状图",
    id: 0,
  },
  {
    chartName: "毕业研究生生源地结构",
    url: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=4&standalone=1`,
    type: "柱状图",
    id: 1,
  },
  {
    chartName: "本科毕业生生源地结构",
    url: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=5&standalone=1`,
    type: "柱状图",
    id: 2,
  },
  {
    chartName: "总体毕业生院系结构",
    url: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=6&standalone=1`,
    type: "柱状图",
    id: 3,
  },
  {
    chartName: "毕业研究生院系结构",
    url: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=7&standalone=1`,
    type: "柱状图",
    id: 4,
  },
  {
    chartName: "本科毕业生院系结构",
    url: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=8&standalone=1`,
    type: "柱状图",
    id: 5,
  },
  {
    chartName: "本科毕业生就业构成情况",
    url: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=8&standalone=1`,
    type: "饼状图",
    id: 6,
  },
  {
    chartName: "毕业研究生就业构成情况",
    url: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=8&standalone=1`,
    type: "饼状图",
    id: 7,
  },
  {
    chartName: "地域流向",
    url: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=8&standalone=1`,
    type: "地图",
    id: 8,
  },
];

export const getCharts = () => charts;

export const getChart = (id: number) => charts.find(c => c.id === id);
