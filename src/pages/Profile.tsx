import React from 'react';
import { IonButton, IonContent } from '@ionic/react';

import ProfileDetails from './ProfileDetails';

function Profile({ nav }: { nav: HTMLIonNavElement }) {
  const navigateToPageTwo = () => nav.push(ProfileDetails, { nav });
  return (
    <IonContent class="ion-padding">
      <h1>Profile</h1>
      <IonButton onClick={navigateToPageTwo}>Go to Profile Details</IonButton>
    </IonContent>
  );
}

export default Profile;