
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useContext, useEffect, useState } from 'react';
import Image from "next/image";
import { ImageContext, OpenContext } from "./context/PageContext";
const MenuItem = ({ image }) => {

    const [open, setOpen] = useContext(OpenContext)
    const [path, setPath] = useContext(ImageContext)

    const style = {
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        boxShadow: 24,
        p: 4,
      
      
      }

      const handleOpen = () => {
        setOpen(true)
        setPath(image)
        console.log(path)
      }

      const handleClose = () => {
      
        setOpen(false);
      };

      useEffect(() => {
        console.log(open)
      },[])


      
    return(
        <div  onMouseEnter={handleOpen} onMouseLeave={() => setOpen(false)}  className="flex-col cursor-pointer">
            {/* Menu Item */}
            <div  className="flex space-x-8 justify-between items-center lg:max-w-[550px]">
                <p className="text-lightYellow font-Cormorant text-[18px] lg:text-[25px]">Mango Smoothie on Ice</p>

                <div className="w-[140px] h-[0.02em] bg-lightYellow"/>

                <p  className="text-gray-300 font-Cormorant text-[25px]">$32</p>

                {/* <div className={open ? "flex h-[250px] w-[250px] relative ":"hidden"}>
                    <Image src={image} layout="fill" objectFit="cover"/>
                </div> */}
            </div>

            {/* Description */}
            <p className="text-gray-400 text-[18px] text-sm font-serif mt-6  leading-6 font-light">Mango smoothie with a touch of whipped cream</p>


            {/* Modal */}


            
            {/* <Modal 
       open={open}
       onClose={handleClose}
       aria-labelledby="modal-modal-title"
       aria-describedby="modal-modal-description"
       >
         <Box 
         sx={style}
         className="bg-black bg-opacity-75 focus:outline-none"
         >

            <div className="h-[250px] w-[250px] relative">
                <Image src={image} layout="fill" objectFit="cover"/>
            </div>
         </Box>

       </Modal> */}
        </div>
    )
}

export default MenuItem