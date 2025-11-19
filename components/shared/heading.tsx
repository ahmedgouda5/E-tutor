import React from 'react'

const Heading = ({ heading }: { heading: string }) => {
    return (
        <div className='flex justify-center text-4xl font-bold text-gray-900 my-20 text-center'>{heading}</div>
    )
}

export default Heading