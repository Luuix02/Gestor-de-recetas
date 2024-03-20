"use client";
import "../../src/styles/stylesCardsCategorias/styles.css";
import { useState, useEffect } from "react";

export default function CardDesayuno() {
  const [receta, setReceta] = useState({
    imagen:
      "https://www.nattahometaste.com/wp-content/uploads/2021/09/Torta-de-manzana-receta-facil-y-rapida.jpg",
  });
  useEffect(() => {
    async function fetchData() {
      const result = await fetch(
        "http://localhost:5000/recipes/desayuno/65fa64047c9e3589ca8c9785"
      );
      const data = await result.json();
      setReceta(data);
    }
    fetchData();
  }, []);

  return (
    <main>
      <div className="card">
        <img
          src={
            receta?.imagen ||
            "https://www.nattahometaste.com/wp-content/uploads/2021/09/Torta-de-manzana-receta-facil-y-rapida.jpg"
          }
          className="recipe-image"
        />
        <div className="recipe-details">
          <h2 className="recipe-name">{receta?.nombre_receta}</h2>
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
    </main>
  );
}
