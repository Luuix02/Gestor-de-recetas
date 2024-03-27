"use client";
import React, { useState, useEffect } from "react";
import MisRecetas from "../../../components/componentePaginaMisRecetas/page";
import axios from "axios";

export default function PageMisReceta() {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    async function fetchRecetas() {
      try {
        const response = await axios.get("http://localhost:5000/recipes");
        setRecetas(response.data);
      } catch (error) {
        console.error("Error al obtener las recetas:", error);
      }
    }

    fetchRecetas();
  }, []);

  const eliminarReceta = async (idReceta) => {
    try {
      await axios.delete(`http://localhost:5000/recipes/${idReceta}`);
      setRecetas(recetas.filter((receta) => receta._id !== idReceta));
    } catch (error) {
      console.error("Error al eliminar la receta:", error);
    }
  };

  const confirmarEliminacion = (idReceta) => {
    const confirmacion = window.confirm(
      "¿Estás seguro de que deseas eliminar esta receta?"
    );
    if (confirmacion) {
      eliminarReceta(idReceta);
    }
  };

  return (
    <MisRecetas recetas={recetas} confirmarEliminacion={confirmarEliminacion} />
  );
}
