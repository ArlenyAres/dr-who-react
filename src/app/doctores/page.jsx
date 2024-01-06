// link doctores
"use client"
import DoctorSearch from '../components/DoctorSearch/DoctorSearch';
import doctorsData from '/public/doctors.json'; 

export default function Page() {
  return (
    <div>
      <DoctorSearch doctorsData={doctorsData.doctors} />
      {/* Otros elementos de tu página de doctores, como encabezado, etc. */}
    </div>
  );
}