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

function Province() {
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
        <h1>地域流向</h1>
        <Tabs>
          <Tabs.TabPane tab="本科毕业生" key="1">
            <IframeView noTitle={true} id="8"></IframeView>
          </Tabs.TabPane>
          <Tabs.TabPane tab="毕业研究生" key="2">
            <IframeView noTitle={true} id="8"></IframeView>
          </Tabs.TabPane>
          <Tabs.TabPane tab="总体" key="3">
            <IframeView noTitle={true} id="8"></IframeView>
          </Tabs.TabPane>
        </Tabs>
        <h1>行业流向top10</h1>
        <Tabs>
          <Tabs.TabPane tab="本科毕业生" key="1">
            <IframeView noTitle={true} id="8"></IframeView>
          </Tabs.TabPane>
          <Tabs.TabPane tab="毕业研究生" key="2">
            <IframeView noTitle={true} id="8"></IframeView>
          </Tabs.TabPane>
        </Tabs>
        <h1>就业职业分布top10</h1>
        <Tabs>
          <Tabs.TabPane tab="本科毕业生" key="1">
            <IframeView noTitle={true} id="8"></IframeView>
          </Tabs.TabPane>
          <Tabs.TabPane tab="毕业研究生" key="2">
            <IframeView noTitle={true} id="8"></IframeView>
          </Tabs.TabPane>
        </Tabs>
        <IframeView id="8"></IframeView>
      </IonContent>
    </IonPage>
  );
}

export default Province;
