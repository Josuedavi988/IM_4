import Link from "next/link"
import { User } from "lucide-react"

interface HeaderProps {
  showProfile?: boolean
}

export default function Header({ showProfile = true }: HeaderProps) {
  return (
    <div className="flex justify-between items-center py-4">
      <h1 className="text-5xl font-bold text-white">FitUp</h1>
      {showProfile && (
        <Link
          href="/profile"
          className="w-10 h-10 rounded-full bg-transparent border border-gray-500 flex items-center justify-center text-gray-400"
        >
          <User className="w-6 h-6" />
        </Link>
      )}
    </div>
  )
}
