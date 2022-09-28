import Image from "next/image";
import { motion } from "framer-motion"
import InstagramIcon from "@mui/icons-material/Instagram";
const GalleryImage = ({ img }) => {
    return(
        <motion.div 
        initial={{
            opacity:0,
            scale:0
        }}
        animate={{
            opacity:1,
            scale:1,
            z:[0,0.1,2]
        }}
        className="group w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] lg:w-[250px] lg:h-[300px] relative cursor-pointer">
            <div className="group-hover:flex hidden absolute  bg-black/50 h-full w-full z-10 ">
                <InstagramIcon className="text-coolYellow h-12 w-12 mx-auto my-auto  transition-all duration-500 ease-in-out " />
            </div>
            <Image src={img} layout="fill" objectFit="cover"/>
        </motion.div>
    )
}

export default GalleryImage