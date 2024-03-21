import Cards from "../../../components/categoriasCard/page";
import CardSnack from "../../../components/componenteSnacks/page";
import ContenidoHome from "../../../components/contenidoHome/page";
import Navbar from "../../../components/navbar/page";

export default function snack() {
  return (
    <>
      <Navbar />
      <ContenidoHome />
      <Cards />
      <CardSnack />
    </>
  );
}
