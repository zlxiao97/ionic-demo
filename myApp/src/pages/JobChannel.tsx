import {
  IonMenuButton,
  IonTitle,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonText
} from "@ionic/react";
import IframeView from "../components/IframeView";

function JobChannel() {
  return (
    <IonPage id="employment-rate">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons>
            <IonMenuButton auto-hide={false} menu="menu"></IonMenuButton>
          </IonButtons>
          <IonTitle>求职情况</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent scrollX={true}>
        <IonText className="title">就业信息来源</IonText>
        <IonCard className="flat-card">
          <IonCardContent>
            <IframeView id="11" noTitle={true} height={300}></IframeView>
          </IonCardContent>
        </IonCard>
        <IonText className="title">职业规划目标明确度</IonText>
        <IonCard className="flat-card last-card">
          <IonCardContent>
            <IframeView id="12" noTitle={true}></IframeView>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
}

export default JobChannel;
