import React, { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Orbitron } from "next/font/google";
import { Card } from "@/components/elements/Card";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi2";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";

const Carousel = dynamic(() => import("react-spring-3d-carousel"), {
  ssr: false,
});

const orbitron = Orbitron({ weight: "800", subsets: ["latin"] });

const AboutPage = () => {
  const [goToSlide, setGoToSlide] = useState(0);

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

  return (
    <main className="bg-black" style={{ backgroundColor: "black" }}>
      <section className="min-h-screen bg-black flex items-center justify-center relative">
        <Image
          src="/background-about-fasilitas.svg"
          alt=""
          width={1440}
          height={900}
          className="absolute top-0 left-0 object-cover brightness-[.6]"
        />
        <div className="w-full flex flex-col items-center z-10">
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
            />
            <div
              className="absolute top-[50%] left-4 flex justify-center items-center w-12 h-12 rounded-full bg-[#41EAD4B2] text-white font-satoshi font-bold cursor-pointer z-10 shadow-md shadow-[#41EAD4B2]"
              onClick={swipeLeft}
            >
              <HiOutlineArrowLeft color="white" />
            </div>
            <div
              className="absolute top-[50%] right-4 flex justify-center items-center w-12 h-12 rounded-full bg-[#41EAD4B2] text-white font-satoshi font-bold cursor-pointer z-10 shadow-md shadow-[#41EAD4B2]"
              onClick={swipeRight}
            >
              <HiOutlineArrowRight color="white" />
            </div>
            <div className="absolute bottom-0 left-0 w-full flex justify-center">
              <div className="flex justify-center gap-x-2">
                {/* Indikator slide non-aktif dengan lingkaran berwarna hijau gelap */}
                {[...Array(goToSlide)].map((slide) => (
                  <div className="w-2 h-2 bg-green-950 rounded-full"></div>
                ))}

                {/* Indikator slide aktif saat ini dengan hijau terang */}
                <div className="w-2 h-2 bg-gradient-to-r from-grass-1 to-grass-3 rounded-full"></div>

                {/* Indikator slide non-aktif dengan lingkaran berwarna hijau gelap */}
                {[...Array(slides.length - (goToSlide + 1))].map((slide) => (
                  <div className="w-2 h-2 bg-green-950 rounded-full"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 flex flex-col items-center justify-center min-h-screen"></section>
    </main>
  );
};

export default AboutPage;
