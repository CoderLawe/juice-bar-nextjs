import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import MenuItem from "./MenuItem";
import Image from "next/image";
import { useContext, useEffect } from "react";
import { ImageContext, OpenContext } from "./context/PageContext";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


const Menu = () => {
    const [path, setPath] = useContext(ImageContext)
    const [open, setOpen] = useContext(OpenContext);



    useEffect(() => {
        AOS.init({
            once: false,
            duration:2000
        })
      }, []);


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
        <section className="bg-smallMenuBackground lg:bg-none  bg-cover bg-fixed lg:flex block mx-auto justify-between lg:mx-12 lg:pb-32 mt-16">
                {/* Left side */}
                    <div className="bg-black/90 flex-col space-y-10 z-20 px-2 lg:mx-0">
                        <p data-aos="fade-in" data-aos-duration="3000" className="text-gray-300 text-[50px] lg:text-[60px] font-Cormorant">Fresh Juices</p>

                       
                        

                        <div className=" flex-col space-y-12 mt-10">
                            {/* Menu items */}
                            <MenuItem image="https://cdn.discordapp.com/attachments/817048198022430761/1020269046316408833/pexels-this-is-zun-1148215.jpg"/>
                            <MenuItem image="https://cdn.discordapp.com/attachments/817048198022430761/1021333070877577266/pexels-arina-krasnikova-7376915.jpg"/>
                            <MenuItem image="https://cdn.discordapp.com/attachments/817048198022430761/1021347820357296128/pexels-eiliv-aceron-6895958.jpg"/>
                            <MenuItem image="https://cdn.discordapp.com/attachments/817048198022430761/1021350098501898310/pexels-abhishek-hajare-5511227.jpg"/>


                        </div>

                        

                    </div>
               
            
                <div className="hidden lg:flex relative  h-[800px] w-[400px] z-0  lg:mx-6 mx-auto my-6 lg:my-0 ">
                    {/* Middle section */}
                            <div className="absolute top-52">
                                <div className={open ? "top-52 flex h-[250px] w-[250px] relative ":"hidden"}>
                                    <Image src={path} layout="fill" objectFit="cover"/>
                                </div>
                            </div>
                           
                   
                    <div className=" absolute h-[100%] w-[100%] bg-black/80 z-30 "/>
                    <Image className="-z-0 bg-fixed" src="https://cdn.discordapp.com/attachments/817048198022430761/1021350098501898310/pexels-abhishek-hajare-5511227.jpg" layout="fill" objectFit="cover"/>
                </div>
                {/* Right side */}

                <div className="flex-col bg-black/90 space-y-10 z-20  pt-6 px-2 lg:mx-0">
                    <p data-aos="fade-in" data-aos-duration="3000" className="text-gray-300 text-[60px] font-Cormorant">Cocktails</p>

                    <div className="flex-col space-y-12 mt-10">
                        {/* Menu items */}
                        <MenuItem text="an example of dynamic text"/>
                        <MenuItem text="another example of dynamic text"/>
                        <MenuItem text="a third example of dynamic text"/>
                        <MenuItem text=" a final example of dynmaic text"/>


                    </div>
                </div>
            </section>


            {/* Second slide */}

            
        </Carousel>
        
    )
}

export default Menu