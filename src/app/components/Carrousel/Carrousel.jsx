'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import  './CarrouselStyles.css';
import GeneralButton from '../GeneralButton/GeneralButton';

// Define las imágenes del carrusel
const imgCarrousel1 = "/assets/img/carrusel/carrusel-1.webp";
const imgCarrousel2 = "/assets/img/carrusel/carrusel-2.jpg";

// Configura la información de las imágenes del carrusel
const imagesCarousel = [
    {
        id: 0,
        title: 'The Giggle',
        imgUrl: imgCarrousel2
    },
    {
        id: 1,
        title: 'Allons-y!',
        imgUrl: imgCarrousel1,
    },
];

// Define el componente Carrousel
const Carrousel = () => {
    // Estado para rastrear el índice de la imagen actual
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Función para avanzar a la siguiente imagen
    const nextImage = () => {
        const newIndex = (currentImageIndex + 1) % imagesCarousel.length;
        setCurrentImageIndex(newIndex);
    };

    // Función para retroceder a la imagen anterior
    const prevImage = () => {
        const newIndex = (currentImageIndex - 1 + imagesCarousel.length) % imagesCarousel.length;
        setCurrentImageIndex(newIndex);
    };

    return (
        <div className="carousel_container">
            
            {/* Contenedor de la imagen y contenido */}
            <div className="carousel_image">
                {/* Imagen con layout="fill" para ocupar el 100% del contenedor principal */}
                <Image
                    alt={imagesCarousel[currentImageIndex].title}
                    src={imagesCarousel[currentImageIndex].imgUrl}
                    layout="responsive"
                    width={1920} // Ajusta según el ancho deseado de la imagen
                    height={1080} // Ajusta según la altura deseada de la imagen
                    objectFit="cover"
                />
                
                {/* Contenido adicional sobre la imagen */}
                <div className={"image_content"}>
                    <h1>{imagesCarousel[currentImageIndex].title}</h1>
                    <div className='but'>
                        <GeneralButton to='https://www.doctorwho.tv/' text={'Ver ahora'} style={{ fontSize: '25px', padding: '17px 45px' }} />
                    </div>
                </div>
                {/* Botones del carrusel */}
                <div className={"carousel_buttons"}>
                    <button onClick={prevImage}></button>
                    <button onClick={nextImage}></button>
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
            </div>
        </div>
    );
};

export default Carrousel;