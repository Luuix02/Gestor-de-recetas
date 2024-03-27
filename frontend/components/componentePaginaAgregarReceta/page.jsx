"use client";

import "../../src/styles/stylesComponenteAgregarRecetas/styles.css";
import React, { useState } from "react";

export default function AgregarReceta({ onSubmit }) {
  const [formulario, setFormulario] = useState({
    nombre_receta: "",
    imagen: "",
    categoria: "",
    tiempo_preparacion: "",
    ingredientes: "",
    instrucciones: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const recipeData = {
      nombre_receta: formData.get("recipe-name"),
      imagen: formData.get("recipe-image"),
      categoria: formData.get("recipe-category"),
      tiempo_preparacion: formData.get("prep-time"),
      ingredientes: formData.get("ingredients"),
      instrucciones: formData.get("instructions"),
    };
    onSubmit(recipeData);
    // Reiniciar el estado del formulario
    setFormulario({
      nombre_receta: "",
      imagen: "",
      categoria: "",
      tiempo_preparacion: "",
      ingredientes: "",
      instrucciones: "",
    });
  };

  return (
    <main>
      <div className="container">
        <h1>Agregar nueva receta</h1>
        <form id="recipe-form" onSubmit={handleSubmit}>
          <label htmlFor="recipe-name">Nombre de la receta:</label>
          <input
            type="text"
            id="recipe-name"
            name="recipe-name"
            value={formulario.nombre_receta}
            onChange={(e) =>
              setFormulario({ ...formulario, nombre_receta: e.target.value })
            }
            required
          />

          <label htmlFor="recipe-image">URL de la imagen:</label>
          <input
            type="url"
            id="recipe-image"
            name="recipe-image"
            value={formulario.imagen}
            onChange={(e) =>
              setFormulario({ ...formulario, imagen: e.target.value })
            }
            required
          />

          <label htmlFor="recipe-category">Categoría:</label>
          <input
            type="text"
            id="recipe-category"
            name="recipe-category"
            value={formulario.categoria}
            onChange={(e) =>
              setFormulario({ ...formulario, categoria: e.target.value })
            }
            required
          />

          <label htmlFor="prep-time">Tiempo de preparación:</label>
          <input
            type="text"
            id="prep-time"
            name="prep-time"
            value={formulario.tiempo_preparacion}
            onChange={(e) =>
              setFormulario({
                ...formulario,
                tiempo_preparacion: e.target.value,
              })
            }
            required
          />

          <label htmlFor="ingredients">Ingredientes:</label>
          <textarea
            id="ingredients"
            name="ingredients"
            rows="4"
            value={formulario.ingredientes}
            onChange={(e) =>
              setFormulario({ ...formulario, ingredientes: e.target.value })
            }
            required
          ></textarea>

          <label htmlFor="instructions">Instrucciones:</label>
          <textarea
            id="instructions"
            name="instructions"
            rows="6"
            value={formulario.instrucciones}
            onChange={(e) =>
              setFormulario({ ...formulario, instrucciones: e.target.value })
            }
            required
          ></textarea>

          <button type="submit">Agregar receta</button>
        </form>
      </div>
    </main>
  );
}
