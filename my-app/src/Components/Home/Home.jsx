import React from 'react'
// import Bot from './HomeComponents/Bot'
import LangList from './HomeComponents/LangList'
import MapComponent from './HomeComponents/MapComponent'
import News from './HomeComponents/News/News'
import Phone from './HomeComponents/Phone'
import SupportList from './HomeComponents/Support/SupportList'

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
      {/* <Bot /> */}
  </>
  )
}

export default Home