import React from 'react'
import { motion } from 'framer-motion'
import Tag from './Tag'
import Image, { StaticImageData } from 'next/image'
import Notification from './Notification'

type Props = {
    reverse: boolean,
    tagline: string,
    headline: string,
    txt: string,
    poster: StaticImageData,
    message: string,
    person: string,
    img: StaticImageData,
    color: string
}


export default function Feature({reverse, tagline, headline, txt, poster, message, person, img, color}: Props) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 140 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className=" flex items-center justify-center  z-0  my-20  sm:text-left text-center"
      >
        <div
          className={`  md:flex-1  flex md:flex-row flex-col justify-between py-6 px-8   z-20 ${
            reverse ? "flex-col-reverse md:flex-row-reverse" : ""
          }`}
        >
          <div className="flex-1 flex flex-col gap-4   ">
            <Tag tagline={tagline} color={color} />
            <h1
              className=" sm:text-5xl text-2xl  font-extrabold pb-6 space-x-2"
            >
              {headline}
            </h1>
            <p className="sm:text-xl  text-gray-500 ">{txt}</p>
            <div className="  sm:text-base text-sm">
              <Notification
                message={message}
                person={person}
                img={img}
                reverse={reverse}
              />
            </div>
          </div>
          <div className={`md:flex-1 ${
            reverse ? "mt-0" : "mt-40"
          }`}>
            <Image src={poster}  alt="Feature 1" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
