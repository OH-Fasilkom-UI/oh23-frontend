import Image from "next/image";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ weight: "800", subsets: ["latin"] });

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center relative">
      <Image src="/footer-bg.png" alt="" fill className="object-cover" />
      <Image src="/block.svg" width={300} height={300} alt="Logo" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 brightness-90" />
      <div className="z-10 text-center">
        <h1 style={orbitron.style} className="-mt-16 text-transparent bg-gradient-to-br from-screaminGreen-4 via-screaminGreen-2 to-lime-3 bg-clip-text font-bold text-4xl md:text-8xl drop-shadow-sm shadow-white">
          OPEN HOUSE
          <br />
          FASILKOM 2023
        </h1>
      </div>
    </main>

  );
}
