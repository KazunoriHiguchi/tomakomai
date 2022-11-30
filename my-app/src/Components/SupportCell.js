import React from "react";

export default function SupportCell(props) {
  return (
    <div>
      <a href="/" className="">
        <img src={props.img} alt={props.alt} className="hover:opacity-50 object-cover w-full h-36 md:h-48 lg:h-60"/>
      </a>
      <h3 className="flex justify-center bg-white py-2">{props.type}</h3>
    </div>
  );
}
