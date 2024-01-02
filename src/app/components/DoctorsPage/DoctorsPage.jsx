import React from 'react';
import doctorsData from '../../../../public/doctors.json'
import './DoctorsPage.css'
import GeneralButton from '../GeneralButton/GeneralButton';




export default function DoctorsPage() {
    return (
    <div>
    <h1>Doctores</h1>
    {doctorsData.doctors.map((doctor) => (
        <div key={doctor.id} className="doctorContainer">
        <img src={doctor.image} alt={doctor.doctor} className="doctorImage" />

        <div className="doctorInfo">
            <h2>{doctor.doctor}</h2>
            <p>{doctor.actor}</p>
            <p>{doctor.screen_time}</p>
        </div>
        <GeneralButton to="https://www.doctorwho.tv" text='Ver más'/>
        </div>
    ))}
    </div>
    );
}
