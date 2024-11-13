import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import feedback1 from "../static/images/feedbck1.png"
import banner from "../static/images/banner1.png" 


export default function ImagComp() {
  return (
    <div>
        <motion.div
        initial={{opacity:0, y:40}}
        transition={{duration:1}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        className=' flex flex-col space-y-0 items-center justify-center z-0'>
            <Image src={feedback1} height={80} width={300} alt='Feedback' />
            <div>
                <Image src={banner} style={{borderRadius:"10px", borderColor:"gray", boxShadow:"inherit"}} height={900} width={1200} alt='Banner1'/>
            </div>
        </motion.div>
    </div>
  )
}
