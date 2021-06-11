import {
  IonItem,
  IonLabel,
  IonNote
  } from '@ionic/react';
import { ChartItem } from '../data/charts';
import './ListItem.css';

interface ChartListItemProps {
  item: ChartItem;
}

const MessageListItem: React.FC<ChartListItemProps> = ({ item }) => {
  return (
    <IonItem routerLink={`/chart/${item.id}`} detail={false}>
      <div slot="start" className="dot dot-unread"></div>
      <IonLabel className="ion-text-wrap">
        <h2>
          {item.chartName}
        </h2>
        <h3>{item.type}</h3>
      </IonLabel>
    </IonItem>
  );
};

export default MessageListItem;
