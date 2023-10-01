import { CardProps } from "./interface";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export const Card: React.FC<CardProps> = ({ image, title, content }) => {
  return (
    <div
      className="w-[315px] md:w-[410px] h-auto p-8 md:p-10 flex flex-col gap-y-5 items-center rounded-xl bg-cards backdrop-blur"
      style={{ border: "1px solid rgba(165, 250, 209, 0.2)" }}
    >
      <div>
        <img
          src={image}
          alt={title}
          className="w-[250px] h-[150px] md:w-[333px] md:h-[200px] object-cover"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex flex-col gap-y-5 items-center">
        <div>
          <h1 className="font-satoshi text-white-1 text-center text-3xl font-semibold">
            {title}
          </h1>
        </div>
        <div>
          <h2 className="font-satoshi text-white-2 text-center text-sm">
            {content}
          </h2>
        </div>
      </div>
    </div>
  );
};
