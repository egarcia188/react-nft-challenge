import React from 'react';
import './App.css';
import CollectionCard from './components/CollectionCard';
import Header from './components/Header';
import { useState, useEffect } from 'react'
import axios from 'axios'
import Rwbeelist from './components/Rwbeelist';
import Main from './components/Main';


function App() {
  const [rwbeeListData, setRwbeeListData] =  useState([])
  const [selectedRwbee, setSelectedRwbee] = useState(0)

  useEffect(() => {
    const getMyNfts = async () => {
      const openSeaData = await axios.get(
        'https://testnets-api.opensea.io/assets?asset_contract_address=0xB418eD3f6120E430BdC5a336528E440A6FB4d9e8&order_direction=asc'
        )
        console.log(openSeaData.data.assets)
        setRwbeeListData(openSeaData.data.assets)
    }

    return getMyNfts()
  }, [])
  
  return (
    <div className='app'>
      <Header />
      {rwbeeListData.length > 0 && (
        <>
        <Main rwbeeListData={rwbeeListData} selectedRwbee={selectedRwbee}/>
          <Rwbeelist rwbeeListData={rwbeeListData} setSelectedRwbee={setSelectedRwbee} 
          />
          </>
          )}
    </div>
  )
}

export default App;
