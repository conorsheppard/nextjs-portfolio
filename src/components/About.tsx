'use client'
import { motion } from 'framer-motion'
import { useIsMobile } from '@/hooks/use-mobile'
import { Card, CardContent } from '@/components/ui/card'

export default function About() {
  const isMobile = useIsMobile()
  return (
    <section id="about" className="relative bg-gray-900 pt-20 pb-10 text-white md:pt-32 md:pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-16 text-center"
        >
          <h2
            className="bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500 bg-clip-text pb-2 text-4xl font-bold tracking-tight text-transparent md:text-5xl"
            id="about-heading"
          >
            About Me
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className={`mx-auto ${isMobile ? 'max-w-sm' : 'max-w-2xl md:max-w-4xl'}`}
        >
          <Card className="group flex h-full flex-col overflow-hidden border-slate-700 bg-slate-800/70 shadow-xl shadow-slate-900/50 backdrop-blur-sm transition-shadow duration-300 ease-in-out hover:shadow-slate-700/40">
            <CardContent
              className={`space-y-4 text-center ${isMobile ? 'p-6 text-sm' : 'p-6 text-base md:p-12 md:text-lg'} leading-relaxed text-gray-300`}
            >
              <p>
                Software Engineer based in London with a decade of experience in the fintech and edtech startup /
                scale-up space. I specialise in backend development and cloud-native Java services, with the ability to
                work cross-stack when needed (React, Next.js). I hold a 2:1 Honours degree in Computer Applications &
                Software Engineering from Dublin City University, I am passionate about leveraging technologies like
                Docker, Kubernetes, EKS, Redis, Kafka, and Debezium to build highly-available, fault-tolerant systems,
                and I care a lot about Agile delivery, testing, CI/CD, automation, and performance. Currently, I work
                as a freelance software consultant, helping businesses streamline their operations with custom tooling.
                I also have experience leading a team, building user-facing software products and working directly with
                clients and stakeholders to oversee requirements gathering.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
