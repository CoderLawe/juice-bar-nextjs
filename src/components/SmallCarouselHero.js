import React from 'react'
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

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
        <div className=" relative h-[400px] mt-24 w-[100%]">
            <Image src="https://cdn.discordapp.com/attachments/817048198022430761/1021333070877577266/pexels-arina-krasnikova-7376915.jpg" layout="fill" objectFit="cover"/>

            <div className='absolute top-[210px] rounded-md block bg-black/50 right-8 p-20'>

            </div>
        </div>
    </Carousel>
  )
}

export default SmallCarouselHero