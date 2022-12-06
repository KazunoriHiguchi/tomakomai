import React from 'react'
import Bot from './Home-components/Bot'
import LangList from '../Global_components/LangList'
import MapComponent from './Home-components/MapComponent'
import News from './Home-components/News/News'
import Phone from './Home-components/Phone'
import SupportList from './Home-components/Support/SupportList'

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