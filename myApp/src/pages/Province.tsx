import {
  IonMenuButton,
  IonTitle,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonText,
  IonCard,
  IonCardContent
} from "@ionic/react";
import IframeView from "../components/IframeView";
import Tabs from "../components/Tabs";

function Province() {
  return (
    <IonPage id="employment-rate">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons>
            <IonMenuButton auto-hide={false} menu="menu"></IonMenuButton>
          </IonButtons>
          <IonTitle>毕业生就业流向</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent scrollX={true}>
        <IonText className="title">地域流向</IonText>
        <IonCard className="flat-card">
          <IonCardContent>
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
          </IonCardContent>
        </IonCard>

        <IonText className="title">行业流向Top10</IonText>
        <IonCard className="flat-card">
          <IonCardContent>
            <Tabs>
              <Tabs.TabPane tab="本科毕业生" key="1">
                <IframeView noTitle={true} id="17" height={300}></IframeView>
              </Tabs.TabPane>
              <Tabs.TabPane tab="毕业研究生" key="2">
                <IframeView noTitle={true} id="18" height={300}></IframeView>
              </Tabs.TabPane>
            </Tabs>
          </IonCardContent>
        </IonCard>

        <IonText className="title">就业职业分布Top10</IonText>
        <IonCard className="flat-card">
          <IonCardContent>
            <Tabs>
              <Tabs.TabPane tab="本科毕业生" key="1">
                <IframeView noTitle={true} id="19" height={300}></IframeView>
              </Tabs.TabPane>
              <Tabs.TabPane tab="毕业研究生" key="2">
                <IframeView noTitle={true} id="20" height={300}></IframeView>
              </Tabs.TabPane>
            </Tabs>
          </IonCardContent>
        </IonCard>
        <IonText className="title">就业单位性质</IonText>
        <IonCard className="flat-card last-card">
          <IonCardContent>
            <IframeView id="21" noTitle={true}></IframeView>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
}

export default Province;
