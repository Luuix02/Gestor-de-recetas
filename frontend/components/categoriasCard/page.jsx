
import "../../src/styles/stylesCategoriasCard/styles.css";
import Link from 'next/link';

export default function Cards() {
  return (
    <main>
      <article className="categorias">
        <div>
          <Link href={`/desayuno`} className="categoria" >
          Desayuno
          </Link>
        </div>

        <div>
          <Link href={`/almuerzo`} className="categoria">
            Almuerzo
          </Link>
        </div>

        <div>
          <Link href={`/cena`} className="categoria" >
            Cena
          </Link>
        </div>

        <div>
          <Link href={`/snack`} className="categoria" >
            Snacks
          </Link>
        </div>
      </article>
    </main>
  );
}

