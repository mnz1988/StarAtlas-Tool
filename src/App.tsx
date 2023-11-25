import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import CsvDataProvider from './pages/CsvDataProvider'
import { IonApp, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import Mining from './pages/Mining'
import Craft from './pages/Craft'

/* Core CSS required for Ionic components to work properly */ import '@ionic/react/css/core.css';
/* Basic CSS for apps built with Ionic */ import '@ionic/react/css/normalize.css'; import '@ionic/react/css/structure.css'; import '@ionic/react/css/typography.css';
/* Optional CSS utils that can be commented out */ import '@ionic/react/css/padding.css'; import '@ionic/react/css/float-elements.css'; import '@ionic/react/css/text-alignment.css'; import '@ionic/react/css/text-transformation.css'; import '@ionic/react/css/flex-utils.css'; import '@ionic/react/css/display.css';
/* Theme variables */ import './theme/variables.css'

import './main.css'

setupIonicReact()

const App: React.FC = () => (
  <IonApp>
    <CsvDataProvider>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/mining"><Mining /></Route>
          <Route exact path="/craft"><Craft /></Route>
          {/* <Route path="/food"><Food /></Route> */}
          <Route exact path="/"><Redirect to="/mining" /></Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom" >
          <IonTabButton tab="mining" href="/mining"> {/* <IonIcon aria-hidden="true" icon={triangle} /> */}
            <IonLabel ><h2><strong>Mining</strong></h2 ></IonLabel></IonTabButton>

          <IonTabButton tab="craft" href="/craft"> {/* <IonIcon aria-hidden="true" icon={ellipse} /> */}
            <IonLabel><h2 ><strong>Craft</strong></h2 ></IonLabel></IonTabButton>


        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
    </CsvDataProvider>
  </IonApp>
)

export default App