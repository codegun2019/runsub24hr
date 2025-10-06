import type { Metadata } from 'next'
import './globals.css'
import { APP_CONFIG } from '@/lib/config'

export const metadata: Metadata = {
  title: APP_CONFIG.name,
  description: APP_CONFIG.description,
  generator: 'v0.dev',
  metadataBase: new URL(APP_CONFIG.website),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
