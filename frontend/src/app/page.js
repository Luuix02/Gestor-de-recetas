import "./page.module.css"
import Navbar from "../../components/navbar/page";
import ContenidoHome from "../../components/contenidoHome/page";
import Cards from "../../components/categoriasCard/page";
import CardDesayuno from "../../components/componenteDesayuno/page";


export default function Home() {
  return (
    <>
  
  <Navbar/>
    <ContenidoHome/>
    <Cards/>
    <CardDesayuno/>
    
    

    
    
    
    </>
  );

  
}
