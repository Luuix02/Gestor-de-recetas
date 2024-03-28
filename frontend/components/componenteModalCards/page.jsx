"use client";
import "../../src/styles/stylesModalCards/styles.css";
import React from "react";
import Image from "next/image";

export default function ModalCards({ selectedRecipe, onClose }) {
  return (
    <>
      <div onClick={onClose} className="cerrarModal">
        <Image
          src="https://w7.pngwing.com/pngs/844/786/png-transparent-maine-computer-icons-close-icon-thumbnail.png"
          width={20}
          height={20}
        />
      </div>
      <div className="contenedorModalPrincipal">
        <div className="cardModal">
          <div className="image-container-modal">
            <Image
              src={selectedRecipe.imagen || ""}
              alt={selectedRecipe.nombre_receta}
              className="recipe-image-modal"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="tiempoPre">
            <img
              src="https://cdn-icons-png.flaticon.com/512/826/826165.png"
              alt="Clock"
              className="clock-icon-modal"
            />
            <span className="time">{selectedRecipe.tiempo_preparacion}</span>
          </div>
        </div>
        <div className="nombreReceta">
          <h2>{selectedRecipe.nombre_receta}</h2>
        </div>
        <div className="ingredientes">
          <h3>Ingredientes</h3>
          <ul>
            {selectedRecipe.ingredientes.map((ingrediente, index) => (
              <li key={index}>{ingrediente}</li>
            ))}
          </ul>
        </div>
        <div className="instruccionesPre">
          <h3>Instrucciones</h3>
          <p>{selectedRecipe.instrucciones}</p>
        </div>
      </div>
    </>
  );
}
