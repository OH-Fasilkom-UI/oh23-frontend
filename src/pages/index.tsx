import Image from "next/image";
import { Button } from "@/components/elements/Button";
import { Countdown } from "@/components/elements/Countdown";
import { HiBookOpen, HiChevronDoubleRight } from "react-icons/hi2";
// import { useEffect } from "react";
import Definition from "@/sections/home/Definition";
import WTS from "@/sections/home/WTS";
import VideoOH from "@/sections/home/VideoOH";


export default function Home() {

  return (
    <main className="bg-[#000]">
      <section className="min-h-screen bg-black flex items-center justify-center relative">
        <Image src="/background-header.png" alt="" width={1440} height={900} className="absolute top-0 left-0 object-cover brightness-[.6]" />
        <div className="z-10 text-center flex flex-col items-center justify-center gap-4 sm:gap-7 mx-5 backdrop-blur bg-black-3 sm:px-16 py-10 rounded-md">
          <h1 className="font-satoshi text-white-1 bg-clip-text font-extrabold text-3xl sm:text-5xl drop-shadow-sm shadow-white">
            OPEN HOUSE
            <br />
            FASILKOM 2023
          </h1>
          <div className="font-satoshi text-center text-lg w-full">
            <h2 className="text-2xl mb-2">Grand Opening</h2>
            <Countdown date={new Date("2023-09-24T06:39:00+0700")} />
          </div>
          <div className="flex items-center flex-col sm:flex-row gap-3">
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
      <section className="my-20">
      <Definition/>
      </section>
      {/* Timeline */}
      <section className="my-20">
      </section>
      <section className="my-20">
        <VideoOH />
      </section>
      <section className="pb-20">
        <WTS/>
      </section>

    </main>

  );
}
