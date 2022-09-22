import Image from "next/image";
import GalleryImage from "./GalleryImage";

const Gallery  = () => {
    return(
        <section className="flex justify-center">
            <div className="flex-col space-y-6">
                <h4 className="text-[50px] font-Cormorant text-lightYellow text-center mb-5"> Image Gallery</h4>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-4 ">
                    <GalleryImage img="https://cdn.discordapp.com/attachments/817048198022430761/1021330259020349500/pexels-jess-bailey-designs-1058434.jpg"/>
                    <GalleryImage img="https://cdn.discordapp.com/attachments/817048198022430761/1020269046316408833/pexels-this-is-zun-1148215.jpg"/>
                    <GalleryImage img="https://cdn.discordapp.com/attachments/817048198022430761/1021347820357296128/pexels-eiliv-aceron-6895958.jpg"/>
                    <GalleryImage img="https://cdn.discordapp.com/attachments/817048198022430761/1021330259020349500/pexels-jess-bailey-designs-1058434.jpg"/>

                    <GalleryImage img="https://cdn.discordapp.com/attachments/817048198022430761/1021330259020349500/pexels-jess-bailey-designs-1058434.jpg"/>
                    <GalleryImage img="https://cdn.discordapp.com/attachments/817048198022430761/1020269046316408833/pexels-this-is-zun-1148215.jpg"/>
                    <GalleryImage img="https://cdn.discordapp.com/attachments/817048198022430761/1021347820357296128/pexels-eiliv-aceron-6895958.jpg"/>
                    <GalleryImage img="https://cdn.discordapp.com/attachments/817048198022430761/1021330259020349500/pexels-jess-bailey-designs-1058434.jpg"/>


                    <GalleryImage img="https://cdn.discordapp.com/attachments/817048198022430761/1021330259020349500/pexels-jess-bailey-designs-1058434.jpg"/>
                    <GalleryImage img="https://cdn.discordapp.com/attachments/817048198022430761/1020269046316408833/pexels-this-is-zun-1148215.jpg"/>
                    <GalleryImage img="https://cdn.discordapp.com/attachments/817048198022430761/1021347820357296128/pexels-eiliv-aceron-6895958.jpg"/>
                    <GalleryImage img="https://cdn.discordapp.com/attachments/817048198022430761/1021330259020349500/pexels-jess-bailey-designs-1058434.jpg"/>
                </div>

                <div>
                    <p className="text-gray-300"></p>
                </div>
            </div>
        </section>
      
    )
}

export default Gallery