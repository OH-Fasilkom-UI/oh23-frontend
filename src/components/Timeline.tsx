import { Tab } from '@headlessui/react';
import Image from 'next/image';
import React from 'react';

function OurLovelyTab({ children }: { children: React.ReactNode }) {
    return (
        <Tab className={({ selected }) => {
            return `
                ${selected ? 'text-white-1' : 'text-gray-500'}
                font-satoshi font-semibold px-5 py-2 rounded-md
                hover:bg-[#000]
            `
        }}>{children}</Tab>
    )
}

function OurBloodyPerfectTimelineCard({ description, time, title, image }: { title: string, time: string, description: string, image: string }) {
    return (
        <article className='bg-[#101010bb] md:flex-row flex-col-reverse min-w-fit flex justify-between gap-x-10 items-center md:items-start font-semibold w-3/4 rounded-lg m-10 border-2 border-screaminGreen-2 p-10 text-white'>
            <section className='w-full h-full flex flex-col justify-center text-center md:text-start lg:w-2/3 md:w-1/2'>
                <h1 className='text-white-1 lg:text-2xl md:text-xl sm:text-lg text-base leading-none my-2'>{title}</h1>
                <h2 className='text-white-1 text-sm md:text-lg mb-5'>{new Date(time).toLocaleDateString("fr-FR")}</h2>
                <p className='md:text-base sm:text-sm text-xs font-normal'>{description}</p>
            </section>
            <div className='lg:w-1/3 md:w-1/2 w-full flex h-full items-center justify-center'>
                <section className='relative md:mb-0 mb-10 w-3/4 aspect-square'>
                    <Image fill className='rounded-md object-cover  object-center' src={image} alt="this is the way!!!" />
                </section>
            </div>
        </article>
    )
}

export default function Timeline() {
    return (
        <Tab.Group>
            <div className='overflow-auto'>
                <Tab.List className="font-satoshi min-w-max  text-center font-semibold my-5">
                    <OurLovelyTab>Grand Opening</OurLovelyTab>
                    <OurLovelyTab>Open Registration</OurLovelyTab>
                    <OurLovelyTab>CS Connect</OurLovelyTab>
                    <OurLovelyTab>Tour de Campus Fasilkom UI</OurLovelyTab>
                </Tab.List>
            </div>
            <Tab.Panels className="bg-[url(/home/OurLovelyTimelineBG.png)]">
                <Tab.Panel className='grid place-items-center'>
                    <OurBloodyPerfectTimelineCard
                        title='Grand Opening'
                        time='2023-09-24'
                        image='/home/grand-opening.png'
                        description='Grand Opening Open House Fasilkom UI 2023 merupakan rangkaian acara pertama yang bertujuan 
                        untuk menandakan dimulainya acara Open House Fasilkom UI 2023. Grand Opening Open House Fasilkom UI 2023 
                        akan diunggah melalui kanal YouTube resmi Fasilkom UI. Grand Opening akan berisi sambutan, pengenalan 
                        acara Open House itu sendiri, pengenalan makna dibalik tema yang diangkat pada tahun ini, serta penampilan 
                        oleh beberapa UKF di Fasilkom UI.'
                    />
                </Tab.Panel>
                <Tab.Panel className='grid place-items-center'>
                    <OurBloodyPerfectTimelineCard
                        title='Open Registration'
                        time='2023-10-23'
                        image='/home/opreg.png'
                        description='Pendaftaran Open House Fasilkom UI 2023 dibuka pada tanggal 23 Oktober 2023 hingga 1 November 
                        2023 dengan menghadirkan dua paket berbeda, yaitu Paket Full Online yang berisikan kegiatan CS Connect dan 
                        Paket Full Experience, di mana peserta berkesempatan untuk merasakan pengalaman kegiatan CS Connect sekaligus 
                        serangkaian acara Tour de Campus Fasilkom UI yang akan dilaksanakan secara langsung di Gedung Fasilkom UI. Open 
                        House Fasilkom UI 2023 terbuka bagi Siswa/i SMA sederajat, gap year atau semi gap year di seluruh Indonesia 
                        maupun di mancanegara yang memiliki minat untuk melanjutkan studi di bidang teknologi informasi.'
                    />
                </Tab.Panel>
                <Tab.Panel className='grid place-items-center'>
                    <OurBloodyPerfectTimelineCard
                        title='CS Connect'
                        time='2023-11-05'
                        image='/home/cs-connect.png'
                        description='CS Connect adalah kegiatan yang akan diisi dengan Talkshow Online di main room Zoom dengan 
                        menghadirkan pengisi acara yang akan membawakan informasi-informasi tentang Fasilkom UI. Setelah sesi talkshow 
                        berakhir, peserta akan di-assign ke masing-masing breakout room untuk melaksanakan Mentoring Online dengan 
                        mentornya masing-masing dari LO. Materi yang diberikan akan berupa pengenalan jurusan yang ada di Fasilkom UI 
                        dan informasi teknis kegiatan pada acara Tour de Campus Fasilkom UI selanjutnya.'
                    />
                </Tab.Panel>
                <Tab.Panel className='grid place-items-center'>
                    <OurBloodyPerfectTimelineCard
                        title='Tour de Campus Fasilkom UI'
                        time='2023-11-17'
                        image='/home/tour.png'
                        description='Tour de Campus Fasilkom UI merupakan rangkaian acara utama pada Open House Fasilkom UI, dimana 
                        peserta akan datang ke Fasilkom UI dan melakukan serangkaian acara, seperti Tour Fasilkom UI, Mentoring Session, 
                        Fun coding, Interactive Class, Exhibition, Wall of Dream, Parent’s Talkshow, dan Grand Closing. Pada Tour de 
                        Campus Fasilkom UI ini peserta akan berinteraksi secara langsung dengan para civitas Fasilkom UI sehingga dapat 
                        memperluas wawasan peserta tentang Fasilkom.'
                    />
                </Tab.Panel>
            </Tab.Panels>
        </Tab.Group>
    );
}