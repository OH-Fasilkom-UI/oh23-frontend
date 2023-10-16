import Image from "next/image";

const benefits: {
  img: string,
  desc: string
}[] = [
  {
    img: "/home/cs-connect.png",
    desc: "Relasi"
  },
  {
    img: "/registration/campus-tour.jpg",
    desc: "Campus Tour"
  },
  {
    img: "/registration/coding-exp.jpg",
    desc: "Coding Experience"
  },
  {
    img: "/registration/interactive-class.jpg",
    desc: "Interactive Class"
  },
]

export default function Keuntungan() {
  return (
    <section className="bg-[url(/registration/bg-keuntungan.png)] min-h-screen bg-center mt-10 py-10 flex flex-col items-center">
      <h1 className="mb-11 mt-32 font-satoshi text-white-1 font-extrabold text-4xl sm:text-5xl drop-shadow-sm shadow-white text-center px-5">
        Keuntungan Mengikuti OH Fasilkom
      </h1>
      <div className="grid md:grid-cols-4 grid-cols-2 items-center justify-center z-10 sm:gap-8 gap-4 w-11/12 backdrop-blur-xl">
        {benefits.map((benefit, index) => (
          <div key={index} className="h-full border-green-300 border-2 shadow backdrop-blur-3xl rounded-lg items-center flex flex-col gap-4 pt-10 pb-6 px-5">
            <div className="sm:w-5/6 w-full  flex items-center justify-center object-contain">
              <Image src={benefit.img} alt="" width={100} height={100} className="object-contain h-full w-full rounded-2xl"/>
            </div>
            <p className="flex justify-center items-center font-satoshi text-white-1 font-extrabold text-center">{benefit.desc}</p>
          </div>     
        ))}  
      </div>
    </section>
  )
}