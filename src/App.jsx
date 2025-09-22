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

function App() {

  const playersPromise = fetchPlayers()
  const [toggle, setToggle] = useState(true)

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>

      <div className='md:w-11/12 mx-auto flex justify-between items-center font-bold mt-18'>
        <h2 className='text-3xl'>Available Players</h2>
        <div>
          <button onClick={() => setToggle(true)} className={`py-3 px-6 border-1 border-gray-200  border-r-0 rounded-l-xl ${toggle === true ? "bg-[#E7FE29]" : ''}`}>Available</button>
          <button onClick={() => setToggle(false)} className={`py-3 px-4 border-1 border-gray-200  border-l-0 rounded-r-xl ${toggle === false ? "bg-[#E7FE29]" : ''}`}>Selected (<span>0</span>)</button>
        </div>
      </div>

      {
        toggle === true ? <Suspense fallback={<span className="loading loading-infinity w-80 mx-auto block mt-38"></span>}>
          <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
        </Suspense> : <SelectedPlayers></SelectedPlayers>
      }




    </>
  )
}

export default App
