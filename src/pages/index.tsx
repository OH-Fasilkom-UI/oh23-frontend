import Image from "next/image";
import { Footer } from "@mantine/core";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="h-[40rem] bg-black"></main>
      <Footer className="bg-black flex flex-col md:flex-row md:space-x-10 space-y-16 md:space-y-0 px-2 py-14 border-none">
        <div className="grow flex">
          <div className="pr-4 basis-1/2">
            <div className="grid place-content-center h-full p-2">
              <Image src="/logo.png" width={240} height={240} alt="Logo" />
            </div>
          </div>
          <div className="pl-4 basis-1/2">
            <div className="flex flex-col space-y-10 h-full justify-center text-white font-semibold">
              <Link
                href={"/"}
                className="hover:text-aqua-2 transition-colors duration-300 ease-out"
              >
                Home
              </Link>
              <Link
                href={"/about"}
                className="hover:text-aqua-2 transition-colors duration-300 ease-out"
              >
                About Fasilkom
              </Link>
              <Link
                href={"/registration"}
                className="hover:text-aqua-2 transition-colors duration-300 ease-out"
              >
                Registration Page
              </Link>
              <Link
                href={"/walloffame"}
                className="hover:text-aqua-2 transition-colors duration-300 ease-out"
              >
                Wall of Fame
              </Link>
              <Link
                href={"/merchandise"}
                className="hover:text-aqua-2 transition-colors duration-300 ease-out"
              >
                Merchandise
              </Link>
            </div>
          </div>
        </div>
        <div className="grow flex justify-center">
          <div className="max-w-[200px]">
            <div>
              <div className="flex justify-center md:justify-start mb-6">
                <h4 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-screaminGreen-2 to-grass-2">
                  Find Us on Social Media!
                </h4>
              </div>
              <div className="flex justify-between space-x-5">
                <div>
                  <Link
                    href={"https://www.instagram.com/ohfasilkom"}
                    className="hover:text-aqua-2 transition-colors duration-300 ease-out"
                  >
                    <Image
                      src="/icon/solid/instagram.png"
                      width={24}
                      height={24}
                      alt="Instagram"
                    />
                  </Link>
                </div>
                <div>
                  <Link
                    href={"https://twitter.com/OHFasilkom"}
                    className="hover:text-aqua-2 transition-colors duration-300 ease-out"
                  >
                    <Image
                      src="/icon/solid/twitter.png"
                      width={24}
                      height={24}
                      alt="Twitter"
                    />
                  </Link>
                </div>
                <div>
                  <Link
                    href={"https://www.youtube.com/@FasilkomUIOfficial"}
                    className="hover:text-aqua-2 transition-colors duration-300 ease-out"
                  >
                    <Image
                      src="/icon/solid/youtube.png"
                      width={24}
                      height={24}
                      alt="Youtube"
                    />
                  </Link>
                </div>
                <div>
                  <Link
                    href={"https://www.tiktok.com/@openhousefasilkomui"}
                    className="hover:text-aqua-2 transition-colors duration-300 ease-out"
                  >
                    <Image
                      src="/icon/solid/tiktok.png"
                      width={24}
                      height={24}
                      alt="Tiktok"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <div className="flex justify-center md:justify-start mb-5">
                <h4 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-screaminGreen-2 to-grass-2">
                  Contact us
                </h4>
              </div>
              <div className="flex justify-between space-x-5">
                <Link
                  href={"/"}
                  className="hover:text-aqua-2 transition-colors duration-300 ease-out flex text-white"
                >
                  openhouse@cs.ui.ac.id
                  <span className="ml-2 grid place-content-center pt-1">
                    <Image
                      src="/icon/solid/clipboard.png"
                      width={15}
                      height={15}
                      alt="Tiktok"
                    ></Image>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
}
