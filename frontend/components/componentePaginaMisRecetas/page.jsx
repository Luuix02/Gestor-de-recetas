"use client";
import "../../src/styles/stylesComponenteMisRecetas/styles.css";
import "../../src/styles/stylesComponenteAgregarRecetas/styles.css";
import Image from "next/image";
import React, { useState } from "react";
import Modal from "react-modal";
import Navbar from "../navbar/page";
import axios from "axios";

export default function MisRecetas({ recetas, confirmarEliminacion }) {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  const [recetaEditada, setRecetaEditada] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleCategoriaChange = (event) => {
    setCategoriaSeleccionada(event.target.value);
  };

  const handleEditarReceta = (receta) => {
    setRecetaEditada(receta);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRecetaEditada((prevRecetaEditada) => ({
      ...prevRecetaEditada,
      [name]: value,
    }));
  };

  const recetasFiltradas = categoriaSeleccionada
    ? recetas.filter((receta) => receta.categoria === categoriaSeleccionada)
    : recetas;
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(
        `http://localhost:5000/recipes/${recetaEditada._id}`,
        recetaEditada
      );
      closeModal();
    } catch (error) {
      console.error("Error al guardar los cambios:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="contenedorPrincipalMisRecetas">
        <div className="containerRec">
          <h1>Administración de Recetas</h1>
          <select
            value={categoriaSeleccionada}
            onChange={handleCategoriaChange}
          >
            <option value="">Todas las categorías</option>
            <option value="Desayuno">Desayuno</option>
            <option value="Almuerzo">Almuerzo</option>
            <option value="Cena">Cena</option>
            <option value="Snacks">Snacks</option>
          </select>
          <table className="tabla-recetas">
            <thead>
              <tr>
                <th>Nombre de la receta</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {recetasFiltradas.map((receta) => (
                <tr key={receta._id}>
                  <td>{receta.nombre_receta}</td>
                  <td>
                    <button
                      className="btn-eliminar"
                      onClick={() => confirmarEliminacion(receta._id)}
                    >
                      Eliminar
                    </button>
                    <button
                      className="btn-editar"
                      onClick={() => handleEditarReceta(receta)}
                    >
                      Editar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Editar Receta"
      >
        <div onClick={closeModal} className="cerrar">
          <Image
            src="https://w7.pngwing.com/pngs/844/786/png-transparent-maine-computer-icons-close-icon-thumbnail.png"
            width={20}
            height={20}
          />
        </div>
        <h2>Editar Receta</h2>
        {recetaEditada && (
          <form onSubmit={handleSubmit}>
            <label htmlFor="recipe-name">Nombre de la receta:</label>
            <input
              type="text"
              id="recipe-name"
              name="nombre_receta"
              value={recetaEditada.nombre_receta}
              onChange={handleInputChange}
            />

            <label htmlFor="recipe-category">Categoría:</label>
            <input
              type="text"
              id="recipe-category"
              name="categoria"
              value={recetaEditada.categoria}
              onChange={handleInputChange}
            />

            <label htmlFor="prep-time">Tiempo de preparación:</label>
            <input
              type="text"
              id="prep-time"
              name="tiempo_preparacion"
              value={recetaEditada.tiempo_preparacion}
              onChange={handleInputChange}
            />

            <label htmlFor="ingredients">Ingredientes:</label>
            <textarea
              id="ingredients"
              name="ingredientes"
              rows="4"
              value={recetaEditada.ingredientes}
              onChange={handleInputChange}
            />

            <label htmlFor="instructions">Instrucciones:</label>
            <textarea
              id="instructions"
              name="instrucciones"
              rows="6"
              value={recetaEditada.instrucciones}
              onChange={handleInputChange}
            />

            <button type="submit">Guardar cambios</button>
          </form>
        )}
      </Modal>
    </>
  );
}
