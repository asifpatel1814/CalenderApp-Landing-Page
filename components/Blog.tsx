import React from 'react'
import { motion } from 'framer-motion'
import Tag from './Tag'
import {Link, Button} from "@nextui-org/react";
import character4 from "../static/images/char4.png"
import Notification from './Notification';


export default function Blog() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 140 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className=" flex flex-col items-center justify-center text-center z-0 mb-16  "
    >
      <div className="text-center  z-20">
        <div className="flex flex-col items-center mt-40">
          <Tag tagline="Last call Baby! 🚀" color="rgb(254 233 203)" />
        </div>
        <h1 className="sm:text-5xl   text-4xl font-extrabold pb-6">
          Ready to start?
        </h1>
        <h2 className="text-xl mt-3" style={{ color: "rgb(46, 46, 46)" }}>
          Here is your last chance to explain how cool your app is. Focus
        </h2>
        <h2 className="text-xl mb-2" style={{ color: "rgb(46, 46, 46)" }}>
          on the benefits for your users, not on the features.
        </h2>
        <div className="my-4 mb-8">
          <Button
            as={Link}
            className="mt-4"
            style={{
              backgroundColor: "#2E2E2E",
              color: "#FFFFFF",
              fontSize: "18px",
            }}
            href="#"
            variant="flat"
          >
            <b>Get Started, It's free</b>
          </Button>
        </div>
        <div>
          <Notification
            message="I never missed a call again, AI-drivenfeature is a game changer for me!"
            person="Adam, Solo founder"
            img={character4}
            reverse={false}
          />
        </div>
      </div>
    </motion.div>
  );
}
