import React from 'react'
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import Map from './Map';
function Contact() {
  return (
    <div className="lg:flex block justify-between">
        {/* Left side */}
        <div className=" flex-col space-y-8 bg-darkerHeaderBrown px-12 py-16 mx-auto lg:ml-20 md:w-[500px]">
            <div className="">
                <h5 className="text-lighterYellow font-Cormorant text-[30px] lg:text-[50px] leading-10">CONTACT US</h5>
            </div>

            <div className="flex space-x-4 items-center">
                <LocationOnIcon className="h-10 w-10 text-yellow-600"/>
                <p className="text-Cormorant text-gray-400 text-[16px]">Second floor Porsche plaza 1234 Down street</p>
            </div>

            <div className="flex space-x-4 items-center">
                <AccessTimeIcon className="h-10 w-10 text-yellow-600"/>
                <p className="text-Cormorant text-gray-400 text-[16px]">Mon-Fri 8am-11pm</p>
            </div>

            <div className="flex space-x-4 items-center">
                <CallIcon className="h-10 w-10 text-yellow-600"/>
                <p className="text-Cormorant text-gray-400 text-[16px]">+123.44.55.66.77</p>
            </div>

            <div className="flex space-x-4 items-center">
                <LocationOnIcon className="h-10 w-10 text-yellow-600"/>
                <p className="text-Cormorant text-gray-400 text-[16px]">SEND US A MESSAGE</p>
            </div>


            {/* Form */}

            <div className="flex-col space-y-5 items-center">
                <div className="flex-col space-y-2">
                    <p className="text-lightYellow flex justify-center">Name</p>
                    <input className="shadow-lg mx-auto flex justify-center bg-transparent md:px-10 text-gray-200 rounded-lg p-2 focus:scale-105 focus:outline-none  border-transparent hover:border-lighterYellow focus:border-lightYellow transform transition duration-300 ease-out" type="text" placeholder="Enter your name here"/>
                </div>


                <div className="flex-col space-y-2">
                    <p className="text-lightYellow flex justify-center">Email</p>
                    <input className="shadow-lg mx-auto flex justify-center   bg-transparent md:px-10 text-gray-200 rounded-lg p-2 focus:scale-105 focus:outline-none  border-transparent hover:border-lighterYellow focus:border-lightYellow transform transition duration-300 ease-out" type="email" placeholder="Enter your email here"/>
                </div>


                <div className="flex-col space-y-2">
                    <p className="text-lightYellow flex justify-center">Message</p>
                    <textarea  className="shadow-lg mx-auto flex justify-center   bg-transparent md:px-10 text-gray-200 rounded-lg p-2 focus:scale-105 focus:outline-none border-transparent hover:border-lighterYellow focus:border-lightYellow transform transition duration-300 ease-out" type="text" placeholder="Enter your message here"/>
                </div>

                <div className="flex justify-center">
                    <MailIcon className="h-12 w-12 text-coolYellowFocus cursor-pointer hover:text-coolYellow transition-all duration-500 ease-in-out" />

                </div>

            </div>
        </div>

        {/* Right side */}

        <div className='w-[70vw] h-[200px] lg:w-[600px] lg:h-[400px]  flex mx-auto'>
            <Map className="lg:w-full w-[90vw] ml-3 h-[400px]" />
        </div>
    </div>
  )
}

export default Contact