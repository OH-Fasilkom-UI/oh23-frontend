import { HiUserPlus } from "react-icons/hi2"
import Image from 'next/image'
import { Carousel } from "@mantine/carousel"
import { Button } from "./elements/Button"

export const WhatIsPacil = () => {
  return (
    <section className='flex items-center justify-center pt-36 mx-5'>
      <Image src="/background-whatispacil.svg" alt="" className="absolute top-16 right-2 max-w-none" width={877} height={996}/>
      <div className='flex gap-10 flex-wrap justify-center mx-10'>
        <div className='backdrop-blur rounded-md border-gray-100 border-opacity-10 border-2 max-w-xl text-center text-white-1 py-14 px-8 flex gap-8 flex-col'>
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
        <Carousel
          withIndicators
          height={372}
          loop
          align="center"
          slidesToScroll={1}
          slideGap="md"
          slideSize="100%"
          className="w-96"
        >
          <Carousel.Slide>
            <div className="backdrop-blur-3xl rounded-xl border-2 border-white-3 border-opacity-5 w-full h-full flex items-center justify-center bg-icy-1 bg-opacity-10">
              <div className="bg-white-1 w-5/6 h-5/6 relative rounded-lg">
                <Image src="https://i.kym-cdn.com/photos/images/newsfeed/002/652/460/d70.jpg" alt="" layout='fill' objectFit='contain'/>
              </div>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div className="backdrop-blur-3xl rounded-xl border-2 border-white-3 border-opacity-5 w-full h-full flex items-center justify-center bg-icy-1 bg-opacity-10">
              <div className="bg-white-1 w-5/6 h-5/6 relative rounded-lg">
                <Image src="https://i.kym-cdn.com/photos/images/newsfeed/002/652/460/d70.jpg" alt="" layout='fill' objectFit='contain'/>
              </div>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div className="backdrop-blur-3xl rounded-xl border-2 border-white-3 border-opacity-5 w-full h-full flex items-center justify-center bg-icy-1 bg-opacity-10">
              <div className="bg-white-1 w-5/6 h-5/6 relative rounded-lg">
                <Image src="https://i.kym-cdn.com/photos/images/newsfeed/002/652/460/d70.jpg" alt="" layout='fill' objectFit='contain'/>
              </div>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div className="backdrop-blur-3xl rounded-xl border-2 border-white-3 border-opacity-5 w-full h-full flex items-center justify-center bg-icy-1 bg-opacity-10">
              <div className="bg-white-1 w-5/6 h-5/6 relative rounded-lg">
                <Image src="https://i.kym-cdn.com/photos/images/newsfeed/002/652/460/d70.jpg" alt="" layout='fill' objectFit='contain'/>
              </div>
            </div>
          </Carousel.Slide>
        </Carousel>
      </div>
    </section>   
  )
}