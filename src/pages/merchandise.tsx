import Image from "next/image"

interface CardProps {
  name: string;
  price: string;
  preorder: string;
  src: string;
}

function Card(props: CardProps) {
  return (
    <div className="border-screaminGreen-4 border-2 border-solid p-8 rounded-lg text-left flex flex-col gap-4 items-start">
      <Image src={props.src} width={128} height={256} alt="" />
      <p className="text-white-1 px-3 text-sm py-1 rounded-full border-screaminGreen-2 border-2 border-solid">{props.preorder}</p>
      <p className="text-white-1">{props.name}</p>
      <p className="bg-shimmerGreen bg-clip-text text-transparent font-bold">{props.price}</p>
    </div>
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
        <Card name="Kaos OH Jaya Jaya" preorder="Preorder X hari" price="$10" src="logo.png" />
        <Card name="Kaos OH Jaya Jaya" preorder="Preorder X hari" price="$10" src="logo.png" />
        <Card name="Kaos OH Jaya Jaya" preorder="Preorder X hari" price="$10" src="logo.png" />
        <Card name="Kaos OH Jaya Jaya" preorder="Preorder X hari" price="$10" src="logo.png" />
        <Card name="Kaos OH Jaya Jaya" preorder="Preorder X hari" price="$10" src="logo.png" />
        <Card name="Kaos OH Jaya Jaya" preorder="Preorder X hari" price="$10" src="logo.png" />
        <Card name="Kaos OH Jaya Jaya" preorder="Preorder X hari" price="$10" src="logo.png" />
      </div>
      <div className="bg-[url(/merch/bg-bottom-merch.png)] bg-center bg-no-repeat min-h-screen" />
    </div>
  )
}