import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from '@vercel/analytics/next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Conor Sheppard: Cloud-Native Java Engineer',
  description:
    'Portfolio of Conor Sheppard, Consultant Software Engineer - specialising in backend development and cloud-native Java services.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Conor Sheppard, Consultant Software Engineer',
    description:
      'Portfolio of Conor Sheppard, Consultant Software Engineer - specialising in backend development and cloud-native Java services.',
    images: ['/profile.jpg'],
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className={`${inter.className}`} lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`bg-gray-900 text-gray-100 antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
