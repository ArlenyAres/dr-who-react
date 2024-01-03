'use client';
import Link from 'next/link'
import './Header.css'
import { Montserrat } from 'next/font/google'
import SocialNetWorks from '../SocialNetWorks/SocialNetWorks'
import Logo from '../Logo/Logo'
import DoctorSearch from '../DoctorSearch/DoctorSearch'
import React, { useState } from 'react';
import doctorsData from '../../../../public/doctors.json';

const montserrat = Montserrat({ weight: '600',
subsets: ['latin'],})

const links = [{
    label: 'Conoce a',
    route: '/conoce-a'
}, {
    label: 'Doctores',
    route: '/doctores'
}, {
    label: 'Contacto',
    route: '/contacto'
}]


export default function Header() {
    const [filteredDoctors, setFilteredDoctors] = useState(doctorsData.doctors);

    const handleSearch = (searchTerm) => {
      // Filtrar los doctores basándonos en el término de búsqueda
    const filtered = doctorsData.doctors.filter(
        (doctor) =>
            doctor.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
            doctor.actor.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setFilteredDoctors(filtered);
    };

    return (
        <header className='header__container'>
        <nav>
            <ul className='navigation'>
            {links.map(({ label, route }) => (
                <li key={route} className={montserrat.className}>
                <Link href={route}>{label}</Link>
                </li>
            ))}
            </ul>
        </nav>
        <Logo />
        <DoctorSearch onSearch={handleSearch} />
        <SocialNetWorks />
        </header>
    );
}
