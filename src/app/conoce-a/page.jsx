// AboutPage.jsx
"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import ThirteenDoctor from '/public/assets/img/doctors/Thirteenth_Doctor_Jodie_Whittaker.jpg';
import { lato, montserrat } from '../fonts';
import './conoce.css';
import '../components/GeneralButton/GeneralButton';
import { useSearchContext } from '../SearchContext';
import GeneralButton from "../components/GeneralButton/GeneralButton";
import '../components/BackSymbols/BackSymbols';
import BackSymbols from "../components/BackSymbols/BackSymbols";


export default function AboutPage() {
    const { setSearch } = useSearchContext();
    //const router = useRouter();

    useEffect(() => {
      // Configurar la búsqueda específica para "Conoce a ..."
        setSearch('');
    }, []); // Esto se ejecuta solo en el lado del cliente, despus de que el componente se haya montado

    const handleSearchClick = () => {
        // Redirecciona a la pagina de doctores
        router.push('/doctores');
    };

    return (
        <div className="about__container">
            <section className="about__text-container">
                <h1 className={lato.className}>Conoce a ... decimotercera doctor</h1>
                <p className={`${montserrat.className} ${"about__text"}`} >Lorem ipsum dolor sit amet consectetur. Convallis maecenas ac pharetra metus justo amet nunc amet. Hac pellentesque proin sapien duis natoque. Risus enim duis quis egestas non. Morbi ut potenti egestas id pharetra gravida interdum nam.</p>
                <GeneralButton 
                    text={'Ver más'} 
                    to={'https://www.doctorwho.tv/'}
                    className={`${montserrat.className} ${'vermas__btn'}`}
                    onClick={handleSearchClick} // Ahora el manejo de clics incluir la redirección
                />
                
            </section>
            <aside className="about__image-container">
                <Image
                    src={ThirteenDoctor} 
                    alt="Imagen de decimotercera doctor" 
                    objectFit="auto"
                    className="about__image"
                />
                
            </aside>
            <BackSymbols/>
        </div>
    );
}
