import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';
import Nav from "../components/Nav";
import CarouselHero from "../components/CarouselHero";
// import MasonryGallery from "../components/MasonryGallery";
/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Vercel from '~/svg/Vercel.svg';
import { Carousel } from 'react-responsive-carousel';
import About from '../components/About';
import Menu from '../components/Menu';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import SmallCarouselHero from '../components/SmallCarouselHero';
import Preloader from '../components/Preloader';
import CascadingCards from '../components/CascadingCards';
import CascadingGallery from '../components/CascadingGallery';
import Footer from '../components/Footer';
import Info from '../components/Info';
// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout className="">
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <Preloader />
      <main className="bg-black ">
        <div className='sticky top-0 z-50'>
        <Nav />

        </div>

      <CarouselHero className="-z-10"/>

      <SmallCarouselHero className="-z-10"/>
      <About />

      <div className="flex-col space-y-5">
        <div className="flex justify-center text-4xl mt-10">
            <h1 className="text-coolYellowFocus font-Cormorant  font-light italic">Our Menu</h1>
        </div>
      </div>
      
      <Menu />

    {/* <Masonry /> */}
    <Info />
    <div className='mx-5 lg:mx-20'>
      <Gallery />

    </div>
      {/* <CascadingGallery /> */}
      
      {/* <MasonryGallery /> */}
      <div className="">
        <Contact />

      </div>



      </main>

      <div className="bg-black pt-20">
        <Footer />

      </div>
    </Layout>
  );
}
