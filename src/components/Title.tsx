import React from 'react'
import {motion} from 'framer-motion'
interface Props {
  title: string
}

const Title = (props: Props) => {
  return (
    <motion.div id='desktop-title' className='title' animate={{opacity: [0, 1]}} >
      <h1 className='title__text'>{props.title}</h1>
    </motion.div>
  )
}

export default Title