import '../public/players-data.json'
import Navbar from './Components/Navbar/Navbar'
import './App.css'
import Banner from './Components/Banner-section/Banner'
import AvailablePlayers from './Components/AvailablePlayersList/AvailablePlayers'
import { Suspense } from 'react'

const fetchPlayers = async () =>{
  const res = await fetch('/players-data.json')
  return res.json();
}

function App() {

  const playersPromise = fetchPlayers()

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>

      <Suspense>
        <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
      </Suspense>
    </>
  )
}

export default App
