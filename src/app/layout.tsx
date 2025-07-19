import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from '@vercel/analytics/next'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Conor Sheppard: Cloud-Native Java Engineer',
  description:
    'Portfolio of Conor Sheppard, Consultant Software Engineer - specialising in backend development and cloud-native Java services.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className={`${inter.className}`} lang="en" suppressHydrationWarning>
      <Head>
        <meta property="og:title" content="Conor Sheppard, Consultant Software Engineer" />
        <meta
          property="og:description"
          content="Portfolio of Conor Sheppard, Consultant Software Engineer - specialising in backend development and cloud-native Java services."
        />
        <meta property="og:image" content="/31444937_cropped.jpg" />
        <meta property="og:type" content="website" />
        <meta
          name="description"
          content="Portfolio of Conor Sheppard, Consultant Software Engineer - specialising in backend development and cloud-native Java services."
        />
      </Head>
      <body suppressHydrationWarning className={`bg-gray-900 text-gray-100 antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
