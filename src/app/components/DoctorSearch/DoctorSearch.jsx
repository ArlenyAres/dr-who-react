'use client';
import React, { useState, useEffect } from 'react';

const DoctorSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    onSearch(searchTerm);
  }, [searchTerm]);

  return (
    <div>
      {/* Puedes personalizar el estilo según tus necesidades */}
      <input
        type="text"
        placeholder="Buscar por nombre o actor..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default DoctorSearch;
