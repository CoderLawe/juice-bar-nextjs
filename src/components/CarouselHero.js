import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from "react";
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
        className="pb-5 -mt-[120px] -z-50"
        >
                    {/* First slide */}
                    <div    className="h-[600px] w-[100%] relative pb-5">
                        <Image  className="-z-10" src="https://cdn.discordapp.com/attachments/817048198022430761/1020269046316408833/pexels-this-is-zun-1148215.jpg" layout="fill" objectFit="cover"/>

                        <div   className="absolute top-52 right-52">
                            <h1  data-aos-delay={1000} data-aos="fade-left" data-aos-duration={5000} >That's wassup</h1>
                            <h1 data-aos="fade-in" data-aos-delay={2000} data-aos-duration={5000}>That's wassup</h1>
                          
                        </div>
                       
                    </div>

                

        </Carousel>
    )
}
export default CarouselHero