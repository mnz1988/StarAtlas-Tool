import { IonContent, IonPage, IonGrid, IonRow, IonCol, } from '@ionic/react'
import MyHeader from './MyHeader'
import React from 'react'
import Arco from '../components/resources/mining/Arco'
import Biomass from '../components/resources/mining/Biomass'
import Carbon from '../components/resources/mining/Carbon'
import Hydrogen from '../components/resources/mining/Hydrogen'
import './Mining.css'


const Mining: React.FC = () => {
  
return (
  <IonPage>

    <MyHeader/>

      <IonContent fullscreen className="ion-padding"><IonGrid >

        <IonRow>
          <IonCol size-xs="12" size-sm="12" size-md="3" size-lg="3" size-xl="3"><Arco /></IonCol>
          <IonCol size-xs="12" size-sm="12" size-md="3" size-lg="3" size-xl="3"><Biomass /></IonCol>
          <IonCol size-xs="12" size-sm="12" size-md="3" size-lg="3" size-xl="3"><Carbon /></IonCol>
          <IonCol size-xs="12" size-sm="12" size-md="3" size-lg="3" size-xl="3"><Hydrogen /></IonCol>
        </IonRow>

      </IonGrid></IonContent>
      
    </IonPage>
    
)}

export default Mining