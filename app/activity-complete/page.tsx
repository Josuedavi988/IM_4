"use client"

import { useRouter } from "next/navigation"
import StatusBar from "@/components/status-bar"
import Header from "@/components/header"
import { Button } from "@/components/ui/button"

export default function ActivityCompletePage() {
  const router = useRouter()

  const handleFinishClick = () => {
    router.push("/calendar")
  }

  return (
    <div className="min-h-screen bg-[#4a5d80] p-4 flex flex-col">
      <StatusBar />
      <Header />

      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-48 h-48 bg-pink-200 flex items-center justify-center mb-8">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="w-32 h-32 text-gray-800"
          >
            <path d="M18 4a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4z" />
            <path d="M18 12a8 8 0 0 1-8 8A8 8 0 0 1 2 12a8 8 0 0 1 8-8" />
            <path d="M18 8v16" />
            <path d="M18 12l-4 4" />
            <path d="M18 12l4 4" />
          </svg>
        </div>

        <div className="text-center text-white text-2xl font-bold mb-2">STARK!</div>
        <div className="text-center text-white text-2xl font-bold mb-8">DEINE AKTIVITÄT WURDE GESPEICHERT</div>

        <Button
          onClick={handleFinishClick}
          className="w-48 bg-[#2d3a54] hover:bg-[#1e293b] text-white rounded-full py-3"
        >
          beenden
        </Button>
      </div>
    </div>
  )
}
