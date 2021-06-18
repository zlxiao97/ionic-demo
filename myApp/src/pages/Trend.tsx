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
import Tabs from "../components/Tabs";

function Trend() {
  return (
    <IonPage id="employment-rate">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons>
            <IonMenuButton auto-hide={false} menu="menu"></IonMenuButton>
          </IonButtons>
          <IonTitle>就业发展趋势分析</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent scrollX={true}>
        <IonText className="title">就业率变化趋势</IonText>
        <IonCard className="flat-card">
          <IonCardContent>
            <IframeView noTitle={true} id="28"></IframeView>
          </IonCardContent>
        </IonCard>
        <IonText className="title">本科毕业生就业单位变化趋势</IonText>
        <IonCard className="flat-card">
          <IonCardContent>
            <Tabs>
              <Tabs.TabPane tab="本科毕业生" key="1">
                <IframeView noTitle={true} id="29"></IframeView>
              </Tabs.TabPane>
              <Tabs.TabPane tab="毕业研究生" key="2">
                <IframeView noTitle={true} id="30"></IframeView>
              </Tabs.TabPane>
            </Tabs>
          </IonCardContent>
        </IonCard>
        <IonText className="title">毕业生流向信息传输、软件和信息技术服务业就业趋势</IonText>
        <IonCard className="flat-card">
          <IonCardContent>
            <IframeView noTitle={true} id="31"></IframeView>
          </IonCardContent>
        </IonCard>
        <IonText className="title">本科生就业质量变化趋势</IonText>
        <IonCard className="flat-card last-card">
          <IonCardContent>
            <IframeView noTitle={true} id="32"></IframeView>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
}

export default Trend;
