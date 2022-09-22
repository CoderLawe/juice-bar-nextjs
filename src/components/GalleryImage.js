import Image from "next/image";
import { motion } from "framer-motion"
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
        className="w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] lg:w-[200px] lg:h-[200px] relative">
            <Image src={img} layout="fill" objectFit="cover"/>
        </motion.div>
    )
}

export default GalleryImage