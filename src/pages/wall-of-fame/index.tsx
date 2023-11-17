import { Button } from "@/components/elements/Button";
import { BrowseWoF } from "@/sections/wof/BrowseWoF";
import { useState } from "react";
import { HiSearch } from "react-icons/hi";


export default function WoF() {
  const [isBrowsing, setIsBrowsing] = useState(true)

  return (
    <div className="bg-black-1 overflow-x-hidden">
      {isBrowsing ? (
        <section className="pt-10">
          <BrowseWoF />
        </section>
      ) : (
        <section className='bg-[url(/wof/bg-landing.jpg)] bg-cover bg-center min-h-screen flex items-center justify-end relative sm:px-20 px-5'>
          <div className='flex gap-10 flex-wrap justify-center'>
            <div className='text-left backdrop-blur rounded-2xl border-gray-100 border-opacity-10 border-2 max-w-full sm:max-w-xl sm:px-10 px-5 py-9 flex gap-5 sm:gap-8 flex-col'>
              <div className='flex flex-col gap-2'>
                <h3 className="text-white-1 font-bold text-lg sm:text-2xl">Open House Fasilkom</h3>
                <h1 className="text-white-1 font-bold text-4xl sm:text-6xl">Wall of Fame</h1>
              </div>
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </p>
              <div className='flex flex-col gap-4'>
                <Button onClick={() => setIsBrowsing(true)} variant='primary' className="font-satoshi font-bold">
                  Browse Our Fame
                  <HiSearch />
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}