import type { Metadata } from 'next'
import { Lunasima } from 'next/font/google'
import './globals.css'

const font = Lunasima({
  subsets: ['latin'],
  variable: '--font-Lunasima',
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'James Sartelle - Resume',
  description: 'Full Stack Software Engineer',
  other: {
    'darkreader-lock': 'meta'
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={font.variable}>{children}</body>
    </html>
  )
}
