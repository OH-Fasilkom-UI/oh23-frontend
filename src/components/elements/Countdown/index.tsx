import { CountdownProps } from "./interface";
import React, { useState, useEffect } from 'react'

export const Countdown: React.FC<CountdownProps> = ({ date }) => {
  const [remainingTime, setRemainingTime] = useState(0);
  const seconds = remainingTime % 60
  const minutes = Math.floor(remainingTime / 60) % 60
  const hours = Math.floor(remainingTime / 60 / 60) % 24
  const days = Math.floor(remainingTime / 60 / 60 / 24)

  useEffect(() => {
    setRemainingTime(Math.max(0, Math.floor((date.getTime() - new Date().getTime()) / 1000)))
  }, [date])

  useEffect(() => {
    const interval = setInterval(() => {
      if (document.hasFocus()) {
        setRemainingTime((prevRemainingTime) => Math.max(0, prevRemainingTime - 1));
      } else {
        setRemainingTime(Math.max(0, Math.floor((date.getTime() - new Date().getTime()) / 1000)));
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [date])

  return (
    <>
      <div className="font-satoshi font-bold flex gap-5 md:max-w-lg bg-countdown px-8 md:px-24 mx-auto w-full py-6 md:py-10 rounded-3xl items-center justify-center text-4xl md:text-7xl bg-black-2">
        <div className="flex flex-col justify-center items-center">
          <div className="bg-shimmerGreen bg-clip-text text-transparent">
            {days > 0 ? (String(days).padStart(2, "0")) : (String(hours).padStart(2, "0"))}
          </div>
          <div className="text-lg">
            {days > 0 ? "Hari" : "Jam"}
          </div>
        </div>
        <div className="text-[#10201D]">
          :
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="bg-shimmerGreen bg-clip-text text-transparent">
            {days > 0 ? (String(hours).padStart(2, "0")) : (String(minutes).padStart(2, "0"))}
          </div>
          <div className="text-lg">
            {days > 0 ? "Jam" : "Menit"}
          </div>
        </div>
        <div className="text-[#10201D]">
          :
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="bg-shimmerGreen bg-clip-text text-transparent">
            {days > 0 ? (String(minutes).padStart(2, "0")) : (String(seconds).padStart(2, "0"))}
          </div>
          <div className="text-lg">
            {days > 0 ? "Menit" : "Detik"}
          </div>
        </div>
      </div>
    </>
  )
}