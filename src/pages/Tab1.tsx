import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import PageOne from './page-one';
import PageTwo from './page-two';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/react';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton routerLink="/settings">Go to Settings</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
