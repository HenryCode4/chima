"use client";

import React from 'react'
import SectionHeading from './SectionHeading'
import {FaPaperPlane} from "react-icons/fa"
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Contact() {
    const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
        <SectionHeading>Contact me</SectionHeading>
        <p className='text-gray-700 text-center -mt-6'>Please contact me directly at <a className='underline' href="mailto:henrycnnamani4@gmail.com">henrycnnamani4@gmail.com</a> or through this form.</p>

        <form className='mt-10 flex flex-col '>
            <input
            placeholder='Your email'
            className='px-4 h-14 rounded-lg border border-black/10' type="email" />
            <textarea 
            placeholder='Your message'
            className='h-52 my-3 rounded-lg border border-black/10 p-4' />
            <button className=' group h-[3rem] w-[8rem] flex items-center gap-2 bg-gray-900 text-white justify-center rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950' type='submit'>
                Submit <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1
                group-hover:-translate-y-1" />{" "}
            </button>
        </form>
    </motion.section>
  )
}
