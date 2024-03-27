"use client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PageRecetas from "../../../components/componentePaginaRecetas/page";

export default function RecetaDetalle({ recetaId, receta }) {
  const [recetaState, setRecetaState] = useState(null);

  useEffect(() => {
    async function fetchReceta() {
      const response = await fetch(
        `http://localhost:5000/recipes/?fields=_id`
      );
      const data = await response.json();
      setRecetaState(data);
    }
    fetchReceta();
  }, [recetaId , receta]);

  if (receta === null) {
    return <div>Cargando...</div>;
  }

  return <PageRecetas receta={recetaState} />;
}
