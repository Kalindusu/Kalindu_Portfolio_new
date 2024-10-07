import React from 'react';
import ABOUTIMG from '../assets/about.jpg';
import { ABOUT_TEXT } from '../constants';
import { motion } from 'framer-motion';
import Model from '../assets/UI/Model';

const About = () => {
    return ( 
        <div className="border-b border-neutral-500 pb-1">
            <h1 className="my-20 text-center text-4xl font-bold">About <span className="text-neutral-500">Me</span></h1>

            <div className="">
            <div className=" pl-10 flex items-center justify-center pb-4 lg:mb-35 "> 
            <motion.div
                className=" my-4 max-w-2xl py-6 font-light tracking-tight text-lg md:text-xl lg:text-xl text-white"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
            >
            <div> 
                <p className="mb-4 ">
                 {ABOUT_TEXT}
                </p>
            </div>
            </motion.div>
            </div>
            <div className=" pb-8">
        <Model />
        <div className="items-center gap-4 flex text-3xl text-white mt-28 container font-nav ">
         
        </div>
      </div>

            </div>
        </div>
        );
    } 
 
export default About;
