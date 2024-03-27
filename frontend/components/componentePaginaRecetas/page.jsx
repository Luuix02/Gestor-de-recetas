"use client";
import "../../src/styles/stylesComponenteRecetas/styles.css";

import Image from "next/image";

export default function PageRecetas({ recetaState, receta }) {
  return (
    <div className="contenedorPrincipal">
      <div className="card">
        <div className="image-container">
          {receta && receta.imagen && (
            <img
              src={receta.imagen}
              className="recipe-image"
              alt={receta.nombre_receta}
            />
          )}
        </div>
        <div className="recipe-details">
          <div className="prep-time-container">
            <img src="/images/clock.svg" alt="Clock" className="clock-icon" />
            <span className="prep-time">
              {recetaState && recetaState.tiempo_preparacion}
            </span>
          </div>
        </div>
      </div>
      <div className="informacionReceta">
        <div className="nombreReceta">
          <h2>{receta && receta.nombre_receta}</h2>
        </div>
        <div className="ingredientes">
          <span>Ingredientes</span>
          {recetaState && (
            <ul>
              {recetaState.ingredientes &&
                recetaState.ingredientes.map((ingrediente, index) => (
                  <li key={index}>{ingrediente}</li>
                ))}
            </ul>
          )}
        </div>
        <div className="instrucciones">
          <p>{receta && receta.instrucciones}</p>
        </div>
      </div>
    </div>
  );
}
