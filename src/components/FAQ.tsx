import { Dropdown } from "./elements/Dropdown";
import { contentData } from "./elements/Dropdown/Content";
import Image from "next/image";

const FAQ = () => {
    return (
        <div className="flex bg-black-3 w-full text-center justify-center min-h-screen">
            <div className="flex flex-col items-center">
                <div className="text-center">
                    <h3 className="font-satoshi mt-4 text-center text-white bg-clip-text font-extrabold text-5xl drop-shadow-sm shadow-white">
                        Frequently Asked Questions
                    </h3>
                </div>
                <div className="flex flex-col my-8 items-center ">
                    {contentData.map((item, index) => (
                        <div className="my-2 items-center w-[50%]" key={index}>

                            <Dropdown header={item.header} body={item.body} />
                        </div>
                    ))}

                </div>
                <Image
                    src="/footer-bg.png"
                    width={100}
                    height={100}
                    alt="Logo"
                    layout="responsive"
                />
            </div>
        </div>
    );
};

export default FAQ;
