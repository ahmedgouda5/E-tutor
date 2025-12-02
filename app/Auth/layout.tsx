import NavabrAuth from '@/components/featuers/Auth/shared/Navabr'
import React from 'react'

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
        </>
    )
}

export default layout