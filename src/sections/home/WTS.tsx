import { Carousel } from '@mantine/carousel'
import Image from 'next/image'
import React from 'react'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2'

const testimonials = [
  {
    name: 'Mori Calliope',
    imageUrl: "https://hololive.hololivepro.com/wp-content/uploads/2021/04/unnamed-file-6-855x1536.png",
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    major: "Ilmu Komputer 2024",
  },
  {
    name: 'Mori Calliope',
    imageUrl: "https://hololive.hololivepro.com/wp-content/uploads/2021/04/unnamed-file-6-855x1536.png",
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    major: "Ilmu Komputer 2024",
  },
  {
    name: 'Mori Calliope',
    imageUrl: "https://hololive.hololivepro.com/wp-content/uploads/2021/04/unnamed-file-6-855x1536.png",
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    major: "Ilmu Komputer 2024",
  }
]

const WTS = () => {

  const [selected, setSelected] = React.useState(0);
  return (
    <div className="z-10 text-center flex flex-col min-h-screen items-center">
          <div className="px-5 z-10 text-center flex flex-col items-center justify-center gap-7 mx-5 sm:px-16 rounded-md">
            <h2 className="font-satoshi text-white-1 font-extrabold text-5xl drop-shadow-sm shadow-white">
              What They Say About OH
            </h2>
          </div>
          <div className="relative w-full h-1/2 grid place-items-center mt-10">
            <Image src="/bg-wts-left.png" alt="" width={400} height={800} className="absolute top-0 left-0" />
            <Image src="/bg-wts-right.png" alt="" width={400} height={600} className="absolute top-0 right-0" />
            <ul className='flex items-stretch'>
              {
                testimonials.map((testimonial, index) => (

                    <article key={index} onClick={() => setSelected(index)} className={`${selected ? "w-full" : "w-max"} font-satoshi flex gap-5 h-full border-2 border-white-2 p-5 rounded-md bg-shimmerGreen-2 bg-opacity-60 backdrop-blur`}>
                      <aside className={`flex-1 min-w-[50%]`}>
                        <div className="flex flex-col gap-3 items-center h-full justify-center">
                        <div className="relative rounded-full bg-white-2 w-24 h-24">
                        {/* <Image src={testimonial.imageUrl} alt="" width={100} height={100} className="" /> */}
                        </div>
                        <h1 className="text-3xl text-white-1 font-semibold">{testimonial.name}</h1>
                        </div>
                      </aside>
                      <aside className={`${selected === index ? "flex-1": "w-0"} relative p-5 overflow-hidden text-left flex flex-col gap-3 justify-center`}>
                        <Image src='/left-quote.png' alt="" width={30} height={30} className=' ml-auto top-0 left-0' />
                        <p className=''>{testimonial.quote}</p>
                        <Image src='/right-quote.png' alt="" width={30} height={30} className='ml-auto bottom-0 right-0' />
                      </aside>
                    </article>
                ))
              }
            </ul>
        </div>  
        </div>
  )
}

export default WTS