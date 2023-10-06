import Image from "next/image";
import { Button } from "@/components/elements/Button";
import { Countdown } from "@/components/elements/Countdown";
import { HiBookOpen, HiChevronDoubleRight } from "react-icons/hi2";
// import { useEffect } from "react";
<<<<<<< HEAD
import Definition from "@/sections/about/Definition";
import WTS from "@/sections/home/WTS";
=======
import Definition from "@/components/Definition";
import Timeline from "@/components/Timeline";
>>>>>>> 9ca23f82cdd5199514b962f3f8077617da5e238b


export default function Home() {

  return (
    <main className="bg-[#000]">
      <section className="min-h-screen bg-black flex items-center justify-center relative">
        <Image src="/background-header.png" alt="" width={1440} height={900} className="absolute top-0 left-0 object-cover brightness-[.6]" />
        <div className="z-10 text-center flex flex-col items-center justify-center gap-7 mx-5 backdrop-blur bg-black-3 px-16 py-10 rounded-md">
          <h1 className="font-satoshi text-white-1 bg-clip-text font-extrabold text-5xl drop-shadow-sm shadow-white">
            OPEN HOUSE
            <br />
            FASILKOM 2023
          </h1>
          <div className="font-satoshi text-center text-lg w-full">
            <h2 className="text-2xl mb-2">Grand Opening</h2>
            <Countdown date={new Date("2023-09-24T06:39:00+0700")} />
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
<<<<<<< HEAD
      <section className="my-20">
      <Definition/>
      </section>
      {/* Timeline */}
      <section className="my-20">
      </section>

      <section className="pb-20">
        <WTS/>
=======
      <section className="my-60">
        <Definition />
      </section>
      <section className="my-60">
        <h2 className="font-satoshi  text-center text-white font-extrabold text-5xl drop-shadow-sm shadow-white">
          Timeline
        </h2>
        <Timeline />
      </section>

      <section className="my-60">
        <div className="z-10 text-center flex flex-col mx-10 items-center">
          <div className="z-10 text-center flex flex-col items-center justify-center gap-7 mx-5 px-16 rounded-md">
            <h2 className="font-satoshi text-white font-extrabold text-5xl drop-shadow-sm shadow-white">
              What is OH?
            </h2>
          </div>
        </div>
>>>>>>> 9ca23f82cdd5199514b962f3f8077617da5e238b
      </section>

    </main>

  );
}
