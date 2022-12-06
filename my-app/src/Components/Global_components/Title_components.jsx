import React from 'react'

export default function Title_component(title) {
  return (
    <div className='mx-10 my-12 w-9/12 h-auto'>
      <h1 className='sm:text-3xl text-xl font-bold border-b-4 border-black'>{title.type}</h1>
    </div>
  )
}