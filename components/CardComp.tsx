import React from 'react'
import {Card, CardHeader, CardBody} from "@nextui-org/react";
import { motion } from 'framer-motion'
import Tag from './Tag'
import Image, { StaticImageData } from 'next/image'
import Notification from './Notification'

type Props = {
    tagline: string,
    txt: string,
    poster: StaticImageData,
    color: string
}


export default function CardComp({ tagline, txt, poster, color}: Props) {
  return (
    <div className=''>
        <motion.div
        initial={{opacity:0, y:140}}
        transition={{duration:1}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        className='h-fit sm:max-w-[300px] max-w-full flex space-y-0 items-start justify-center z-0 mx-6  '>
            <Card className="py-4 h-[600px]  flex items-start">
                <CardBody className="overflow-visible py-2 w-full flex items-center">
                    <Image
                    alt="Card background"
                    className="rounded-xl object-contain bg-emerald-100"
                    src={poster}
                    width={270}
                    />
                </CardBody>
                <CardHeader className="px-4 flex-col items-start  flex-1">
                    <Tag tagline={tagline} color={color}/>
                    <p className="text-base text-default-500 text-left ">{txt}</p>
                </CardHeader>
            </Card>
        </motion.div>
    </div>
  )
}

