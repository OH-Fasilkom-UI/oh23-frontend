import React, { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Orbitron } from "next/font/google";
import { Card } from "@/components/elements/Card";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi2";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import { ListPrestasi } from '@/sections/about/ListPrestasi'
import { WhatIsPacil } from '@/sections/about/WhatIsPacil'
import FAQ from '@/sections/about/FAQ'

const Carousel = dynamic(() => import("react-spring-3d-carousel"), {
  ssr: false,
});


const orbitron = Orbitron({ weight: "800", subsets: ["latin"] });

const AboutPage = () => {
  const [goToSlide, setGoToSlide] = useState(0);
  const [jurusan, setJurusan] = useState("pengertian");

  const slides = [
    {
      key: uuidv4(),
      content: (
        <Card
          image="https://picsum.photos/900"
          title="Heading"
          content="Lorem ipsum dolor sit amet consectetur. Diam pellentesque morbi enim egestas"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          image="https://picsum.photos/800"
          title="Heading"
          content="Lorem ipsum dolor sit amet consectetur. Diam pellentesque morbi enim egestas"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          image="https://picsum.photos/700"
          title="Heading"
          content="Lorem ipsum dolor sit amet consectetur. Diam pellentesque morbi enim egestas"
        />
      ),
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => setGoToSlide(index) };
  });

  // Function untuk menggeser slide ke kiri
  function swipeLeft() {
    if (goToSlide > 0) {
      setGoToSlide(goToSlide - 1); // Mengurangi nilai goToSlide untuk menggeser ke slide sebelumnya
    } else {
      setGoToSlide(slides.length - 1); // Jika berada di slide pertama, geser ke slide terakhir
    }
  }

  // Function untuk menggeser slide ke kanan
  function swipeRight() {
    if (goToSlide + 1 < slides.length) {
      setGoToSlide(goToSlide + 1); // Menambah nilai goToSlide untuk menggeser ke slide berikutnya
    } else {
      setGoToSlide(0); // Jika berada di slide terakhir, geser ke slide pertama
    }
  }

  function switchJurusanPengertian() {
    setJurusan("pengertian");
  }

  function switchJurusanPerbedaan() {
    setJurusan("perbedaan");
  }

  return (
    <main className="bg-black-1 pt-40">
      <WhatIsPacil />
      <ListPrestasi />
      {/* Fasilitas */}
      <section className="bg-black flex items-center justify-center">
        <div className="w-full md:h-[700px] lg:h-[900px] flex flex-col items-center z-10 relative">
          <Image
            src="/background-about-fasilitas.svg"
            alt=""
            width={1270}
            height={880}
            className="absolute top-0 left-0 object-cover brightness-[.6]"
          />
          <div className="flex justify-center">
            <h1 className="font-satoshi text-white-1 text-5xl font-semibold">
              Fasilitas
            </h1>
          </div>
          <div className="w-full max-w-5xl h-[500px] relative px-16">
            <Carousel
              slides={slides}
              goToSlide={goToSlide}
              offsetRadius={2}
              showNavigation={false}
              animationConfig={config.gentle}
              goToSlideDelay={100}
            />
            <div
              className="absolute top-[50%] left-4 flex justify-center items-center w-12 h-12 rounded-full bg-[#41EAD4B2] text-white font-satoshi font-bold cursor-pointer transition duration-300 ease-in-out hover:scale-110 hover:bg-aqua-3 z-10"
              onClick={swipeLeft}
            >
              <HiOutlineArrowLeft color="white" />
            </div>
            <div
              className="absolute top-[50%] right-4 flex justify-center items-center w-12 h-12 rounded-full bg-[#41EAD4B2] text-white font-satoshi font-bold cursor-pointer transition duration-300 ease-in-out hover:scale-110 hover:bg-aqua-3 z-10"
              onClick={swipeRight}
            >
              <HiOutlineArrowRight color="white" />
            </div>
            <div className="hidden md:flex absolute bottom-0 left-0 w-full justify-center">
              <div className="flex justify-center gap-x-2">
                {/* Indikator slide non-aktif dengan lingkaran berwarna hijau gelap */}
                {[...Array(goToSlide)].map((slide, i) => (
                  <div key={i} className="w-2 h-2 bg-green-950 rounded-full"></div>
                ))}

                {/* Indikator slide aktif saat ini dengan hijau terang */}
                <div className="w-2 h-2 bg-gradient-to-r from-grass-1 to-grass-3 rounded-full"></div>

                {/* Indikator slide non-aktif dengan lingkaran berwarna hijau gelap */}
                {[...Array(slides.length - (goToSlide + 1))].map((slide, i) => (
                  <div key={i} className="w-2 h-2 bg-green-950 rounded-full"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Jurusan & Perbedaan */}
      <section className="relative mt-10">
        <div className="flex justify-center py-10">
          <Image
            src="/background-about-jurusan-dan-perbedaan-kiri.svg"
            alt=""
            width={640}
            height={130}
            className="hidden md:inline absolute top-0 left-0 object-cover brightness-[.4]"
          />
          <Image
            src="/background-about-jurusan-dan-perbedaan-kanan.svg"
            alt=""
            width={640}
            height={130}
            className="hidden md:inline absolute top-0 right-0 object-cover brightness-[.4]"
          />
          <h1 className="font-satoshi text-white-1 text-4xl md:text-5xl text-center font-semibold">
            Jurusan & Perbedaan
          </h1>
        </div>
        <div className="flex justify-center">
          <div className="flex">
            <div
              className="rounded-l-full relative cursor-pointer"
              onClick={switchJurusanPengertian}
            >
              <div
                className={`relative transition-opacity ease-in duration-300 px-8 md:px-32 py-5 rounded-full bg-gradient-to-r from-black-1 via-screaminGreen-4 to-black-1 ${
                  jurusan == "pengertian" ? "opacity-100" : "opacity-0"
                }`}
              >
                <h1 className="font-satoshi text-white-1 text-xl md:text-2xl font-semibold opacity-0">
                  Pengertian
                </h1>
              </div>
              <div className="relative px-10 md:px-32 py-4 mt-[-35.4%] md:mt-[-18.2%] rounded-l-full bg-gradient-to-br from-grass-4 via-black-1 to-black-1">
                <h1 className="font-satoshi text-white-1 text-xl md:text-2xl font-semibold">
                  Pengertian
                </h1>
              </div>
            </div>
            <div
              className="rounded-l-full relative cursor-pointer"
              onClick={switchJurusanPerbedaan}
            >
              <div
                className={`relative transition-opacity ease-in duration-300 px-8 md:px-32 py-5 rounded-full bg-gradient-to-r from-black-1 via-screaminGreen-4 to-black-1 ${
                  jurusan == "perbedaan" ? "opacity-100" : "opacity-0"
                }`}
              >
                <h1 className="font-satoshi text-white-1 text-xl md:text-2xl font-semibold opacity-0">
                  Perbedaan
                </h1>
              </div>
              <div className="relative px-10 md:px-32 py-4 mt-[-35.4%] md:mt-[-18.2%] rounded-r-full bg-gradient-to-br from-black-1 via-black-1 to-grass-4">
                <h1 className="font-satoshi text-white-1 text-xl md:text-2xl font-semibold">
                  Perbedaan
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center relative h-[600px] md:h-[900px]">
          <Image
            src="/background-about-jurusan-dan-perbedaan-tengah.png"
            alt=""
            width={1920}
            height={666}
            className="absolute top-64 md:top-96 xl:top-40 left-center object-cover brightness-[.8]"
          />
          {/* Pengertian */}
          <div
            className={`absolute flex flex-col sm:flex-row transition-opacity ease-in duration-300 gap-10 md:gap-20 justify-center py-24 md:py-56 px-6 ${
              jurusan == "pengertian" ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div className="cursor-pointer transition duration-300 ease-in-out hover:scale-105 max-w-xs lg:max-w-sm p-4 md:p-10 flex flex-col gap-y-5 items-center rounded-xl bg-cards backdrop-blur border border-gray-500">
              <div className="flex flex-col gap-y-5 items-center">
                <div>
                  <h1 className="font-satoshi text-white-1 text-center text-2xl md:text-3xl">
                    Heading
                  </h1>
                </div>
                <div>
                  <p className="font-satoshi text-white-2 text-center text-xs md:text-lg">
                    Lorem ipsum dolor sit amet consectetur. Diam pellentesque
                    morbi enim egestas neque diam morbi laoreet. Sollicitudin
                    vel vitae placerat penatibus tempor ipsum. Lorem ipsum dolor
                    sit amet consectetur. Sollicitudin vel vitae placerat
                    penatibus tempor ipsum.
                  </p>
                </div>
              </div>
            </div>
            <div className="cursor-pointer transition duration-300 ease-in-out hover:scale-105 max-w-xs lg:max-w-sm p-4 md:p-10 flex flex-col gap-y-5 items-center rounded-xl bg-cards backdrop-blur border border-gray-500">
              <div className="flex flex-col gap-y-5 items-center">
                <div>
                  <h1 className="font-satoshi text-white-1 text-center text-2xl md:text-3xl">
                    Heading
                  </h1>
                </div>
                <div>
                  <p className="font-satoshi text-white-2 text-center text-xs md:text-lg">
                    Lorem ipsum dolor sit amet consectetur. Diam pellentesque
                    morbi enim egestas neque diam morbi laoreet. Sollicitudin
                    vel vitae placerat penatibus tempor ipsum. Lorem ipsum dolor
                    sit amet consectetur. Sollicitudin vel vitae placerat
                    penatibus tempor ipsum.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Perbedaan */}
          <div
            className={`absolute flex transition-opacity ease-in duration-300 gap-x-10 md:gap-x-20 justify-center py-24 md:py-56 px-6 ${
              jurusan == "perbedaan" ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div className="cursor-pointer transition duration-300 ease-in-out hover:scale-105 max-w-xs lg:max-w-sm p-4 md:p-10 flex flex-col gap-y-5 items-center rounded-xl bg-cards backdrop-blur border border-gray-500">
              <div className="flex flex-col gap-y-5 items-center">
                <div>
                  <h1 className="font-satoshi text-white-1 text-center text-2xl md:text-3xl">
                    Heading
                  </h1>
                </div>
                <div>
                  <p className="font-satoshi text-white-2 text-center text-xs md:text-lg">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum. Duis
                    aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur aliquip ex ea commodo
                    consequat exercitation ullamco laboris.
                  </p>
                </div>
              </div>
            </div>
            <div className="cursor-pointer transition duration-300 ease-in-out hover:scale-105 max-w-xs lg:max-w-sm p-4 md:p-10 flex flex-col gap-y-5 items-center rounded-xl bg-cards backdrop-blur border border-gray-500">
              <div className="flex flex-col gap-y-5 items-center">
                <div>
                  <h1 className="font-satoshi text-white-1 text-center text-2xl md:text-3xl">
                    Heading
                  </h1>
                </div>
                <div>
                  <p className="font-satoshi text-white-2 text-center text-xs md:text-lg">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum. Duis
                    aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur aliquip ex ea commodo
                    consequat exercitation ullamco laboris.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
