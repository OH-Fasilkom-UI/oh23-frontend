import Image from "next/image";
import { Orbitron } from "next/font/google";
import { Button } from "@/components/elements/Button";
import { Countdown } from "@/components/elements/Countdown";

const orbitron = Orbitron({ weight: "800", subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-black">
    <section className="min-h-screen bg-black flex items-center justify-center relative">
      <Image src="/footer-bg.png" alt="" fill className="object-cover brightness-[.6]" />
      <Image src="/block.svg" width={300} height={300} alt="Logo" className=" brightness-[.6] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="z-10 text-center flex flex-col items-center justify-center gap-5">
        <h1 style={orbitron.style} className="mt-10 text-transparent bg-gradient-to-br from-screaminGreen-4 via-screaminGreen-2 to-lime-3 bg-clip-text font-bold text-4xl md:text-8xl drop-shadow-sm shadow-white">
          OPEN HOUSE
          <br />
          FASILKOM 2023
        </h1>
        <Button variant="primary" className="font-satoshi font-bold text-lg md:text-xl">
          Daftar Sekarang
        </Button>
      </div>
    </section>
    <section className="py-10 flex flex-col items-center justify-center">
    <Countdown date={new Date("2023-09-07T06:39:00+0700")}/>

    </section>
    </main>

  );
}
