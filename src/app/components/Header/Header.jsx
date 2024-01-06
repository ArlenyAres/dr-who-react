// Header.jsx
"use client";

import React from 'react'; // Asegúrate de importar React
import Link from 'next/link';
import './Header.css';
import { Montserrat } from 'next/font/google';
import SocialNetWorks from '../SocialNetWorks/SocialNetWorks';
import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';

import { useSearchContext } from '../../SearchContext';

const montserrat = Montserrat({ weight: '600', subsets: ['latin'] });

export default function Header({ links }) {
  const { search, setSearch } = useSearchContext(); // Mueve esto dentro de la función del componente

  const handleSearchChange = (e) => {
    // Comprobar la página actual
    if (window.location.pathname !== "doctores") {
      console.log("cambio de página a doctores");
    }
    setSearch(e);
  };

  const handleSearchSubmit = () => {
    // Redireccionar a la página de doctores con la búsqueda
    // router.push('/doctores');
  };

  return (
    <header className='header__container'>
      <nav>
        <ul className='navigation'>
          {links.map(({ label, route }) => (
            <li key={route} className={montserrat.className}>
              <Link href={route}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Logo />
      {/* Incluye el componente SearchBar en el Header y pasa las funciones y datos necesarios */}
      <SearchBar
        search={search} // Pasa el estado de búsqueda
        handleSearchChange={handleSearchChange}
        handleSearchSubmit={handleSearchSubmit}
      />
      <SocialNetWorks />
    </header>
  );
}
