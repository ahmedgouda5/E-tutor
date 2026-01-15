import React from 'react'
import { SidebarDemo } from '@/components/dashboard/sideBar'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
   <div className='bg-amber-200'>
     <SidebarDemo>

        {children}
    </SidebarDemo>
   </div>
   </>
  )
}

export default layout