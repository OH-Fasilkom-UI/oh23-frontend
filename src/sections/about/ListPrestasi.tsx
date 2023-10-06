import Image from 'next/image';

interface PrestasiProps {
  imgSrc: string;
  title: string;
  description: string
}

const Prestasi = (props: PrestasiProps) => {
  return (
    <div className='border-gray-100 border-opacity-10 flex flex-col gap-4 rounded-md border-2 backdrop-blur py-9 px-10 w-[15rem]'>
      <Image src={props.imgSrc} alt="" width={150} height={150} />
      <h2 className="text-xl text-white-1">{props.title}</h2>
      <p className='text-sm'>{props.description}</p>
    </div>
  )
}

export const ListPrestasi = () => {
  return (
    <section className='flex flex-wrap text-center justify-center gap-5 mt-36 mx-10 relative'>
      <Image src="/background-prestasi.svg" alt="" width={573} height={428} className='absolute left-0 top-0 max-w-full object-cover' />
      <Image src="/background-prestasi.svg" alt="" width={573} height={428} className='absolute right-0 bottom-0 max-w-full object-cover' />
      <h1 className="w-full font-semibold text-5xl text-white-1 mb-5">Prestasi</h1>
      <Prestasi imgSrc="https://i.kym-cdn.com/photos/images/newsfeed/002/652/460/d70.jpg" title="Heading" description="bejir" />
      <Prestasi imgSrc="https://i.kym-cdn.com/photos/images/newsfeed/002/652/460/d70.jpg" title="Heading" description="bejir" />
      <Prestasi imgSrc="https://i.kym-cdn.com/photos/images/newsfeed/002/652/460/d70.jpg" title="Heading" description="bejir" />
      <Prestasi imgSrc="https://i.kym-cdn.com/photos/images/newsfeed/002/652/460/d70.jpg" title="Heading" description="bejir" />
    </section>
  )
}