import NavabrAuth from '@/components/featuers/Auth/shared/Navabr'
import React from 'react'
import { Toaster } from 'react-hot-toast';


const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
           <div className=''>
            <nav className='border-b'>
                 <NavabrAuth />
            </nav>
            <main>
                {children}
            </main>
           </div>
           <Toaster />
        </>
    )
}

export default layout