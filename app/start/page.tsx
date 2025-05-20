"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import StatusBar from "@/components/status-bar"
import Header from "@/components/header"
import WeekdayTabs from "@/components/weekday-tabs"
import { Button } from "@/components/ui/button"

export default function StartPage() {
  const router = useRouter()
  const [time, setTime] = useState("00:00")
  const [progress, setProgress] = useState(25) // Progress percentage

  const handleStartClick = () => {
    router.push("/activity")
  }

  const handleChooseSport = () => {
    router.push("/sports")
  }

  return (
    <div className="min-h-screen bg-[#4a5d80] p-4 flex flex-col">
      <StatusBar />
      <Header />

      <div className="mt-4">
        <div className="text-center text-white text-sm mb-2">LEVEL</div>
        <div className="progress-bar">
          <div className="progress-bar-inner" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      <WeekdayTabs />

      <div className="text-center text-white text-4xl font-bold mt-4">ZEIT {time}</div>

      <button onClick={handleStartClick} className="big-button">
        <div className="big-button-inner">START</div>
      </button>

      <Button
        onClick={handleChooseSport}
        className="w-full bg-[#2d3a54] hover:bg-[#1e293b] text-white rounded-full py-3 mt-4"
      >
        Sportart wählen
      </Button>
    </div>
  )
}
