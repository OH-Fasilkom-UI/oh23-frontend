import { ListPrestasi } from '@/components/ListPrestasi'
import { WhatIsPacil } from '@/components/WhatIsPacil'
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