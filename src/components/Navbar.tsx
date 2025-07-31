'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { DynamicIcon } from 'lucide-react/dynamic'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
  ]

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 bg-gray-900/80 py-3 shadow-xl backdrop-blur-md transition-all duration-300 ease-in-out`}
      aria-label="Primary"
      role="navigation"
    >
      <div className="container mx-auto flex items-center justify-end px-4 md:px-6">
        {/* Desktop Menu */}
        <div className="hidden items-center space-x-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 transition-colors hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <a
            href="https://www.linkedin.com/in/conorsheppard"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 transition-colors hover:text-white"
            aria-label="LinkedIn Profile"
          >
            <DynamicIcon name="linkedin" size={20} />
          </a>
          <a
            href="https://github.com/conorsheppard"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 transition-colors hover:text-white"
            aria-label="GitHub Profile"
          >
            <DynamicIcon name="github" size={20} />
          </a>
          <a
            href="https://x.com/csheppdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 transition-colors hover:text-white"
            aria-label="X (Twitter) Profile"
          >
            <Image
              src="/assets/x-logo.svg"
              alt="X (Twitter)"
              width={20}
              height={20}
              className="transition-colors duration-300"
            />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full right-0 left-0 bg-gray-900/95 pb-4 shadow-xl backdrop-blur-md md:hidden">
          <div className="container mx-auto flex flex-col space-y-3 px-4 pt-3 md:px-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-md px-3 py-2 text-center text-base font-medium text-gray-300 transition-colors hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex justify-center space-x-4 pt-2">
              <a
                href="https://www.linkedin.com/in/conorsheppard"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 transition-colors hover:text-white"
                aria-label="LinkedIn Profile"
              >
                <DynamicIcon name="linkedin" size={22} />
              </a>
              <a
                href="https://github.com/conorsheppard"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 transition-colors hover:text-white"
                aria-label="GitHub Profile"
              >
                <DynamicIcon name="github" size={22} />
              </a>
              <a
                href="https://x.com/csheppdev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 transition-colors hover:text-white"
                aria-label="X (Twitter) Profile"
              >
                <Image
                  src="/assets/x-logo.svg"
                  alt="X (Twitter)"
                  width={22}
                  height={22}
                  className="transition-colors duration-300"
                />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
