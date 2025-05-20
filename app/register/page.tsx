"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function RegisterPage() {
  const router = useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would validate and create account here
    router.push("/start")
  }

  return (
    <div className="min-h-screen bg-[#1e293b] flex flex-col p-6">
      <div className="flex-1 flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold text-white mb-16">FitUp</h1>

        <form onSubmit={handleRegister} className="w-full space-y-6">
          <div className="space-y-4">
            <Input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-transparent border-b border-t-0 border-x-0 rounded-none px-0 text-white placeholder:text-gray-400"
              required
            />

            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent border-b border-t-0 border-x-0 rounded-none px-0 text-white placeholder:text-gray-400"
              required
            />

            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent border-b border-t-0 border-x-0 rounded-none px-0 text-white placeholder:text-gray-400"
              required
            />
          </div>

          <Button type="submit" className="w-full bg-[#64748b] hover:bg-[#475569] text-white rounded-full py-3">
            Sign up
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-white">OR</p>
          <div className="flex justify-center gap-4 mt-2">
            <Button variant="ghost" className="text-white">
              Facebook
            </Button>
            <span className="text-white self-center">|</span>
            <Button variant="ghost" className="text-white">
              Google+
            </Button>
          </div>
        </div>

        <div className="mt-8">
          <Link href="/login" className="text-white hover:underline">
            Already have an account? Log in
          </Link>
        </div>
      </div>
    </div>
  )
}
