import React from 'react'
import Page_move_component from './Page_move_component'

const Page_nav = () => {
  return (
    <>
      <div className='my-4 flex justify-center items-center flex-wrap mx-4 text-center'>
        <Page_move_component to={"/medical"} type={ "医療"}/>
        <Page_move_component to={"/raising"} type={ "出産・子育て"}/>
        <Page_move_component to={"/education"} type={ "教育"}/>
        <Page_move_component to={"/emergency"} type={ "緊急"}/>
        <Page_move_component to={"/job"} type={ "就労"}/>
        <Page_move_component to={"/transportation"} type={ "交通"}/>
        <Page_move_component to={"/tax"} type={ "税金"}/>
        <Page_move_component to={"/dailylife"} type={ "日常生活"}/>
      </div>
    </>
  )
}

export default Page_nav