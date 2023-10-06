import Image from "next/image";
import { Button } from "./elements/Button";

export default function View360() {
  return (
    <section className="mt-10 py-10 flex bg-black min-h-screen items-center bg-[url('/background-view360.png')] bg-cover bg-right">
      <div className="backdrop-blur-3xl border-emerald-200 border mx-10 md:mx-20 md:w-1/2 h-fit py-14 px-10 rounded-3xl shadow flex flex-col gap-6 md:gap-12 justify-center items-center text-center">
        <h1 className="font-satoshi text-white-1 text-5xl font-semibold">360° Campus View</h1>
        <p className="text-center text-white-1">
          Lorem ipsum dolor sit amet consectetur. Diam pellentesque morbi enim egestas neque diam morbi laoreet.
          Sollicitudin vel vitae placerat penatibus tempor ipsum. Lorem ipsum dolor sit amet consectetur. Diam pellentesque
          morbi enim egestas neque diam morbi laoreet. Sollicitudin vel vitae placerat penatibus tempor ipsum. Lorem ipsum
          dolor sit amet consectetur.
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