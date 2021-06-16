import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import Tabs from "../components/Tabs";
import IframeView from "../components/IframeView";

const { TabPane } = Tabs;

const OVERALL_SCALE_IFRAME = [
  {
    title: "本科毕业生",
    source:
      "https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=16&standalone=1&&height=400",
  },
  {
    title: "毕业研究生",
    source:
      "https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=1&standalone=1&&height=400",
  },
  {
    title: "总毕业生",
    source:
      "https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=2&standalone=1&&height=400",
  },
];

function OverallScale() {
  return (
    <IonGrid>
      <h4>总体规模</h4>
      <IonRow>
        {OVERALL_SCALE_IFRAME.map(iframe => (
          <IonCol size="4" key={iframe.title}>
            {iframe.title}
            <br />
            <iframe
              seamless
              frameBorder="0"
              scrolling="no"
              height="120"
              width="100"
              title={iframe.title}
              src={iframe.source}
            ></iframe>
          </IonCol>
        ))}
      </IonRow>
    </IonGrid>
  );
}

function Scale() {
  return (
    <IonPage id="test-page">
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonBackButton text="返回" defaultHref="/home"></IonBackButton>
          </IonButtons>
          <IonTitle>毕业生规模结构</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent scrollX={true}>
        <OverallScale />
        <h1>性别比例</h1>
        <Tabs>
          <TabPane key="1" tab="本科毕业生">
            <IframeView id="0" noTitle={true}></IframeView>
          </TabPane>
          <TabPane key="2" tab="毕业研究生">
            <IframeView id="1" noTitle={true}></IframeView>
          </TabPane>
        </Tabs>
        <h1>院系结构</h1>
        <Tabs>
          <TabPane key="1" tab="本科毕业生">
            <IframeView id="2" noTitle={true}></IframeView>
          </TabPane>
          <TabPane key="2" tab="毕业研究生">
            <IframeView id="3" noTitle={true}></IframeView>
          </TabPane>
          <TabPane key="3" tab="总体">
            <IframeView id="4" noTitle={true}></IframeView>
          </TabPane>
        </Tabs>
        <h1>生源地结构</h1>
        <Tabs>
          <TabPane key="1" tab="本科毕业生">
            <IframeView id="5" noTitle={true}></IframeView>
          </TabPane>
          <TabPane key="2" tab="毕业研究生">
            <IframeView id="6" noTitle={true}></IframeView>
          </TabPane>
          <TabPane key="3" tab="总体">
            <IframeView id="7" noTitle={true}></IframeView>
          </TabPane>
        </Tabs>
      </IonContent>
    </IonPage>
  );
}

export default Scale;
