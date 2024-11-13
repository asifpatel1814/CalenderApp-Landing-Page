import React from 'react'
import {Card, CardHeader, CardBody} from "@nextui-org/react";
import { motion } from 'framer-motion'
import Tag from './Tag'
import {Link, Button} from "@nextui-org/react";

type Props = {
    tagline: string,
    tagcover: string,
    price: number,
    pricecover: string,
    buttoncover: string,
    color: string,
    listhead: string,
    list: string[]
}


export default function PriceCard({ tagline, tagcover, price, pricecover, buttoncover, color, listhead, list}: Props) {
  return (
    <div>
        <motion.div
        initial={{opacity:0, y:140}}
        transition={{duration:1}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        className=' flex space-y-0 items-center justify-center z-0  '>
            <Card >
                <CardHeader className="gap-2 flex-col items-center text-center  ">
                    <Tag tagline={tagline} color={color}/>
                    <p className="text-base text-default-500">{tagcover}</p>
                        <span className='text-[42px]'><b>${price}</b></span><span className='text-gray-500'>/mo</span>
                        <p className='text-lg'>{pricecover}</p>
                </CardHeader>
                <CardBody className="overflow-visible  w-full flex items-center">
                    <div className='gap-2 flex flex-col text-center items-center'>
                        <Button as={Link} className='mt-4' style={{backgroundColor: "#2E2E2E", color: "#FFFFFF", fontSize:"18px"}} href="#" variant="flat">
                        <b>Get Started</b> 
                        </Button>
                        <p className='text-sm text-stone-600'>{buttoncover}</p>
                    </div>
                    <div className='text-left mt-4'>
                        <p className='text-lg'>{listhead}</p>
                        <ul className='list-none'>
                            {
                                list.map((li, index) => (
                                    <li>✔️ {li}</li>
                                ))
                            }
                        </ul>
                    </div>
                </CardBody>
            </Card>
        </motion.div>
    </div>
  )
}

