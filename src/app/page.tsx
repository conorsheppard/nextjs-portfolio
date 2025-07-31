import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between" role="main">
      <Navbar />
      <section id="hero" aria-labelledby="hero-heading">
        <Hero />
      </section>
      <section id="about" aria-labelledby="about-heading">
        <About />
      </section>
      <section id="skills" aria-labelledby="skills-heading">
        <Skills />
      </section>
      <section id="projects" aria-labelledby="projects-heading">
        <Projects />
      </section>
      <section id="experience" aria-labelledby="experience-heading">
        <Experience />
      </section>
      <section id="contact" aria-labelledby="contact-heading">
        <Contact />
      </section>
      <Footer />
    </main>
  )
}
