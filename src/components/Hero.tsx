'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowDown, CloudDownload, Mail, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import { useIsMobile } from '@/hooks/use-mobile'

export default function Hero() {
  const isMobile = useIsMobile()

  return (
    <section
      id="hero"
      className={`relative flex items-center justify-center overflow-hidden bg-gray-900 text-white ${isMobile ? 'min-h-screen py-20' : 'min-h-screen py-20 md:py-28'}`}
    >
      <div className="relative z-10 container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <Image
            src="/profile.jpg"
            alt="Conor Sheppard, Consultant Software Engineer portrait photo"
            width={isMobile ? 250 : 400}
            height={isMobile ? 250 : 400}
            className="rounded-full border-4 border-gray-700 object-cover shadow-2xl shadow-gray-900/60"
            priority
          />
        </motion.div>
        <div className="text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className={`mb-6 font-extrabold tracking-tight ${isMobile ? 'text-3xl sm:text-4xl' : 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl'}`}
            id="hero-heading"
          >
            <span className="block">Hi, I&#39;m</span>
            <span className="block bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500 bg-clip-text pb-2 text-transparent">
              Conor Sheppard
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className={`mb-12 max-w-xl leading-relaxed text-gray-300 ${isMobile ? 'text-base sm:text-lg' : 'text-lg sm:text-xl md:max-w-2xl'}`}
          >
            Software Engineer specializing in cloud-native Java services. Skilled in building production-ready MVP
            applications with a focus on testing, CI/CD, automation, and performance. Get in touch for a free
            consultation.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className={`mb-12 max-w-xl leading-relaxed text-gray-300 ${isMobile ? 'text-base sm:text-lg' : 'text-lg sm:text-base md:max-w-2xl'} flex justify-between gap-2`}
          >
            <span className={`flex items-center gap-2`}>
              <MapPin className="h-3 w-3" />
              <span>London, UK</span>
            </span>
            <span className={`flex items-center gap-2`}>
              <Mail className="h-3 w-3" />
              <a href="mailto:conorsheppardwork@gmail.com" className="hover:underline">
                conorsheppardwork@gmail.com
              </a>
            </span>
          </motion.p>
          <Link href="#about" passHref>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="inline-block"
            >
              <Button
                variant="outline"
                size={isMobile ? 'default' : 'lg'}
                className="group transform rounded-lg border-2 border-gray-400 bg-transparent px-8 py-3 text-lg text-gray-200 shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:border-gray-500 hover:bg-gray-700/50 hover:text-white hover:shadow-gray-700/40"
              >
                View my work
                <ArrowDown className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" />
              </Button>
            </motion.div>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="inline-block"
          >
            <Button
              asChild
              variant="outline"
              size={isMobile ? 'default' : 'lg'}
              className="group ml-4 transform rounded-lg border-2 border-gray-400 bg-transparent px-8 py-3 text-lg text-gray-200 shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:border-gray-500 hover:bg-gray-700/50 hover:text-white hover:shadow-gray-700/40"
            >
              <a href="/conor-sheppard-cv.pdf" download>
                Download my CV
                <CloudDownload className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
