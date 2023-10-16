import { Dropdown } from "@/components/elements/Dropdown";

const contentData: {
    header: string;
    body: string;
}[] = [
    {
      header: "Registrasinya dimana ya?",
      body: `Untuk registrasi Open House Fasilkom 2023, bisa langsung di cek website kita ya! (oh.cs.ui.ac.id)`,
    },
    {
      header: "Ada biaya pendaftaran gak?",
      body: `Open House Fasilkom UI 2023 gratis dan tidak dipungut biaya apapun.`,
    },
    {
        header: "Kalau udah daftar, dapet konfirmasinya dimana?",
        body: `Kita bakal kirim konfirmasi ke email AInergic di tanggal 3 November 2023. Jadi, tanggal segitu jangan lupa untuk 
        cek email yaa.`,
    },
    {
        header: "Batas waktu pendaftaran sampai kapan?",
        body: `Untuk batas pendaftaran cuma sampai tanggal 21 Oktober 2023, Yuk langsung aja daftar!`,
    },
    {
        header: "Semigap/Gapyear boleh ikut?",
        body: `Selama rentang umur 16-19 boleh ikut yaa`,
    },
    {
        header: "Kalau ada kendala di pendaftaran, hubunginnya kemana?",
        body: `Kalau ada kendala, bisa hubungin Instagram @ohfasilkom atau di Whatsapp (+62 851 6105 8384)`,
    },
  ];

const FAQ = () => {
    return (
      <section className="bg-[url(/registration/bg-faq.png)] bg-cover bg-top min-h-[120vh] mt-10 py-10 flex flex-col items-center">
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
