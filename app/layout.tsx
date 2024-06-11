import type { Metadata } from 'next'
import Script from 'next/script'
import { Lunasima } from 'next/font/google'
import './globals.css'

const font = Lunasima({
  subsets: ['latin'],
  variable: '--font-Lunasima',
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'James Sartelle',
  description: 'Full Stack Software Engineer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="focused">
      <body className={font.variable}>{children}</body>
      <Script src="./focused.js" />
    </html>
  )
}
