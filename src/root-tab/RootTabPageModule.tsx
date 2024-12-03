// root-tab/RootTabPageModule.tsx
import React from "react";
import { IonTabs, IonTabBar, IonTabButton, IonLabel, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route, Redirect } from "react-router-dom";
import Tab1 from "../pages/Tab1";
import Tab2 from "../pages/Tab2"; // Asegúrate de tener estos componentes
import Tab3 from "../pages/Tab3"; // Asegúrate de tener estos componentes

const RootTabPageModule: React.FC = () => {
    return (
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    <Route path="/root/tab1" component={Tab1} exact />
                    {/*<Route path="/root/tab2" component={Tab2} exact />
                    <Route path="/root/tab3" component={Tab3} exact />
                    {/* Redirección por defecto */}
                    <Redirect from="/root" to="/root/tab1" />
                </IonRouterOutlet>

                <IonTabBar slot="bottom">
                    <IonTabButton tab="tab1" href="/root/tab1">
                        <IonLabel>Tab 1</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="tab2" href="/root/tab2">
                        <IonLabel>Tab 2</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="tab3" href="/root/tab3">
                        <IonLabel>Tab 3</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    );
};

export default RootTabPageModule;