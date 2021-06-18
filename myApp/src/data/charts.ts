export interface ChartItem {
  chartName: string;
  url: string;
  type: string;
  id: number;
}

const HEIGHT_RATE = 1.5;

const CHART_HEIGHT = 300 * HEIGHT_RATE;

const BAR_HEIGHT = 380 * HEIGHT_RATE;

const charts: ChartItem[] = [
  {
    chartName: "本科毕业生性别比例",
    url: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=74&standalone=1&height=${CHART_HEIGHT}`,
    type: "饼状图",
    id: 0
  },
  {
    chartName: "毕业研究生性别比例",
    url: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=75&standalone=1&height=${CHART_HEIGHT}`,
    type: "饼状图",
    id: 1
  },

  {
    chartName: "本科毕业生院系结构",
    url: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=78&standalone=1&height=${BAR_HEIGHT}`,
    type: "柱状图",
    id: 2
  },
  {
    chartName: "毕业研究生院系结构",
    url: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=79&standalone=1&height=${BAR_HEIGHT}`,
    type: "柱状图",
    id: 3
  },
  {
    chartName: "总体毕业生院系结构",
    url: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=80&standalone=1&height=${BAR_HEIGHT}`,
    type: "柱状图",
    id: 4
  },
  {
    chartName: "本科毕业生生源地结构",
    url: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=120&standalone=1&height=${BAR_HEIGHT}`,
    type: "柱状图",
    id: 5
  },
  {
    chartName: "毕业研究生生源地结构",
    url: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=84&standalone=1&height=${BAR_HEIGHT}`,
    type: "柱状图",
    id: 6
  },
  {
    chartName: "总毕业生生源地结构",
    url: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=85&standalone=1&height=${BAR_HEIGHT}`,
    type: "饼状图",
    id: 7
  },
  {
    chartName: "本科毕业生就业构成情况",
    url: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=89&standalone=1&height=${CHART_HEIGHT}`,
    type: "饼状图",
    id: 8
  },
  {
    chartName: "毕业研究生就业构成情况",
    url: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=90&standalone=1&height=${CHART_HEIGHT}`,
    type: "饼状图",
    id: 9
  },
  {
    chartName: "地域流向",
    url: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=8&standalone=1`,
    type: "地图",
    id: 10
  },
  {
    chartName: "就业信息来源",
    url: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=98&standalone=1&height=${BAR_HEIGHT}`,
    type: "柱状图",
    id: 11
  },
  {
    chartName: "职业规划目标明确度",
    url: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=99&standalone=1&height=${CHART_HEIGHT}`,
    type: "柱状图",
    id: 12
  },
  {
    chartName: "本科毕业生总体月均收入",
    url: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=101&standalone=1&height=${BAR_HEIGHT}`,
    type: "折线图",
    id: 13
  },
  {
    chartName: "毕业研生总体月均收入",
    url: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=102&standalone=1&height=${BAR_HEIGHT}`,
    type: "折线图",
    id: 14
  },
  {
    chartName: "主要就业地区薪酬水平",
    url: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=103&standalone=1&height=${BAR_HEIGHT}`,
    type: "柱状图",
    id: 15
  },
  {
    chartName: "主要就业行业月薪",
    url: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=104&standalone=1&height=${BAR_HEIGHT}`,
    type: "柱状图",
    id: 16
  },
  {
    chartName: "本科毕业生行业流向",
    url: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=93&standalone=1&height=${BAR_HEIGHT}`,
    type: "柱状图",
    id: 17
  },
  {
    chartName: "毕业研究生行业流向",
    url: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=94&standalone=1&height=${BAR_HEIGHT}`,
    type: "柱状图",
    id: 18
  },
  {
    chartName: "本科毕业生就业职业分布",
    url: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=95&standalone=1&height=${BAR_HEIGHT}`,
    type: "柱状图",
    id: 19
  },
  {
    chartName: "毕业研究生就业职业分布",
    url: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=96&standalone=1&height=${BAR_HEIGHT}`,
    type: "柱状图",
    id: 20
  },
  {
    chartName: "就业单位性质",
    url: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=97&standalone=1&height=${CHART_HEIGHT}`,
    type: "饼状图",
    id: 21
  },
  {
    chartName: "专业相关度",
    url: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=106&standalone=1&height=${CHART_HEIGHT}`,
    type: "饼状图",
    id: 22
  },
  {
    chartName: "工作适应度",
    url: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=107&standalone=1&height=${CHART_HEIGHT}`,
    type: "饼状图",
    id: 23
  },
  {
    chartName: "职业期待吻合度",
    url: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=108&standalone=1&height=${CHART_HEIGHT}`,
    type: "饼状图",
    id: 24
  },
  {
    chartName: "工作满意度",
    url: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=109&standalone=1&height=${BAR_HEIGHT}`,
    type: "饼状图",
    id: 25
  },
  {
    chartName: "职业能力满足度",
    url: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=110&standalone=1&height=${CHART_HEIGHT}`,
    type: "饼状图",
    id: 26
  },
  {
    chartName: "用人单位对毕业生满意度",
    url: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=111&standalone=1&height=${CHART_HEIGHT}`,
    type: "饼状图",
    id: 27
  },
  {
    chartName: "就业率变化趋势",
    url: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=115&standalone=1&height=${CHART_HEIGHT}`,
    type: "饼状图",
    id: 28
  },
  {
    chartName: "本科毕业生就业单位变化趋势",
    url: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=116&standalone=1&height=${CHART_HEIGHT}`,
    type: "饼状图",
    id: 29
  },
  {
    chartName: "毕业研究生就业单位变化趋势",
    url: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=114&standalone=1&height=${CHART_HEIGHT}`,
    type: "饼状图",
    id: 30
  },
  {
    chartName: "毕业生流向信息传输、软件和信息技术服务业就业趋势",
    url: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=117&standalone=1&height=${CHART_HEIGHT}`,
    type: "饼状图",
    id: 31
  },
  {
    chartName: "本科生就业质量变化趋势",
    url: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=118&standalone=1&height=${CHART_HEIGHT}`,
    type: "饼状图",
    id: 32
  }
];

export const getCharts = () => charts;

export const getChart = (id: number) => charts.find((c) => c.id === id);
