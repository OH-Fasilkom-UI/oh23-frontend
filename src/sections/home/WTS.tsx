import { Carousel } from '@mantine/carousel'
import Image from 'next/image'
import React from 'react'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2'

const testimonials = [
  {
    name: 'Waode Inaya Diza Ma’inah',
    imageUrl: "/home/Diza.jpg",
    quote: 'Such a fun experience! Ketemu sama kakak pacil dan ngerasain gimana sih jadi anak pacil dalam setengah hari. Diceritainn pengalaman merekaa di organisasi, magang, dan juga pengalaman selama di pacil. Pokoknya buat kalian yang bingung dan penasaran di Fasilkom UI gimana, cocok banget nih buat ikutan Open House Fasilkom UI 2023!!',
    major: "Sistem Informasi 2023",
  },
  {
    name: 'Sayyid Thariq Gilang Muttaqien',
    imageUrl: "/home/Sayyid.jpg",
    quote: 'Open House Fasilkom UI seru banget! Acaranya informatif, menarik, dan membangkitkan semangat untuk masuk Fasilkom. Banyak informasi yang tadinya saya tidak tahu disediakan dan dipaparkan di Open House Fasilkom ini. Rangkaian acaranya juga menarik, salah satu yang paling seru adalah Tour De Campus dan Fun Coding. Open House Fasilkom recommended banget deh buat kalian yang tertarik sama bidang IT ataupun buat kalian yang masih ragu untuk masuk jurusan apa.',
    major: "Sistem Informasi 2023",
  },
  {
    name: 'Karina Maharani',
    imageUrl: "/home/Karina.jpg",
    quote: 'Worth it, banyak banget info yang aku dapetin selama Open House Fasilkom. Selama ikut Open House Fasilkom, hal yang jadi paling memorable buat aku adalah sesi Fun Coding di mana kita bisa main game sambil belajar coding di sesi Fun Coding. Tidak hanya itu, Tour De Campus juga menjadi highlight karena sesi ini dibarengi dengan kakak yang keren. Setelah Open House Fasilkom, aku bukan hanya makin kenal dengan Fasilkom UI tapi juga makin kenal dengan teman-teman yang sekarang menjadi teman seangkatan di Fasilkom angkatan 2023. Pokoknya bagi yang masih ragu, jangan segan-segan untuk daftar.',
    major: "Sistem Informasi 2023",
  },
  {
    name: 'Patricia Herningtyas',
    imageUrl: "/home/Tyas.jpg",
    quote: 'OH Fasilkom tahun 2022, pengalaman yang bikin keputusanku semakin bulat untuk masuk Fasilkom UI! Di OH, aku dapat wawasan baru karena bebas tanya apapun tentang kehidupan di pacil :)\nDari semua rangkaian acara, favoritku adalah Fun Coding dan Interactive Class. Waktu itu aku belum bisa ngoding dan gapapa banget #rill!!! Karena bakal ditemenin step by step sama kakak-kakak yang seru dan helpful.',
    major: "Ilmu Komputer 2023",
  },
  {
    name: 'Athazahra Nabila Ruby',
    imageUrl: "/home/Zahra.jpg",
    quote: 'Open House Fasilkom tahun lalu seru banget, bener-bener bikin kebayang jadi mahasiswa Fasilkom tuh gimana! Kakak-kakak mentornya super baik & santai, ada sesi Fun Coding (beneran coding dibuat fun), Interactive Class (dari dosen Fasilkom langsung), dan pokoknya jadi kedorong bgtt kemauan aku buat masuk Fasilkom. 10/10 recommend buat yg tertarik Fasilkom! (syp tahu jadi manifestasi)',
    major: "Ilmu Komputer 2023",
  },
]

const WTS = () => {

  const [selected, setSelected] = React.useState(0);
  return (
    <div className="z-10 text-center flex flex-col min-h-screen items-center">
          <div className="px-5 z-10 text-center flex flex-col items-center justify-center gap-7 sm:px-16 rounded-md">
            <h2 className="font-satoshi text-white-1 font-extrabold text-3xl sm:text-5xl drop-shadow-sm shadow-white">
              What They Say About OH
            </h2>
          </div>
          <div className="relative w-full grid place-items-center mt-10">
            <Image src="/home/bg-wts-left.png" alt="" width={400} height={800} className="absolute top-0 left-0" />
            <Image src="/home/bg-wts-right.png" alt="" width={400} height={600} className="absolute top-0 right-0" />
            <div className="w-[calc(100%-40px)] overflow-x-auto py-5">
            <ul className='flex gap-3 w-max'>
              {
                testimonials.map((testimonial, index) => (
                    <article key={index} onClick={() => setSelected(index)} className={`font-satoshi ${selected === index ? "w-max" : "w-1/4"} h-[350px] sm:h-[400px] flex border-2 border-white-2 p-5 rounded-md bg-shimmerGreen-2 bg-opacity-20 backdrop-blur-xl`}>
                      <aside className={`${selected !== index ? "flex-1" : "w-1/3"} min-w-[200px]`}>
                        <div className="flex flex-col items-center h-full justify-center">
                        <div className=" rounded-full bg-white-2 w-36 h-36 block mb-5">
                          <Image src={testimonial.imageUrl} alt="" width={100} height={100} className="" />
                        </div>
                        <h1 className="text-2xl text-white-1 font-semibold">{testimonial.name}</h1>
                        <p className="text-sm font-semibold">{testimonial.major}</p>
                        </div>
                      </aside>
                      <aside className={`${selected === index ? "flex-1 px-5 sm:px-10": "w-0"} transition-all duration-300 relative overflow-hidden text-left flex flex-col gap-3 justify-center`}>
                        <Image src='/home/left-quote.png' alt="" width={30} height={30} className={`${selected === index ? "opacity-100 delay-200" : "opacity-0 duration-0"} transition-opacity duration-500 mr-auto`} />
                        <p className={`${selected === index ? "opacity-100 delay-200" : "opacity-0 transition-none"} max-w-[30ch] sm:max-w-prose text-white-1 transition-opacity duration-500`}>{testimonial.quote}</p>
                        <Image src='/home/right-quote.png' alt="" width={30} height={30} className={`${selected === index ? "opacity-100 delay-200" : "opacity-0 duration-0"} transition-opacity duration-500 ml-auto`} />
                      </aside>
                    </article>
                ))
              }
            </ul>
              </div>
        </div>  
        </div>
  )
}

export default WTS