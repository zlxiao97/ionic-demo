import { IonText, IonCard, IonCardContent } from "@ionic/react";
import IframeView from "../components/IframeView";
import Tabs from "../components/Tabs";
import PageContainer from "../components/PageContainer";

function JobChannel() {
  return (
    <PageContainer title="薪酬水平" pageId="salary-level">
      <IonText className="title">总体月均收入</IonText>
      <IonCard className="flat-card">
        <IonCardContent>
          <Tabs>
            <Tabs.TabPane tab="本科毕业生" key="1">
              <IframeView noTitle={true} id="13" height={300}></IframeView>
            </Tabs.TabPane>
            <Tabs.TabPane tab="毕业研究生" key="2">
              <IframeView noTitle={true} id="14" height={300}></IframeView>
            </Tabs.TabPane>
          </Tabs>
        </IonCardContent>
      </IonCard>
      <IonText className="title">主要就业地区薪酬水平</IonText>
      <IonCard className="flat-card">
        <IonCardContent>
          <IframeView noTitle={true} id="15" height={300}></IframeView>
        </IonCardContent>
      </IonCard>
      <IonText className="title">主要就业行业月薪</IonText>
      <IonCard className="flat-card last-card">
        <IonCardContent>
          <IframeView noTitle={true} id="16" height={300}></IframeView>
        </IonCardContent>
      </IonCard>
    </PageContainer>
  );
}

export default JobChannel;
