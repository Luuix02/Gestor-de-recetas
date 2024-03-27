"use client";
import Cards from "../../../components/categoriasCard/page";
import CardDesayuno from "../../../components/componenteDesayuno/page";
import ContenidoHome from "../../../components/contenidoHome/page";
import Navbar from "../../../components/navbar/page";
import { useState, useEffect } from "react";

export default function Desayuno() {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await fetch(
        "http://localhost:5000/recipes?fields=nombre_receta,imagen,tiempo_preparacion"
      );
      const data = await result.json();
      setRecetas(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <ContenidoHome />
      <Cards />
      <CardDesayuno
        recetas={recetas.filter((receta) => receta.categoria === "Desayuno")}
      />
    </>
  );
}
