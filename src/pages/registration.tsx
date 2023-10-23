import Image from "next/image";
import { Button } from "@/components/elements/Button";
import { Countdown } from "@/components/elements/Countdown";
import { HiBookOpen, HiChevronDoubleRight } from "react-icons/hi2";
import { notifications } from '@mantine/notifications';
import Link from "next/link";
import Keseruan from "@/sections/registration/Keseruan";
import Keuntungan from "@/sections/registration/Keuntungan";
import FAQ from "@/sections/registration/FAQ";
import ContactPerson from "@/sections/registration/ContactPerson";

export default function Home() {
  const bef_countdown = new Date(process.env.NEXT_PUBLIC_OPEN_REG_1 || "2023-10-17T12:00:00+0700")
  const countdown = new Date(process.env.NEXT_PUBLIC_OPEN_REG_2 || "2023-10-17T12:00:00+0700")
  const next_countdown = new Date(process.env.NEXT_PUBLIC_CLOSE_REG_2 || "2023-10-21T23:59:59+0700")
  const is_counting = new Date() < countdown
  const open_reg = new Date() < next_countdown

  return (
    <main className="bg-black-1">
      <section className="bg-[url(/registration/bg-countdown.png)] bg-cover bg-center min-h-screen flex items-center justify-center relative pt-16">
        {/* <Image src="/home/background-header.png" alt="" width={1440} height={900} className="absolute top-0 left-0 object-cover brightness-[.6]" /> */}
        <div className="sm:mt-10 z-10 text-center flex flex-col items-center justify-center gap-4 sm:gap-7 mx-5 backdrop-blur bg-black-3 sm:px-16 py-10 rounded-3xl border-2 border-green-300">
          <h1 className="font-satoshi text-white-1 bg-clip-text font-extrabold text-3xl sm:text-5xl drop-shadow-sm shadow-white px-5">
            OPEN REGISTRATION
            <br />
            <span className="text-lg sm:text-2xl">
            OPEN HOUSE FASILKOM 2023
            </span>
          </h1>
          <div className="font-satoshi text-center flex flex-col items-center text-lg w-full px-2">
            <h2 className="text-xl mb-2 font-semibold font-satoshi">{is_counting ? "Registration closed" : <>{open_reg ? "Registration is extended" : "Registration closed"}</>}</h2>
            <Image src="/home/countdown-arrow.svg" alt="" width={100} height={100}/>
            <Countdown date={is_counting ? bef_countdown : next_countdown} />
            <h3 className="mt-2 text-sm sm:text-lg font-bold">{is_counting ? "21 Oktober 2023, 23:59 GMT+7" : "1 November 2023, 23:59 GMT+7"}</h3>
          </div>
          <div className="flex sm:flex-row flex-col-reverse items-center gap-3">
            <Link href="#keseruan" className="sm:w-auto w-full">
              <Button variant="secondary" className="sm:w-auto w-full font-satoshi font-bold">
                <HiBookOpen />
                Learn More
              </Button>
            </Link>
            {is_counting ? (
              <Button 
                variant="primary"
                className="opacity-30 font-satoshi font-bold sm:w-auto w-full"
                onClick={() => {
                  notifications.show({
                    title: 'Hi AInergic untuk sekarang registrasi telah ditutup yaa',
                    message: 'Bagi kalian yang masih ingin menjadi bagian dari Open House Fasilkom UI, tunggu kabar dari kami yaa',
                    color: "red"
                  })
                }}
              >
                <HiChevronDoubleRight />
                Register Now
              </Button>
            ) : (
              <>
              {open_reg ? (
                <Link target="_blank" href="https://forms.gle/NE545DK7YVqYf5Vg7">
                  <Button variant="primary" className="sm:w-auto w-full font-satoshi font-bold">
                    <HiChevronDoubleRight />
                    Register Now
                  </Button>
                </Link>
              ) : (
                <Button 
                  variant="primary"
                  className="opacity-30 font-satoshi font-bold sm:w-auto w-full"
                  onClick={() => {
                    notifications.show({
                      title: 'Hi AInergic untuk sekarang registrasi telah ditutup yaa',
                      message: 'Bagi kalian yang masih ingin menjadi bagian dari Open House Fasilkom UI, tunggu kabar dari kami yaa',
                      color: "red"
                    })
                  }}
                >
                  <HiChevronDoubleRight />
                  Register Now
                </Button>
              )}
              </>
            )}
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
