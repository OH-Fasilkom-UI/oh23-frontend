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
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      if (document.hasFocus()) {
        setRemainingTime((prevRemainingTime) => Math.max(0, prevRemainingTime-1));
      } else {
        setRemainingTime(Math.max(0, Math.floor((date.getTime() - new Date().getTime()) / 1000)));
      }
    }, 1000)
  
    return () => clearInterval(interval)
  }, [])
  
  return (
    <>
    <div className="font-satoshi font-bold flex gap-10 bg-countdown px-28 mx-auto py-16 rounded-3xl items-center justify-center text-7xl">
      <div className="flex flex-col justify-center items-center">
        <div className="bg-shimmerGreen bg-clip-text text-transparent">
          {days>0 ? (String(days).padStart(2, "0")) : (String(hours).padStart(2, "0"))}
        </div>
        <div className="text-2xl">
        {days>0 ? "Hari" : "Jam"}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="bg-shimmerGreen bg-clip-text text-transparent">
          {days>0 ? (String(hours).padStart(2, "0")) : (String(minutes).padStart(2, "0"))}
        </div>
        <div className="text-2xl">
        {days>0 ? "Jam" : "Menit"}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="bg-shimmerGreen bg-clip-text text-transparent">
          {days>0 ? (String(minutes).padStart(2, "0")) : (String(seconds).padStart(2, "0"))}
        </div>
        <div className="text-2xl">
          {days>0 ? "Menit" : "Detik"}
        </div>
      </div>
    </div>
    </>
  )
}