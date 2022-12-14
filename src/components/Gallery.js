import Image from "next/image";
import { useEffect } from "react";
import GalleryImage from "./GalleryImage";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
const Gallery  = () => {

    useEffect(() => {
        AOS.init({
            once: false,
            duration:2000
        })
      }, []);
    return(
        <section id="gallery" className="flex justify-center mt-10">
            <div className="flex-col space-y-6">

                <div className="flex-col space-y-5">
                    <h4 className="text-[40px] lg:text-[50px] font-Cormorant text-lightYellow text-center mb-5">  Gallery</h4>
                    <div className="h-[0.03em] bg-coolYellow w-[12vw] mx-auto"/>
                </div>
   
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-4 ">
                    <GalleryImage data-aos="fade-in" data-aos-duration="3000" img="https://cdn.discordapp.com/attachments/817048198022430761/1021330259020349500/pexels-jess-bailey-designs-1058434.jpg"/>
                    <GalleryImage data-aos="fade-in" data-aos-duration="3000" img="https://cdn.discordapp.com/attachments/817048198022430761/1023671237400076388/pexels-mix-and-match-studio-4227018.jpg"/>
                    <GalleryImage data-aos="fade-in" data-aos-duration="3000" img="https://cdn.discordapp.com/attachments/817048198022430761/1023671245922893894/pexels-abdulrhman-alkady-10590397.jpg"/>
                    <GalleryImage data-aos="fade-in" data-aos-duration="3000" img="https://cdn.discordapp.com/attachments/817048198022430761/1023671394292215928/pexels-mathias-reding-9685229.jpg"/>

                    <GalleryImage data-aos="fade-in" data-aos-duration="3000" img="https://cdn.discordapp.com/attachments/817048198022430761/1023671038581669888/pexels-mix-and-match-studio-4227023.jpg"/>
                    <GalleryImage data-aos="fade-in" data-aos-duration="3000" img="https://cdn.discordapp.com/attachments/817048198022430761/1020269046316408833/pexels-this-is-zun-1148215.jpg"/>
                    <GalleryImage data-aos="fade-in" data-aos-duration="3000" img="https://cdn.discordapp.com/attachments/817048198022430761/1021347820357296128/pexels-eiliv-aceron-6895958.jpg"/>
                    <GalleryImage data-aos="fade-in" data-aos-duration="3000" img="https://cdn.discordapp.com/attachments/817048198022430761/1023671049818214410/pexels-yusril-khaerul-muslim-9454718.jpg"/>


                    {/* <GalleryImage data-aos="fade-in" data-aos-duration="3000" img="https://cdn.discordapp.com/attachments/817048198022430761/1021330259020349500/pexels-jess-bailey-designs-1058434.jpg"/>
                    <GalleryImage data-aos="fade-in" data-aos-duration="3000" img="https://cdn.discordapp.com/attachments/817048198022430761/1020269046316408833/pexels-this-is-zun-1148215.jpg"/>
                    <GalleryImage data-aos="fade-in" data-aos-duration="3000" img="https://cdn.discordapp.com/attachments/817048198022430761/1021347820357296128/pexels-eiliv-aceron-6895958.jpg"/>
                    <GalleryImage data-aos="fade-in" data-aos-duration="3000" img="https://cdn.discordapp.com/attachments/817048198022430761/1021330259020349500/pexels-jess-bailey-designs-1058434.jpg"/> */}
                </div>

                <div>
                    <p className="text-gray-300"></p>
                </div>
            </div>
        </section>
      
    )
}

export default Gallery