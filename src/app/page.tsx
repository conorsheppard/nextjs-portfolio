import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between" role="main">
      <Navbar />
      <section id="hero" aria-labelledby="hero-heading">
        <Hero />
      </section>
    </main>
  )
}
