import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer>
      <p className='text-xs  text-neutral-500 dark:text-neutral-400 flex justify-center'>© {new Date().getFullYear()} - E-tutor Designed by  <Link target="_blank" href="https://portfolio-two-lemon-69.vercel.app/" className="text-neutral-500 mx-1 hover:text-orange-500 transition-colors">
                Goudeawy              </Link> All rights reserved</p>
    </footer>
  )
}

export default React.memo(Footer)