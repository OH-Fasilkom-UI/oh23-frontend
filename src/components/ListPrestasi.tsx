const Prestasi = () => {
  return (
    <div className='border-gray-100 rounded-md border-2 border-opacity-10 backdrop-blur py-9 px-10 w-[15rem]'>
      <h2 className="text-xl text-white-1 mb-4">Heading</h2>
      <p className='text-sm'>Lorem ipsum dolor sit amet consectetur. Diam</p>
    </div>
  )
}

export const ListPrestasi = () => {
  return (
    <section className='flex flex-wrap text-center justify-center gap-5 mx-10'>
      <h1 className="w-full font-semibold text-5xl text-white-1 mb-5">Prestasi</h1>
      <Prestasi />
      <Prestasi />
      <Prestasi />
      <Prestasi />
    </section>
  )
}