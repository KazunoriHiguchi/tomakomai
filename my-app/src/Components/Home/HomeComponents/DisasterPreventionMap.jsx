import React from "react";
import GoogleMapReact from "google-map-react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";

const AnyReactComponent = () => (
  <div>
    <IconContext.Provider value={{ size: "1rem", color: "red" }}>
      <FaMapMarkerAlt />
    </IconContext.Provider>
    <h1>苫小牧市役所</h1>
  </div>
);

export default function DisasterPrevention() {
  const navigate = useNavigate();
  const defaultProps = {
    center: {
      lat: 42.6343539,
      lng: 141.6057353,
    },
    zoom: 11,
  };
  return (
    <>
      <div className="sm:mb-12">
        <h2 className="flex justify-center mt-8 mb-4 text-xl">Map</h2>
        <h3 className="flex justify-center mb-8">災害マップ</h3>
        <div className="w-4/5 h-screen mx-auto -z-10">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyCm-OdriiGGi3vHLH5hXk0VNfLW6lWNx4Q",
            }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent lat={42.6343539} lng={141.6057353} text="" />
          </GoogleMapReact>
        </div>
      </div>
      <div className="flex justify-center my-12">
        <button
          onClick={() => navigate(-1)}
          className="mx-auto bg-gray-500 text-white hover:bg-opacity-40 py-2 px-4 rounded"
        >
          戻る
        </button>
      </div>
    </>
  );
}
