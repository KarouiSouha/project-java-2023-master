import React from 'react'
import Hero from '../../components/landingPage/Hero'
import About from '../../components/landingPage/About'
import BestSellers from '../../components/landingPage/BestSellers'
import GetStarted from '../../components/landingPage/GetStarted'
import World from '../../components/landingPage/World'
import Insights from '../../components/landingPage/Insights'
import WhatsNew from '../../components/landingPage/WhatsNew'
import Footer from '../../components/landingPage/Footer'

function Home() {
  return (
    <div>
    <div className='bg-primary-black overflow-hidden'>

        <Hero/>
        <About/>
        <WhatsNew/>
        <BestSellers/>
        <GetStarted/>
        <World/>
        <Insights/>
        <Footer/>

    </div></div>
  )
}

export  {Home}