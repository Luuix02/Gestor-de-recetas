"use client";
import "../../src/styles/stylesCardsCategorias/styles.css";
import Image from "next/image";
import Link from "next/link";

export default function CardDesayuno({ recetas }) {
  return (
    <div className="card-container">
      {recetas &&
        recetas.map((receta) => (
          <div className="card" key={receta._id}>
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
              <div className="iconoVer">
                <Link href={`/receta/${receta._id}`}>
                  <Image
                    src="https://cdn.icon-icons.com/icons2/1302/PNG/512/eyeview_85767.png"
                    width={20}
                    height={20}
                    className="ver"
                  ></Image>
                </Link>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
