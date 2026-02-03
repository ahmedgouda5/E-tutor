import React from 'react'
import { CourseForm } from '../UI/course-form'
import { motion } from 'framer-motion'

const BasicInformation = () => {
  return (
    <motion.div initial={{ opacity: 0 ,scale: 0.5}} animate={{ opacity: 1 ,scale: 1}} transition={{ duration: 0.7 }} >
      <CourseForm />
    </motion.div>
  )
}

export default BasicInformation