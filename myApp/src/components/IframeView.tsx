import { useState, useEffect } from "react";
import { ChartItem, getChart } from "../data/charts";
import "./IframeView.css";

function IframeView(props: { id: string; height?: number; noTitle?: boolean }) {
  const [chart, setChart] = useState<ChartItem>();

  useEffect(() => {
    const crt = getChart(parseInt(props.id, 10));
    setChart(crt);
  }, [props.id]);

  return (
    <>
      {chart ? (
        <>
          {!props.noTitle && <h1>{chart.chartName}</h1>}
          <iframe
            width="100%"
            height={props.height || 240}
            title={chart.chartName}
            seamless
            frameBorder="0"
            scrolling="no"
            src={chart.url}
          ></iframe>
        </>
      ) : (
        <div>Message not found</div>
      )}
    </>
  );
}

export default IframeView;
