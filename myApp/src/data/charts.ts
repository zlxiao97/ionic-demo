export interface ChartItem {
  chartName: string;
  url: string;
  type: string;
  id: number;
}

const charts: ChartItem[] = [
  {
    chartName: "本科毕业生性别比例",
    url: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=28&standalone=1&&height=400`,
    type: "饼状图",
    id: 0,
  },
  {
    chartName: "毕业研究生性别比例",
    url: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=29&standalone=1&height=400`,
    type: "饼状图",
    id: 1,
  },

  {
    chartName: "本科毕业生院系结构",
    url: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=7&standalone=1&height=400`,
    type: "柱状图",
    id: 2,
  },
  {
    chartName: "毕业研究生院系结构",
    url: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=8&standalone=1&height=400`,
    type: "柱状图",
    id: 3,
  },
  {
    chartName: "总体毕业生院系结构",
    url: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=9&standalone=1&height=400`,
    type: "柱状图",
    id: 4,
  },
  {
    chartName: "本科毕业生生源地结构",
    url: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=10&standalone=1&height=400`,
    type: "柱状图",
    id: 5,
  },
  {
    chartName: "毕业研究生生源地结构",
    url: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=11&standalone=1&height=400`,
    type: "柱状图",
    id: 6,
  },
  {
    chartName: "总毕业生生源地结构",
    url: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=12&standalone=1&height=400`,
    type: "饼状图",
    id: 7,
  },
  {
    chartName: "本科毕业生就业构成情况",
    url: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=13&standalone=1&height=400`,
    type: "饼状图",
    id: 8,
  },
  {
    chartName: "毕业研究生就业构成情况",
    url: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=30&standalone=1&height=400`,
    type: "饼状图",
    id: 9,
  },
  {
    chartName: "地域流向",
    url: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=8&standalone=1`,
    type: "地图",
    id: 10,
  },
  {
    chartName: "就业信息来源",
    url: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=38&standalone=1&height=400`,
    type: "柱状图",
    id: 11,
  },
  {
    chartName: "职业规划目标明确度",
    url: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=33&standalone=1&height=400`,
    type: "柱状图",
    id: 12,
  },
  {
    chartName: "本科毕业生总体月均收入",
    url: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=38&standalone=1&height=400`,
    type: "折线图",
    id: 13,
  },
  {
    chartName: "毕业研生总体月均收入",
    url: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=33&standalone=1&height=400`,
    type: "折线图",
    id: 14,
  },
  {
    chartName: "主要就业地区薪酬水平",
    url: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=42&standalone=1&height=400`,
    type: "柱状图",
    id: 15,
  },
  {
    chartName: "主要就业行业月薪",
    url: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=41&standalone=1&height=400`,
    type: "柱状图",
    id: 16,
  },
];

export const getCharts = () => charts;

export const getChart = (id: number) => charts.find(c => c.id === id);
