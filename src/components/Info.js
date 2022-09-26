import React from 'react'
import Image from "next/image";
import JeepGrille from './JeepGrille';

function Info() {
  return (
      // Remember to make visible
  <section className="flex mt-8">


      <div id="about" className="block lg:flex  mt-10 mx-auto">
         
         {/* <div>
             <VisibilitySensor>
                 {({ isVisible }) => (
                     <Spring delay={300} to={{opacity: isVisible? 1: 0}}>
                          {({ opacity }) => (
                              <h2 style={{opacity}}className="text-coolYellowFocus font-extrabold text-3xl">Hello world</h2>
                          )}
                     </Spring>
                 )}
             </VisibilitySensor>
         </div> */}
          <div data-aos="fade-in" className="lg:w-1/2 md:ml-16  ">
              {/* Left */}
                <Image className="imageHover lg:ml-12" src="https://cdn.discordapp.com/attachments/817048198022430761/1023671197466112131/pexels-valeria-boltneva-1516422.jpg"  height={600} width={500} objectFit="cover"/> 


              {/* <div data-aos="zoom-in"className="-mt-48 ml-40">
                  <Image className="hover:scale-105 hover:bg-pacity-75 transform transition duration-300 ease-out "src="https://cdn.discordapp.com/attachments/817048198022430761/1023671197466112131/pexels-valeria-boltneva-1516422.jpg" height={300} width={300} objectFit="cover"/>

              </div> */}

          </div>
          

          <div  className="lg:w-1/2">
              {/* Right */}
              <div data-aos="fade-in" className="flex justify-center md:block mt-5 ">
                  {/* <Image className="rounded-lg imageHover" src="/images/coffee-logo.png" height={200} width={200} objectFit="cover"/> */}
                  <JeepGrille />
              </div>

        

              <div className="flex-col lg:-mt-10 mt-5 md:-mt-0 mx-4">
                  <h1 data-aos="fade-in" className="text-coolYellowFocus font-extrabold text-xl font-serif mt-12">WHO WE ARE</h1>

                  <div className="md:mr-44 ">
                      <div className="">
                          {/* <p data-aos="fade-in" className="text-gray-400 mt-5 text-sm leading-6 ">
                              We opened <span className="text-coolYellowFocus">Bites on the double</span> in July of 20....
                              Our vision is to create the most <span className="text-coolYellow">authentic and rustic </span>
                              theme and experience to our customers. 
                          </p> */}
                    
                          <div className="flex space-x-2 mt-5">
                              <p className="text-gray-400 font-serif text-sm">
                              We opened <span data-aos="fade-in" data-aos-duration="3000"className="text-coolYellowFocus">Flatfender smoothie bar</span> in July of 20....
                              Tempora incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                              </p>
                          
                       
                          </div>
                      
                      </div>

                    
                  </div>

                  <p data-aos="fade-in" className="text-gray-400 font-serif text-sm md:mr-44 mt-6 lg:mt-16">
                      <span data-aos="zoom-in"className="text-coolYellowFocus">Flatfender </span> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>



                  
                
              </div>

          </div>
      </div>
  </section>

  )
}

export default Info