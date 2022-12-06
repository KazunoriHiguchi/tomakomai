import React from 'react'

export default function Hero_component(props) {
  return (
    <div className='w-full'>
      <div className='flex mx-auto justify-center items-center my-12 w-auto h-48'>
        <h1 className='lg:text-5xl  md:text-4xl text-3xl font-bold m-16 bg-blue-300 p-12 rounded-full'>{props.type} <span className='text-blue-700 font-bold'>{props.span}</span></h1>
      </div>
    </div>
  );
};
