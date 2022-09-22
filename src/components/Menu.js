import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import MenuItem from "./MenuItem";
import Image from "next/image";
const Menu = () => {
    return(
        <Carousel
        autoplay={true}
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
        id="carousel" 
        >
            {/* First slide */}
        <section className="lg:flex block mx-auto justify-between lg:mx-12 pb-32 mt-16">
                {/* Left side */}
                    <div className="flex-col space-y-10 z-20 mx-5 lg:mx-0">
                        <p className="text-gray-300 text-[60px] font-Cormorant">Fresh Juices</p>

                        <div className="flex-col space-y-12 mt-10">
                            {/* Menu items */}
                            <MenuItem />
                            <MenuItem />
                            <MenuItem />
                            <MenuItem />


                        </div>

                        

                    </div>
               
            
                <div className="relative  h-[800px] w-[400px] z-0  lg:mx-6 mx-auto my-6 lg:my-0 ">
                    {/* Middle section */}
                    <div className="hidden lg:flex absolute h-[100%] w-[100%] bg-black/60 z-30 "/>
                    <Image className="-z-0 bg-fixed" src="https://cdn.discordapp.com/attachments/817048198022430761/1021350098501898310/pexels-abhishek-hajare-5511227.jpg" layout="fill" objectFit="cover"/>
                </div>
                {/* Right side */}

                <div className="flex-col space-y-10 z-20  mx-10 lg:mx-0">
                    <p className="text-gray-300 text-[60px] font-Cormorant">Cocktails</p>

                    <div className="flex-col space-y-12 mt-10">
                        {/* Menu items */}
                        <MenuItem />
                        <MenuItem />
                        <MenuItem />
                        <MenuItem />


                    </div>
                </div>
            </section>


            {/* Second slide */}

            
        </Carousel>
        
    )
}

export default Menu