'use client'
import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { cn, clamp } from '../Lib/Utils';
import { neutralsOne, neutralsSix } from '../Assets/Const/ColorConst';
import Button from './Button';
import backIcon from '../Assets/images/back.svg';
import nextIcon from '../Assets/images/next.svg';
import img from "../Assets/images/pro1.jpg";



const CAROUSEL_SLIDES_GAP = 24;

function ProjectCarousel({ projects }) {
    const carouselRef = useRef(null);
    const [carouselWidth, setCarouselWidth] = useState(0);
    const [carouselSlideWidth, setCarouselSlideWidth] = useState(0);
    const [maxScrollWidth, setMaxScrollWidth] = useState(0);
    const scrollPosition = useMotionValue(0);
    const [currentSlide, setCurrentSlide] = useState(0);

    const updateCarouselConstraints = useCallback(() => {
        if (!carouselRef.current || !carouselRef.current.firstElementChild) return;
        setCarouselWidth(carouselRef.current.offsetWidth);
        setCarouselSlideWidth(carouselRef.current.firstElementChild.offsetWidth);
        setMaxScrollWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }, []);

    useEffect(() => {
        updateCarouselConstraints();
        window.addEventListener('resize', updateCarouselConstraints);
        window.addEventListener('orientationchange', updateCarouselConstraints);
        return () => {
            window.removeEventListener('resize', updateCarouselConstraints);
            window.removeEventListener('orientationchange', updateCarouselConstraints);
        };
    }, [updateCarouselConstraints]);

    function updateCurrentSlide(latestScrollPosition) {
        setCurrentSlide(
            clamp(
                0,
                Math.round(latestScrollPosition / (carouselSlideWidth + CAROUSEL_SLIDES_GAP)),
                projects.length - 1,
            ),
        );
    }

    useEffect(() => {
        const handleScroll = () => {
             const currentCarouselRef = carouselRef.current;
             if (currentCarouselRef) {
                 updateCurrentSlide(currentCarouselRef.scrollLeft);
             }
        };
    
        carouselRef.current.addEventListener('scroll', handleScroll);
    
        return () => {
            const currentCarouselRef = carouselRef.current;
            if (currentCarouselRef) {
                currentCarouselRef.removeEventListener('scroll', handleScroll);
            }
        };
    }, [carouselSlideWidth, projects.length, updateCurrentSlide]);
    

    function scrollToSlide(slideIndex) {
        if (carouselRef.current) {
            carouselRef.current.scrollTo({
                left: slideIndex * (carouselSlideWidth + CAROUSEL_SLIDES_GAP),
                behavior: 'smooth',
            });
        }
    }
    function scrollToPreviousSlide() {
        scrollToSlide(currentSlide - 1);
    }

    function scrollToNextSlide() {
        scrollToSlide(currentSlide + 1);
    }
    const handlePrjectAddress = (address) => {
        if (address) {
            window.open(address, '_blank');
          }
    }
    return (
        <div className='mb-20'>
            <div className="relative py-1 top-56">
                <div aria-label="Carousel Controls" className="pointer-events-none absolute top-1/2 z-10 flex w-full -translate-y-1/2 justify-between px-2 lg:px-2">
                    <button type="button"
                        onClick={scrollToPreviousSlide}
                        title="Previous project slide" aria-controls="project-carousel"
                        disabled={currentSlide === 0}
                        aria-label='black'
                        className={`pointer-events-auto aspect-square h-fit rounded-full border borderColor bg-[#0c141b] p-4 text-${neutralsOne} drop-shadow-md backdrop-blur-md disabled:cursor-not-allowed disabled:opacity-50 `}
                    >
                        <img src={backIcon} alt='back' className='h-5 w-5' />
                    </button>
                    <button
                        type="button"
                        onClick={scrollToNextSlide}
                        title="Next project slide"
                        aria-controls="project-carousel"
                        disabled={currentSlide === projects.length - 1}
                        aria-label='next'
                        className={`pointer-events-auto aspect-square h-fit rounded-full border borderColor bg-[#0c141b] p-4 text-${neutralsOne} drop-shadow-md backdrop-blur-md disabled:cursor-not-allowed disabled:opacity-50 `}
                    >
                        <img src={nextIcon} alt='next' className='h-5 w-5' />

                    </button>
                </div>
                <p
                    role="status"
                    aria-live="polite"
                    aria-atomic="true"
                    className="sr-only"
                >
                    Project {currentSlide + 1} of {projects.length}
                </p>
            </div>
            <div ref={carouselRef} className={cn('grid auto-cols-min grid-flow-col gap-x-6 overflow-x-auto pe-[calc(25vw-(clamp(18rem,42vmin,26rem)+1.5rem)/3)] ps-[calc(25vw-clamp(18rem,42vmin,26rem)/2-7px)]')}>
                {projects.map((project, index) => {
                    console.log(project)
                    return(
                    <motion.div
                        key={project._id}
                        className={cn('aspect-[2/3] w-[clamp(18rem,42vmin,26rem)] overflow-hidden rounded-md')} style={{ backgroundImage: `url(${project.projectImage})`, backgroundPosition: "center", backgroundSize: "cover", backgroundPosition: "top" }}>
                        <div className={cn(' group block h-full w-full rounded-md border borderColor flex flex-col items-center justify-center  backdrop-sepia-0 bg-black/80')}>
                            <div className='text-white mb-3    '>{project.name}</div>
                            <div className='text-white mb-3'>{project.type}</div>
                            <div className='text-white mb-3'>{project.status}</div>
                            <Button className="hover:scale-x-125 hover:transform-gpu" background="primary" size="small" onClick={() => handlePrjectAddress(project.Address)} >View Project</Button>
                        </div>
                    </motion.div>

                )}
                )}
            </div>

        </div>
    );
}

export default ProjectCarousel;
