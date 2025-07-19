'use client'
import { Mail } from 'lucide-react'
import { DynamicIcon } from 'lucide-react/dynamic'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-700/50 bg-gray-900/90 py-12 backdrop-blur-sm">
      <div className="container mx-auto px-4 text-center text-gray-400 md:px-6">
        <div className="mb-6 flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/conorsheppard"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors duration-300 hover:text-white"
            aria-label="LinkedIn Profile"
          >
            <DynamicIcon name="linkedin" size={24} />
          </a>
          <a
            href="https://github.com/conorsheppard"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors duration-300 hover:text-white"
            aria-label="GitHub Profile"
          >
            <DynamicIcon name="github" size={24} />
          </a>
          <a
            href="mailto:conorsheppardwork@gmail.com"
            className="text-gray-400 transition-colors duration-300 hover:text-white"
            aria-label="Email Conor Sheppard"
          >
            <Mail size={24} />
          </a>
        </div>
        <p className="text-sm">&copy; {currentYear} Conor Sheppard. All rights reserved.</p>
        <p className="mt-2 text-xs">Built with Next.js, Tailwind CSS, and Shadcn/UI.</p>
      </div>
    </footer>
  )
}
