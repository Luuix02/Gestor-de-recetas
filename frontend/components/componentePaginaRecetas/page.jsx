
import "../../src/styles/stylesComponenteRecetas/styles.css"
import Image from "next/image";

export default function PageRecetas() {
  return (
    <div className="contenedorPrincipal">
      <div className="card">
          <div className="image-container">
          <Image
            src= "https://vivirenelpoblado.com/wp-content/uploads/2019/08/Ajiaco-santafere%C3%B1o.jpg"
            
            className="recipe-image"
            layout="fill" 
              objectFit="cover"
          />
          </div>
          <div className="recipe-details">
            <div className="recipe-times">
              <img
                src="https://cdn-icons-png.flaticon.com/512/826/826165.png"
                alt="Clock"
                className="clock-icon"
              />
              <span className="prep-time">tiempo preparacion</span>
            </div>
          </div>
        </div>
        <div className="informacionReceta">
          <div className="nombreReceta">
            <h2>Ajiaco Bogotano</h2>
          </div>
          <div className="ingredientes">
            <span>Ingredientes</span>
            <li></li>
          </div>
          <div className="instrucciones">
            <p>Instrucciones de preparacion</p>
          </div>

        </div>

    </div>
  )
}
