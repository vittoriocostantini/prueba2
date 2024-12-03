import React from 'react';
import { IonButton, IonHeader, IonContent, IonNavLink, IonToolbar, IonTitle, IonFooter } from '@ionic/react';
import { IonPage } from '@ionic/react';
import PageTwo from './page-two';

function PageOne() {
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Page One</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <h1>Page One</h1>
        <IonNavLink routerDirection="forward" component={() => <PageTwo />}>
          <IonButton>Go to Page Two</IonButton>
        </IonNavLink>
      </IonContent>
        <IonFooter>
          <IonToolbar>
            <IonTitle>Footer</IonTitle>
          </IonToolbar>
       </IonFooter>
    </IonPage>
  );
}

export default PageOne;
