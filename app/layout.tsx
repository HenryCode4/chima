import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chima | Personal Portfolio',
  description: 'Chima is a full stack developer with 3 years work experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}bg-gray-50 text-gray-`}>
        {children}
      </body>
    </html>
  )
}
