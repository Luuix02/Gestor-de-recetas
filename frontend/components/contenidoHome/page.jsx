import Link from "next/link";
import Image from "next/image";
import "../../src/styles/stylesContenidoHome/styles.css";
export default function ContenidoHome() {
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
            />
            <button className="botonbuscador">Buscar</button>
          </div>
        </div>
      </section>
    </main>
  );
}
