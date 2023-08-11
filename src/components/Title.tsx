import React from 'react'
import {motion} from 'framer-motion'
interface Props {
  dynamicTitle?: string
  staticTitle?: string
}

export const StaticTitle = (props: Props) => {
  return (
    <motion.div
      className="title title-static"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1 className="title__text">{props.staticTitle}</h1>
    </motion.div>
  );
};

const dynamicTitle = (props: Props) => {
  return (
    <motion.div id='desktop-title' className='title' initial={{opacity:0}} animate={{opacity: 1}}>
      <h1 className='title__text'>{props.dynamicTitle}</h1>
    </motion.div>
  )
}

export default dynamicTitle