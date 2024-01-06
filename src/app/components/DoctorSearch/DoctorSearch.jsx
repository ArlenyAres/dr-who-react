// DoctorSearch.jsx component
import React, { useState, useEffect } from 'react';
import DoctorsCards from '../DoctorsCards/DoctorsCards'
import { useSearchContext } from '../../SearchContext'
import doctorsData from '/public/doctors.json';
import './DoctorSearch.css';

export default function DoctorSearch() {
  const { search } = useSearchContext();

  const [docData, setDocData] = useState([]);
  

  useEffect(() => {
    setDocData(doctorsData.doctors);
  }, []);

  // Metodo de filtro para aplicar la busqued
  const filteredDoctors = docData
    ? docData.filter(
        (doctor) =>
          doctor.doctor.toLowerCase().includes(search.toLowerCase()) ||
          doctor.actor.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  // Funcion para hacer ls cambios en la entrada de bsqued
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
     {/* <SearchBar search={search} handleSearchChange={handleSearchChange} /> */}
      <DoctorsCards doctors={filteredDoctors} />
    </div>
  );
}
