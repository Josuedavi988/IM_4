"use client"

import type React from "react"

import { useRouter } from "next/navigation"
import StatusBar from "@/components/status-bar"
import Header from "@/components/header"
import WeekdayTabs from "@/components/weekday-tabs"
import { Button } from "@/components/ui/button"

interface Activity {
  id: string
  title: string
  details: string
  duration: string
  score: number
  icon: React.ReactNode
}

export default function CalendarPage() {
  const router = useRouter()

  const handleBackClick = () => {
    router.push("/start")
  }

  const activities: Activity[] = [
    {
      id: "1",
      title: "Radfahrt am Morgen",
      details: "45 Kilometer / 458 Höhenmeter",
      duration: "3h 37min",
      score: 45,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-white">
          <circle cx="5.5" cy="17.5" r="3.5" />
          <circle cx="18.5" cy="17.5" r="3.5" />
          <path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
          <path d="M12 17.5V14l-3-5 5-1 3 3.5" />
        </svg>
      ),
    },
    {
      id: "2",
      title: "Krafttraining am Nachmittag",
      details: "",
      duration: "34 min",
      score: 8,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-white">
          <path d="M6.5 6.5h11v11h-11z" />
          <path d="M20.5 9.5h2v5h-2z" />
          <path d="M1.5 9.5h2v5h-2z" />
          <path d="M3.5 12h17" />
        </svg>
      ),
    },
  ]

  return (
    <div className="min-h-screen bg-[#4a5d80] p-4 flex flex-col">
      <StatusBar />
      <Header />

      <WeekdayTabs />

      <div className="flex-1 flex flex-col gap-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex gap-4">
            <div className="w-16 h-16 bg-[#2d3a54] flex items-center justify-center">{activity.icon}</div>
            <div className="flex-1 text-white">
              <h3 className="font-bold">{activity.title}</h3>
              {activity.details && <p className="text-sm">{activity.details}</p>}
              <p className="text-sm">{activity.duration}</p>
              <p className="text-sm">Score: {activity.score}</p>
            </div>
          </div>
        ))}
      </div>

      <Button
        onClick={handleBackClick}
        className="w-full bg-[#2d3a54] hover:bg-[#1e293b] text-white rounded-full py-3 mt-4"
      >
        zurück
      </Button>
    </div>
  )
}
