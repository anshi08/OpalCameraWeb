import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Tadpole from './components/Tadpole'
// import OpalLogo from './assets/logo-black.3ec16790.png'
import './App.css'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Navbar />
    <Banner />
    <Tadpole />
    {/* <img src={OpalLogo} className='mt-2 OpalLogo' /> */}
    <Footer />
    </>
  )
}

export default App
