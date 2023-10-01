import Image from "next/image";
import { Orbitron } from "next/font/google";
import { Button } from "@/components/elements/Button";
import { Countdown } from "@/components/elements/Countdown";
import { HiBookOpen, HiChevronDoubleRight, HiOutlineArrowRight } from "react-icons/hi2";
import '@mantine/carousel/styles.css';
import {  } from '@mantine/carousel';

const orbitron = Orbitron({ weight: "800", subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-black">
      <section className="min-h-screen bg-black flex items-center justify-center relative">
        <Image src="/background.svg" alt="" width={1440} height={900} className="absolute top-0 left-0 object-cover brightness-[.6]" />
        <div className="z-10 text-center flex flex-col items-center justify-center gap-7 mx-5 backdrop-blur bg-black-3 px-16 py-10 rounded-md">
          <h1 className="font-satoshi text-white bg-clip-text font-extrabold text-5xl drop-shadow-sm shadow-white">
            OPEN HOUSE
            <br />
            FASILKOM 2023
          </h1>
          <div className="font-satoshi text-center text-lg w-full">
            <h2 className="text-2xl mb-2">Grand Opening</h2>
            <Countdown date={new Date("2023-09-19T06:39:00+0700")} />
          </div>
          <div className="flex items-center gap-3">
            <Button variant="primary" className="font-satoshi font-bold">
              <HiChevronDoubleRight />
              Register Now
            </Button>
            <Button variant="secondary" className="font-satoshi font-bold">
              <HiBookOpen />
              Learn More
            </Button>
          </div>
        </div>
      </section>
      <div className="my-60"/>
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
            className="px-28"
          >
            Baca Selengkapnya
            <HiOutlineArrowRight/>
          </Button>
        </div>
      </section>
    </main>

  );
}
