// routes.tsx
import React, { lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// Importar módulos perezosos
const RootTabPageModule = lazy(() => import("./root-tab/RootTabPageModule"));

export const AppRoutes: React.FC = () => {
    return (
        <Switch>
            <Route path="/root" component={RootTabPageModule} />
            {/* Redirección por defecto si no se encuentra la ruta */}
            <Redirect from="/" to="/root" />
        </Switch>
    );
};

