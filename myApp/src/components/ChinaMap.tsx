import geoJson from "../data/china.json";
import * as echarts from "echarts";
import { useEffect } from "react";

echarts.registerMap("CN", geoJson as any);

function ChinaMap(props: any) {
  useEffect(() => {
    const chart = document.getElementById("chart");
    const myChart = echarts.init(chart as HTMLElement);
    myChart.setOption({
      tooltip: {
        trigger: "item",
        formatter: (params: any) => {
          return (
            params.name +
            "<br/>" +
            (isNaN(params.value) ? 0 : params.value) +
            "人(" +
            (params.data ? (params.data.rate * 1000000) / 10000 : 0) +
            "%)"
          );
        },
      },
      visualMap: {
        min: 0,
        max: 1391,
        realtime: false,
        calculable: true,
        inRange: {
          color: ["lightskyblue", "yellow", "orangered"],
        },
      },
      series: [
        {
          type: "map",
          mapType: "CN", // 自定义扩展图表类型
          label: {
            show: false,
          },
          data: props.data,
        },
      ],
    });
  }, [props.data]);
  return <div id="chart" style={{ width: 400, height: 400 }}></div>;
}

export default ChinaMap;
