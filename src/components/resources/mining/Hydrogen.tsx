import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonBadge, } from '@ionic/react'
import React, { useState, useContext } from 'react'
import { DataContext } from '../../../pages/CsvDataProvider'

const Hydrogen: React.FC = () => {

  const data = useContext(DataContext)
  const filteredData = data.filter(item => item.key === 'HYG')
  const buyData = filteredData.filter(item => item.SIDE === 'SELL')
  const sellData = filteredData.filter(item => item.SIDE === 'BUY')

  return (
      <IonCard>
          <img alt='Hydrogen' src='sHYG.webp' />
          <IonCardHeader>
            <IonCardTitle>
              <a href='https://play.staratlas.com/market/HYDR4EPHJcDPcaLYUcNCtrXUdt1PnaN4MvE655pevBYp/'>Hydrogen</a>
          </IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
        {buyData.length > 0 ? (
          <>
            <IonBadge color="success">{buyData[0][4]}</IonBadge> 
          </>
        ) : (
          <IonBadge color="success">no Buy Order</IonBadge>
        )}

        <p>{sellData.length > 0 ? (
          <>
          <IonBadge color="danger">{sellData[0][4]}</IonBadge> 
          </>
        ) : (
          <IonBadge color="danger">no Sell Order</IonBadge>
        )}</p>
          </IonCardContent>
          </IonCard>
)
}

export default Hydrogen