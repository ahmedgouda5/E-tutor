import AppProvider from '@/providers/AppProvider'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <AppProvider>{children}</AppProvider>
    )
}

export default layout