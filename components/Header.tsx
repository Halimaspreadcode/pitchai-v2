import { UserButton } from "@clerk/nextjs"
import { Sparkles } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Sparkles className="h-6 w-6 text-orange-500" />
          <span className="text-xl font-bold">PitchDeck.ai</span>
        </Link>
        
        <div className="flex items-center space-x-4">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </header>
  )
}