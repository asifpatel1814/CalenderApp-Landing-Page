import React from 'react'
import { motion } from 'framer-motion'
import Tag from './Tag'
import {Link, Button} from "@nextui-org/react";


export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 140 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="h-[100vh] flex flex-col space-y-0 items-center justify-center  text-center z-0 "
    >
      <div className="text-center z-20  px-4 space-y-4">
        <div className="flex flex-col items-center">
          <Tag tagline="An another way to manage time" color="#f1f2f4" />
        </div>
        <div className="text-xl sm:text-7xl font-extrabold ">
          Your new favorite calendar 🗓️ app
        </div>
        <div>        
        <h2
          className="text-sm text-[rgb(46, 46, 46)] sm:text-xl "
        >
          Here you should explain how cool your app is.
        </h2>
        <h2
          className="text-sm text-[rgb(46, 46, 46)] sm:text-xl mb-2"
        >
          Remember, focus on the benefits for your users, not on the features.
        </h2></div>
        <div className='space-y-4'>
          <Button
            as={Link}
            className="mt-4 font-semibold text-[#FFFFFF] sm:text-lg text-sm bg-[#2E2E2E]"
            href="#"
            variant="flat"
          >
            Get Started, It's free
          </Button>
          <p className="text-sm text-stone-600">
            Free 14 days trials,no credit card needed
          </p>
        </div>
      </div>
    </motion.div>
  );
}
