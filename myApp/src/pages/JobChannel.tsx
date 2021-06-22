import {
  IonCard,
  IonCardContent,
  IonText
} from "@ionic/react";
import PageContainer from "../components/PageContainer";
import IframeView from "../components/IframeView";

function JobChannel() {
  return (
    <PageContainer title="求职情况" pageId="job-channel">
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
    </PageContainer>
  );
}

export default JobChannel;
