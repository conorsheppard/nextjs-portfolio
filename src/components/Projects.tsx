'use client'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { DynamicIcon } from 'lucide-react/dynamic'
import { ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { useIsMobile } from '@/hooks/use-mobile'

const projectsData = [
  {
    title: 'YouTube Chanalyzer: YouTube Channel Analytics Tool',
    description:
      "Fully Reactive, Kubernetes-deployed, React / Spring Boot application that scrapes a YouTube channel's videos and plots the upload frequency on a graph.",
    tags: ['Java', 'Spring Boot', 'Reactive Programming Model', 'PostgreSQL', 'React', 'Microservices'],
    githubLink: 'https://github.com/conorsheppard/yt-chanalyzer',
    liveLink: 'https://youtube-chanalyzer.com',
  },
  {
    title: 'Distributed List: Built with the Java Redis client',
    description:
      'Distributed list backed by Redis, showcasing real-time synchronization across multiple JShell sessions. Each session initializes with custom scripts and interacts with a shared DistributedList via a Redis-based storage client. Changes made in any session are globally reflected and can also be verified directly within the Redis container.',
    tags: ['Redis', 'Java', 'Testcontainers', 'Docker', 'JShell', 'Distributed Computing'],
    githubLink: 'https://github.com/conorsheppard/distributed-list-java',
    liveLink: null,
  },
  {
    title: 'Web Crawler Java',
    description:
      'A PicoCLI command-line web crawler written in Java leveraging Java multithreading and Kafka, Redis & JSoup executed in a containerised environment',
    tags: ['Java', 'JSoup', 'Redis', 'Kafka', 'PicoCLI'],
    githubLink: 'https://github.com/conorsheppard/web-crawler-java',
    liveLink: null,
  },
  {
    title: 'Spring Boot Debezium',
    description:
      'A Spring Boot app that updates a custom bank account through a deposit endpoint, persists the changes to a PostgreSQL database, and streams the updates in real time to a Kafka topic using Debezium Change Data Capture (CDC).',
    tags: ['Spring Boot', 'Kafka', 'Debezium', 'Java', 'PostgreSQL', 'Docker', 'Github Actions'],
    githubLink: 'https://github.com/conorsheppard/spring-boot-debezium',
    liveLink: null,
  },
]

export default function Projects() {
  const isMobile = useIsMobile()

  return (
    <section id="projects" className="bg-gray-900/80 pt-10 pb-10 backdrop-blur-lg md:pt-16 md:pb-16">
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
            id="projects-heading"
          >
            Featured Projects
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-400">
            A selection of projects that demonstrate my skills in backend development, distributed computing, and
            full-stack engineering. Each project features frameworks and technologies I've used in my day-to-day work to
            build real-world, scalable, & fault-tolerate software solutions; presented in a simple, user-friendly way.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
            >
              <Card className="group flex h-full flex-col overflow-hidden border-slate-700 bg-slate-800/70 shadow-xl shadow-slate-900/50 backdrop-blur-sm transition-shadow duration-300 ease-in-out hover:shadow-slate-700/40">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-semibold text-gray-100 transition-colors group-hover:text-white">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="custom-scrollbar h-20 overflow-y-auto pt-1 text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow pt-2 pb-4">
                  <div className={`flex flex-wrap gap-2 ${isMobile ? 'mb-6' : 'mb-4'}`}>
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="border-gray-600 bg-gray-700/60 text-xs text-gray-300 transition-colors hover:text-white-800"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter
                  className={`flex ${isMobile ? 'flex-col items-start space-y-2 space-x-0' : 'justify-end space-x-3'} border-t border-slate-700/50 bg-slate-800/50 pt-2 pb-6`}
                >
                  {project.githubLink && (
                    <Link href={project.githubLink} target="_blank" rel="noopener noreferrer" passHref>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-gray-600 text-gray-300 transition-all hover:border-gray-500 hover:bg-gray-700/70 hover:text-white"
                      >
                        <DynamicIcon name="github" className="mr-2 h-4 w-4" /> GitHub
                      </Button>
                    </Link>
                  )}
                  {project.liveLink && (
                    <Link href={project.liveLink} target="_blank" rel="noopener noreferrer" passHref>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-gray-600 text-gray-300 transition-all hover:border-gray-500 hover:bg-gray-700/70 hover:text-white"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </Button>
                    </Link>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
