import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';
import Nav from "../components/Nav";
import CarouselHero from "../components/CarouselHero";
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
import Masonry from "../components/Masonry";
import SmallCarouselHero from '../components/SmallCarouselHero';
// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main className="bg-black ">
        <div className='sticky top-0 z-50'>
        <Nav />

        </div>

      <CarouselHero className="-z-10"/>

      <SmallCarouselHero className="-z-10"/>
      <About />

      <Menu />

    {/* <Masonry /> */}
      <Gallery />

      <Contact />


      </main>
    </Layout>
  );
}
