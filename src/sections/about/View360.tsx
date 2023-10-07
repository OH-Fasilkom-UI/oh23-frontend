import Image from "next/image";
import { Button } from "@/components/elements/Button";

export default function View360() {
  return (
    <section className="mt-10 py-10 flex bg-black min-h-screen items-center bg-[url('/background-view360.png')] bg-cover bg-right">
      <div className="backdrop-blur-3xl border-emerald-200 border w-[calc(100%-40px)] mx-auto md:w-2/5 h-fit py-14 px-10 rounded-3xl shadow flex flex-col gap-6 md:gap-12 justify-center items-center">
        <h1 className="font-satoshi text-white-1 text-3xl sm:text-5xl font-semibold">360° Campus View</h1>
        <p className=" text-white-2 max-w-prose">
        Ikuti tur dan dapatkan pengalaman berkunjung ke Fasilkom secara unik! 
        Kunjungi kampus kami yang nyaman dan lihatlah ruang belajar yang kondusif, 
        auditorium, ruang kuliah, lounge, dan banyak lagi!
        </p>
        <a
          href={'https://tour.cs.ui.ac.id/'}
          target="__blank"
          rel="noreferrer" 
          className="w-full"
        >
          <Button
            variant="primary"
            className="w-full text-white-1"
          >
            Visit Us Now!
          </Button>
        </a>
      </div>
    </section>
  )
}