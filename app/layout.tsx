import './globals.css'
import { Inter } from 'next/font/google'
import Nav from './components/Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CosmicMS',
  description: 'CosmicMS | 5x EXP, 2x Drop, 2x Meso | Join Us Today!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="m-4 max-w-8xl">
        <Nav />
        {children}
      </body>
    </html>
  )
}
