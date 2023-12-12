"use client";

import Button from '../Ui/Button';
import Container from '../Ui/Container';
import { neutralsZ } from '../Assets/Const/ColorConst';
import html from '../Assets/images/html.png';
import css from '../Assets/images/css.png';
import javascript from '../Assets/images/javascript.png';
import nodejs from '../Assets/images/nodejs.png';
import ex from '../Assets/images/ex.png';
import react from '../Assets/images/reactjs.png';
import db from '../Assets/images/mongodb.png';
import LazyTypeWriter from '../Ui/TypeWriter'




const HomeSection = () => (
  <div
    className=" flex mt-24 w-full flex-col justify-center items-center mt-10">
    <Container >
      <div className="flex flex-col items-center justify-evenly HomeSection_div relative ">
        <div>
          <div id="hero-heading" className={`text-center min-h-[25vh]   text-4xl/tight font-bold text-${neutralsZ} sm:text-5xl/tight md:text-6xl/tight lg:text-7xl/tight scale-105  flex  flex-col justify-between sm:block`} >   <span>TRANSFORMING</span> <span>IDEAS INTO</span> <span>DIGITAL</span> <span>REALITIES</span> </div>
        </div>
        <div><LazyTypeWriter /></div>
        <div className='flex my-12'>
          <img className='lg:h-20 md:h-16 sm:h-14 h-10 w-auto mx-[5px] wave'   src={html} alt='html' />
          <img className='lg:h-20 md:h-16 sm:h-14 h-10 w-auto mx-[5px] wave'   src={css} alt='css' />
          <img className='lg:h-20 md:h-16 sm:h-14 h-10 w-auto mx-[5px] wave'   src={javascript} alt='js' />
          <img className='lg:h-20 md:h-16 sm:h-14 h-10 w-auto mx-[5px] wave'   src={react} alt='react' />
          <img className='lg:h-20 md:h-16 sm:h-14 h-10 w-auto mx-[5px] wave'   src={nodejs} alt='nodejs' />
          <img className='lg:h-20 md:h-16 sm:h-14 h-10 w-auto mx-[5px] wave'   src={ex} alt='express' />
          <img className='lg:h-20 md:h-16 sm:h-14 h-10 w-auto mx-[5px] wave'   src={db} alt='mongodb' />
        </div>
        <div className="flex items-stretch gap-x-6 gap-y-4 md:gap-y-3 max-sm:flex-col sm:items-center max-sm:justify-evenly ">
          <Button as="a" href="/#work" background="primary" size="large" > Projects </Button>
          <Button as="a" href="/#services" background="primary" size="large" >Services </Button>
        </div>
      </div>
    </Container>
  </div>
);

export default HomeSection;
