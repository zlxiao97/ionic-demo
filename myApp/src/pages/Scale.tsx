import {
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,
  IonText
} from "@ionic/react";
// import { useEffect } from "react";
import Tabs from "../components/Tabs";
import PageContainer from "../components/PageContainer";
import IframeView from "../components/IframeView";
import "./Scale.css";

const { TabPane } = Tabs;

const HEIGHT_RATE = 1;

const NUMBER_HEIGHT = 120 * HEIGHT_RATE;

const OVERALL_SCALE_IFRAME = [
  {
    id: "no1",
    title: "本科毕业生",
    source: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=50&standalone=1&&height=${NUMBER_HEIGHT}`
  },
  {
    id: "no2",
    title: "毕业研究生",
    source: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=51&standalone=1&&height=${NUMBER_HEIGHT}`
  },
  {
    id: "no3",
    title: "总毕业生",
    source: `https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=52&standalone=1&&height=${NUMBER_HEIGHT}`
  }
];

function OverallScale() {
  // useEffect(() => {
  //   const frame = document.getElementById("#no1");
  //   if (frame)
  //     frame.addEventListener("load", (ev) => {
  //       const new_style_element = document.createElement("style");
  //       new_style_element.textContent = ".header-line { color: white; }";
  //       const target = ev.target as HTMLIFrameElement;
  //       const iframeDoc = target.contentDocument;
  //       if (iframeDoc) iframeDoc.head.appendChild(new_style_element);
  //     });
  // }, []);
  return (
    <IonGrid className="container">
      <IonText className="title">总体规模</IonText>
      <IonRow className="space-between">
        {OVERALL_SCALE_IFRAME.map((iframe) => (
          <IonCol size="3.5" key={iframe.title} className="pd-0">
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
    <PageContainer
      title="毕业生规模结构"
      className="scale-page"
      pageId="scale-page"
    >
      <OverallScale />
      <IonText className="title">性别比例</IonText>
      <IonCard className="flat-card">
        <IonCardContent>
          <Tabs>
            <TabPane key="1" tab="本科毕业生">
              <IframeView id="0" noTitle={true}></IframeView>
            </TabPane>
            <TabPane key="2" tab="毕业研究生">
              <IframeView id="1" noTitle={true}></IframeView>
            </TabPane>
          </Tabs>
        </IonCardContent>
      </IonCard>

      <IonText className="title">院系结构</IonText>
      <IonCard className="flat-card">
        <IonCardContent>
          <Tabs>
            <TabPane key="1" tab="本科毕业生">
              <IframeView id="2" noTitle={true} height={300}></IframeView>
            </TabPane>
            <TabPane key="2" tab="毕业研究生">
              <IframeView id="3" noTitle={true} height={300}></IframeView>
            </TabPane>
            <TabPane key="3" tab="总体">
              <IframeView id="4" noTitle={true} height={300}></IframeView>
            </TabPane>
          </Tabs>
        </IonCardContent>
      </IonCard>

      <IonText className="title">生源地结构</IonText>
      <IonCard className="flat-card last-card">
        <IonCardContent>
          <Tabs>
            <TabPane key="1" tab="本科毕业生">
              <IframeView id="5" noTitle={true} height={300}></IframeView>
            </TabPane>
            <TabPane key="2" tab="毕业研究生">
              <IframeView id="6" noTitle={true} height={300}></IframeView>
            </TabPane>
            <TabPane key="3" tab="总体">
              <IframeView id="7" noTitle={true} height={300}></IframeView>
            </TabPane>
          </Tabs>
        </IonCardContent>
      </IonCard>
    </PageContainer>
  );
}

export default Scale;
