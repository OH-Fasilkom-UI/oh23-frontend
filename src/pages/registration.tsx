import Image from "next/image";
import { Button } from "@/components/elements/Button";
import { Countdown } from "@/components/elements/Countdown";
import { HiBookOpen, HiChevronDoubleRight } from "react-icons/hi2";
import Link from "next/link";
import Keseruan from "@/sections/registration/Keseruan";
import Keuntungan from "@/sections/registration/Keuntungan";
import FAQ from "@/sections/registration/FAQ";
import ContactPerson from "@/sections/registration/ContactPerson";

export default function Home() {
  const next_countdown = new Date("2023-10-17T12:00:00+0700")
  const is_counting = new Date() < next_countdown

  return (
    <main className="bg-black-1">
      <section className="bg-[url(/registration/bg-countdown.png)] bg-cover bg-center min-h-screen flex items-center justify-center relative pt-16">
        {/* <Image src="/home/background-header.png" alt="" width={1440} height={900} className="absolute top-0 left-0 object-cover brightness-[.6]" /> */}
        <div className="z-10 text-center flex flex-col items-center justify-center gap-4 sm:gap-7 mx-5 backdrop-blur bg-black-3 sm:px-16 py-10 rounded-3xl border-2 border-green-300">
          <h1 className="font-satoshi text-white-1 bg-clip-text font-extrabold text-3xl sm:text-5xl drop-shadow-sm shadow-white px-5">
            OPEN REGISTRATION
            <br />
            OPEN HOUSE FASILKOM 2023
          </h1>
          <div className="font-satoshi text-center flex flex-col items-center text-lg w-full">
            <Image src="/home/countdown-arrow.svg" alt="" width={100} height={100}/>
            <Countdown date={next_countdown} />
            <h3 className="text-sm sm:text-lg font-bold">17 Oktober 2023, 12:00 GMT+7</h3>
          </div>
            <div className="flex sm:flex-row flex-col items-center gap-3">
              <Link href="#keseruan">
                <Button variant="secondary" className="sm:w-auto w-full font-satoshi font-bold">
                  <HiBookOpen />
                  Learn More
                </Button>
              </Link>
              <Button variant="primary" className="sm:w-auto w-full font-satoshi font-bold">
                <HiChevronDoubleRight />
                Register Now
              </Button>
            </div>
        </div>
      </section>
      <section id="keseruan" className="my-20">
        <Keseruan />
      </section>
      <section id="keuntungan" className="my-20">
        <Keuntungan />
      </section>
      <section id="keuntungan" className="my-20">
        <FAQ />
      </section>
      <section id="keuntungan" className="pb-20">
        <ContactPerson />
      </section>
    </main>
  );
}
