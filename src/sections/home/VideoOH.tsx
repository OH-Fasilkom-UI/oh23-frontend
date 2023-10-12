import Image from 'next/image'
import React from 'react'

const VideoOH = () => {
  return (
    <div className="z-10 text-center flex flex-col items-center overflow-hidden mx-10">
      <div className="px-5 z-10 text-center flex flex-col items-center justify-center gap-7 mx-5 sm:px-16 rounded-md">
        <h2 className="font-satoshi text-white-1 font-extrabold text-4xl sm:text-5xl drop-shadow-sm shadow-white text-center mb-5">
          Video OH
        </h2>
      </div>
      <div className="relative w-full flex justify-center items-center mt-10 sm:mt-16 overflow-hidden">
          <div className="relative md:max-w-xl w-full aspect-video p-5 overflow-x-hidden">
              <Image src="/home/video-holder.webp" alt="" fill className="z-10 absolute top-0 left-0 origin-center aspect-[4/3] pointer-events-none" />
              <iframe src="https://www.youtube.com/embed/VJ4YQ0_zriI?si=Gt4O8BPalGNklpBL" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" className="w-full h-full" />
          </div>
      </div>
    </div>
  )
}

export default VideoOH