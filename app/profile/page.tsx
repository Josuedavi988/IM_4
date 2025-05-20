"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function ProfilePage() {
  const router = useRouter()

  const handleDeleteClick = () => {
    router.push("/profile/delete")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-[#4a5d80] p-4 pb-8">
        <div className="pt-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">FitUp</h1>
          <h2 className="text-3xl font-bold text-white">Max Mustermann</h2>
          <p className="text-white">max.mustermann@mail.ch</p>
        </div>
      </div>

      <div className="flex-1 bg-[#1e293b] p-4">
        <div className="mt-4">
          <Button
            variant="ghost"
            className="w-full flex items-center justify-between p-4 bg-[#2d3a54] text-white rounded-md"
          >
            <div className="flex items-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 mr-3">
                <path d="M13 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M18.5 21.5v-4l-5.4-5.4" />
                <path d="M13.5 6.5 7 14l.5 4 4 1.5 8-9-4.5-4" />
              </svg>
              Trainings
            </div>
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        <div className="mt-auto">
          <Button
            onClick={handleDeleteClick}
            className="w-full bg-[#64748b] hover:bg-[#475569] text-white rounded-full py-3 mt-4"
          >
            Profil löschen
          </Button>
        </div>
      </div>
    </div>
  )
}
