"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function DeleteProfilePage() {
  const router = useRouter()

  const handleDeleteConfirm = () => {
    // In a real app, you would delete the profile here
    router.push("/login")
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

      <div className="flex-1 bg-[#1e293b] p-4 flex flex-col items-center justify-center">
        <div className="text-center text-white text-2xl font-bold mb-8">WILLST DU DEIN PROFIL WIRKLICH LÖSCHEN?</div>

        <Button
          onClick={handleDeleteConfirm}
          className="w-48 bg-[#64748b] hover:bg-[#475569] text-white rounded-full py-3"
        >
          Profil löschen
        </Button>
      </div>
    </div>
  )
}
