import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: '500',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'HM System',
  description: 'PDF files name changer'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js"></script>
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
