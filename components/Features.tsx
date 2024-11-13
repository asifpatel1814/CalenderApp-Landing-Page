import React from 'react'
import { motion } from 'framer-motion'
import Tag from './Tag'
import {Link, Button} from "@nextui-org/react";
import Feature from './Feature';
import Feature1 from "../static/images/feature1.png"
import Character1 from "../static/images/char1.png"
import Feature2 from "../static/images/feature2.png"
import Character2 from "../static/images/char2.png"
import Feature3 from "../static/images/feature3.png"
import Character3 from "../static/images/char3.png"
import Feature4 from "../static/images/feature4.png"
import Character4 from "../static/images/char4.png"



export default function Features() {

    const Features = [
        {
            tagline: "Seamless Scheduling",
            headline: "Focus on what matters most for you",
            txt: "Effortlessly plan your day with our intuitive drag-and-drop interface. Sync with multiple calendar platforms, import events from emails, and add participants with just a few clicks.",
            poster: Feature1,
            message: "I tested many calendar apps. This app is the best of all! It saves me hours of time.",
            person: "Carla, Head of Finance ",
            img: Character1,
            color: 'rgb(254 233 203)'
        },
        {
            tagline: "Smart Reminders & Task",
            headline: "Never miss an important deadline or event again",
            txt: "Never miss an important deadline again with our AI-driven  notifications. Our app intelligently analyzes your schedule to prioritize what's most important, keeping you on track and ensuring your day is productive and stress-free.",
            poster: Feature2,
            message: "I love how user-friendly this app is! It's so easy to add events and set reminders!",
            person: "Adam, entrepreneur",
            img: Character2,
            color: "rgb(204 234 253)"
        },
        {
            tagline: "Seamless Scheduling",
            headline: "Focus on what matters most for you",
            txt: "Effortlessly plan your day with our intuitive drag-and-drop interface. Sync with multiple calendar platforms, import events from emails, and add participants with just a few clicks.",
            poster: Feature3,
            message: "I've tried a lot of calendar apps, but this one is best! It's customizable, and it has all features I need.",
            person: "Annie, Designer ",
            img: Character3,
            color: "#DDF4E4"
        },
        {
            tagline: "Smart Reminders & Task",
            headline: "Never miss an important deadline or event again",
            txt: "Never miss an important deadline again with our AI-driven  notifications. Our app intelligently analyzes your schedule to prioritize what's most important, keeping you on track and ensuring your day is productive and stress-free.",
            poster: Feature4,
            message: "I've recommended this app to all my friends and colleagues! ",
            person: "Karl, CTO of a cool startup",
            img: Character4,
            color: "rgb(254 233 203)"
        },
    ]
  return (
    <div>
      <div className=" flex flex-col space-y-0 items-center justify-center text-center z-0">
        <div className="text-center xl:w-[65%] w-full z-20">
          <motion.div
            initial={{ opacity: 0, y: 140 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 py-4 w-full"
          >
            <div className="flex flex-col items-center ">
              <h1 className='text-black font-bold sm:text-2xl text-sm'>Our main features 🦸🏼</h1>
            </div>
            <h1 className="sm:text-5xl text-xl break-words font-extrabold ">
              Discover your new superpowers
            </h1>
          </motion.div>
          <div >
            {Features.map((feature, index) => (
              <Feature key={index} reverse={index % 2 != 0} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
