import { Countdown } from '@/components/elements/Countdown'
import React from 'react'

const AboutPage = () => {
    return (
        <main className='min-h-screen'>
            <Countdown date={new Date("2023-09-07T06:39:00+0700")}/>
        </main>
    )
}

export default AboutPage