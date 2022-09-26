import Image from 'next/image';

import { useEffect, useRef, useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import InstagramIcon from '@mui/icons-material/Instagram';
import FaceBookIcon from '@mui/icons-material/Facebook';
// import PinterestIcon from '@mui/icons-material/Pinterest';
import MenuIcon from "@mui/icons-material/Menu";
import BlenderIcon from "@mui/icons-material/Blender";
import CloseIcon from "@mui/icons-material/Close";
import { useSpring, useTransition, animated, to } from '@react-spring/web'


const Nav = () => {

   
    const [scrolled, setScrolled] = useState(false);
    const [opened, setOpened] = useState(false);



    console.log('opened',opened)

    const n = useRef(0);

        const styles = useSpring({
            loop: () => 5 > n.current++,
            from :{rotateZ : 0},
            to :{rotateZ : 360},

        })

        
 
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
        return (
            // Large Nav start
        <div>
             <nav className={scrolled? "navbar  hidden md:flex justify-between  z-50 bg-black/70 py-3 pr-3 ":"hidden md:flex justify-between mx-10 z-50 navbar"}>
                <div className="flex space-x-8 items-center text-gray-100 text-[12px] pt-2 font-extrabold">
                    {/* Left */}
                    <div className={ scrolled ? "hidden ":"text-coolYellow scale-125 bg-rounded-lg flex ml-5 h-20 w-20 p-5"} 
    >
                        <span className="font-Cormotant text-[50px] italic">J</span>
                    </div>
                    <Link 
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                duration={10000}
                >
                    
                    <animated.div 
                        style={{
                        
                            ...styles,
                        }
                        }
                    
                        > <BlenderIcon className={scrolled ? "h-16 w-16 text-coolYellow transform transition ease-in-out duration-1000 cursor-pointer" :"transform transition ease-in-out duration-500 hidden "}/>
                    </animated.div>
                
                </Link>
                <Link
                className="navbar"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                duration={1000}
                >
                <p className="activate hover:hover-link active:text-coolYellow active:border-b active:border-coolYellow">HOME</p>

                </Link>
                <Link
                    activeClass="active"
                    to="menu"
                    spy={true}
                    smooth={true}
                    duration={2000}
                >
                    <p className="hover:hover-link">ABOUT</p>
                </Link>
                <Link
                    activeClass="active"
                    to="contact-us"
                    spy={true}
                    smooth={true}
                    duration={2000}
                >
                    <p className="hover:hover-link highlighted">MENU</p>
                </Link>
                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={1000}
                >
                    <p className="hover:hover-link">GALLERY</p>
                </Link>
                <Link
                    activeClass="active"
                    to="contactUs"
                    spy={true}
                    smooth={true}
                    duration={1000}
                >
                    <p className="hover:hover-link active:text-white">CONTACT</p>
                </Link>


                {/* <Link
                    activeClass="active"
                    to="gallery"
                    spy={true}
                    smooth={true}
                    duration={2000}
                >
                    <p className="hover:hover-link active:text-white">GALLERY</p>
                </Link> */}

                </div>


                <div className="flex space-x-4 items-center">
                    {/* Right */}
                    <InstagramIcon className="h-8 w-8 text-coolYellow"/>
                    <FaceBookIcon className="h-8 w-8 text-coolYellow"/>
                    <InstagramIcon className="h-8 w-8 text-coolYellow"/>

                    {/* <PinterestIcon className="h-6 text-coolYellow"/> */}
                    {/* <div  onClick={!session ? signIn :signOut} className="text-coolYellow">
                        <p>
                            {session ? `Hello, ${session.user.name}`:'Sign In'}
                        </p>
                        <p  className="font-extrabold md:text-sm">Account & Lists</p>
                    </div> */}
                <button className="p-3 bg-black border border-coolYellowFocus text-coolYellow hover:bg-coolYellowFocus hover:text-black transform transition duration-500 ease-out mr-10">+123.45.67.89.10</button>

                </div>
        </nav>

            {/* Small nav start */}

            <nav className={scrolled  ?" md:hidden bg-black/70 p-5 " :"  md:hidden bg-transparent p-5 "}>
                <div className={opened ? "md:hidden flex justify-between items-center bg-coolYellowFocus":"flex justify-between  bg-coolBrown ml-10 md:hidden items-center"}>
                    <span className="text-[40px] font-Cormorant italic text-coolYellowFocus">F</span>
                    <button className={opened?"hidden":"px-2 py-5 bg-transparent border border-coolYellowFocus text-coolYellow hover:bg-coolYellowFocus hover:text-black transform transition duration-500 ease-out "}>+123.45.67.8.9</button>
                    <MenuIcon onClick={() => setOpened(true)}className={opened ? "hidden transform transition duration-300 ease-out":"h-14 w-14 text-coolYellowFocus cursor-pointer"}/>
                    <div className="flex justify-end">
                        <CloseIcon onClick={() => setOpened(false)}className={opened ? " h-14 w-14 text-gray-700 cursor-pointer" :"hidden"}/>

                    </div>
                </div>

                <div className={opened ? " flex justify-center bg-coolYellowFocus  h-screen":"hidden"}>
                        <div className="flex-col space-y-10 mt-10">
                            <Link 
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            duration={10000}
                            >
{/*                                 
                                <animated.div 
                                    style={{
                                    
                                        ...styles,
                                    }
                                    }
                                
                                    > <StarIcon className={scrolled ? "h-16 text-coolYellow transform transition ease-in-out duration-1000 cursor-pointer" :"transform transition ease-in-out duration-500 hidden "}/>
                                </animated.div> */}
                            
                            </Link>
                            <Link
                            className="navbar"
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            duration={1000}
                            >
                            <p onClick={() => setOpened(false)} className="text-gray-900 text-[40px] font-Cormorant ">HOME</p>

                            </Link>
                            <Link
                                activeClass="active"
                                to="menu"
                                spy={true}
                                smooth={true}
                                duration={2000}
                            >
                                <p  onClick={() => setOpened(false)} className="text-gray-900 text-[40px] font-Cormorant mt-12">MENU</p>
                            </Link>
                            <Link
                                activeClass="active"
                                to="contactUs"
                                spy={true}
                                smooth={true}
                                duration={2000}
                            >
                                <p onClick={() => setOpened(false)} className="text-gray-900 text-[40px] font-Cormorant mt-12">CONTACT</p>
                            </Link>
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                duration={1000}
                            >
                                <p onClick={() => setOpened(false)} className="text-gray-900 text-[40px] font-Cormorant mt-12">ABOUT</p>
                            </Link>
                            {/* <Link
                                activeClass="active"
                                to="newsletter"
                                spy={true}
                                smooth={true}
                                duration={1000}
                            >
                                <p onClick={() => setOpened(false)} className="text-gray-900 text-[40px] font-Cormorant">SUBSCRIBE</p>
                            </Link> */}
{/* 
                            <Link
                                activeClass="active"
                                to="blogsection"
                                spy={true}
                                smooth={true}
                                duration={2000}
                            >
                                <p onClick={() => setOpened(false)} className="small-navIcons mb-5">BLOG</p>
                            </Link> */}

                            
                                <div className="flex space-x-8 items-center  pb-32 pt-52">
                                    <InstagramIcon className="h-10 w-10 text-gray-900"/>
                                    <FaceBookIcon className="h-10 w-10 text-gray-900"/>
                                    {/* <PinterestIcon className="h-6 text-gray-900"/> */}
                                    <InstagramIcon className="h-10 w-10 text-gray-900"/>
                                </div>
                        </div>

                     
                </div>
                
            </nav>
        </div>
       
    )
}

export default Nav