import { IonCard, IonCardContent, IonText } from "@ionic/react";
import IframeView from "../components/IframeView";
import PageContainer from "../components/PageContainer";

function Literacy() {
  return (
    <PageContainer title="毕业生素养评估" pageId="literacy">
      <IonText className="title">专业相关度</IonText>
      <IonCard className="flat-card">
        <IonCardContent>
          <IframeView id="22" noTitle={true}></IframeView>
        </IonCardContent>
      </IonCard>
      <IonText className="title">工作适应度</IonText>
      <IonCard className="flat-card">
        <IonCardContent>
          <IframeView id="23" noTitle={true}></IframeView>
        </IonCardContent>
      </IonCard>
      <IonText className="title">职业期待吻合度</IonText>
      <IonCard className="flat-card">
        <IonCardContent>
          <IframeView id="24" noTitle={true}></IframeView>
        </IonCardContent>
      </IonCard>
      <IonText className="title">工作满意度</IonText>
      <IonCard className="flat-card">
        <IonCardContent>
          <IframeView id="25" noTitle={true} height={300}></IframeView>
        </IonCardContent>
      </IonCard>
      <IonText className="title">职业能力满足度</IonText>
      <IonCard className="flat-card">
        <IonCardContent>
          <IframeView id="26" noTitle={true}></IframeView>
        </IonCardContent>
      </IonCard>
      <IonText className="title">用人单位对毕业生满意度</IonText>
      <IonCard className="flat-card last-card">
        <IonCardContent>
          <IframeView id="27" noTitle={true}></IframeView>
        </IonCardContent>
      </IonCard>
    </PageContainer>
  );
}

export default Literacy;
