import React from 'react'
import { motion } from 'framer-motion'
import Tag from './Tag'
import Feature1 from "../static/images/feature1.png"
import Feature2 from "../static/images/feature2.png"
import Feature3 from "../static/images/feature3.png"
import Feature4 from "../static/images/feature4.png"
import CardComp from './CardComp';



export default function Cards() {

    const Cards = [
        {
            tagline: "Cross-Device Sync",
            color: "#f1f2f4",
            txt: "Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go.",
            poster: Feature1
        },
        {
            tagline: "Auto Event Import",
            color: "#FDDED6",
            txt: "Automatically import events from emails, social media, and other sources, so you never miss a beat or have to manually input details.",
            poster: Feature2
        },       
        {
            tagline: "Task Delegation",
            color: "#DDF4E4",
            txt: "Easily assign tasks to team members, family, or friends, promoting shared responsibility and seamless collaboration. ",
            poster: Feature3
        },
        {
            tagline: "Voice Command Integration",
            color: "rgb(204 234 253)",
            txt: "Quickly create events, set reminders, or reschedule appointments with voice commands, thanks to compatibility with popular virtual assistants. ",
            poster: Feature4
        },
        {
            tagline: "Customizable Alerts",
            color: "rgb(254 233 203)",
            txt: "Personalize notification types and timings for events, tasks, and goals, ensuring you stay on track and informed without feeling overwhelmed. ",
            poster: Feature3
        },
        {
            tagline: "Privacy Protection",
            color: "#C39CF6",
            txt: "Safeguard your personal information and event details with our robust security measures, including end-to-end encryption and optional password protection.",
            poster: Feature1
        },
    ]
  return (
    <div>
      <div className=" flex flex-col space-y-0 items-center justify-center text-center z-0   xl:w-[65%] w-full m-auto">
        <div className="text-center z-20 px-1">
          <motion.div
            initial={{ opacity: 0, y: 140 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <div className="flex flex-col items-center sm:mt-0 mt-10">
              <Tag tagline="And so much more... 💼" color="#f1f2f4"  />
            </div>
            <h1 className="sm:text-5xl text-4xl  font-extrabold pb-6">
              Our features to make your life easier
            </h1>
          </motion.div>
          <div className="flex flex-wrap  justify-center gap-10 flex-row ">
          {/* <div className="grid lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-1 p-4 m-4"> */}
            {Cards.map((card, index) => (
              <CardComp key={index} {...card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
