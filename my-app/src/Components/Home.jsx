import React from 'react'
import Bot from './Bot'
import LangList from './LangList'
import MapComponent from './MapComponent'
import News from './News'
import Phone from './Phone'
import SupportList from './SupportList'

const Home = () => {
  return (
    <>
        <LangList />
        <SupportList />
          <div className='grid grid-cols-1 sm:grid-cols-2 bg-gray-300'>
            <MapComponent />
            <Phone />
          </div>
        <News />
        <Bot />
    </>
  )
}

export default Home