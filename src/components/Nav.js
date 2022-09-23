import BlenderIcon from '@mui/icons-material/Blender';
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close"
import { motion } from "framer-motion"
import { useEffect, useState } from 'react';

const Nav = () => {

    const [scrolled, setScrolled] = useState(false);
    const [clicked, setClicked] = useState(false);
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
                    delay:8,
                    duration:2
                }}
            className={scrolled ? "hidden lg:flex justify-between bg-darkerHeaderBrown/80 text-gray-300 transfrom transition-all duration-500 ease-in-out px-5 py-2 z-50":"lg:flex hidden justify-between bg-black/20 px-5 py-2 z-50"}>
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
                    delay:8,
                    duration:3
                }}

            
                className="flex space-x-12    animate-shimmer z-50 items-center">
                    
                            <BlenderIcon className={!scrolled ? "hidden":"h-20 w-20 text-green-800 cursor-pointer transfrom transition-all duration-500 ease-in-out -ml-2"}/>

                            <span className={!scrolled ? "transform transition-all ease-in-out duration-1000 -ml-2 text-[40px] text-green-800 cursor-pointer font-Cormorant italic underline-":"hidden"}>Flatfender</span>

                        
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

            <motion.div 
            initial={{
                opacity:0,
                scale:0,
                x:-500,
            }}

            animate={{
                opacity:1,
                scale:1,
                x:0,
            }}

            transition={{
                duration:5
            }}
            className={clicked ? "transition-all duration-500 ease-in-out p-6 bg-black h-screen text-white lg:hidden block justify-between ":"transition-all duration-500 ease-in-out p-6 bg-darkerHeaderBrown/80 text-white lg:hidden block justify-between"}>
                <div className="flex justify-between items-center">
                <p className="font-Cormorant italic text-coolYellow text-[40px]">J</p>
                <MenuIcon onClick={() => setClicked(true)}className={clicked ? "hidden":"h-12 w-12 flex justify-end"}/>
                <CloseIcon onClick={() => setClicked(false)}className={clicked ? "h-12 w-12 flex justify-end":"hidden"}/>

                
                </div>
                
                <div className={clicked ? "flex justify-center  items-center":"hidden"}>
                    <div className="flex-col space-y-16 mt-12">

                        <p className="text-coolYellow text-[42px] font-Cormorant">HOME</p>
                        <p className="text-coolYellow text-[42px] font-Cormorant">ABOUT</p>
                        <p className="text-coolYellow text-[42px] font-Cormorant">GALLERY</p>
                        <p className="text-coolYellow text-[42px] font-Cormorant">CONTACT US</p>
                        {/* <p className="text-coolYellow text-[50px] font-Cormorant">HOME</p> */}

                    </div>  
                </div>
                
            </motion.div>
        </div>
    
    )
}

export default Nav