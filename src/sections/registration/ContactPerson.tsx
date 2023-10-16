import { Button } from "@/components/elements/Button";
import { BsWhatsapp } from "react-icons/bs"

const ContactPerson = () => {
  return (
    <section className="bg-[url(/registration/bg-contact.png)] bg-cover bg-right mt-10 py-10 flex flex-col items-center">
      <h3 className="mb-10 mx-5 font-satoshi mt-4 text-center text-white bg-clip-text font-extrabold text-3xl text-white-1 sm:text-5xl drop-shadow-sm shadow-white">
        Contact Person
      </h3>
      <div className="z-10 flex py-16 flex-col bg-black-3 sm:w-2/3 px-5 w-11/12 rounded-3xl border-2 border-green-300 text-center justify-center items-center backdrop-blur-xl">
        <p className="text-xl text-white-1 font-bold">
          Untuk Informasi Pendaftaran Lebih Lanjut, <br/>
          Silakan Hubungi Kontak Yang Tertera Berikut
        </p>
        <div className="flex md:flex-row flex-col mt-10 items-center px-5 gap-6">
          <a
            href={'https://wa.me/6285161058384'}
            target="__blank"
            rel="noreferrer" 
            className="w-full"
          >
            <Button variant="primary" className="w-full">
              <div>
                <BsWhatsapp />
              </div>
              <p>
                Open House Fasilkom UI
              </p>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactPerson;
