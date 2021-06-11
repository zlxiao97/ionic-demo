import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton
} from "@ionic/react";

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
        <h3>本科毕业生院系结构</h3>
        <iframe
          width="600"
          height="400"
          seamless
          frameBorder="0"
          scrolling="no"
          src="https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=15&standalone=1&height=400"
        ></iframe>
        <h3>毕业研究生院系结构</h3>
        <iframe
          width="600"
          height="400"
          seamless
          frameBorder="0"
          scrolling="no"
          src="https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=17&standalone=1&height=400"
        ></iframe>
        <h3>总体毕业生院系结构</h3>
        <iframe
          width="600"
          height="400"
          seamless
          frameBorder="0"
          scrolling="no"
          src="https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=18&standalone=1&height=400"
        ></iframe>
        <h3>本科毕业生生源地结构</h3>
        <iframe
          width="600"
          height="400"
          seamless
          frameBorder="0"
          scrolling="no"
          src="https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=19&standalone=1&height=400"
        ></iframe>
        <h3>毕业研究生生源地结构</h3>
        <iframe
          width="600"
          height="400"
          seamless
          frameBorder="0"
          scrolling="no"
          src="https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=20&standalone=1&height=400"
        ></iframe>
        <h3>总体毕业生生源地结构</h3>
        <iframe
          width="600"
          height="400"
          seamless
          frameBorder="0"
          scrolling="no"
          src="https://graduates-employment-reports-odoo-superset.dev.wh.digitalchina.com/superset/explore/?r=21&standalone=1&height=400"
        ></iframe>
      </IonContent>
    </IonPage>
  );
}

export default Scale;
