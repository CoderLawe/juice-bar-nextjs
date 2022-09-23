import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from "react";
const About = () => {


    useEffect(() => {
        AOS.init({
            easing: "ease-out-cubic",
            once: true,
            offset: 50,
        })
      }, []);



    return(
        <div className="lg:flex block justify-between">
            {/* Left side */}

            <div className="lg:w-[50%] flex-col space-y-8  lg:border-r-2">
                <div>
                  <h2 className="font-Cormorant text-lightYellow text-[38px]  lg:text-[50px] leading-[50px] text-center">Enjoy our stunning ambiance</h2>
                    <div className="px-5">
                        <p data-aos="fade-in" data-aos-duration={4000} className="text-gray-400 text-sm lg:mx-[10%] mt-8 leading-8">Established in 1998, the <span className="italic text-coolYellow">Flatfender Smoothie Bar </span>is the first of its kind. All our fruit is hand-picked from the most reputable suppliers countrywide. Come down and try out our world famous iced coffee recipes and fresh juices</p>
                        <p data-aos="fade-in" data-aos-duration={5000} className="text-gray-400 text-sm lg:mx-[10%] mt-8 leading-8">Flatfender's rustic surroundings and calm ambiance make it an absolute customer favorite. Pay us a visit and experience it for yourself!</p>

                    </div>
                  
                </div>

                <div className="flex justify-center space-x-8">
                    <button className="px-4 py-3 border border-yellow-600 text-gray-300 hover:bg-coolYellowFocus hover:text-gray-900 hover:border-none transition-all duration-500 ease-in-out">View location</button>
                </div>
              
            </div>
            
            {/* Right side */}

            <div className="lg:w-[50%] flex-col items-center">
                <div className="relative lg:w-[400px] lg:h-[350px] mx-auto">
                    <Image src="https://cdn.discordapp.com/attachments/817048198022430761/1021347820357296128/pexels-eiliv-aceron-6895958.jpg" layout="fill" objectFit="cover"/>

                </div>
            </div>
        </div>
    )
}

export default About