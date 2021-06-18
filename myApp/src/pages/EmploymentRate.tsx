import {
  IonMenuButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonTitle,
  IonCard,
  IonText,
  IonCardContent
} from "@ionic/react";
import Tabs from "../components/Tabs";
import IframeView from "../components/IframeView";

const { TabPane } = Tabs;

function EmploymentRate() {
  return (
    <IonPage id="employment-rate">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons>
            <IonMenuButton auto-hide={false} menu="menu"></IonMenuButton>
          </IonButtons>
          <IonTitle>毕业生就业率</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent scrollX={true}>
        <IonText className="title">本科毕业生就业构成情况</IonText>
        <IonCard className="flat-card">
          <IonCardContent>
            <IframeView id="8" noTitle={true}></IframeView>
          </IonCardContent>
        </IonCard>
        <IonText className="title">毕业研究生就业构成情况</IonText>
        <IonCard className="flat-card">
          <IonCardContent>
            <IframeView id="9" noTitle={true}></IframeView>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
}

export default EmploymentRate;
