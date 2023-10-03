import { ListPrestasi } from '@/components/ListPrestasi'
import { WhatIsPacil } from '@/components/WhatIsPacil'
import { Countdown } from '@/components/elements/Countdown'
import FAQ from '@/components/FAQ'
import React from 'react'

const AboutPage = () => {
    return (
        <main className='min-h-screen'>
            <WhatIsPacil />
            <ListPrestasi />
        </main>
    )
}

export default AboutPage