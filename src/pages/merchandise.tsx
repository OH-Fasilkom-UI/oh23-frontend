import { Button } from "@/components/elements/Button";
import Image from "next/image"

interface CardProps {
  name: string;
  price: string;
  preorder: string;
  src: string;
}

function Card(props: CardProps) {
  return (
    <a
      href={'https://docs.google.com/forms/d/e/1FAIpQLSfCvs1slkswhpjx26kiBpDF8I713zIpIDGXzi6SKuReyeQ7lQ/viewform'}
      target="__blank"
      rel="noreferrer" 
    >
      <div className="transition-all duration-200 hover:scale-105 active:scale-100 active:opacity-30 border-screaminGreen-4 border-2 border-solid p-8 rounded-lg text-left flex flex-col gap-4 items-start">
        <Image className="bg-zinc-500 rounded-xl bg-opacity-30 mx-auto object-contain" src={props.src} width={256} height={256} alt="" />
          <p className="text-white-1 px-3 text-sm py-1 rounded-full border-screaminGreen-2 border-2 border-solid">Preorder Now!</p>
        <p className="text-white-1">{props.name}</p>
        <p className="bg-shimmerGreen bg-clip-text text-transparent font-bold">{props.price}</p>
      </div>
    </a>
  )
}

export default function Merch() {
  return (
    <div className="font-satoshi font-semibold bg-black-1 mt-36 text-center">
      <div className="mb-8">
        <p className="text-white-1 inline-block px-3 py-1 mx-auto rounded-full border-screaminGreen-2 border-2 border-solid">Merchandise</p>
      </div>
      <h1 className="px-5 text-2xl sm:text-3xl lg:text-5xl mb-2 text-white-1 bg-clip-text">Gear Up for a New Chapter with</h1>
      <h1 className="px-5 text-3xl sm:text-5xl mb-10 bg-shimmerGreen bg-clip-text text-transparent">Exclusive Preorders!</h1>
      <div className="bg-[url(/merch/bg-merch-mobile.png)] sm:bg-[url(/merch/bg-merch-desktop.png)] bg-cover bg-center min-h-screen" />
      <div className="flex justify-center px-10 gap-10 flex-wrap">
        <Card name="T-SHIRT CSUI" preorder="PREORDER NOW!" price="Rp90.000" src="/merch/t-shirt1.png" />
        <Card name="T-SHIRT OH FASILKOM" preorder="PREORDER NOW!" price="Rp85.000" src="/merch/t-shirt2.png" />
        <Card name="CREWNECK" preorder="PREORDER NOW!" price="Rp160.000" src="/merch/crewneck.png" />
        <Card name="TOTEBAG" preorder="PREORDER NOW!" price="Rp45.000" src="/merch/tote.png" />
        <Card name="LANYARD" preorder="PREORDER NOW!" price="Rp20.000" src="/merch/lanyard.png" />
        <Card name="STICKER" preorder="PREORDER NOW!" price="Rp7.000" src="/merch/stickers.png" />
        <Card name="KEYCHAIN" preorder="PREORDER NOW!" price="Rp15.000" src="/merch/keychains.png" />
      </div>
      <div className="bg-[url(/merch/bg-bottom-merch.png)] bg-center bg-no-repeat min-h-screen" />
    </div>
  )
}