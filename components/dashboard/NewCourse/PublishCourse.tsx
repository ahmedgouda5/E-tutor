import React from 'react'
import { motion } from 'framer-motion'

const PublishCourse = () => {
  return (
    <motion.div initial={{ opacity: 0 ,scale: 0.5}} animate={{ opacity: 1 ,scale: 1}} transition={{ duration: 0.7 }}>
      <div>PublishCourse</div>
    </motion.div>
  )
}

export default PublishCourse