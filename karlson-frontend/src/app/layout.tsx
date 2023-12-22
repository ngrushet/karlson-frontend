import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Карлсон',
  description: 'Служба доставки',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <div className="content">
            <Header />
            {/* <Wrapper/ > */}
        </div>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
