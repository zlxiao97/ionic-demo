import { useState } from "react";
import { ChartItem, getChart } from "../data/charts";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonNote,
  IonPage,
  IonToolbar,
  useIonViewWillEnter
} from "@ionic/react";
import { personCircle } from "ionicons/icons";
import { useParams } from "react-router";
import "./ViewMessage.css";

function ViewMessage() {
  const [chart, setChart] = useState<ChartItem>();
  const params = useParams<{ id: string }>();

  useIonViewWillEnter(() => {
    const crt = getChart(parseInt(params.id, 10));
    setChart(crt);
  });

  return (
    <IonPage id="view-message-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons>
            <IonBackButton text="返回" defaultHref="/home"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent scrollX={true}>
        {chart ? (
          <>
            <h1>{chart.chartName}</h1>
            <iframe
              width="600"
              height="400"
              seamless
              frameBorder="0"
              scrolling="no"
              src={chart.url}
            ></iframe>
          </>
        ) : (
          <div>Message not found</div>
        )}
      </IonContent>
    </IonPage>
  );
}

export default ViewMessage;
