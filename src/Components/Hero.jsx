import React from 'react'
import { HERO_CONTENT } from '../constant'
import profilePic from '../assets/kevinRushProfile.jpg'
import { delay, motion } from 'framer-motion'


const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 1.5, delay: delay }
    }
});
function Hero() {
    return (
        <div className='border-b border-neutral-900 pb-4 lg-35'>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0.5)}
                            animate="visible"
                            initial="hidden"
                            className='pb-16 text-5xl font-thin tracking-tight text-center sm:text-left lg:mt-16 lg:text-8xl'>



                            Muhammad Ahmed Zia
                        </motion.h1>
                        <motion.span
                            variants={container(2)}
                            animate="visible"
                            initial="hidden"
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">

                            Full Stack Developer
                        </motion.span>
                        <motion.p
                            variants={container(1)}
                            animate="visible"
                            initial="hidden"
                            className="my-2 max-w-xl py-6 font-light md:text-2xl tracking-tighter text-justify">



                            {HERO_CONTENT}

                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">

                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            src={profilePic} alt="" />


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero