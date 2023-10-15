import Image from "next/image";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi2'
import { Carousel } from '@mantine/carousel';
import { useState } from "react";
import Tabs from "@/components/elements/Tabs";

const events: {
  img: string,
  title: string,
  desc: string
}[] = [
  {
    img: "/icon/registration/icon-tourdecampus.png",
    title: "Tour de Campus",
    desc: `Tour de Campus Fasilkom UI merupakan rangkaian acara utama pada Open House Fasilkom UI, dimana 
    peserta akan datang ke Fasilkom UI dan melakukan serangkaian acara, seperti Tour Fasilkom UI, 
    Mentoring Session, Fun coding, Interactive Class, Exhibition, Wall of Dream, Parent’s Talkshow, 
    dan Grand Closing. Pada Tour de Campus Fasilkom UI ini peserta akan berinteraksi secara langsung 
    dengan para civitas Fasilkom UI sehingga dapat memperluas wawasan peserta tentang Fasilkom.`
  },
  {
    img: "/icon/registration/icon-funcoding.png",
    title: "Fun Coding",
    desc: `Kegiatan ini merupakan salah satu ciri khas yang dimiliki Open House Fasilkom UI dari tahun ke 
    tahun di mana para peserta mencoba menulis program secara langsung. Acara ini akan dikemas seperti 
    sebuah permainan yang fun sehingga para peserta merasa bahwa coding itu seperti sedang memainkan game.`
  },
  {
    img: "/icon/registration/icon-class.png",
    title: "Interactive Class",
    desc: `Interactive Class merupakan kegiatan di mana peserta Open House Fasilkom akan merasakan 
    pengalaman diajar langsung oleh dosen-dosen Fasilkom UI yang telah ditentukan. Kelas akan dibuat 
    interaktif dengan memaksimalkan komunikasi serta pemanfaatan alat peraga untuk mendukung penyampaian 
    materi yang disampaikan.`
  },
  {
    img: "/icon/registration/icon-talkshow.png",
    title: "Parent Talkshow",
    desc: `Parent’s Talkshow adalah salah satu acara yang akan berlangsung selama Main Event Open House 
    Fasilkom UI 2023 berjalan. Acara ini akan mengundang speaker yang memiliki pemahaman tentang apa saja 
    informasi yang dibutuhkan oleh peserta terkait penerimaan mahasiswa baru. Target dari acara ini adalah 
    orang tua para peserta Open House Fasilkom UI 2023. Selama talkshow, para orang tua akan mendapatkan 
    informasi seputar pendaftaran dan biaya kuliah di Fasilkom UI, prospek pekerjaan lulusan Fasilkom UI, 
    dan banyak hal lainnya. Para orang tua juga diberi kesempatan untuk mengajukan pertanyaan kepada 
    pembawa acara.`
  },
  {
    img: "/icon/registration/icon-connect.png",
    title: "CS Connect",
    desc: `CS Connect adalah kegiatan yang akan diisi dengan Talkshow Online di main room Zoom dengan 
    menghadirkan pengisi acara yang akan membawakan informasi-informasi tentang Fasilkom UI. Setelah sesi 
    talkshow berakhir, peserta akan di-assign ke masing-masing breakout room untuk melaksanakan Mentoring 
    Online dengan mentornya masing-masing dari LO. Materi yang diberikan akan berupa pengenalan jurusan 
    yang ada di Fasilkom UI dan informasi teknis kegiatan pada Main Event selanjutnya.`
  },
]

export default function Keseruan() {
  const [fullMode, setFullMode] = useState(true)
  return (
    <section className="bg-[url(/registration/bg-keseruan.png)] bg-cover min-h-[130vh] bg-center mt-10 py-10 flex flex-col items-center">
      <h1 className="mt-32 font-satoshi text-white-1 font-extrabold text-4xl sm:text-5xl drop-shadow-sm shadow-white text-center px-5">
        Ikuti Keseruan yang Ada di Open House
      </h1>
      <Tabs
        buttonsText={["Full Experience", "Online Experience"]}
        defaultIndex={0}
        className="sm:w-1/2 w-4/5 mx-auto text-xs my-12"
        onClicks={[
          () => setFullMode(true),
          () => setFullMode(false),
        ]}
      />
      <div className="w-full flex items-center justify-center">
        {fullMode ? (
            <Carousel
              controlsOffset="xs"
              slideSize="33.333%"
              slideGap="sm"
              slidesToScroll={1}
              loop
              height={250}
              align="start"
              breakpoints={[
                { maxWidth: 'md', slideSize: '49.8%' },
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
                    <p className="font-satoshi text-white-1 font-extrabold text-center text-xl">{event.title}</p>
                  </div>     
                </Carousel.Slide>
              ))}
            </Carousel>
        ) : (
          <div className="border-green-300 border-2 shadow backdrop-blur-3xl rounded-lg items-center flex flex-col justify-between gap-4 h-[250px] pt-10 pb-10 px-5 mx-10">
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