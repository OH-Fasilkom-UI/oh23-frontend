import { Tab } from '@headlessui/react';
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

function OurBloodyPerfectTimelineCard({ description, time, title }: { title: string, time: number, description: string }) {
    return (
        <article className='bg-[#101010bb] flex justify-between gap-x-10 items-start font-semibold w-3/4 rounded-lg m-10 border-2 border-screaminGreen-2 p-10 text-white'>
            <section className='w-1/2'>
                <h1 className='text-white-1'>{title}</h1>
                <h2 className='text-white-1 text-lg mb-5'>{new Date(time).toLocaleDateString("fr-FR")}</h2>
                <p className='font-normal'>{description}</p>
            </section>
            <section>
                <img className='w-[350px] rounded-md object-cover object-center h-[300px]' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSHJgo1-Jcffzs8tiulp9wA8myiiEw891oYNejWdggH6QpRSCpIhOMeFPpuo8uC4NFpZI&usqp=CAU' />
            </section>
        </article>
    )
}

export default function Timeline() {
    return (
        <Tab.Group>
            <Tab.List className="font-satoshi text-center font-semibold my-5">
                <OurLovelyTab>Grand Opening</OurLovelyTab>
                <OurLovelyTab>Open Registration</OurLovelyTab>
                <OurLovelyTab>Mentoring</OurLovelyTab>
                <OurLovelyTab>Main Event</OurLovelyTab>
                <OurLovelyTab>Grand Closing</OurLovelyTab>
            </Tab.List>
            <Tab.Panels className="bg-[url(/OurLovelyTimelineBG.png)]">
                <Tab.Panel className='grid place-items-center'>
                    <OurBloodyPerfectTimelineCard title='Grand Opening' time={Date.now()} description='Grand Opening merupakan rangkaian acara pertama yang bertujuan untuk menandai dimulainya acara Open House Fasilkom UI 2023. Acara pembuka ini akan berisikan sambutan-sambutan dari berbagai elemen Fasilkom UI, video teaser serta overview dari rangkaian acara, penampilan dari guest star, serta persembahan dari UKF yang ada di Fasilkom UI.' />
                </Tab.Panel>
                <Tab.Panel className='grid place-items-center'>
                    <OurBloodyPerfectTimelineCard title='Open Registration' time={Date.now()} description='Grand Opening merupakan rangkaian acara pertama yang bertujuan untuk menandai dimulainya acara Open House Fasilkom UI 2023. Acara pembuka ini akan berisikan sambutan-sambutan dari berbagai elemen Fasilkom UI, video teaser serta overview dari rangkaian acara, penampilan dari guest star, serta persembahan dari UKF yang ada di Fasilkom UI.' />
                </Tab.Panel>
                <Tab.Panel className='grid place-items-center'>
                    <OurBloodyPerfectTimelineCard title='Mentoring' time={Date.now()} description='Grand Opening merupakan rangkaian acara pertama yang bertujuan untuk menandai dimulainya acara Open House Fasilkom UI 2023. Acara pembuka ini akan berisikan sambutan-sambutan dari berbagai elemen Fasilkom UI, video teaser serta overview dari rangkaian acara, penampilan dari guest star, serta persembahan dari UKF yang ada di Fasilkom UI.' />
                </Tab.Panel>
                <Tab.Panel className='grid place-items-center'>
                    <OurBloodyPerfectTimelineCard title='Main Event' time={Date.now()} description='Grand Opening merupakan rangkaian acara pertama yang bertujuan untuk menandai dimulainya acara Open House Fasilkom UI 2023. Acara pembuka ini akan berisikan sambutan-sambutan dari berbagai elemen Fasilkom UI, video teaser serta overview dari rangkaian acara, penampilan dari guest star, serta persembahan dari UKF yang ada di Fasilkom UI.' />
                </Tab.Panel>
                <Tab.Panel className='grid place-items-center'>
                    <OurBloodyPerfectTimelineCard title='Grand Closing' time={Date.now()} description='Grand Opening merupakan rangkaian acara pertama yang bertujuan untuk menandai dimulainya acara Open House Fasilkom UI 2023. Acara pembuka ini akan berisikan sambutan-sambutan dari berbagai elemen Fasilkom UI, video teaser serta overview dari rangkaian acara, penampilan dari guest star, serta persembahan dari UKF yang ada di Fasilkom UI.' />
                </Tab.Panel>
            </Tab.Panels>
        </Tab.Group>
    );
}