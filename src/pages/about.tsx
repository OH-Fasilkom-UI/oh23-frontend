import { Button } from '@/components/elements/Button'
import React from 'react'
import { HiUserPlus } from 'react-icons/hi2'

const AboutPage = () => {
    return (
        <main className='min-h-screen'>
            <section className='min-h-screen flex items-center justify-center'>
                <div className='backdrop-blur rounded-md border-icy-1 border-[1px] border-opacity-[0.1] max-w-2xl text-center text-white-1 py-14 px-8 flex gap-8 flex-col'>
                    <h1 className="font-semibold text-5xl">Apa Itu Fasilkom UI?</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div className='flex flex-col gap-4'>
                        <Button variant='primary' className="font-satoshi font-bold w-full">
                            <HiUserPlus />
                            Laman Resmi Fasilkom UI
                        </Button>
                        <Button variant='secondary' className='font-satoshi font-bold w-full'>
                            <HiUserPlus />
                            Unduh Profile Lengkap Fakultas
                        </Button>
                    </div>
              </div>
            </section>
        </main>
    )
}

export default AboutPage