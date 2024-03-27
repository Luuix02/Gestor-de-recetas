'use client'
import React from 'react';
import "../../src/styles/stylesComponenteAgregarRecetas/styles.css"

export default function AgregarReceta({ onSubmit }) {

  const handleSubmit = (event) => {
    console.log('onSubmit:', onSubmit);
    event.preventDefault();
    const formData = new FormData(event.target);
    const recipeData = {
      nombre_receta: formData.get('recipe-name'),
      imagen: formData.get('recipe-image'),
      categoria: formData.get('recipe-category'),
      tiempo_preparacion: formData.get('prep-time'),
      ingredientes: formData.get('ingredients'),
      instrucciones: formData.get('instructions')
    };
    onSubmit(recipeData); 
  };

  return (
    <main>
      <div className="container">
        <h1>Agregar Nueva Receta</h1>
        <form id="recipe-form" onSubmit={handleSubmit}>
          <label htmlFor="recipe-name">Nombre de la Receta:</label>
          <input type="text" id="recipe-name" name="recipe-name" required />

          <label htmlFor="recipe-image">URL de la Imagen:</label>
          <input type="url" id="recipe-image" name="recipe-image" required />

          <label htmlFor="recipe-category">Categoría:</label>
          <input type="text" id="recipe-category" name="recipe-category" required />

          <label htmlFor="prep-time">Tiempo de Preparación:</label>
          <input type="text" id="prep-time" name="prep-time" required />

          <label htmlFor="ingredients">Ingredientes:</label>
          <textarea id="ingredients" name="ingredients" rows="4" required></textarea>

          <label htmlFor="instructions">Instrucciones:</label>
          <textarea id="instructions" name="instructions" rows="6" required></textarea>

          <button type="submit">Agregar Receta</button>
        </form>
      </div>
    </main>
  );
}
