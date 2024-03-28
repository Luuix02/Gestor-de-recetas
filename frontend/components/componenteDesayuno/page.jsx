"use client";
import "../../src/styles/stylesCardsCategorias/styles.css";
import React, { useState } from "react";
import Image from "next/image";
import Modal from "react-modal";
import ModalCards from "../componenteModalCards/page";

export default function CardDesayuno({ recetas }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const openModal = (recipe) => {
    setSelectedRecipe(recipe);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedRecipe(null);
    setModalOpen(false);
  };

  return (
    <>
      <div className="card-container">
        {recetas &&
          recetas.map((receta) => (
            <div
              className="card"
              key={receta._id}
              onClick={() => openModal(receta)}
            >
              <div className="image-container">
                <Image
                  src={receta.imagen || ""}
                  alt={receta.nombre_receta}
                  className="recipe-image"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="recipe-details">
                <h2 className="recipe-name">{receta.nombre_receta}</h2>
                <div className="recipe-times">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/826/826165.png"
                    alt="Clock"
                    className="clock-icon"
                  />
                  <span className="prep-time">{receta.tiempo_preparacion}</span>
                </div>
              </div>
            </div>
          ))}
      </div>

      {modalOpen && selectedRecipe && (
        <Modal
          isOpen={modalOpen}
          onRequestClose={closeModal}
          contentLabel="Detalles de la Receta"
          className="modal-content"
        >
          <ModalCards selectedRecipe={selectedRecipe} onClose={closeModal} />
        </Modal>
      )}
    </>
  );
}
