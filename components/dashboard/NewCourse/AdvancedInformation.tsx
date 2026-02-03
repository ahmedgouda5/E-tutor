import React from 'react'
import { motion } from 'framer-motion'
import AdvanceInformations from '../UI/advance-info'

const AdvancedInformation = () => {
  return (
    <motion.div initial={{ opacity: 0 ,scale: 0.5}} animate={{ opacity: 1 ,scale: 1}} transition={{ duration: 0.7 }}>
      <AdvanceInformations/>
    </motion.div>
  )
}

export default AdvancedInformation