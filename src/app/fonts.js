import { Lato, Montserrat } from 'next/font/google'

export const lato = Lato({ 
    weight: '700',
    subsets: ['latin'],
    style: 'normal' 
})

export const montserrat = Montserrat({ weight: ['600', '400'],
subsets: ['latin'],
style: ['italic', 'normal'] })