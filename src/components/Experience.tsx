'use client'
import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Briefcase, GraduationCap, BadgePoundSterling, Lock, Phone } from 'lucide-react'
import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'Consultant Software Engineer',
    company: 'conorsheppard.com',
    tags: ['Freelance'],
    location: 'London, UK',
    period: 'August 2023 - Present',
    details: [
      'Contract work with SMEs in the domains of retail, film production and crypto.',
      'Developed a Kafka-driven Depop listing event dispatcher for a London SME retailer using Spring Boot, Playwright & Postgres to track listing changes in real time, overcoming lack of public API & integrating across sales channels like Shopify, saving hours of manual work each week.',
      'Built a distributed audio downloader using Micronaut, Quarkus, Kafka, S3 & PostgreSQL capable of downloading 1k+ file playlists in seconds.',
      'Engineered custom HR system to streamline employee holiday tracking and management processes for London-based production company.',
      'Process automation, Google Apps Scripting, Agile web development, website migration, consulting, private SWE coaching/mentoring.',
      'Tutoring and mentoring in the field of Computer Science, focusing on the core fundamentals: data structures, algorithms, time & space complexity, database fundamentals etc.',
    ],
    icon: <Briefcase className="h-6 w-6 text-purple-400" />,
    gradient: 'from-purple-600 to-pink-500',
  },
  {
    role: 'Senior Software Engineer',
    company: 'Multiverse',
    tags: ['EdTech'],
    location: 'London, UK',
    period: '2022 - 2023',
    details: [
      'Implemented an advanced knowledge management system within the main platform UI, eliminating reliance on spreadsheets for candidate profile documentation. This enhancement streamlined workflows, resulting in sector-wide time savings of hundreds of hours per month.',
      'Enhanced the core platform with improved UI/UX and leveraged Elixir/Phoenix to deliver real-time user experience with server-rendered HTML',
      'Leveraged experience with Docker to improve development experience across the organisation & embed containerisation as a core consideration in the company’s engineering space.',
    ],
    icon: <GraduationCap className="h-6 w-6 text-sky-400" />,
    gradient: 'from-sky-600 to-cyan-500',
  },
  {
    role: 'Senior Software Engineer',
    company: 'Divido',
    tags: ['FinTech'],
    location: 'London, UK',
    period: '2017 - 2022',
    details: [
      'Led a team of 5 developers to build a credit underwriting system and real-time decision engine with an SFTP loan origination module which facilitated over £128 million in activated finance.',
      'Successfully delivered several API integrations including credit bureau, loan origination and internal.',
      'Requirements gathering, client comms, project scoping, automated testing, 99.99% uptime, Agile development, Spring Boot, Hibernate, Java.',
    ],
    icon: <BadgePoundSterling className="h-6 w-6 text-emerald-400" />,
    gradient: 'from-emerald-600 to-green-500',
  },
  {
    role: 'Java Developer',
    company: 'Doordeck',
    tags: ['Security'],
    location: 'London, UK',
    period: '2016 - 2017',
    details: [
      'Java backend development, Dropwizard, Immutables, Java 8 (Optional, Streams, Lambdas etc.), AWS EC2, Cassandra, Git.',
      'Mobile development with the Ionic framework.',
      'Working with BLE and proximity devices (iBeacons, Eddystone).',
    ],
    icon: <Lock className="h-6 w-6 text-amber-400" />,
    gradient: 'from-amber-500 to-yellow-400',
  },
  {
    role: 'Java Developer Intern',
    company: 'Openwave Messaging',
    tags: ['Telecoms'],
    location: 'Dublin, Ireland',
    period: '2015',
    details: [
      'Successfully delivered a custom XML-to-SQL parser, written in Java.',
      'Executed load balancer migrations via SSH.',
      'Contributed effectively both independently and collaboratively.',
    ],
    icon: <Phone className="h-6 w-6 text-rose-400" />,
    gradient: 'from-rose-600 to-red-500',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="bg-gray-900/80 py-20 text-white backdrop-blur-lg md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-16 text-center"
        >
          <h2
            className="bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500 bg-clip-text pb-2 text-4xl font-bold tracking-tight text-transparent md:text-5xl"
            id="experience-heading"
          >
            Career Timeline
          </h2>
        </motion.div>

        <div className="relative mx-auto max-w-4xl">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group mb-12 flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Icon and Line Connector - Desktop */}
              <div className="relative mx-auto hidden w-1/6 flex-col items-center md:flex">
                <div
                  className={`group-hover:ring-opacity-100 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 bg-gradient-to-br shadow-lg ring-4 ring-gray-800/50 transition-all duration-300 group-hover:ring-pink-500/70 ${exp.gradient}`}
                >
                  {exp.icon}
                </div>
              </div>

              {/* Content Card */}
              <div
                className={`w-full transform rounded-xl border border-slate-700 bg-slate-800/70 p-6 shadow-xl shadow-slate-900/50 backdrop-blur-sm transition-all duration-500 ease-in-out hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/30 sm:p-8 md:w-5/6 ${index % 2 === 0 ? 'md:ml-4' : 'md:mr-4'}`}
              >
                {/* Icon - Mobile */}
                <div className="mb-4 flex items-center md:hidden">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br shadow-lg ring-2 ring-gray-800/50 ${exp.gradient}`}
                  >
                    {exp.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                    <p className="text-sm text-purple-300">
                      {exp.company} - {exp.location}
                    </p>
                    <p className="text-xs text-gray-400">{exp.period}</p>
                  </div>
                </div>
                {/* Title and Details - Desktop */}
                <div className="hidden md:block">
                  <h3 className="mb-1 text-xl font-semibold text-white sm:text-2xl">{exp.role}</h3>
                  <p className="text-md mb-1 text-purple-300">
                    {exp.company} - {exp.location}
                  </p>
                  <div className={`mb-2 mt-1 flex flex-wrap`}>
                    {exp.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="border-gray-600 bg-gray-700/60 text-xs text-gray-300 transition-colors hover:text-white-800"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <p className="mb-2 text-sm text-gray-400">{exp.period}</p>
                </div>
                <ul className="list-inside list-disc space-y-2 text-sm leading-relaxed text-gray-300 marker:text-purple-400 sm:text-base">
                  {exp.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
