import React from 'react'

export default function HeroComponent(props) {
  return (
    <div className='w-full'>
      <div className='flex mx-auto justify-center items-center my-4 w-auto h-auto'>
        <h1 className='lg:text-3xl  md:text-2xl text-xl font-bold m-4 bg-blue-300 p-8 rounded-full'>{props.type} <span className='text-blue-700 font-bold'>{props.span}</span></h1>
      </div>
    </div>
  );
};
