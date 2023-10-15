import { Dropdown } from "@/components/elements/Dropdown";

const contentData: {
    header: string;
    body: string;
}[] = [
    {
      header: "Kak, kalau kuliah di Fasilkom pelajaran yang harus dikuasai apa aja ya?",
      body: `Fasilkom sangat erat kaitannya dengan pelajaran Matematika, karena ilmu komputer 
      sendiri dasarnya adalah matematika logika. Selain itu, pelajaran bahasa Inggris juga 
      diperlukan karena mayoritas sumber-sumber materi mata kuliah di Fasilkom serta referensi-referensi 
      lainnya memakai bahasa Inggris. Namun untuk pengantar kelas 
      sebagian besar menggunakan Bahasa Indonesia kecuali untuk Kelas Internasional.`,
    },
    {
      header: "Masuk Fasilkom harus udah bisa ngoding ya kak?",
      body: `Untuk masuk Fasilkom UI Tidak perlu bisa ngoding ya, karena nanti ngoding akan kamu 
      pelajari di Fasilkom UI dari dasarnya. Yang penting kamu punya minat dalam bidang pemrograman 
      dan mau terus mencoba.`,
    },
    {
        header: "Prospek Kerja Lulusan Fasilkom UI apa aja sih kak?",
        body: `Sebagian besar lulusan Fasilkom UI bekerja di dalam maupun luar negeri di berbagai 
        perusahaan nasional dan multinasional yang bergerak di bidang konsultan TI, asuransi, 
        perbankan, telekomunikasi, industri perangkat lunak dan jasa, dan sebagainya.`,
    },
    {
        header: "Emang katanya lulusan Fasilkom gajinya besar ya kak?",
        body: `Lulusan Fasilkom biasanya bekerja dalam bidang IT dan bisnis. Dan sesuai data, 
        pekerja-pekerja pada bidang tersebut memiliki rata-rata gaji yang relatif tinggi.`,
    },
    {
        header: "Emangnya di Fasilkom UI bakalan belajar terus ya kak?",
        body: `Pastinya enggak belajar terus dong. Selain akademik, Fasilkom UI juga menyediakan 
        banyak sarana kegiatan mahasiswa untuk melatih soft skill dan mengembangkan minat dan 
        bakat, seperti organisasi, kepanitiaan, dan Unit Kegiatan Fakultas (UKF), yang pastinya 
        seru-seru bangett!`,
    },
  ];

const FAQ = () => {
    return (
      <section className="bg-[url(/registration/bg-faq.png)] bg-contain bg-bottom bg-no-repeat min-h-screen mt-10 py-10 flex flex-col items-center">
        <div className="z-10 flex bg-black-3 sm:w-2/3 w-11/12 rounded-xl border-2 border-green-300 text-center justify-center backdrop-blur-xl py-5">
            <div className="flex flex-col items-center">
                <div className="text-center">
                    <h3 className="mx-5 font-satoshi mt-4 text-center text-white bg-clip-text font-extrabold text-3xl text-white-1 sm:text-5xl drop-shadow-sm shadow-white">
                        Frequently Asked Questions
                    </h3>
                </div>
                <div className="flex flex-col my-8 items-center px-5">
                    {contentData.map((item, index) => (
                        <div className="my-2 items-center sm:w-4/5" key={index}>
                            <Dropdown header={item.header} body={item.body} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>
    );
};

export default FAQ;
