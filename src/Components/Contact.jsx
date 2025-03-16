import React from 'react'
import { CONTACT } from '../constant'
import { motion } from 'framer-motion'

function Contact() {
  return (
    <div className='border-b border-neutral-900 pb-20'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className='my-10 text-center text-4xl md:text-5xl'>Get In Touch
      </motion.h1>
      <div className="text-center tracking-tighter md:text-2xl">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 1 }}
          className="my-4">{CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="my-4">{CONTACT.phoneNo}
        </motion.p>
        <a
          href="">
          {CONTACT.email}
        </a>
      </div>
    </div>
  )
}

export default Contact