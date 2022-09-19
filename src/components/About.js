import Image from "next/image";

const About = () => {

    return(
        <div className="lg:flex justify-between">
            {/* Left side */}

            <div className="w-[50%] flex-col space-y-8  border-r-2">
                <div>
                  <h2 className="font-Cormorant text-lightYellow text-[50px] text-center">Enjoy our stunning ambiance</h2>
                    <p className="text-gray-400 text-sm lg:mx-[10%] mt-8 leading-8">Come an enjoy an evening at our pristine location, and get away from the hustle and bustle of city life. Grab yourself a glass of the finest iced coffee in Bujumbura and relax...or something</p>
                </div>

                <div className="flex justify-center space-x-8">
                    <button className="p-5 border border-yellow-600 text-gray-300">View location</button>
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