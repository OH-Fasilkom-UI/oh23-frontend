import { HiUserPlus } from "react-icons/hi2"
import Image from 'next/image'
import { Carousel } from "@mantine/carousel"
import { Button } from "../../components/elements/Button"

export const WhatIsPacil = () => {
  return (
    <section className='flex items-center justify-center px-5'>
      <Image src="/about/background-whatispacil.svg" alt="" className="absolute top-16 right-2 max-w-none" width={877} height={996}/>
      <div className='flex gap-10 flex-wrap justify-center'>
        <div className='backdrop-blur rounded-2xl border-gray-100 border-opacity-10 border-2 max-w-full sm:max-w-xl px-5 py-9 text-center flex gap-5 sm:gap-8 flex-col'>
          <h1 className="text-white-1 font-semibold text-4xl sm:text-5xl">Apa Itu Fasilkom UI?</h1>
          <p>
            Fakultas Ilmu Komputer Universitas Indonesia adalah Fakultas Ilmu Komputer pertama 
            di Indonesia yang memiliki dua program studi, yaitu Ilmu Komputer dan Sistem Informasi. Fasilkom UI 
            berhasil mencetak alumni berkualitas dan menjadi salah satu Fakultas Ilmu Komputer terbaik di 
            Indonesia.
          </p>
          <div className='flex flex-col gap-4'>
            <a
              href={'https://cs.ui.ac.id'}
              target="__blank"
              rel="noreferrer" 
              className="w-full"
            >
              <Button variant='primary' className="font-satoshi font-bold w-full">
                Laman Resmi Fasilkom UI
              </Button>
            </a>
            <a
              href={'https://cs.ui.ac.id/wp-content/uploads/2023/06/IND-Fasilkom-profile-Up-090623.pdf'}
              target="__blank"
              rel="noreferrer" 
              className="w-full"
            >
              <Button variant='secondary' className='font-satoshi font-bold text-sm w-full'>
                Unduh Profile Lengkap Fakultas
              </Button>
            </a>
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
          className="w-full sm:w-96"
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