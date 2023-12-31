import Image from "next/image";
import { CardProps } from "./interface";
import React from "react";

export const Card: React.FC<CardProps> = ({ image, title, content }) => {
  return (
    <div
      className="w-[246px] md:w-[410px] h-auto p-6 md:p-10 flex flex-col gap-y-5 items-center rounded-xl bg-cards backdrop-blur"
      style={{ border: "1px solid rgba(165, 250, 209, 0.2)" }}
    >
      <div>
        <Image
          src={image}
          alt={title}
          width={400}
          height={300}
          className="w-[200px] h-[120px] md:w-[333px] md:h-[200px] object-cover"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex flex-col gap-y-5 items-center">
        <div>
          <h1 className="font-satoshi text-white-1 text-center text-2xl md:text-3xl font-semibold">
            {title}
          </h1>
        </div>
        <div>
          <h2 className="font-satoshi text-white-2 text-center text-xs md:text-sm">
            {content}
          </h2>
        </div>
      </div>
    </div>
  );
};
