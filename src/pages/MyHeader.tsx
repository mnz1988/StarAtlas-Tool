import { IonHeader, IonToolbar } from '@ionic/react'
import './MyHeader.css'

const MyHeader: React.FC = () => {
    return (
        <IonHeader className="ion-no-border">{/*remove shadow box and border of Header with ion-no-border class  */}
         
        <IonToolbar>

            <img 
                className="logo-header" 
                src="Logo-Top-w.svg" 
                alt="Gorz Logo - The most profitable Type 1 Community" 
            />
          
        </IonToolbar>
      </IonHeader>

      /* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" /> */
    )
}

export default MyHeader