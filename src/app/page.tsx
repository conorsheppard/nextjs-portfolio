import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <section className="mx-auto max-w-4xl text-center">
        <h1 className="mb-2 text-4xl font-bold">Conor Sheppard</h1>
        <p className="mb-6 text-lg text-gray-600">
          Cloud-Native Java Engineer | Fintech Specialist | Backend Developer
        </p>
        <Button variant="default">Download CV</Button>
      </section>

      <section className="mx-auto mt-10 grid max-w-4xl gap-6">
        <Card>
          <CardContent className="p-4">
            <h2 className="mb-2 text-2xl font-semibold">Experience</h2>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Freelance Consultant</strong> (2023–Present) – Kafka, Micronaut, Playwright
              </li>
              <li>
                <strong>Multiverse</strong> (2022–2023) – Elixir, Docker, UI/UX
              </li>
              <li>
                <strong>Divido</strong> (2017–2022) – Spring Boot, Credit Decision Engine
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="mb-2 text-2xl font-semibold">Projects</h2>
            <ul className="space-y-2 text-gray-700">
              <li>YouTube Chanalyzer – Reactive analytics with Spring + React</li>
              <li>YouTube Audio Micronaut – GraalVM-native audio service</li>
              <li>Depop Monitor – Kafka + Playwright + Postgres</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="mb-2 text-2xl font-semibold">Skills</h2>
            <p className="text-gray-700">
              Java, Spring Boot, Micronaut, Quarkus, Kafka, Docker, Kubernetes, Postgres, Redis, Playwright, React
            </p>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}
