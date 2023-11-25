import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonBadge, } from '@ionic/react'
import React, { useState, useEffect } from 'react'
import Papa from 'papaparse'
import { useTable } from 'react-table'

const Food: React.FC = () => {
  
  const [data, setData] = useState([])
  const [buyData, setBuyData] = useState([])
  const [sellData, setSellData] = useState([])

  useEffect(() => {
    fetch('/exp.csv')
      .then(response => response.text())
      .then(data => {
        let parsedData = Papa.parse(data, { header: true }).data
        let filteredData = parsedData.filter(item => Object.values(item).some(value => value.includes('FOOD')))
        setData(filteredData)
        setBuyData(filteredData.filter(item => item.SIDE === 'SELL'))
        setSellData(filteredData.filter(item => item.SIDE === 'BUY'))
        parsedData = parsedData.map(item => {
          item.CURRENCY_PRICE = item.CURRENCY_PRICE/100000000
          return item
        })
      })
      .catch(error => {
        console.error(`Error reading CSV file: ${error.message}`)
      })
  }, [])
  
  
  
  const columns = React.useMemo(
    () => [
      { Header: 'Symbol --', accessor: 'SYMBOL' },
      { Header: 'Name --', accessor: 'NAME' },
      { Header: 'Buy/Sell --', accessor: 'SIDE' },
      { Header: 'Currency --', accessor: 'CURRENCY' },
      { Header: 'Price --', accessor: 'CURRENCY_PRICE' },
      { Header: 'Remaining (QTY) --', accessor: 'REMAIN_QTY' },
      { Header: 'Volume (QTY) --', accessor: 'ORIG_QTY' },
    ],
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows: foodRows,
    prepareRow,
  } = useTable({ columns, data })

  const {
    getTableProps: getBuyTableProps,
    getTableBodyProps: getBuyTableBodyProps,
    headerGroups: buyHeaderGroups,
    rows: buyRows,
    prepareRow: prepareBuyRow,
  } = useTable({ columns, data: buyData })

  const {
    getTableProps: getSellTableProps,
    getTableBodyProps: getSellTableBodyProps,
    headerGroups: sellHeaderGroups,
    rows: sellRows,
    prepareRow: prepareSellRow,
  } = useTable({ columns, data: sellData })

  
  return (

    <><IonCard>
      <img alt='Arco' src='sARCO.webp' />
      <IonCardHeader>
        <IonCardTitle>
          <a href='https://play.staratlas.com/market/ARCoQ9dndpg6wE2rRexzfwgJR3NoWWhpcww3xQcQLukg/'>Arco</a>
        </IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
      {buyData.length > 0 ? (
        <>
          <IonBadge color="success">{buyData[0].CURRENCY_PRICE}</IonBadge> 
          {/* ### Total {buyData.length} Buy Orders
          <h3>*** Top Buy Orders ***</h3>
          <table {...getBuyTableProps()}>
            <thead>
              {buyHeaderGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    ['SYMBOL', 'CURRENCY', 'CURRENCY_PRICE', 'REMAIN_QTY', 'ORIG_QTY'].includes(column.id) && <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getBuyTableBodyProps()}>
              {buyRows.map(row => {
                prepareBuyRow(row)
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                      return ['SYMBOL', 'CURRENCY', 'CURRENCY_PRICE', 'REMAIN_QTY', 'ORIG_QTY'].includes(cell.column.id) && <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table> */}
        </>
      ) : (
        'There is no buy orders for this NFT'
      )}

      <p>{sellData.length > 0 ? (
        <>
        <IonBadge color="danger">{sellData[0].CURRENCY_PRICE}</IonBadge> 
        {/* ### Total {sellData.length} Sell Orders 
        <h3>*** Top Sell Orders ***</h3>
        <table {...getSellTableProps()}>
          <thead>
              {sellHeaderGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    ['SYMBOL', 'CURRENCY', 'CURRENCY_PRICE', 'REMAIN_QTY', 'ORIG_QTY'].includes(column.id) && <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                  ))}
                </tr>
              ))}
          </thead>
          <tbody {...getSellTableBodyProps()}>
              {sellRows.map(row => {
                prepareSellRow(row)
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                      return ['SYMBOL', 'CURRENCY', 'CURRENCY_PRICE', 'REMAIN_QTY', 'ORIG_QTY'].includes(cell.column.id) && <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    })}
                  </tr>
                )
              })}
          </tbody>
        </table> */}

        </>
      ) : (
        'There is no buy orders for this NFT'
      )}</p>
        </IonCardContent></IonCard>
  </>
)
}

export default Food