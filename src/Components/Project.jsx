import React from 'react'
import { PROJECTS } from '../constant'
import { motion } from 'framer-motion'
function Project() {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 2.5 }}
                className="my-20 text-center text-4xl md:text-5xl">Projects
            </motion.h1>
            <div className="">
                {PROJECTS.map((project, index) => (
                    <div key={index}
                        className='mb-8 flex flex-wrap lg:justify-center'>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ x: -100, opacity: 0 }}
                            transition={{ duration: 1.5 }}
                            className="w-full lg:w-1/4">
                            <img
                                src={project.image}
                                width={150}
                                height={150}
                                alt={project.title}
                                className='mb-6 rounded'
                            />
                        </motion.div>
                        <div className="">
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ x: 100, opacity: 0 }}
                                transition={{ duration: 1 }}
                                className="w-full max-w-xl lg:w-3/4">
                                <h6 className="mb-2 font-semibold md:text-xl">{project.title}</h6>
                                <p className="mb-4 text-neutral-400 text-justify md:text-xl">{project.description}</p>
                                <div className="flex flex-wrap">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm md:text-lg font-medium text-purple-900'>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Project