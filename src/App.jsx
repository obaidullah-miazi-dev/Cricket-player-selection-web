import '../public/players-data.json'
import Navbar from './Components/Navbar/Navbar'
import './App.css'
import Banner from './Components/Banner-section/Banner'
import AvailablePlayers from './Components/AvailablePlayersList/AvailablePlayers'
import { Suspense, useState } from 'react'
import SelectedPlayers from './Components/SelectedPlayersList/SelectedPlayers'

const fetchPlayers = async () => {
  const res = await fetch('/players-data.json')
  return res.json();
}

const playersPromise = fetchPlayers()

function App() {

  const [availableBalance, setAvailableBalance] = useState(600000000)
  const [toggle, setToggle] = useState(true)
  const [purchasedPlayers, setPurchasedPlayers] = useState([])

  const removePlayer = (p) => {
    const filteredPlayer = purchasedPlayers.filter(player => player.playerId!== p.playerId)
    setPurchasedPlayers(filteredPlayer)
    setAvailableBalance(availableBalance + p.biddingPrice)
  }

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      <Banner></Banner>

      <div className='md:w-11/12 mx-auto text-center md:text-left flex md:flex-row flex-col-reverse justify-between items-center font-bold mt-18'>
        <h2 className='text-3xl'>{toggle === true ? 'Available Players' : `Selected Players(${purchasedPlayers.length}/6)`}</h2>
        <div className='mb-5 md:mb-0'>
          <button onClick={() => setToggle(true)} className={`py-3 px-6 border-1 border-gray-200  border-r-0 rounded-l-xl ${toggle === true ? "bg-[#E7FE29]" : ''}`}>Available</button>
          <button onClick={() => setToggle(false)} className={`py-3 px-4 border-1 border-gray-200  border-l-0 rounded-r-xl ${toggle === false ? "bg-[#E7FE29]" : ''}`}>Selected (<span>{purchasedPlayers.length}</span>)</button>
        </div>
      </div>

      {
        toggle === true ? <Suspense fallback={<span className="loading loading-infinity w-80 mx-auto block mt-38"></span>}>
          <AvailablePlayers purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} playersPromise={playersPromise}></AvailablePlayers>
        </Suspense> :
          <SelectedPlayers removePlayer={removePlayer} purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers}></SelectedPlayers>
      }




    </>
  )
}

export default App
