import Container from '../Ui/Container';
import Title from '../Common/Title';
import dev from '../Assets/images/dev.jpg';
import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';

const typingSpeed = 0.125;
const deleteSpeed = 0.1;
const delayBeforeDelete = 1.1;

const headingVariants = {
  visible: {
    transition: {
      staggerChildren: typingSpeed,
    },
  },
  exit: {
    transition: {
      staggerChildren: deleteSpeed,
      staggerDirection: -1,
    },
  },
};

const letterVariants = {
  enter: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
  },
  exit: {
    opacity: 0,
    y: -30,
    x: 30,
    skew: 10,
    rotateZ: 25,
    scale: 1.5,
    filter: 'blur(10px)',
  },
};

function HomeAbout() {
  const headings = [
    'Time-Conscious',
    'Designer',
    'Problem solver',
    'Freelancer',
    'Innovator',
    'Innovative Visionary',
  ];

  const tech = [
    "HTML 5",
    "CSS 3",
    "TAILWAND CSS",
    "BOOTSTRAP",
    "JAVASCRIPT",
    "REACT JS",
    "NEXT JS",
    "NODE JS",
    "EXPRESS",
    "MONGODB",
    "SEO"
  ].map((tech, i) => ({
    id: i + 1,
    tech
  }))
  const speed = 16000;



  const [typingMode, setTypingMode] = useState('typing');
  const [headingIndex, setHeadingIndex] = useState(0);
  const [previousHeadingIndex, setPreviousHeadingIndex] = useState(0);

  const currentHeading = headings[headingIndex];
  const previousHeading = headings[previousHeadingIndex];

  const updateTypingModeTimer = useCallback(() => {
    if (typingMode === 'typing') {
      const typeDuration = (currentHeading.length * typingSpeed + delayBeforeDelete) * 1000;

      return setTimeout(() => {
        const nextHeadingIndex = (headingIndex + 1) % headings.length;

        setPreviousHeadingIndex(headingIndex);
        setHeadingIndex(nextHeadingIndex);
        setTypingMode('deleting');
      }, typeDuration);
    }

    const deleteDuration = previousHeading.length * deleteSpeed * 1000;

    return setTimeout(() => {
      setTypingMode('typing');
    }, deleteDuration);
  }, [currentHeading.length, headingIndex, headings.length, previousHeading.length, typingMode]);

  useEffect(() => {
    const typingTimer = updateTypingModeTimer();

    return () => clearTimeout(typingTimer);
  }, [typingMode, updateTypingModeTimer]);


  return (

    <Container >
      <div className='mt-20'>
        <Title name={"About"} />
      </div>
      <div className='relative  my-6 h-12 flext items-center' >


      <div className="mb-4 text-3xl md:font-medium font-bold md:text-4xl text-light">
      <h2 className="sr-only">{currentHeading}</h2>
      <AnimatePresence mode="wait">
        <motion.h2
          aria-hidden
          key={currentHeading}
          variants={headingVariants}
          initial="enter"
          animate="visible"
          exit="exit"
        >
          {currentHeading.split('').map((char, index) => (
            <motion.span
              key={`${char}-${index}`}
              className="inline-block whitespace-pre"
              variants={letterVariants}
            >
              {char}
            </motion.span>
          ))}
        </motion.h2>
      </AnimatePresence>
    </div>


        
      </div>

      <div className='items-center justify-space grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-8'>
        <div className='items-center justify-center flex'>
          <img src={dev} alt='myImage' loading="lazy" className="lg:h-72 lg:w-72 md:h-80 md:w-80  sm:h-40 sm:w-40 h-40 w-40 mx-1 rounded-full" />
        </div>
        <div >
          <div className='h-20'>
            <div className='home_about_content'>
              <h2>DeveLoper</h2>
              <h2>DeveLoper</h2>
            </div>
          </div>
          <div className='text-xl text-justify font-sans'>
            Welcome to my digital workspace! Myself Akash, a passionate and versatile Fullstack Web Developer dedicated to transforming innovative ideas into functional, user-friendly applications. With a keen eye for detail and a commitment to excellence, I bring a wealth of experience in crafting dynamic and responsive web solutions.
          </div>
        </div>
      </div>

      <div className="inner">
        <div className="wrapper">
          <section style={{ "--speed": `${speed}ms` }} className="secc">
            {tech.map(({ id, tech }) => (
              <div className="tech" key={id}>
                <span>{tech}</span>
              </div>
            ))}
          </section>
          <section style={{ "--speed": `${speed}ms` }} className="secc">
            {tech.map(({ id, tech }) => (
              <div className="tech" key={id}>
                <span>{tech}</span>
              </div>
            ))}
          </section>
          <section style={{ "--speed": `${speed}ms` }} className="secc">
            {tech.map(({ id, tech }) => (
              <div className="tech" key={id}>
                <span className="whitespace-nowrap">{tech}</span>
              </div>
            ))}
          </section>
        </div>
      </div>
      <div>

      </div>

    </Container>
  );
}

export default HomeAbout;
