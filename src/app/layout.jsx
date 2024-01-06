// RootLayout.jsx
'use client';
import React, { useState } from 'react';
import { Lato, Montserrat } from 'next/font/google';
import './globals.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { SearchProvider } from '../app/SearchContext'; 
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
library.add(faSearch);

const lato = Lato({ weight: '700', subsets: ['latin'], style: 'normal' });

const montserrat = Montserrat({ weight: ['600', '400'], subsets: ['latin'], style: ['italic', 'normal'] });

export default function RootLayout({ children }) {
  const [search, setSearch] = useState('');

  const links = [
    { label: 'Conoce a', route: '/conoce-a' },
    { label: 'Doctores', route: '/doctores' },
    { label: 'Contacto', route: '/contacto' },
  ];

  const handleSearchChange = (value) => {
    setSearch(value);
    console.log("---", value);
  };

  return (
    <SearchProvider>
      <html lang="en">
        <head>
          <title>Dr. Who</title>
        </head>
        <body className={montserrat.className}>
          <Header links={links} />
          {children}
          <Footer />
        </body>
      </html>
    </SearchProvider>
  );
}
