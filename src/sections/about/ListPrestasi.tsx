import Image from 'next/image';

interface PrestasiProps {
  imgSrc: string;
  title: string;
  subtitle: string;
  description: string
}

const Prestasi = (props: PrestasiProps) => {
  return (
    <div className='border-gray-100 border-opacity-10 flex flex-col rounded-md border-2 backdrop-blur-3xl py-9 px-4 items-center w-[15rem] font-satoshi'>
      <Image src={props.imgSrc} alt="" width={150} height={150} />
      <h2 className="mt-4 text-xl text-white-1 whitespace-pre-wrap font-bold">{props.title}</h2>
      <h3 className="text-sm text-white-1 whitespace-pre-wrap">{props.subtitle}</h3>
      <p className='text-sm mt-4'>{props.description}</p>
    </div>
  )
}

export const ListPrestasi = () => {
  return (
    <section className='flex flex-wrap text-center justify-center gap-5 mt-36 mx-10 relative'>
      <Image src="/about/background-prestasi.svg" alt="" width={573} height={428} className='absolute left-0 top-0 max-w-full object-cover' />
      <Image src="/about/background-prestasi.svg" alt="" width={573} height={428} className='absolute right-0 bottom-0 max-w-full object-cover' />
      <h1 className="w-full font-semibold text-5xl text-white-1 mb-5">Prestasi</h1>
      <Prestasi imgSrc="/about/education.png" title={`#201-250 \n Computer Science & Information Systems`} subtitle="in the world" description="(QS WUR 2022)" />
      <Prestasi imgSrc="/about/flag.png" title={`#21 \n Competitive Programming`} subtitle="in the world" description="(ICPC 2019 World Finals)" />
      <Prestasi imgSrc="/about/world.png" title={`#1 \n Best University`} subtitle="in Indonesia" description="(QS WUR 2023)" />
      <Prestasi imgSrc="/about/trophy.png" title={`#1 \n Juara Umum`} subtitle="GEMASTIK" description="(GEMASTIK 2016-2020)" />
    </section>
  )
}