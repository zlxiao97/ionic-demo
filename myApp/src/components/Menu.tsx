import { useEffect } from "react";
import {
  IonMenu,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonItem,
  IonLabel,
  IonIcon,
  IonItemGroup,
  IonItemDivider,

} from "@ionic/react";
import {
  peopleSharp,
  pulseSharp,
  airplaneSharp,
  bagSharp,
  walletSharp,
  accessibilitySharp,
  trendingUpSharp
} from "ionicons/icons";

import "./Menu.css";

const Menu = () => {
  return (
    <IonMenu side="start" content-id="app" menu-id="menu">
      <IonContent>
        <IonItemGroup>
          <IonItemDivider>
            <IonLabel>
              <h3>就业基本情况</h3>
            </IonLabel>
          </IonItemDivider>
          <IonItem routerLink={"/scale"} detail={false} className="link">
            <IonIcon icon={peopleSharp} slot="start"></IonIcon>
            <IonLabel>
              <h3>毕业生规模结构</h3>
            </IonLabel>
          </IonItem>
          <IonItem routerLink={"/employment"} detail={false} className="link">
            <IonIcon icon={pulseSharp} slot="start"></IonIcon>
            <IonLabel>
              <h3>毕业生就业率</h3>
            </IonLabel>
          </IonItem>
          <IonItem routerLink={"/province"} detail={false} className="link">
            <IonIcon icon={airplaneSharp} slot="start"></IonIcon>
            <IonLabel>
              <h3>毕业生就业流向</h3>
            </IonLabel>
          </IonItem>
        </IonItemGroup>
        <IonItemGroup>
          <IonItemDivider>
            <IonLabel>
              <h3>就业相关分析</h3>
            </IonLabel>
          </IonItemDivider>
          <IonItem routerLink={"/jobChannel"} detail={false} className="link">
            <IonIcon icon={bagSharp} slot="start"></IonIcon>
            <IonLabel>
              <h3>求职情况</h3>
            </IonLabel>
          </IonItem>
          <IonItem routerLink={"/salaryLevel"} detail={false} className="link">
            <IonIcon icon={walletSharp} slot="start"></IonIcon>
            <IonLabel>
              <h3>薪酬水平</h3>
            </IonLabel>
          </IonItem>
          <IonItem routerLink={"/literacy"} detail={false} className="link">
            <IonIcon icon={accessibilitySharp} slot="start"></IonIcon>
            <IonLabel>
              <h3>毕业生素养评估</h3>
            </IonLabel>
          </IonItem>
        </IonItemGroup>
        <IonItemGroup>
          <IonItemDivider>
            <IonLabel>
              <h3>就业发展趋势分析</h3>
            </IonLabel>
          </IonItemDivider>
          <IonItem routerLink={"/trend"} detail={false} className="link">
            <IonIcon icon={trendingUpSharp} slot="start"></IonIcon>
            <IonLabel>
              <h3>就业发展趋势分析</h3>
            </IonLabel>
          </IonItem>
        </IonItemGroup>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
