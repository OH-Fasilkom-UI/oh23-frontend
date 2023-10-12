import Image from "next/image";
import { Button } from "@/components/elements/Button";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi2'
import { Carousel } from '@mantine/carousel';
import { useRef } from "react";

const images = [
  "/home/definition-1.jpg",
  "/home/definition-2.jpg",
  "/home/definition-3.jpg",
  "/home/definition-4.jpg",
  "/home/definition-5.jpg",
  "/home/definition-6.jpg",
  "/home/definition-7.jpg",
  "/home/definition-8.jpg",
]

export default function Definition() {
  return (
    <section className="bg-[url(/home/background-definition.png)] bg-cover bg-center mt-10 py-10 flex flex-col items-center min-h-screen">
        {/* <Image src="/home/background-definition.png" alt="" width={1440} height={880} className="absolute left-0 object-cover brightness-[.6]" /> */}
        <div className="z-10 text-center flex flex-col px-5 sm:px-10 items-center w-full">
            <h1 className="font-satoshi text-white-1 font-extrabold text-4xl sm:text-5xl drop-shadow-sm shadow-white">
              What is OH?
            </h1>
          <p className="max-w-[100ch] text-center font my-8">
            Open House Fasilkom UI merupakan acara tahunan yang diselenggarakan oleh BEM Fasilkom UI untuk
            memperkenalkan Fakultas Ilmu Komputer Universitas Indonesia kepada masyarakat luas dan membantu
            para calon mahasiswa dalam memantapkan pilihan program studinya di Fasilkom UI.
          </p>
          <a
            href={'https://drive.google.com/file/d/1p-ID9rRpPGkYhEt_eIn5trdmliaUdkD5/view?usp=sharing'}
            target="__blank"
            rel="noreferrer"
            className="mb-10"
          >
            <Button
              variant="secondary"
              className="px-28"
            >
              Baca Selengkapnya
              <HiOutlineArrowRight/>
            </Button>
          </a>
          {/* TODO: Add responsiveness */}
          <Carousel
            withIndicators
            height={372}
            slideSize="25%"
            slideGap="sm"
            loop
            align="start"
            slidesToScroll={1}
            previousControlIcon={
                <div className="bg-emerald-200 rounded-full p-2">
                  <HiOutlineArrowLeft/>
                </div>
            }
            nextControlIcon={
                <div className="bg-emerald-200 rounded-full p-2">
                  <HiOutlineArrowRight/>
                </div>
            }
            className="w-full"
          >
            {
              images.map((url, index) => (
                <Carousel.Slide key={index}>
                  <div className="backdrop-blur-3xl rounded-xl border-2 border-white-3 border-opacity-5 w-full h-full flex items-center justify-center">
                    <div className="bg-white-1 w-5/6 h-5/6 relative rounded-lg">
                      <Image src={url} alt="" layout='fill' objectFit='contain'/>
                    </div>
                  </div>
                </Carousel.Slide>
              ))
            }
          </Carousel>
        </div>
      </section>
  )
}