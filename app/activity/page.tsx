"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import StatusBar from "@/components/status-bar"
import Header from "@/components/header"
import WeekdayTabs from "@/components/weekday-tabs"
import { Button } from "@/components/ui/button"

export default function ActivityPage() {
  const router = useRouter()
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(true)

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1)
      }, 1000)
    } else if (interval) {
      clearInterval(interval)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isRunning])

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`
  }

  const handleStopClick = () => {
    setIsRunning(false)
    router.push("/activity-complete")
  }

  return (
    <div className="min-h-screen bg-[#4a5d80] p-4 flex flex-col">
      <StatusBar />
      <Header />

      <div className="mt-4">
        <div className="text-center text-white text-sm mb-2">LEVEL</div>
        <div className="progress-bar">
          <div className="progress-bar-inner" style={{ width: "25%" }}></div>
        </div>
      </div>

      <WeekdayTabs />

      <div className="text-center text-white text-4xl font-bold mt-4">ZEIT {formatTime(time)}</div>

      <button onClick={handleStopClick} className="big-button">
        <div className="big-button-inner">Stop</div>
      </button>

      <Button className="w-full bg-[#2d3a54] hover:bg-[#1e293b] text-white rounded-full py-3 mt-4">
        Aktivität läuft
      </Button>
    </div>
  )
}
