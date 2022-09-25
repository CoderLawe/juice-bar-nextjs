import React, { useEffect, useState } from 'react'
import BlenderIcon from "@mui/icons-material/Blender";
import CoffeeIcon from "@mui/icons-material/Coffee";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
function Preloader() {

    const [loaded, setLoaded] = useState(false);

    const resetLoading = () => {
        setLoaded(true)
      }

   
    useEffect(() => {
            const timer = setTimeout(() => resetLoading(), 7000);
            return () => clearTimeout(timer);
    },[])
  return (
            
    <div className={loaded ? "hidden":"items-center bg-black flex h-[100vh] w-full justify-center left-0 fixed top-0 transition-all z-[60]"}>
            <div className="flex justify-center">
            <div className="flex-col space-y-5">

                <motion.h1 
                initial={{
                    opacity:0.5,
                }}

                animate={{
                    opacity:1,
                }}

                transition={{
                    duration:2
                }}
                className='font-serif text-[12px] lg:text-[28px] text-coolYellow'>FLATFENDER SMOOTHIE BAR</motion.h1>
                <div className="flex  justify-center space-x-4 items-center">

                    <h1 className="text-coolYellowFocus font-Cormorant text-[30px]">We are</h1>
                <div className="font-Cormorant italic text-coolYellow text-[30px]">
                    <Typewriter 
                            words={['delicious','fresh','delightful']}
                            loop={1}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            />
                </div>
                    
                </div>
            
                <div className="flex justify-center space-x-4 transition-all duration-500 items-center">
               
                <div className="block space-y-4 items-center">
                    <div className="flex  space-x-4 items-center">
                        <BlenderIcon className="h-10 w-10 text-green-800"/>
                        <CoffeeIcon className="h-10 w-10 text-coolYellowFocus"/>
                    </div>
                    {/* <h1>Blast Smoothies</h1> */}
                </div>
               


                
               
                </div>

                {/* <LocalDiningIcon className="text-coolYellow h-36"/> */}

            </div>
            
            </div>
        </div>
           

  )
}

export default Preloader