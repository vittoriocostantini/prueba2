import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon } from '@ionic/react';
import { chatbubbles } from 'ionicons/icons';

const Home: React.FC = () => {
  return (
    <IonPage >
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen >
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton routerLink="/profile">
          <IonIcon icon={chatbubbles} />
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
