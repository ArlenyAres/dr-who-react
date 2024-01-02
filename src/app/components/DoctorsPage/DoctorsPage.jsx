import React from 'react';
import doctorsData from '../../../../public/doctors.json'
import './DoctorsPage.css'
import GeneralButton from '../GeneralButton/GeneralButton';
import { lato, montserrat } from '@/app/fonts';




export default function DoctorsPage() {
    return (
    <div className={lato.className}>
    <h1 className='doctors__h1'>Doctores</h1>
    {doctorsData.doctors.map((doctor) => (
        
        <div key={doctor.id} className="doctor__Container">
        <img src={doctor.image} alt={doctor.doctor} className="doctor__Image" />

        <div className="doctor__Info" >
            <h2>{doctor.doctor}</h2>
            <p className={montserrat.className}>{doctor.actor}</p>
            <p className={montserrat.className}>{doctor.screen_time}</p>
        </div>
        
        <div className='butt'>
        <GeneralButton to="https://www.doctorwho.tv" text='Ver más' style={{fontSize: '20px', padding: '9px 50px' }}/>
        </div>
    </div>
    ))}
    </div>
    );
}
