import React, { useState } from 'react'
import  ReactMapGl, { Marker, Popup } from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import Image from "next/image";
function Map() {
  const [viewPort, setViewPort] = useState({
   
    latitude:-3.386485,
    longitude:29.383222,
    zoom:15
})
  return (
    <ReactMapGl
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/coderlawe/cl89fdedr007y14plxcvq7osx"
        mapboxAccessToken="pk.eyJ1IjoiY29kZXJsYXdlIiwiYSI6ImNrcGZvbGE1ajBkd2QydnFvY2tndGs2cjYifQ.hx9O2OuDutDwo1AbZUREqg"
        initialViewState ={{
            longitude: 29.383222,
            latitude: -3.386485,
            zoom: 14,
          }}
        // onViewportChange ={(viewPort) => setViewPort(viewPort)}
        // {...viewPort}

        >
            

            <Popup
            closeOnClick={true}
            latitude={-3.386485}
            longitude={29.383222}
            className="rounded-2xl z-50 "
            >
                <div className="flex-col ">
                    <div className="flex justify-center ">
                        <div className="relative h-[50px] lg:h-[120px] w-[100%]">
                            <Image layout="fill" objectFit="cover" src="https://cdn.discordapp.com/attachments/817048198022430761/1021347820357296128/pexels-eiliv-aceron-6895958.jpg"/>

                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className="flex-col items-center">
                            <p className="text-sm text-gray-700 font-serif">123 Random Street</p>
                            <p className="text-sm text-gray-700 font-serif">LaweTown Connecticut</p>
                            <p className="text-sm text-gray-700 font-serif">Located in the <span className="text-coolYellow">Lawe Mall 1st floor</span></p>
                        </div>
                  



                    </div>
                </div>
               
            </Popup>

        </ReactMapGl>
  )
}

export default Map