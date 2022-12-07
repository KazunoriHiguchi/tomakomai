import React from 'react'
import { Link } from "react-router-dom";

function PageMoveComponent(props) {
  return (
      <Link to={props.to} className='mx-2 my-1 md:w-1/12 sm:w-5/12 w-10/12 h-8 flex flex-col justify-center items-center bg-gray-200 rounded-lg'>
        <img className='w-6' src={props.img} alt=""/>
        <h1 className='text-xs'>{props.type}</h1>
      </Link>
  );
}

const Page_nav = () => {
  return (
    <>
      <div className='my-4 flex justify-center items-center flex-wrap mx-4 text-center'>
        <PageMoveComponent to={"/medical"} type={ "医療"}/>
        <PageMoveComponent to={"/raising"} type={ "出産・子育て"}/>
        <PageMoveComponent to={"/education"} type={ "教育"}/>
        <PageMoveComponent to={"/emergency"} type={ "緊急"}/>
        <PageMoveComponent to={"/job"} type={ "就労"}/>
        <PageMoveComponent to={"/transportation"} type={ "交通"}/>
        <PageMoveComponent to={"/tax"} type={ "税金"}/>
        <PageMoveComponent to={"/dailylife"} type={ "日常生活"}/>
      </div>
    </>
  )
}

export default Page_nav