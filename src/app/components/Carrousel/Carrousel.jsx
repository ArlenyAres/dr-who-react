'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import './CarrouselStyles.css';
import GeneralButton from '../GeneralButton/GeneralButton';

const imgCarrousel1 = "/assets/img/carrusel/carrusel-1.webp";
const imgCarrousel2 = "/assets/img/carrusel/carrusel-2.jpg";

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

const Carrousel = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % imagesCarousel.length;
    setCurrentImageIndex(newIndex);
};

    const prevImage = () => {
    const newIndex =
        (currentImageIndex - 1 + imagesCarousel.length) % imagesCarousel.length;
    setCurrentImageIndex(newIndex);
};

    return (
    <div className="carousel-container">
        <div className="carousel-image">
            <Image
            alt={imagesCarousel[currentImageIndex].title}
            src={imagesCarousel[currentImageIndex].imgUrl}
            layout="fill"
            style={{ objectFit: 'cover' }}
            />
            <div className="image-content">
                <h1>{imagesCarousel[currentImageIndex].title}</h1>
            <div className='but'><GeneralButton to='https://www.doctorwho.tv/' text={'Ver ahora'} style={{ fontSize: '25px', padding: '17px 45px ' }}/></div>
        </div>
        </div>
        <div className="carousel-buttons">
            <button onClick={prevImage}></button>
            <button onClick={nextImage}></button>
            <button></button>
            <button></button>
            <button></button>
        </div>
    </div>
    );
};

export default Carrousel;
