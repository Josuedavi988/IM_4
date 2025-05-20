"use client"

import type React from "react"

import { useRouter } from "next/navigation"
import StatusBar from "@/components/status-bar"
import Header from "@/components/header"
import { Button } from "@/components/ui/button"

interface SportOption {
  id: string
  name: string
  icon: React.ReactNode
}

export default function SportsPage() {
  const router = useRouter()

  const handleBackClick = () => {
    router.push("/start")
  }

  const handleSportSelect = (sportId: string) => {
    router.push("/activity")
  }

  const sportOptions: SportOption[] = [
    {
      id: "running",
      name: "Laufen",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
          <path d="M13 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
          <path d="M18.5 21.5v-4l-5.4-5.4" />
          <path d="M13.5 6.5 7 14l.5 4 4 1.5 8-9-4.5-4" />
        </svg>
      ),
    },
    {
      id: "cycling",
      name: "Radfahren",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
          <circle cx="5.5" cy="17.5" r="3.5" />
          <circle cx="18.5" cy="17.5" r="3.5" />
          <path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
          <path d="M12 17.5V14l-3-5 5-1 3 3.5" />
        </svg>
      ),
    },
    {
      id: "strength",
      name: "Krafttraining",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
          <path d="M6.5 6.5h11v11h-11z" />
          <path d="M20.5 9.5h2v5h-2z" />
          <path d="M1.5 9.5h2v5h-2z" />
          <path d="M3.5 12h17" />
        </svg>
      ),
    },
    {
      id: "yoga",
      name: "Yoga",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
          <path d="M12 3a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
          <path d="M12 22v-8l-5-4 5-10 5 10-5 4v8z" />
        </svg>
      ),
    },
    {
      id: "treadmill",
      name: "Laufband",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
          <path d="M4 12h16" />
          <path d="M4 12l4-8" />
          <path d="M20 12l-4-8" />
          <path d="M4 12l4 8" />
          <path d="M20 12l-4 8" />
        </svg>
      ),
    },
    {
      id: "rowing",
      name: "Rudern",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
          <path d="M10 15l3-8 3 8" />
          <path d="M2 12h20" />
          <path d="M5 8v8" />
          <path d="M19 8v8" />
        </svg>
      ),
    },
  ]

  return (
    <div className="min-h-screen bg-[#4a5d80] p-4 flex flex-col">
      <StatusBar />
      <Header />

      <div className="flex-1 flex flex-col">
        <div className="grid grid-cols-3 gap-4 mt-8">
          {sportOptions.map((sport) => (
            <button
              key={sport.id}
              onClick={() => handleSportSelect(sport.id)}
              className={`
                bg-[#2d3a54] p-4 rounded-md flex flex-col items-center justify-center
                ${sport.id === "rowing" ? "border-2 border-blue-400" : ""}
              `}
            >
              <div className="text-white mb-2">{sport.icon}</div>
              <div className="text-white text-sm">{sport.name}</div>
            </button>
          ))}
        </div>

        <div className="text-center text-white text-2xl font-bold mt-8 mb-8">WÄHLE DEINE SPORTART!</div>

        <Button
          onClick={handleBackClick}
          className="w-full bg-[#2d3a54] hover:bg-[#1e293b] text-white rounded-full py-3 mt-auto"
        >
          zurück
        </Button>
      </div>
    </div>
  )
}
