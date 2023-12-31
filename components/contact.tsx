"use client";

import React from 'react'
import SectionHeading from './SectionHeading'
import {FaPaperPlane} from "react-icons/fa"
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';
import { toast } from 'react-hot-toast'

export default function Contact() {
    const { ref } = useSectionInView("Contact")

   

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
        <p className='text-gray-700 text-center -mt-6 dark:text-white/70'>Please contact me directly at <a className='underline' href="mailto:henrycnnamani4@gmail.com">henrycnnamani4@gmail.com</a> or through this form.</p>

        <form 

          // action="https://getform.io/f/b7c575da-bb28-4f55-9dc4-b95d916645a2"
          // method='POST'
          // encType='multipart/form-data'
        
        action={async (formData)=> {

            const {data, error} = await sendEmail(formData);

            if(error){
              toast.error(error);
              return
            }

            toast.success("Email send successfully!");
        }}
         className='mt-10 flex flex-col dark:text-black '>
            <input
            placeholder='Your email'
            name='senderEmail'
            required
            className='px-4 h-14 rounded-lg border border-black/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none' type="email" />
            <textarea 
            name='message'
            required
            placeholder='Your message'
            className='h-52 my-3 rounded-lg border border-black/10 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none' />
            <SubmitBtn />
        </form>
    </motion.section>
  )
}
