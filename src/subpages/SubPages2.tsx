import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/react";

const SubPages2: React.FC = () => {
    return (
      <IonPage >
        <IonHeader>
          <IonToolbar>
            <IonTitle>SubPages</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen >
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">SubPages</IonTitle>
            </IonToolbar>
          </IonHeader>
        </IonContent>
      </IonPage>
    );
  };
  
  export default SubPages2;
