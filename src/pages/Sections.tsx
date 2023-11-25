import { 
  IonContent,  IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, 
  IonCardContent, IonGrid, IonRow, IonCol, IonItem, IonLabel, IonList, IonNote, IonPage, } from '@ionic/react'

import MyHeader from './MyHeader'
// import './Home.css'
import { arrowBackCircle, arrowDownCircle, roseOutline, fitnessOutline, sync, logoBitcoin } from 'ionicons/icons';

const Sections: React.FC = () => {
  return (
    <IonPage>
      
      <MyHeader/>
      
      <IonList inset={true} className="ion-padding">
        <IonItem button={true}>
          <IonIcon color="primary" aria-hidden="true" icon={roseOutline} slot="start"></IonIcon>
          <IonLabel>Agriculture</IonLabel>
          <IonIcon color="secondary" slot="end" icon={arrowBackCircle} size="small"></IonIcon>
        </IonItem>
        <IonItem button={true}>
          <IonIcon color="primary" aria-hidden="true" icon={fitnessOutline} slot="start"></IonIcon>
          <IonLabel color="secondary">Healthcare</IonLabel>
          <IonIcon color="secondary" slot="end" icon={arrowBackCircle} size="small"></IonIcon>
        </IonItem>
        <IonItem button={true}>
          <IonIcon color="primary" aria-hidden="true" icon={sync} slot="start"></IonIcon>
          <IonLabel color="secondary">Sustainability</IonLabel>
          <IonIcon color="secondary" slot="end" icon={arrowBackCircle} size="small"></IonIcon>
        </IonItem>
        <IonItem button={true}>
          <IonIcon color="primary" aria-hidden="true" icon={logoBitcoin} slot="start"></IonIcon>
          <IonLabel color="primary">Web3</IonLabel>
          <IonIcon color="primary" slot="end" icon={arrowDownCircle} size="small"></IonIcon>
          
        </IonItem>
      </IonList>
        <IonContent>
        <blockquote>Welcome to the Realm of Web3
          <p>Where the future of the internet is being built. In the beginning, there was chaos.
            The cryptocurrency market was volatile, and the Web3 ecosystem was in its early stages of development. Companies and projects struggled to navigate this new landscape, and many failed.
            But then, a new breed of Projects emerged.</p>
          <p>These Projects were led by visionaries who saw the potential of Web3, and who were determined to help companies and projects succeed. They developed a deep understanding of the Web3 ecosystem, and they began to offer advisory services to help companies launch new projects, develop marketing campaigns, and build communities.
            GORZ is one of these pioneers.
            We are a team of experienced investors and advisors who are passionate about Web3. We believe that Web3 has the potential to revolutionize the way we interact with the internet, and we are committed to helping companies and projects succeed in this new landscape.
            Our journey began in the early days of Web3.
            We saw the potential of this new technology, and we were determined to be at the forefront of the revolution. Over the years, we have developed a deep understanding of the Web3 ecosystem, which allows us to generate sustainable income for our stakeholders.
          </p>
          <h3>Web3 Services:</h3>
          <h4>Investment Management: </h4>
          <p>GORZ is a leading provider of P2P investment solutions in the Web3 ecosystem, offering a wide range of investment products and services to both institutional and individual investors around the globe. Gorz's team of experienced ecosystem analysts helps clients make most informed investment decisions and develop strategies to mitigate risk, while leveraging Blockchain technology to ensure the security and transparency of its investment platform.</p>
          <h4>Marketing:</h4>
          <p>GORZ provides marketing services to companies and projects in the Web3 ecosystem, or brands wishing to enter the ecosystem. We help our clients develop and execute marketing solutions that are targeted to their specific audiences.</p>
          <h4>Community Building: </h4>
          <p>GORZ helps clients create and implement strategies for building engaged and thriving communities around their products and services. The company's team of experienced community builders has a deep understanding of the Web3 landscape, challenges and opportunities that come with building elite communities in this ecosystem.</p>
          <h4>Investing in Web3 infrastructure:</h4>
          <p>Growth of Web3 is dependent on the development of robust and scalable infrastructures such as layer-2 solutions, decentralized platforms and permissionless protocols just to mention a few. We Focus on projects that are building the foundational technologies that will power the next generation of the ecosystem.</p>
          <h4>Supporting early-stage Web3 projects:</h4>
          <p> GORZ helps to accelerate the development of the unique Web3 projects and bring new high-potential products and services to markets. The company's adept team of Web3 analysts has a keen understanding of the skills, knowledge, capabilities, and expertise required, and the potential presented by players. This helps us safeguard our stakeholder’s interests against market fluctuations and risks, while aligned with future changes.</p>
          <h4>Promoting Web3 education and adoption:</h4>
          <p>GORZ is committed to raising awareness of Web3 and its potential benefits to a wider audience. To this end, GORZ sponsors events, creates educational content, and supports Web3-focused media outlets. GORZ's educational programs help bring awareness to the next generation of Web3 enthusiasts. With our educational content we wish to help people of all levels of expertise learn about Web3 and its potential applications. By supporting and collaborating with Web3-focused media outlets, GORZ helps to amplify the voices of Web3 thought leaders and reach a wider audience.</p>
          <h4>Supporting & Promoting Web3 Gaming:</h4>
          <p>GORZ’s team of experienced and seasoned veteran gamers are most qualified to both support Web3 and IRL gaming projects with professional state-of-the-art services and implement investment solutions wherever most visionary gaming potentials exist.</p>
          <h3>Join us on our journey, and together we can build a more prosperous future for the Web3.</h3>
        </blockquote>
      </IonContent>
      
      {/*<IonContent className="ion-padding">
         <text>Welcome to the Realm of Web3
          <p >Where the future of the internet is being built. In the beginning, there was chaos.
            The cryptocurrency market was volatile, and the Web3 ecosystem was in its early stages of development. Companies and projects struggled to navigate this new landscape, and many failed.
            But then, a new breed of Projects emerged.</p>
          <p>These Projects were led by visionaries who saw the potential of Web3, and who were determined to help companies and projects succeed. They developed a deep understanding of the Web3 ecosystem, and they began to offer advisory services to help companies launch new projects, develop marketing campaigns, and build communities.
            GORZ is one of these pioneers.
            We are a team of experienced investors and advisors who are passionate about Web3. We believe that Web3 has the potential to revolutionize the way we interact with the internet, and we are committed to helping companies and projects succeed in this new landscape.
            Our journey began in the early days of Web3.
            We saw the potential of this new technology, and we were determined to be at the forefront of the revolution. Over the years, we have developed a deep understanding of the Web3 ecosystem, which allows us to generate sustainable income for our stakeholders.
          </p>
          <h3>Web3 Services:</h3>
          <h4>Investment Management: </h4>
          <p>GORZ is a leading provider of P2P investment solutions in the Web3 ecosystem, offering a wide range of investment products and services to both institutional and individual investors around the globe. Gorz's team of experienced ecosystem analysts helps clients make most informed investment decisions and develop strategies to mitigate risk, while leveraging Blockchain technology to ensure the security and transparency of its investment platform.</p>
          <h4>Marketing:</h4>
          <p>GORZ provides marketing services to companies and projects in the Web3 ecosystem, or brands wishing to enter the ecosystem. We help our clients develop and execute marketing solutions that are targeted to their specific audiences.</p>
          <h4>Community Building: </h4>
          <p>GORZ helps clients create and implement strategies for building engaged and thriving communities around their products and services. The company's team of experienced community builders has a deep understanding of the Web3 landscape, challenges and opportunities that come with building elite communities in this ecosystem.</p>
          <h4>Investing in Web3 infrastructure:</h4>
          <p>Growth of Web3 is dependent on the development of robust and scalable infrastructures such as layer-2 solutions, decentralized platforms and permissionless protocols just to mention a few. We Focus on projects that are building the foundational technologies that will power the next generation of the ecosystem.</p>
          <h4>Supporting early-stage Web3 projects:</h4>
          <p> GORZ helps to accelerate the development of the unique Web3 projects and bring new high-potential products and services to markets. The company's adept team of Web3 analysts has a keen understanding of the skills, knowledge, capabilities, and expertise required, and the potential presented by players. This helps us safeguard our stakeholder’s interests against market fluctuations and risks, while aligned with future changes.</p>
          <h4>Promoting Web3 education and adoption:</h4>
          <p>GORZ is committed to raising awareness of Web3 and its potential benefits to a wider audience. To this end, GORZ sponsors events, creates educational content, and supports Web3-focused media outlets. GORZ's educational programs help bring awareness to the next generation of Web3 enthusiasts. With our educational content we wish to help people of all levels of expertise learn about Web3 and its potential applications. By supporting and collaborating with Web3-focused media outlets, GORZ helps to amplify the voices of Web3 thought leaders and reach a wider audience.</p>
          <h4>Supporting & Promoting Web3 Gaming:</h4>
          <p>GORZ’s team of experienced and seasoned veteran gamers are most qualified to both support Web3 and IRL gaming projects with professional state-of-the-art services and implement investment solutions wherever most visionary gaming potentials exist.</p>
          <h3>Join us on our journey, and together we can build a more prosperous future for the Web3.</h3>
        </text> 
      </IonContent>*/}
      
    </IonPage>
  );
};

export default Sections