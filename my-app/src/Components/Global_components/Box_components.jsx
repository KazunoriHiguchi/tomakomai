import React from 'react'
import { Link } from "react-router-dom";


export default function Box_component(props) {
  return (
    < >
      <Link 
       className= "flex flex-col items-center bg-blue-200 rounded-3xl h-44 w-52 m-2"
       to={props.to}
      >
        <h1 className="text-center text-xl font-bold">{props.type}</h1>
        <img className='block p-4 rounded-full w-2/3' src={props.src} alt={props.alt}/>
      </Link>
    </>
  )
}

