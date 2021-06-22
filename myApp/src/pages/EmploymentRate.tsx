import { IonCard, IonText, IonCardContent } from "@ionic/react";
import Tabs from "../components/Tabs";
import PageContainer from "../components/PageContainer";
import IframeView from "../components/IframeView";

const { TabPane } = Tabs;

function EmploymentRate() {
  return (
    <PageContainer title="毕业生就业率" pageId="employment-rate">
      <IonText className="title">本科毕业生就业构成情况</IonText>
      <IonCard className="flat-card">
        <IonCardContent>
          <IframeView id="8" noTitle={true}></IframeView>
        </IonCardContent>
      </IonCard>
      <IonText className="title">毕业研究生就业构成情况</IonText>
      <IonCard className="flat-card">
        <IonCardContent>
          <IframeView id="9" noTitle={true}></IframeView>
        </IonCardContent>
      </IonCard>
    </PageContainer>
  );
}

export default EmploymentRate;
