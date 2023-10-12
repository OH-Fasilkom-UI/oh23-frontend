import { Dropdown } from "@/components/elements/Dropdown";
import { contentData } from "@/components/elements/Dropdown/Content";
import Image from "next/image";

const FAQ = () => {
    return (
        <div className="flex bg-black-3 w-full text-center justify-center">
            <div className="flex flex-col items-center">
                <div className="text-center">
                    <h3 className="mx-5 font-satoshi mt-4 text-center text-white bg-clip-text font-extrabold text-3xl text-white-1 sm:text-5xl drop-shadow-sm shadow-white">
                        Frequently Asked Questions
                    </h3>
                </div>
                <div className="flex flex-col my-8 items-center px-5">
                    {contentData.map((item, index) => (
                        <div className="my-2 items-center sm:w-[50%]" key={index}>

                            <Dropdown header={item.header} body={item.body} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
