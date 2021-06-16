import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
} from "@ionic/react";
import IframeView from "../components/IframeView";
import Tabs from "../components/Tabs";

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
        <h1>总体月均收入</h1>
        <Tabs>
          <Tabs.TabPane tab="本科毕业生" key="1">
            <IframeView noTitle={true} id="13"></IframeView>
          </Tabs.TabPane>
          <Tabs.TabPane tab="毕业研究生" key="2">
            <IframeView noTitle={true} id="14"></IframeView>
          </Tabs.TabPane>
        </Tabs>
        <IframeView id="15"></IframeView>
        <IframeView id="16"></IframeView>
      </IonContent>
    </IonPage>
  );
}

export default JobChannel;
