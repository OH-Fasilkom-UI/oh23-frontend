import { Card } from "@/components/elements/Card";
import Image from "next/image";
import { useState } from "react";

export const BrowseWoF = () => {
  const alumni: {
    img: string,
    name: string,
  }[] = [
    {
      img:"/wof/Darren.jpg",
      name: "Darren Ngoh"
    },
    {
      img:"/wof/Fairuzi.jpeg",
      name: "Muhammad Fairuzi T."
    },
  ]

  const mahasiswa: {
    img: string,
    name: string,
  }[] = [
    {
      img:"/wof/Jasmine.JPG",
      name: "Jasmine A. Muthia"
    },
    {
      img:"/wof/Eryaw.jpeg",
      name: "Eryawan Presma Y."
    },
    {
      img:"/wof/Vincent.jpg",
      name: "Vincent Suhardi"
    },
    {
      img:"/wof/BryanT.jpg",
      name: "Bryan Tjandra"
    },
    {
      img:"/wof/Jojo.jpeg",
      name: "Oey Joshua Jodrian"
    },
    {
      img:"/wof/Nyoos.jpg",
      name: "Nyoo Steven Christopher"
    },
  ]

  const [Tab, setTab] = useState<String>("Mahasiswa");
  const [data, setData] = useState(mahasiswa);

  function setMahasiswa() {
    setTab("Mahasiswa");
    setData(mahasiswa);
  }

  function setAlumni() {
    setTab("Alumni");
    setData(alumni);
  }

  return (
    <section className="flex flex-col items-center">
      <div className="z-10 sm:w-1/2 w-3/4 mt-10 mx-4 -mb-20 flex justify-evenly rounded-xl">
        <div onClick={() => setMahasiswa()} className={` hover:cursor-pointer transition-all border-x-4 duration-500 rounded-full w-1/2 flex justify-center bg-gradient-to-br via-black-1 to-black-1 sm:py-5 py-4 sm:text-lg text-sm font-bold ${Tab == "Mahasiswa" ? "text-white-1 border-green-400 from-screaminGreen-4" : "from-grass-4 border-black-1"}`}>
          Mahasiswa
        </div>
        <div onClick={() => setAlumni()} className={` hover:cursor-pointer transition-all border-x-4 duration-500 rounded-full w-1/2 flex justify-center bg-gradient-to-br from-black-1 via-black-1 sm:py-5 py-4 sm:text-lg text-sm font-bold ${Tab == "Alumni" ? "text-white-1 border-green-400 to-screaminGreen-4" : "border-black-1 to-grass-4"}`}>
          Alumni
        </div>
      </div>
      <div className='mt-10 bg-[url(/wof/bg-browse-mobile.jpg)] min-h-screen w-full sm:bg-[url(/wof/bg-browse-desktop.jpg)] bg-center sm:bg-contain bg-cover bg-no-repeat flex items-center justify-center'>
        <div className="overflow-auto sm:w-9/12 w-8/12 relative flex items-center gap-3 justify-between align-middle pl-5 sm:aspect-video aspect-[2/3] py-4">
          <div className="sm:flex hidden w-5/12 pl-5 h-full items-center align-middle justify-center text-center text-white-1 md:text-5xl text-3xl font-bold font-satoshi">
            {Tab}
          </div>
          <div className={`sm:w-7/12 ${Tab == "Mahasiswa" ? "h-full" : "sm:h-max h-full"} w-full grid sm:grid-cols-2 grid-cols-1 gap-y-4 gap-x-8 overflow-y-auto sm:px-4 px-2`}>
          {data.map((item, index) => (
            <div
              key={index}
              className="w-full h-full p-4 md:p-6 flex flex-col gap-y-5 items-center rounded-xl bg-cards backdrop-blur"
              style={{ border: "1px solid rgba(165, 250, 209, 0.2)" }}
            >
              <div>
                <Image
                  src={item.img}
                  alt={item.name}
                  width={300}
                  height={300}
                  className="w-full h-fit object-cover rounded-lg"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="flex gap-y-5 items-center align-middle h-full">
                  <h1 className="font-satoshi text-white-1 text-center md:text-xl text-base font-semibold">
                    {item.name}
                  </h1>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>   
    </section>
  )
}