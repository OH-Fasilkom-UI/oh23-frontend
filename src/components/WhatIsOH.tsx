import Image from "next/image";
import { Button } from "@/components/elements/Button";
import { HiOutlineArrowRight } from 'react-icons/hi2'
import { Carousel } from '@mantine/carousel';

const images = [
  "https://hololive.hololivepro.com/wp-content/uploads/2021/04/unnamed-file-6-855x1536.png",
  "https://hololive.hololivepro.com/wp-content/uploads/2022/04/4001_Mori-Calliope.png",
  "https://hololive.hololivepro.com/wp-content/uploads/2023/07/Nerissa-Ravencroft_pr-img_01.png",
  "https://hololive.hololivepro.com/wp-content/uploads/2023/04/bg_Hoshimachi-Suisei_01-1.png",
  "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Minato-Aqua_pr-img_01b.png",
  "https://hololive.hololivepro.com/wp-content/uploads/2022/04/4004_Gawr-Gura.png",
  "https://hololive.hololivepro.com/wp-content/uploads/2023/02/FriedA_pr-img_01.png",
  "https://media.istockphoto.com/id/1207762975/id/foto/gray-wolf-close-up-di-musim-dingin.jpg?s=1024x1024&w=is&k=20&c=lltCILw0oR5Jbpu7pECJqeBC9075HisoUHhyvcrq6Q4="
]

export default function WhatIsOH() {
  return (
    <section className="mt-10 py-10 flex flex-col items-center min-h-screen bg-black">
        <Image src="/what-is-oh.svg" alt="" width={1440} height={880} className="absolute left-0 object-cover brightness-[.6]" />
        <div className="z-10 text-center flex flex-col mx-10 items-center">
          <div className="z-10 text-center flex flex-col items-center justify-center gap-7 mx-5 px-16 rounded-md">
            <h1 className="font-satoshi text-white bg-clip-text font-extrabold text-5xl drop-shadow-sm shadow-white">
              What is OH?
            </h1>
          </div>
          <div className="text-center font my-8">
            Open House Fasilkom UI merupakan acara tahunan yang diselenggarakan oleh BEM Fasilkom UI untuk
            memperkenalkan Fakultas Ilmu Komputer Universitas Indonesia kepada masyarakat luas dan membantu
            para calon mahasiswa dalam memantapkan pilihan program studinya di Fasilkom UI.
          </div>
          <Button
            variant="secondary"
            className="px-28 mb-10"
          >
            Baca Selengkapnya
            <HiOutlineArrowRight/>
          </Button>
          {/* TODO: Add responsiveness */}
          <Carousel
            withIndicators
            height={372}
            slideSize="25%"
            slideGap="sm"
            loop
            align="start"
            slidesToScroll={1}
            className="w-full"
          >
            {
              images.map((url) => (
                <Carousel.Slide>
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