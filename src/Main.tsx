import React from 'react';
import { IonNav } from '@ionic/react';

import PageOne from './pages/page-one';

function Main() {
  return <IonNav root={() => <PageOne />}></IonNav>;
}
export default Main;
