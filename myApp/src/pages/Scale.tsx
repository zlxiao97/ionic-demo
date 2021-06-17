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
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent
} from "@ionic/react";
import { useEffect } from "react";
import Tabs from "../components/Tabs";
import IframeView from "../components/IframeView";
import "./Scale.css";

const { TabPane } = Tabs;

const OVERALL_SCALE_IFRAME = [
  {
    id: "no1",
    title: "本科毕业生",
    source:
      "https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=50&standalone=1&&height=100"
  },
  {
    id: "no2",
    title: "毕业研究生",
    source:
      "https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=51&standalone=1&&height=100"
  },
  {
    id: "no3",
    title: "总毕业生",
    source:
      "https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=52&standalone=1&&height=100"
  }
];

function OverallScale() {
  useEffect(() => {
    window.no1.addEventListener("load", (ev) => {
      const new_style_element = document.createElement("style");
      new_style_element.textContent = ".header-line { color: white; }";
      const iframeDoc = ev.target.contentDocument;
      if (iframeDoc) iframeDoc.head.appendChild(new_style_element);
    });
  }, []);
  return (
    <IonGrid>
      <h4>总体规模</h4>
      <IonRow className="space-between">
        {OVERALL_SCALE_IFRAME.map((iframe) => (
          <IonCol size="3" key={iframe.title} className="pd-0">
            <IonCard className="statistic">
              <IonCardHeader className="statistic-header">
                <IonCardSubtitle className="statistic-subtitle">
                  {iframe.title}
                </IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent className="number-iframe">
                <iframe
                  className="statistic-iframe"
                  seamless
                  frameBorder="0"
                  scrolling="no"
                  height="50"
                  width="100%"
                  title={iframe.title}
                  src={iframe.source}
                  id={iframe.id}
                ></iframe>
              </IonCardContent>
            </IonCard>
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
