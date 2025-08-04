'use client'
import { motion } from 'framer-motion'
import { useIsMobile } from '@/hooks/use-mobile'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Quote, Star } from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  rating: number
  project?: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'John Jupe',
    role: 'Visual Artist',
    company: 'Pacentre.org',
    content:
      "Conor was recommended to me as a software engineer with expertise in web design and provisioning, and he exceeded all expectations. Professional, easy to work with and attentive to client brief. As someone with limited technical knowledge, I appreciated how he handled my lack of expertise with patience and positivity, keeping me informed and educated as the project developed. Thanks to Conor's enthusiasm and clear communication, what initially felt like a daunting task became something I genuinely enjoyed. I look forward to continuing to work with Conor, both in commissioning further development work and to be taught how to self-manage aspects of the site's ongoing maintenance. I would highly recommend Conor to anyone seeking a highly skilled and client-focused engineer.",
    rating: 5,
    project: 'Website provisioning',
  },
  {
    id: 2,
    name: 'Andre Chan',
    role: 'Senior ML Engineer',
    company: 'ML & Crypto',
    content:
      "Conor was invaluable in helping me land a senior ML role. He helped me prepare for all 5 technical interviews - including working on my mindset, what questions to ask and negotiation tips. He went above and beyond in preparing for our sessions, being encouraging and giving feedback. Couldn't recommend Conor more!",
    rating: 5,
    project: 'CS tutoring & interview preparation',
  },
  {
    id: 3,
    name: 'David Clarke',
    role: 'CTO',
    company: 'Divido',
    content:
      'Conor has helped to shape Divido and its tech culture over several years. Ever learning and adapting to new languages and technologies, Conor played a key role in steering the success of our platform through its various iterations. His work in building a credit and loan origination engine was particularly influential in enabling our transition to servicing more enterprise clients. Conor will be missed at Divido as an ever active supporter of community and culture within the Engineering group as well as the wider company. I look forward to seeing where his talents take him next.',
    rating: 5,
    project: 'Finance software',
  },
  {
    id: 4,
    name: 'James Weller',
    role: 'Head of HR',
    company: 'Divido',
    content:
      "It's been my pleasure to have worked with Conor throughout my time at Divido. The Company has changed much over that time and Conor has been a constant. His work in building a credit and loan origination engine helped underpin one of the technology shifts that supported Divido's move to servicing more Enterprise clients. But aside from his excellent work, Conor has been a great champion of culture at Divido, going out of his way to support company social activities with his creative skills and his passion for community. He will be missed at Divido but I look forward to seeing where his skills and passions take him next.",
    rating: 5,
    project: 'Finance software',
  },
]

export default function Testimonials() {
  const isMobile = useIsMobile()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star key={index} className={`h-4 w-4 ${index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}`} />
    ))
  }

  return (
    <section id="testimonials" className="relative bg-gray-900 pt-20 pb-10 text-white md:pt-32 md:pb-16">
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
            id="testimonials-heading"
          >
            What People Say
          </h2>
          <p className="mt-4 text-lg text-gray-400 md:text-xl">
            Feedback from colleagues and clients I&apos;ve worked with
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className={`mx-auto grid gap-6 ${isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'} max-w-6xl`}
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.id} variants={itemVariants}>
              <Card className="group flex h-full flex-col overflow-hidden border-slate-700 bg-slate-800/70 shadow-xl shadow-slate-900/50 backdrop-blur-sm transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-slate-700/40">
                <CardContent className="flex h-full flex-col p-6 md:p-8">
                  <div className="mb-4 flex items-center justify-between">
                    <Quote className="h-8 w-8 text-slate-400" />
                    <div className="flex">{renderStars(testimonial.rating)}</div>
                  </div>

                  <blockquote className="mb-6 flex-1 text-gray-300">
                    <p className={`leading-relaxed ${isMobile ? 'text-sm' : 'text-base md:text-lg'}`}>
                      &quot;{testimonial.content}&quot;
                    </p>
                  </blockquote>

                  <div className="mt-auto space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-white">{testimonial.name}</h4>
                        <p className="text-sm text-gray-400">
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
                    </div>

                    {testimonial.project && (
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="bg-slate-700 text-slate-300">
                          {testimonial.project}
                        </Badge>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
