"use client";
import AgregarReceta from "../../../components/componentePaginaAgregarReceta/page";
import Navbar from "../../../components/navbar/page";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function PageAgregarRecetas() {
  const [isRecipeSubmitted, setIsRecipeSubmitted] = useState(false);

  const handleSubmit = async (recipeData) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/recipes",
        recipeData
      );
      console.log("Receta insertada con ID:", response.data.id);
      setIsRecipeSubmitted(true);
      toast.success("¡Receta creada exitosamente!");
    } catch (error) {
      console.error("Error al guardar la receta:", error);
      toast.error("Error al guardar la receta");
    }
  };

  return (
    <>
      <Navbar />
      <AgregarReceta onSubmit={handleSubmit} />
      <ToastContainer />
    </>
  );
}
