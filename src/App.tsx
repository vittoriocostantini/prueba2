// App.tsx
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { setupIonicReact } from '@ionic/react';
import { AppRoutes } from "./routes";

// Core CSS required for Ionic components to work properly
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

// Optional CSS utils that can be commented out
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import '@ionic/react/css/palettes/dark.system.css'; // Dark mode

import './theme/variables.css'; // Theme variables

setupIonicReact();

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Cargando...</div>}>
                <AppRoutes />
            </Suspense>
        </BrowserRouter>
    );
};

export default App;