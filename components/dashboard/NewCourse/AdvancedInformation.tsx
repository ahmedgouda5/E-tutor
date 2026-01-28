import React from 'react'
import { motion } from 'framer-motion'

const AdvancedInformation = () => {
  return (
    <motion.div initial={{ opacity: 0 ,scale: 0.5}} animate={{ opacity: 1 ,scale: 1}} transition={{ duration: 0.7 }}>
      <h1>Advanced Information</h1>
    </motion.div>
  )
}

export default AdvancedInformation