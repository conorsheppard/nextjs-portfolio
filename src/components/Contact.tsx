'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { useIsMobile } from '@/hooks/use-mobile'

export default function Contact() {
  const isMobile = useIsMobile()
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // For now, we'll simulate a successful submission
      // In a real implementation, you would send this to your backend
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const response = await fetch('https://formspree.io/f/xnqwzelo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setSubmitStatus('success')
      // Clear form after a brief delay to let user see the success message
      setTimeout(() => {
        setFormData({ email: '', message: '' })
      }, 1000)
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className={`relative bg-gray-900 text-white ${isMobile ? 'py-20' : 'py-28'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2
            className={`mb-6 font-extrabold tracking-tight ${isMobile ? 'text-3xl sm:text-4xl' : 'text-4xl sm:text-5xl'}`}
          >
            Get In Touch
          </h2>
          <p
            className={`mx-auto max-w-2xl leading-relaxed text-gray-300 ${isMobile ? 'text-base sm:text-lg' : 'text-lg sm:text-xl'}`}
          >
            Looking for a software engineer to help with your project? Let&apos;s discuss how I can help bring your
            ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border-gray-700 bg-gray-800/50 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl font-bold">
                  <Mail className="h-6 w-6" />
                  Consultation Request
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Tell me about your project and I&apos;ll get back to you within 24 hours for a free consultation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-200">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="border-gray-600 bg-gray-700/50 text-white placeholder:text-gray-400 focus:border-gray-500 focus:ring-gray-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-200">
                      Project Details
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, timeline, and requirements..."
                      rows={6}
                      className="border-gray-600 bg-gray-700/50 text-white placeholder:text-gray-400 focus:border-gray-500 focus:ring-gray-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full border-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:from-blue-700 hover:to-blue-800"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-b-2 border-white"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>

                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 rounded-lg border border-green-700 bg-green-900/20 p-3 text-green-400"
                    >
                      <CheckCircle className="h-5 w-5" />
                      <span>Message sent successfully! I&apos;ll get back to you soon.</span>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 rounded-lg border border-red-700 bg-red-900/20 p-3 text-red-400"
                    >
                      <AlertCircle className="h-5 w-5" />
                      <span>Something went wrong. Please try again or email me directly.</span>
                    </motion.div>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="mb-4 text-2xl font-bold">What I Can Help With</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500"></div>
                  <span>Building scalable cloud-native applications</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500"></div>
                  <span>Java microservices and API development</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500"></div>
                  <span>CI/CD pipeline setup and automation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500"></div>
                  <span>Performance optimization and testing</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500"></div>
                  <span>Technical architecture and system design</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-2xl font-bold">Why Choose Me</h3>
              <div className="space-y-4">
                <div className="rounded-lg border border-gray-700 bg-gray-800/30 p-4">
                  <h4 className="mb-2 font-semibold text-blue-400">Free Consultation</h4>
                  <p className="text-sm text-gray-300">
                    Let&apos;s discuss your project requirements and see if we&apos;re a good fit.
                  </p>
                </div>
                <div className="rounded-lg border border-gray-700 bg-gray-800/30 p-4">
                  <h4 className="mb-2 font-semibold text-blue-400">Flexible Engagement</h4>
                  <p className="text-sm text-gray-300">Project-based work, ongoing support, or technical consulting.</p>
                </div>
                <div className="rounded-lg border border-gray-700 bg-gray-800/30 p-4">
                  <h4 className="mb-2 font-semibold text-blue-400">Production Experience</h4>
                  <p className="text-sm text-gray-300">I build systems that scale and handle real-world traffic.</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-gray-700 bg-gray-800/30 p-6">
              <h3 className="mb-3 text-xl font-bold">Ready to Get Started?</h3>
              <p className="mb-4 text-gray-300">
                Fill out the form and I&apos;ll respond within 24 hours to discuss your project requirements and how I
                can help.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Mail className="h-4 w-4" />
                <span>Or email directly: conorsheppardwork@gmail.com</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
