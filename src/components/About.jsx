import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full" >
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px=12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt="title" className='w-16 h-16 object-contain' />
          <h3>{title}</h3>

        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>

      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text[17px] max-w-3xl leading-[30px]'
      >
        I'm an aspiring and enthusiastic Junior Full-Stack Web Developer with a passion for creating intuitive user interfaces and dynamic web applications. I have graduated the Develhope Full-Stack Web developer 6 months course. During this course I have gained skills in languages like HTML, CSS, and Javascript and frameworks like React.js for the frontend, and Node.js and PostgreSQL database for the server side. I am a quick lerner and enthusiastic about programming. Let's work together to bring your innovative ideas to life through code.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} title={service.title} icon={service.icon}/>
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(About, "about")
