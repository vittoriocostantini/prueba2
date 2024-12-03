import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/react";

const SubPages1: React.FC = (props: any) => {
    return (
      <IonPage id="subpages1" >
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
  
  export default SubPages1;
  