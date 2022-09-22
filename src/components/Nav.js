import BlenderIcon from '@mui/icons-material/Blender';
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { motion } from "framer-motion"
import { useEffect, useState } from 'react';
const Nav = () => {

    const [scrolled, setScrolled] = useState(false);

    const showStar = () =>{
        if(window.scrollY>60){
            setScrolled(true)
        }
        else{
            setScrolled(false)   
        }
    }

    useEffect(function mount() {
        function onScroll() {
          console.log("scroll!");
        }
    
        window.addEventListener('scroll', showStar);
    
        return function unMount() {
          window.removeEventListener("scroll", showStar);
        };
      });
    return(
        <div>
            {/* Large screen navbar */}
        <motion.div 
                initial={{
                    y: - 500,
                    opacity:0,
                    scale:0.5
                }}
                animate = {{
                    y:0,
                    opacity:1,
                    scale:1
                }}
                transition = {{
                    duration:2
                }}
            className={scrolled ? "hidden lg:flex justify-between bg-darkerHeaderBrown/80 text-gray-300 transfrom transition-all duration-500 ease-in-out px-10 py-2 z-50":"lg:flex hidden justify-between bg-black/20 px-10 py-2 z-50"}>
                {/* Left side */}

                <motion.div 
                initial={{
                    x: -300,
                    opacity:0,
                    scale:0.5
                }}

                animate={{
                    x:0,
                    opacity:1,
                    scale:1
                }}

                transition = {{
                    duration:3
                }}

            
                className="flex space-x-12    animate-shimmer z-50 items-center">
                    
                            <BlenderIcon className={!scrolled ? "hidden":"h-20 w-20 text-green-800 cursor-pointer transfrom transition-all duration-500 ease-in-out -ml-2"}/>

                            <span className={!scrolled ? "transform transition-all ease-in-out duration-1000 -ml-2 text-[40px] text-green-800 cursor-pointer font-Cormorant italic underline-":"hidden"}>Juiced</span>

                        
                    <p className={scrolled ? "font-serif text-sm text-gray-300  cursor-pointer ":"font-serif text-sm text-gray-900  cursor-pointer "}>HOME</p>
                    <p className={scrolled ? "font-serif text-sm text-gray-300  cursor-pointer ":"font-serif text-sm text-gray-900  cursor-pointer "}>ABOUT</p>
                    <p className={scrolled ? "font-serif text-sm text-gray-300  cursor-pointer ":"font-serif text-sm text-gray-900  cursor-pointer "}>MENU</p>
                    <p className={scrolled ? "font-serif text-sm text-gray-300  cursor-pointer ":"font-serif text-sm text-gray-900  cursor-pointer "}>CONTACT US</p>

                </motion.div>
                {/* Right side */}

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
                className='flex space-x-8 items-center'>
                    {/* <BlenderIcon className="h-32 w-32 text-green-800"/> */}
                    <InstagramIcon className="h-7 w-7 text-yellow-400"/>
                    <FacebookIcon className="h-7 w-7 text-yellow-400"/>
                    <PinterestIcon className="h-7 w-7 text-yellow-400"/>
                    <button className="bg-green-800 p-5 text-gray-300 cursor-pointer hover:bg-yellow-600 transition-all duration-500 ease-in-out hover:italic">+123 45 67 89</button>
                </motion.div>

            </motion.div>

            {/* Small screen navbar */}

            <motion.div className="p-6 bg-black text-white lg:hidden flex justify-between ">
                
            </motion.div>
        </div>
    
    )
}

export default Nav