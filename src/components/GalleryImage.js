import Image from "next/image";

const GalleryImage = ({ img }) => {
    return(
        <div className="w-[200px] h-[200px] relative">
            <Image src={img} layout="fill" objectFit="cover"/>
        </div>
    )
}

export default GalleryImage