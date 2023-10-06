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
  },
  {
    name: 'Mori Calliope',
    imageUrl: "https://hololive.hololivepro.com/wp-content/uploads/2021/04/unnamed-file-6-855x1536.png",
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    major: "Ilmu Komputer 2024",
  },
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
          <div className="relative w-full grid place-items-center mt-10">
            <Image src="/bg-wts-left.png" alt="" width={400} height={800} className="absolute top-0 left-0" />
            <Image src="/bg-wts-right.png" alt="" width={400} height={600} className="absolute top-0 right-0" />
            <div className="w-[calc(100%-40px)] overflow-x-auto py-5">
            <ul className='flex gap-3 w-max'>
              {
                testimonials.map((testimonial, index) => (
                    <article key={index} onClick={() => setSelected(index)} className={`font-satoshi ${selected === index ? "w-max" : "w-1/4"} h-[400px] flex border-2 border-white-2 p-5 rounded-md bg-shimmerGreen-2 bg-opacity-40 backdrop-blur`}>
                      <aside className={`flex-1`}>
                        <div className="flex flex-col items-center h-full justify-center">
                        <div className=" rounded-full bg-white-2 w-36 h-36 block mb-5">
                        {/* <Image src={testimonial.imageUrl} alt="" width={100} height={100} className="" /> */}
                        </div>
                        <h1 className="text-2xl text-white-1 font-semibold">{testimonial.name}</h1>
                        <p className="text-sm font-semibold">{testimonial.major}</p>
                        </div>
                      </aside>
                      <aside className={`${selected === index ? "flex-1": "w-0"} transition-all duration-300 relative overflow-hidden text-left flex flex-col gap-3 justify-center`}>
                        <Image src='/left-quote.png' alt="" width={30} height={30} className={`${selected === index ? "opacity-100 delay-200" : "opacity-0 duration-0"} transition-opacity duration-500 mr-auto`} />
                        <p className={`${selected === index ? "opacity-100 delay-200" : "opacity-0 duration-0"} text-white-1 transition-opacity duration-500`}>{testimonial.quote}</p>
                        <Image src='/right-quote.png' alt="" width={30} height={30} className={`${selected === index ? "opacity-100 delay-200" : "opacity-0 duration-0"} transition-opacity duration-500 ml-auto`} />
                      </aside>
                    </article>
                ))
              }
            </ul>
              </div>
        </div>  
        </div>
  )
}

export default WTS