import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import MenuItem from "./MenuItem";
import Image from "next/image";
const Menu = () => {
    return(
        <section className="flex justify-between lg:mx-12 pb-32 mt-16">
            {/* Left side */}
            <div className="flex-col space-y-10 z-20">
                <p className="text-gray-300 text-[60px] font-Cormorant">Fresh Juices</p>

                <div className="flex-col space-y-12 mt-10">
                    {/* Menu items */}
                    <MenuItem />
                    <MenuItem />
                    <MenuItem />
                    <MenuItem />


                </div>

            </div>
        
            <div className="relative  h-[800px] w-[400px] z-0  mx-6">
                {/* Middle section */}
                <div className="absolute h-[100%] w-[100%] bg-black/60 z-30"/>
                <Image className="-z-0 " src="https://cdn.discordapp.com/attachments/817048198022430761/1021350098501898310/pexels-abhishek-hajare-5511227.jpg" layout="fill" objectFit="cover"/>
            </div>
            {/* Right side */}

            <div className="flex-col space-y-10 z-20">
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
    )
}

export default Menu