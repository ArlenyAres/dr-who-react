'use client';
import { Lato, Montserrat } from 'next/font/google'
import './globals.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


const lato = Lato({ weight: '700',
subsets: ['latin'],
style: 'normal' })


const montserrat = Montserrat({ weight: ['600', '400'],
subsets: ['latin'],
style: ['italic', 'normal'] })



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Dr. Who</title>
      </head>
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer/>
        </body>
    </html>
  )
}
