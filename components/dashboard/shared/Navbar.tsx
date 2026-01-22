import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
      <div className="flex items-center justify-between border-b px-6 py-4 dark:border-neutral-800">
        <h1 className="text-xl font-semibold">Dashboard</h1>

        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-sm font-medium">Ahmed Gouda</p>
            <p className="text-xs text-neutral-500">Frontend Developer</p>
          </div>

          <Image
            src="/instructors/instructorfive.png"
            width={40}
            height={40}
            className="rounded-full border"
            alt="User"
          />
        </div>
      </div>
  )
}

export default Navbar