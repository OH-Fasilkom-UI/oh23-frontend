import Image from "next/image";
import { Button } from "@/components/elements/Button";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi2'
import { Carousel } from '@mantine/carousel';
import { useRef } from "react";

const community = [
  "/home/community-gdsc.JPG",
  "/home/community-180deg.png",
]

const media = [
  "/home/media-mading.png",
  "/home/media-ie.png",
  "/home/media-edaran.png",
]

export default function Partner() {
  return (
    <section className="bg-[url(/home/background-partner.png)] bg-cover bg-center mt-10 py-10 flex flex-col gap-20 justify-evenly items-center min-h-screen px-10">
      <div className="w-full flex flex-col md:items-start items-center md:text-start text-center gap-8">
        <h3 className="font-satoshi font-bold text-3xl text-white-1">Community Partner</h3>
        <div className="flex md:flex-row flex-col justify-center gap-16 bg-stone-950 bg-opacity-95 rounded-3xl border-green-300 border-2 w-fit sm:px-16 px-4 md:py-10 py-14 md:h-64 h-max">
          {community.map((image, index) => (
            <Image key={index} src={image} alt="" width={128} height={128} className="object-contain w-full h-full"/>
            ))}
        </div>
      </div>
      <div className="w-full flex flex-col md:items-end items-center gap-8">
        <h3 className="font-satoshi font-bold text-3xl text-white-1">Media Partner</h3>
        <div className="flex md:flex-row flex-col justify-center gap-16 bg-stone-950 bg-opacity-95 rounded-3xl border-green-300 border-2 w-fit sm:px-16 px-4 md:py-10 py-14 md:h-64 h-max">
          {media.map((image, index) => (
            <Image key={index} src={image} alt="" width={128} height={128} className="object-contain md:w-1/3 w-full h-full"/>
          ))}
        </div>
      </div>
    </section>
  )
}