"use client";
import "./page.module.css"
import Navbar from "../../components/navbar/page";
import ContenidoHome from "../../components/contenidoHome/page";
import Cards from "../../components/categoriasCard/page";
import CardDesayuno from "../../components/componenteDesayuno/page";
import { useState, useEffect } from "react";

export default function Home() {

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
  
  <Navbar/>
    <ContenidoHome/>
    <Cards/>
    <CardDesayuno recetas={recetas.filter((receta) => receta.categoria === "Desayuno")}
    />
    
    

    
    
    
    </>
  );

  
}
