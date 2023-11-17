import { Card } from "@/components/elements/Card";
import { Button } from "@/components/elements/Button";
import Image from "next/image";
import { useState } from "react";

export const BrowseWoF = () => {
  const alumni: {
    img: string,
    name: string,
    desc: string,
    achievement: string;
  }[] = [
    {
      img:"/wof/Darren.jpg",
      name: "Darren Ngoh",
      desc: `
      Hi! My name is Darren Ngoh, I graduated from Fasilkom UI on 2023. Unlike other CS graduates/students, I'm not really into coding, but instead I'm always very keen on the business side of things. This passion of mine led to explore various entreprenurial projects during my time at Fasilkom UI. Fast forward, I felt incredibly fortunate to receive multiple grants, including those from prestigious institutions like Google, Kemdikbudristekdikti, BRI, and, notably, four times from UI itself. In addition, I was honored to be awarded the Young Leader for Indonesia scholarship by McKinsey & Company.

      Reflecting on my first semester at Fasilkom UI, I recall a period doubt, a period of questioning my decision to study at Fasilkom. Now, looking back, I can confidently say that joining pacil was one of my life's best decisions. The continous support and resources provided by Fasilkom and UI played a crucial role in nurturing mine and every students' unique interest, despite their majors. But more importantly, the network. It was the rich network of like-minded individuals that I value second to none. Who knows a simple conversation over lunch at Gedung Lama led to the creation of Bikun Tracker (bikun.ui.ac.id), now widely-used tool with over 1000 daily users. That's the power of the community of Fasilkom UI – a network that fosters innovation and collaboration. That's the network you want to be in.
      `,
      achievement: "Darren"
    },
    {
      img:"/wof/Fairuzi.jpeg",
      name: "Muhammad Fairuzi T.",
      desc: `
      Saya adalah alumni Fasilkom UI yang lulus pada tahun 2021 dan sekarang bekerja di Google Taiwan. Sebelumnya, saya telah bekerja di Ruangguru tepat setelah kelulusan saya dari Fasilkom. Pada masa perkuliahan, saya juga aktif mengikuti dan memenangkan berbagai perlombaan, dua di antaranya adalah Medali Perunggu Pengembangan Perangkat Lunak Gemastik 2020 dan National Gold Medal ICPC Jakarta 2019.

      Berkuliah di Fasilkom benar-benar membantu mempersiapkan karier saya, mulai dari kurikulum yang terus diperbarui, dosen-dosen berprestasi dan mengajar sepenuh hati, serta teman-teman suportif yang sekarang telah tersebar di berbagai bidang di seluruh dunia. Semua hal ini membentuk pribadi saya sehingga bisa mendapat tawaran pekerjaan dan promosi di kedua tempat saya bekerja. Terima kasih Fasilkom!
      `,
      achievement: "Google Taiwan"
    },
  ]

  const mahasiswa: {
    img: string,
    name: string,
    desc: string,
    achievement: string;
  }[] = [
    {
      img:"/wof/Jasmine.JPG",
      name: "Jasmine A. Muthia",
      desc: `
      Back in my freshman year, I initially thought I was going to be a software engineer working for top tech companies. However, in my second year, I came to the realization that I don’t really like to code 🥲. I then tried to find another career path that aligns with my knowledge in tech and my passion for business. Luckily enough, I found a video about product management—a role that intersects three things I’m keen about: tech, business, and design. I instantly fell in love with the role 💕

      I decided to apply for an internship in product management during summer break, but, of course, it was tough—I received zero acceptances 😇. In my second year, I joined RISTEK and learned about project and product management there. I got exposed to a lot of exciting IT projects and had the chance to advise on their product! There, my seniors suggested I join hackathons and strategy-related competitions to hone my skills.
      
      I followed their suggestion and it turns out that by joining competitions, I got to learn, meet many friends and amazing judges, and also have fun. I then got addicted to joining a lot of competitions, and it continues until now 🥰! I finally landed a product management internship in one of my dream companies because of my competition achievements and my RISTEK portfolio! 💜
      
      Now, I’m in my final year, working on my thesis and planning to graduate in June 2024. Hopefully, I can land a full-time job in my dream companies :)
      `,
      achievement: ""
    },
    {
      img:"/wof/Eryaw.jpeg",
      name: "Eryawan Presma Y.",
      desc: `
      Kak Eryawan atau yang akrab dipanggil Eryaw merupakan seorang mahasiswa jurusan Ilmu Komputer Angkatan 2022. Kak Eryaw memulai perjalanannya dalam belajar coding sedari SMP dan mulai menekuninya lebih dalam ketika memasuki jenjang SMA. Minatnya pada logika berpikir dan problem solving membuat Kak Eryaw berhasil meraih medali perak Olimpiade Sains Nasional (OSN) bidang informatika. Hal tersebutlah yang menggiring kak Eryaw dapat diterima di Fasilkom UI melalui jalur prestasi. 

      Namun, kisah perjalanan Kak Eryaw tidak berhenti sampai di situ saja. Di akhir kelas 12, Kak Eryaw mulai mempelajari lebih dalam mengenai topik yang berkaitan dengan Data Science & Artificial Intelligence dan hal itu masih berlanjut hingga kini. Saat ini, Kak Eryaw sangat aktif di berbagai kompetisi AI. Pencapaian yang berhasil diraih oleh Kak Eryaw, antara lain meliputi:
      - Juara 2 Datavidia from Arkavidia 8
      - Juara 1 Ristek Datathon Competition
      - Finalis Joints Data Competition
    - Peringkat 15 International Collegiate Programming Contest (ICPC) Regional Asia
      - Semi Finalis Big Data Challenge Satria Data
      `,
      achievement: "Juara 2 Datavidia from Arkavidia 8"
    },
    {
      img:"/wof/Vincent.jpg",
      name: "Vincent Suhardi",
      desc: `
      Berawal dari belajar keras banget buat UTBK, eh tau-taunya gagal masuk. Sempet demotivasi tapi dengan dukungan keluarga dan mengingat benefit yang bisa diberikan oleh kampus terbaik di seluruh Indonesia, lanjut coba buat SIMAK dan akhirnya lolos di Fasilkom jurusan SI.

      Prestasi:
      Sedang mencari prestasi dengan mengikuti banyak-banyak lomba dan terakhir jadi finalis Datathon yang diselenggarain sama RISTEK
      `,
      achievement: ""
    },
    {
      img:"/wof/BryanT.jpg",
      name: "Bryan Tjandra",
      desc: `
      Awalnya, saat di SMA, kak Bryan belum memiliki pengetahuan yang banyak tentang teknologi informasi (IT). Namun, ketika mendengar tentang Universitas Indonesia (UI) dan melihat kesuksesan orang-orang dari UI, ia mulai tertarik untuk mempelajari masuk UI dengan jurusan IT.

      Sejak awal-awal keterima di Ilmu Komputer UI, Ia merasa terkejut dengan kemampuan temannya yang sepertinya sudah jago.  Meskipun merasa tertinggal dibandingkan dengan beberapa teman yang lebih berpengalaman, ia tidak merasa putus asa dan mengikut dalam memperkembangkan skillnya. 
      
      Saat kuliah, ia mencoba berbagai kompetisi akademik, terutama dalam bidang Data Science (DS). Meskipun awalnya pemula, ia tetap mencoba berbagai lomba, kursus online, dan hackathon untuk terus belajar. Walaupun ada beberapa lomba yang pas awal-awal masih kurang percaya dengan kemampuan diri, ia masih berjuang untuk mencoba sebisanya dan hasilnya tidak pernah merugikan.  
      
      Kuliah yang masih online memberikan lebih banyak waktu luang, yang digunakan secara intensif untuk belajar. Seseorang merasa harus terus belajar, tanpa henti, dan sempat mengikut beberapa kursus satunya generasi GG 
      
      Sebagai mottonya, Berkat konsistensi dalam mengikuti lomba dan evaluasi diri sendiri, 
      
      Ia pun mencoba mendaftar untuk berbagai beasiswa, seperti Paragon dan Posco, dan berhasil diterima. Selain itu, ia juga berpartisipasi dalam acara Mapres (Mahasiswa Berprestasi) dan akhirnya mendapat juara 3. 

      Prestasi:
        - Meraih berbagai prestasi termasuk juara 1 di Satria Data,
        - wawancara dengan berbagai startup, dan 
        - Menjadi pembicara dalam konferensi internasional 

      Cerita ini menunjukkan bahwa dengan dedikasi, ketekunan, dan konsistensi, seseorang dapat mencapai banyak prestasi dalam bidang ilmu komputer dan data science, bahkan jika awalnya adalah pemula.
      `,
      achievement: ""
    },
    {
      img:"/wof/Jojo.jpeg",
      name: "Oey Joshua Jodrian",
      desc: `
      Kak Oey Joshua Jodrian atau yang biasa dipanggil Kak Jojo merupakan seorang mahasiswa jurusan Ilmu Komputer Angkatan 2022. Kak Jojo merupakan mantan peserta KSN semasa SMA. Usai menjalani berbagai perlombaan, seorang kakak kelas memberikan referensi kepada Kak Jojo untuk mempelajari Website Development. Setelah itu, kisah Kak Jojo di Fasilkom UI baru saja dimulai. 
      
      Awal mula Kak Jojo masuk Fasilkom UI, Kak Jojo masih meneruskan karyanya di Website Development, dimulai dari membuat website angkatan, mengikuti acara sekolah BEM Fasilkom bidang WebDev, dan sebagainya. Namun, Kak Jojo mulai merasa kurang cocok di bidang WebDev karena lomba yang tersedia tergolong sedikit dan bidangnya sendiri memang dirasa kurang cocok dengan Kak Jojo.   
      
      Setelah adanya satu dan lain hal, kak Jojo diajak oleh seorang temannya untuk mengikuti lomba INC dan lolos ke tahapan ICPC Regional. Lomba ini ekivalen dengan OSP dan OSN bidang competitive programming. Umumnya, peserta dari perlombaan tersebut terdiri dari orang-orang yang telah mahir di bidang Competitive Programming. Meski masih pemula, Kak Jojo berhasil meraih rank 15 di ICPC Regional. Hal ini membuat Kak Jojo tertarik untuk lebih dalam mempelajari hal-hal yang berkaitan dengan Data Science. 
      
      Kak Jojo pun mulai mempelajari Data Science secara mandiri dan terkadang bertanya kepada temannya. Ketika Kak Jojo mendaftarkan diri di divisi Data Science RISTEK, Kak Jojo belum berhasil lolos. Namun, semangat dan kerja keras Kak Jojo tidak berhenti. Setelah melalui perjalanan yang cukup panjang dan lomba lainnya, Kak Jojo akhirnya berhasil mendapatkan Juara 3 di lomba JOINTS yang diselenggarakan oleh Universitas Gadjah Mada. 
      
      Setelah mengikuti lomba JOINTS, Kak Jojo ditawarkan untuk bergabung dengan tim kakak tingkat yang salah satu anggotanya baru saja ingin rehat dari dunia perlombaan. Dengan tim inilah Kak Jojo mengikuti lomba lain, seperti Satria Data dan Gemastik. Hasil yang diperoleh pun menakjubkan. Kak Jojo bersama timnya berhasil meraih Juara 1 Lomba Satria Data. Topik dari lomba tersebut memang sedang hangat diperbincangkan hingga menarik perhatian banyak pihak, mulai dari Hukumonline, Eclis, lembaga administrasi negara, hingga ke Kementerian Sekretariat Negara. Kak Jojo juga baru saja memenangkan perlombaan yang diselenggarakan oleh UNAIR, yaitu Juara 2 cabang Objective Quest dari Dataquest yang berada di bawah naungan Airnology 2.0.
      `,
      achievement: "Juara 1 dalam Big Data Challenge Satria Data"

    },
    {
      img:"/wof/Nyoos.jpg",
      name: "Nyoo Steven Christopher",
      desc: `
      Selama masa SMA, Nyoo Steven Christopher memenuhi waktunya terutama dalam olimpiade TOKI. Awalnya, ia fokus pada mata pelajaran matematika (MTK) daripada komputer. Namun, karena ia tidak berhasil dalam salah satu lomba matematika, ia diberikan kesempatan untuk mencoba pindah ke bidang komputer. Hasil prestasinya dalam olimpiade TOKI membawanya masuk ke Fakultas Ilmu Komputer Universitas Indonesia (FASILKOM UI). Meski tidak langsung tertarik dengan data science saat pertama kali masuk, minatnya baru muncul saat ia memasuki semester dua.

      Ketika ia mendaftar untuk RISTEK, ia berhasil lolos seleksi meskipun hanya belajar singkat untuk persiapan. Ini memberinya kesempatan untuk mendalami bidang Data Science. Di lingkungan RISTEK, ia bertemu dengan banyak individu yang memiliki minat serupa, dan bersama-sama mereka membentuk tim yang sekarang dikenal sebagai Three Neurons. Dengan dukungan rekan-rekannya dan ketekunan dalam belajar, ia terus mengikuti berbagai kompetisi di bidang data science dan programming.
      `,
      achievement: "Pemenang Kedua dalam Data Mining dan Pemenang Kedua dalam Competitive Programming di GEMASTIK XVI"
    },
  ]

  const [Tab, setTab] = useState<"Mahasiswa" | "Alumni">("Mahasiswa");
  const [data, setData] = useState<typeof mahasiswa | typeof alumni>(mahasiswa);
  const [idx, setIdx] = useState(-1);

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
      {idx != -1 ? (
        <>
          <div className='mt-10 bg-[url(/wof/bg-profile-desktop.png)] h-[115vh] w-full sm:bg-[url(/wof/bg-profile-desktop.png)] bg-center bg-contain bg-no-repeat flex flex-col items-center justify-center'>
            <Button
              onClick={() => setIdx(-1)}
              variant="secondary"
              className="self-start ml-36 mb-4"
            >
              Back
            </Button>
            <div className="max-h-[70vh] flex sm:flex-row flex-col backdrop-blur-lg sm:w-3/4 rounded-xl border-2 border-screaminGreen-3 px-5 py-10 gap-8">
              <Image src={data[idx].img} alt="" width={100} height={100} className="rounded-md w-1/3 object-cover aspect-square"/>
              <div className="flex flex-col w-full gap-8">
                <h2 className="text-3xl font-bold text-white-1 px-2">
                  {data[idx].name}
                </h2>
                <p className="text-white-1 overflow-auto text-justify px-2 whitespace-break-spaces">
                  {data[idx].desc}
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
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
                onClick={() => setIdx(index)}
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
        </>
      )}
    </section>
  )
}