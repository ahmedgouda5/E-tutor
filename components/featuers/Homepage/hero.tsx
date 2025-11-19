import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <main className='flex items-center pt-20 md:pt-0'>
            <section className='flex flex-col gap-4 justify-center'>
                <h2 className='text-5xl font-bold w-[500px]'>Learn with expert anytime anywhere</h2>
                <p className='text-gray-500 font-mono'>Our mision is to help people to find the best course online and learn with expert anytime, anywhere.</p>
                <Button className='bg-orange-500 text-white w-fit'>Create Account</Button>
            </section>
            <section>
                <Image
                    className="hidden md:block "
                    src="/Hero.webp"
                    alt="E-tutor hero section"
                    width={1920}
                    height={500}
                    priority
                    fetchPriority="high"
                />
            </section>
        </main>
    )
}

export default React.memo(Hero)