import React from 'react'
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { motion } from "framer-motion";

function SmallCarouselHero() {
  return (
    <Carousel
    autoplay={true}
    infiniteLoop
    showStatus={false}
    showIndicators={false}
    showThumbs={false}
    // interval={3000}
    id="carousel" 
    className="pb-5    "
    >
        <motion.div 
        initial={{
            opacity:0,
            scale:0
        }}

        animate={{
            opacity:1,
            scale:1
        }}

        transition={{
            duration:3
        }}
        className="flex lg:hidden relative h-[400px] mt-24 w-[100%]">
            <Image src="https://cdn.discordapp.com/attachments/817048198022430761/1021333070877577266/pexels-arina-krasnikova-7376915.jpg" layout="fill" objectFit="cover"/>

            <div className='absolute top-[210px] rounded-md block bg-black/50 right-8 h-[240px] py-3 px-2'>
                <motion.div 
                
                className="flex justify-center">
                    <motion.p 
                    initial={{
                        opacity:0,
                        scale:0.5
                    }}
                    
                    animate={{
                        opacity:1,
                        scale:1
                    }}

                    transition={{
                        duration:3
                    }}
    
                    className="font-Cormorant italic text-[30px] text-coolYellow">From branch to glass</motion.p>
                </motion.div>

                <div className="flex justify-center">
                    <motion.p 
                    initial={{
                        opacity:0,
                        scale:0.5
                    }}
                    
                    animate={{
                        opacity:1,
                        scale:1
                    }}

                    transition={{
                        duration:4
                    }}
    
                    className="font-serif font-light leading-10 text-gray-500 text-[20px] mt-5">Redefining the meaning of "from branch to glass!"</motion.p>
                </div>
            </div>
        </motion.div>
    </Carousel>
  )
}

export default SmallCarouselHero