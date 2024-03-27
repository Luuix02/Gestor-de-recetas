'use client'
import React from 'react';
import AgregarReceta from "../../../components/componentePaginaMisRecetas/page";
import Navbar from "../../../components/navbar/page";
import axios from 'axios';

export default function PageMisRecetas() {

  const handleSubmit = async (recipeData) => {
    try {
      const response = await axios.post('http://localhost:5000/recipes', recipeData);
      console.log('Receta insertada con ID:', response.data.id);
    
    } catch (error) {
      console.error('Error al guardar la receta:', error);
    }
  };

  return (
    <>
      <Navbar />
      <AgregarReceta onSubmit={handleSubmit} />
    </>
  );
}
