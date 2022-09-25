import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from "react";
import { motion } from "framer-motion";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClockIcon from "@mui/icons-material/Watch";
import PinIcon from "@mui/icons-material/PinDrop"
const CarouselHero = () => {

    useEffect(() => {
        AOS.init();
      }, []);
    return(
        
        <Carousel
        autoplay={true}
        infiniteLoop
        showStatus={true}
        showIndicators={true}
        showThumbs={false}
        // interval={3000}
        id="carousel" 
        className=" -mt-[200px] lg:-mt-[120px] -z-50"
        >
                    {/* First slide */}
                    {/* <div    className="h-[600px] w-[100%] relative pb-5">
                        <Image  className="-z-10" src="https://cdn.discordapp.com/attachments/817048198022430761/1020269046316408833/pexels-this-is-zun-1148215.jpg" layout="fill" objectFit="cover"/>

                        <motion.div  
                        initial={{
                            scale:0.3,
                            opacity:0,
                            z:0
                    
                        }}

                        animate={{
                            scale:[0.2,0.4,0.6,0.8,1],
                            opacity:1,
                            z:0.3
                        }}
                        className="absolute top-52 right-40 bg-black/50 p-5 ">
                            
                        </motion.div>
                       
                    </div> */}

                    <div id="home" className=" hidden lg:block justify-between">
                        {/* Left side */}
                        <div className="flex h-screen w-[100%] justify-between ">
                            <div className="lg:w-[50%] w-screen flex-col space-y-10 items-center bg-lightYellow relative">
                                <p className="font-Cormorant mt-[40%] lg:mt-[40%] text-[60px] leading-[50px] mr-10">
                                    Juice and smoothie bar
                                </p>

                                <p className="font-serif text-gray-800  text-[30px] leading-8 mx-[8%]">Hand picked | Freshly squezzed!</p>

                                <div className="flex justify-center space-x-5">

                                        {/* <div className="flex space-x-4 items-center mt-10">
                                            <ClockIcon className="text-coolYellowFocus h-8 w-8"/>
                                            <p className="text-gray-900 font-serif text-lg">Mon - Friday 8AM - 10PM</p>

                                            
                                        </div>

                                        <div className="flex space-x-4 items-center mt-20">
                                            <PinIcon className="text-coolYellowFocus h-8 w-8"/>
                                            <p className="text-gray-900 font-serif text-lg">Fordline Shore</p>

                                        </div> */}
                                          
                                        <button className="border-2 px-5 py-3 border-red-400 bg-transparent hover:bg-blue-300 active:scale-90 mr-8 hover:border-none transition-all duration-500 ease-in-out">Explore</button>
                                        <button className="border-2 px-5 py-3 border-blue-300 bg-transparent hover:bg-red-400 active:scale-90 hover:border-none transition-all duration-500 ease-in-out ">Products</button>

                                   
                                </div>
                            </div>

                            {/* Right side */}

                            <div className="lg:w-[50%] bg-black ">
                                
                            </div>

                            <motion.div
                            initial={{
                                scale:0.5,
                                opacity:0,
                                x:500
                            }}

                            animate={{
                                scale:1,
                                opacity:1,
                                x:0
                            }}
                            transition={{
                                delay:8,
                                duration:2
                            }}
                            className="absolute top-52 md:hidden lg:flex lg:right-[5%] xl:w[14%] lg:h-[350px] lg:w-[580px] xl:h-[360px] xl:w-[610px] shadow-lg">
                                <Image src="https://cdn.discordapp.com/attachments/817048198022430761/1021333070877577266/pexels-arina-krasnikova-7376915.jpg" layout="fill" objectFit="cover"/>
                            </motion.div>

                           
                        </div>

                        <div className="absolute -bottom-5 right-[45%] animate-pulse cursor-pointer">
                            <ArrowDropDownIcon className="text-black h-32 w-32"/>
                        </div>

                        <div className="p-5">
                                icons
                        </div>
                     
                    </div>

       

                

        </Carousel>
    )
}
export default CarouselHero