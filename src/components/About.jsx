import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index, title, icon}) => {
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div 
        variants={fadeIn("right","spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale:1,
            speed:450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title}
            className='w-16 h-16 object-contain'
          />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>

      </motion.div>
    </Tilt>
  )}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p 
        variants={fadeIn("","",0.1,1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
      Hey there! I'm a tech enthusiast with a mix of skills—Python, React, React Native, Swift, TypeScript, Flutter, Dart, SQL, you name it. I love diving into different roles and taking charge of features, making sure they're not just lines of code but actually make a difference.
      My thing is wearing many hats and thriving in dynamic environments. I've got a knack for owning features and driving them to success. What really gets me going is creating software that brings a positive change to the world.
      Right now, I'm on the lookout for software development gigs. I'm all about roles that let me use my skills in a collaborative and innovative setup. If it's a place where I can make a meaningful impact and keep learning, count me in! Let's make some cool stuff together. 
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard 
            key={service.title}
            index={index}
            {...service}
          />
        ))}
      </div>

    </>
  )
};

export default SectionWrapper(About, "about");