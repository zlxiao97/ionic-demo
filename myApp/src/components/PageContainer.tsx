import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonButton,
  IonIcon
} from "@ionic/react";
import { useLocation } from "react-router";
import { ellipsisHorizontal } from "ionicons/icons";


interface PageProps {
  title: string;
  className?: string;
  pageId: string;
  children: any;
}

const PageContainer: React.FC<PageProps> = ({
  children,
  title,
  className,
  pageId
}) => {
  const location = useLocation();
  const handleShare = async () => {
    try {
      await navigator.share({
        title: `大学生就业数据分析：${title}`,
        url: `${location.pathname}`
      });
      console.log("Data was shared successfully");
    } catch (e) {
      console.error("Share failed:", e.message);
    }
  };
  return (
    <IonPage className={className} id={pageId}>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonMenuButton auto-hide={false} menu="menu"></IonMenuButton>
          </IonButtons>
          <IonTitle>{title}</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={handleShare}>
              <IonIcon slot="icon-only" icon={ellipsisHorizontal} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent scrollX={true} className="content">
        {children}
      </IonContent>
    </IonPage>
  );
};

export default PageContainer;
