"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function BackButton() {
  const pathname = usePathname()

  // Do not show the back button on the home page
  if (pathname === "/") {
    return null
  }

  return (
    <div className="p-4">
      <Link
        href="/"
        className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
        Back to Main Page
      </Link>
    </div>
  )
}