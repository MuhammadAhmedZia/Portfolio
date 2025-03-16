import React from 'react'
import { ABOUT_TEXT } from '../constant'
import AboutImg from '../assets/about.jpg'
import { motion } from 'framer-motion'
function About() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl md:text-5xl">
        About
        <span className='text-neutral-500'> Me</span>
      </motion.h1>
      <div className="flex flex-wrap">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}

          className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">

            <img src={AboutImg} className='rounded-2xl' alt="" />

          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 md:text-2xl text-justify">
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About