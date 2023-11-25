import React, { useState, useEffect, createContext, useContext } from 'react'
import Papa from 'papaparse'


export const DataContext = createContext()

function CsvDataProvider({ children }) {
    const [data, setData] = useState([])
    
    useEffect(() => {
        fetch('/exp.csv')
            .then(response => response.text())
            .then(data => {
                let parsedData = Papa.parse(data, { header: true }).data
                setData(parsedData)
                parsedData = parsedData.map(item => {
                    item.CURRENCY_PRICE = item.CURRENCY_PRICE/100000000
                    return item
                })
            })
            .catch(error => {
                console.error(`Error reading CSV file: ${error.message}`)
            })
        }, [])
        
        
        return (
            <DataContext.Provider value={ data }>
        {children}
    </DataContext.Provider>
)
}

export default CsvDataProvider
//////////////////////////////////////////////////////////////
// const [buyData, setBuyData] = useState([])
// const [sellData, setSellData] = useState([])

// let filteredData = parsedData.filter(item => Object.values(item).some(value => value.includes(filter)))
// setData(filteredData)
// setBuyData(filteredData.filter(item => item.SIDE === 'SELL'))
// setSellData(filteredData.filter(item => item.SIDE === 'BUY'))
//////////////////////////////////////////////////////////////////////
// const columns = React.useMemo(
//     () => [
//       { Header: 'Symbol --', accessor: 'SYMBOL' },
//       { Header: 'Name --', accessor: 'NAME' },
//       { Header: 'Buy/Sell --', accessor: 'SIDE' },
//       { Header: 'Currency --', accessor: 'CURRENCY' },
//       { Header: 'Price --', accessor: 'CURRENCY_PRICE' },
//       { Header: 'Remaining (QTY) --', accessor: 'REMAIN_QTY' },
//       { Header: 'Volume (QTY) --', accessor: 'ORIG_QTY' },
//     ],
//     []
//   )

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     rows: foodRows,
//     prepareRow,
//   } = useTable({ columns, data })

//   const {
//     getTableProps: getBuyTableProps,
//     getTableBodyProps: getBuyTableBodyProps,
//     headerGroups: buyHeaderGroups,
//     rows: buyRows,
//     prepareRow: prepareBuyRow,
//   } = useTable({ columns, data: buyData })

//   const {
//     getTableProps: getSellTableProps,
//     getTableBodyProps: getSellTableBodyProps,
//     headerGroups: sellHeaderGroups,
//     rows: sellRows,
//     prepareRow: prepareSellRow,
//   } = useTable({ columns, data: sellData })