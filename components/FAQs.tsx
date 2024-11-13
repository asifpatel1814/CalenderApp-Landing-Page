import React from 'react'
import {Accordion, AccordionItem} from "@nextui-org/react";
import Tag from './Tag';
import { motion } from 'framer-motion'


type FAQ = {
  [question: string]: string;
};

export default function FAQs() {
    const faqs:FAQ[] = [
        {"What's the best thing about Switzerland?" : "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."},
        {"How do you make holy water?" : "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."},
        {"What do you call someone with no body and no nose?" : "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."},
        {"Why do you never see elephants hiding in trees?" : "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."},
        {"Why can't you hear a pterodactyl go to the bathroom?" : "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."},        {"What's the best thing about Switzerland?" : "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."},
        {"Why did the invisible man turn down the job offer?" : "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."},
        
    ];
    
  return (
    <div className=' flex flex-col items-center justify-center text-center z-0 '>
        <div className='text-center z-20  xl:w-[65%] w-full'>
            <motion.div
            initial={{opacity:0, y:140}}
            transition={{duration:1}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            className='mb-10 '>
                <div className='flex flex-col items-center'>
                    <Tag tagline='Relevant stuff, bla bla 📣' color='#f1f2f4' />
                </div>
                <h1 className='sm:text-6xl text-3xl  font-extrabold ' >
                   Frequently asked questions
                </h1>
            </motion.div>
            <div className='text-left  xl:w-[70%] w-[90%] m-auto'>
                <Accordion variant="splitted">
                    {
                        faqs.map((obj, index)=> (
                            <AccordionItem key={index} aria-label="Accordion 1" title={ Object.keys(obj)[0]}>
                                {obj[Object.keys(obj)[0]]}
                            </AccordionItem>

                        ))
                    }
                    
                </Accordion>
            </div>
        </div>
    </div>
  )
}


