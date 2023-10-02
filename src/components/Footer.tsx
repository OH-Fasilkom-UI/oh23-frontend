import Image from "next/image";
import { Footer as BaseFooter } from "@mantine/core";
import Link from "next/link";

const Footer = () => {
    return (
        <section>
            <Image src="/background-footer.svg" alt="" width={1440} height={700}/>
            <BaseFooter height={400} className="bg-black-1 flex flex-col md:flex-row md:space-x-10 space-y-16 md:space-y-0 px-2 py-14 border-none" >
                <div className="grow flex">
                    <div className="pr-4 basis-1/2">
                        <div className="grid place-content-center h-full p-2">
                            <Image src="/fancy-logo.png" width={240} height={240} alt="Logo" />
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
                                <h4 className="font-bold text-transparent bg-clip-text bg-shimmerGreen">
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
                                <h4 className="font-bold text-transparent bg-clip-text bg-shimmerGreen">
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
                        {/* <div className="mt-8">
                            <div className="flex justify-center md:justify-start mb-5">
                                <h4 className="font-bold text-transparent bg-clip-text bg-shimmerGreen">
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
                        </div> */}
                    </div>
                </div>
                <div className="grow flex">
                    <div className="flex flex-col gap-5">
                        <div>
                            <h4 className="font-bold text-transparent bg-clip-text bg-shimmerGreen">
                                Supported by
                            </h4>
                            <div className="relative w-[140px] h-[60px] mt-1">
                                <Image src="/fasilkom.png" alt="" fill className="object-cover" />
                            </div>
                        </div>
                        <p className="font-bold text-transparent bg-clip-text bg-shimmerGreen text-2xl">
                            #BreakTheLimIT
                        </p>
                    </div>
                </div>
            </BaseFooter>
        </section >
    )
}

export default Footer