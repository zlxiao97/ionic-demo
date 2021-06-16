import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
} from "@ionic/react";
import IframeView from "../components/IframeView";

function JobChannel() {
  return (
    <IonPage id="employment-rate">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons>
            <IonBackButton text="返回" defaultHref="/home"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent scrollX={true}>
        <IframeView id="11" />
        <IframeView id="12" />
      </IonContent>
    </IonPage>
  );
}

export default JobChannel;
