import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ตลาดรถยนต์มือสอง - ค้นหารถยนต์ที่ใช่สำหรับคุณ',
  description: 'เว็บไซต์ขายรถยนต์มือสองที่ดีที่สุดในประเทศไทย ค้นหารถยนต์ที่ใช่สำหรับคุณ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 