import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import "../../src/styles/stylesContenidoHome/styles.css";

export default function ContenidoHome() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = async (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    try {
      const response = await fetch(
        `http://localhost:5000/recipes?${searchTerm}`
      );
      if (response.ok) {
        const data = await response.json();

        const filteredResults = data.filter((recipe) =>
          recipe.nombre_receta.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(filteredResults);
      } else {
        console.error("Error al obtener las recetas");
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
  };

  return (
    <main>
      <section className="fondo">
        <div className="imagenFondo">
          <Image
            src="https://png.pngtree.com/background/20210711/original/pngtree-food-festival-food-promotion-banner-poster-picture-image_1092303.jpg"
            layout="fill"
            objectFit="cover"
            alt="Fondo"
          />
        </div>

        <div className="contenidoCentrado">
          <h1 className="titulo">Tus antojos en un solo lugar</h1>
          <div className="buscador">
            <input
              type="search"
              name="search"
              placeholder="Busca tu receta"
              className="buscareceta"
              value={searchTerm}
              onChange={handleChange}
            />
            <button className="botonbuscador">Buscar</button>
          </div>

          <div className="opciones">
            {searchResults.map((result, index) => (
              <div key={index}>
                <p>{result.nombre_receta}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
