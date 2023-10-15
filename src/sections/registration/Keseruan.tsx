import Image from "next/image";
import { Button } from "@/components/elements/Button";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi2'
import { Carousel } from '@mantine/carousel';
import { useRef } from "react";
import { useState } from "react";
import Tabs from "@/components/elements/Tabs";

const events: {
  img: string,
  desc: string
}[] = [
  {
    img: "/icon/registration/icon-tourdecampus.png",
    desc: "Tour de Campus"
  },
  {
    img: "/icon/registration/icon-funcoding.png",
    desc: "Fun Coding"
  },
  {
    img: "/icon/registration/icon-class.png",
    desc: "Interactive Class"
  },
  {
    img: "/icon/registration/icon-talkshow.png",
    desc: "Parent Talkshow"
  },
  {
    img: "/icon/registration/icon-connect.png",
    desc: "CS Connect"
  },
]

export default function Keseruan() {
  const [fullMode, setFullMode] = useState(true)
  return (
    <section className="bg-[url(/registration/bg-keseruan.png)] bg-cover min-h-[130vh] bg-center mt-10 py-10 flex flex-col items-center">
      <h1 className="mt-32 font-satoshi text-white-1 font-extrabold text-4xl sm:text-5xl drop-shadow-sm shadow-white">
        Ikuti Keseruan yang Ada di Open House
      </h1>
      <Tabs
        buttonsText={["Full Experience", "Online Experience"]}
        defaultIndex={0}
        className="w-1/2 mx-auto text-xs my-12"
        onClicks={[
          () => setFullMode(true),
          () => setFullMode(false),
        ]}
      />
      <div className="w-full flex items-center justify-center">
        {fullMode ? (
            <Carousel
              withIndicators
              slideSize="33.333%"
              slideGap="sm"
              slidesToScroll={1}
              loop
              height={250}
              align="start"
              breakpoints={[
                { maxWidth: 'md', slideSize: '50%' },
                { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
              ]}
              previousControlIcon={
                <div className="bg-teal-300 rounded-full p-3 text-white-1">
                  <HiOutlineArrowLeft/>
                </div>
              }
              nextControlIcon={
                <div className="bg-teal-300 rounded-full p-3 text-white-1">
                  <HiOutlineArrowRight/>
                </div>
              }
              className="w-3/4"
            >
              {events.map((event, index) => (
                <Carousel.Slide key={index}>
                  <div className="border-green-300 border-2 shadow backdrop-blur-3xl rounded-lg items-center flex flex-col justify-between gap-4 h-full pt-10 pb-10 px-5">
                    <div className="h-5/6 w-full flex items-center justify-center object-contain">
                      <Image src={event.img} alt="" width={100} height={100} className="object-contain h-full w-full"/>
                    </div>
                    <p className="font-satoshi text-white-1 font-extrabold text-center text-xl">{event.desc}</p>
                  </div>     
                </Carousel.Slide>
              ))}
            </Carousel>
        ) : (
          <div className="border-green-300 border-2 shadow backdrop-blur-3xl rounded-lg items-center flex flex-col justify-between gap-4 h-[250px] pt-10 pb-10 px-5">
            <div className="h-5/6 w-full flex items-center justify-center object-contain">
              <Image src="/icon/registration/icon-connect.png" alt="" width={100} height={100} className="object-contain h-full w-full"/>
            </div>
            <p className="font-satoshi text-white-1 font-extrabold text-center text-xl">CS Connect</p>
          </div>    
        )}
      </div>
    </section>
  )
}