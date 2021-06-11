import { useState } from "react";
import { ChartItem, getChart } from "../data/charts";
import { useIonViewWillEnter } from "@ionic/react";
import "./IframeView.css";

function IframeView(props: { id: string; height?: number; noTitle?: boolean }) {
  const [chart, setChart] = useState<ChartItem>();

  useIonViewWillEnter(() => {
    const crt = getChart(parseInt(props.id, 10));
    setChart(crt);
  });

  return (
    <>
      {chart ? (
        <>
          {!props.noTitle && <h1>{chart.chartName}</h1>}
          <iframe
            width="100%"
            height={props.height || 300}
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
