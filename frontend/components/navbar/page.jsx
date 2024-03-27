import Link from 'next/link'
import Image from 'next/image'
import "../../src/styles/stylesNavbar/styles.css"

export default function Navbar() {

    return (

        <nav className='navBar'>

            <div className='contenedorPrincipal'>
                
                <div className='logo'>
                <Image src="https://seeklogo.com/images/C/Cocina_Estudio_Creativo-logo-9AF8008C9D-seeklogo.com.png" width={70} height={70} />
                </div>

                <div className='home'>
                        <Link href="/" className="navbarLink">
                            Home
                        </Link>
                    </div>

                    <div className='recetas'>
                        <Link href={`/receta`} className="navbarLink">
                            Recetas
                        </Link>
                    </div>


                    <div className='agregarReceta'>
                        <Link href={`/agregarreceta`} className="navbarLink">
                            Agregar receta
                        </Link>
                    </div>


            </div>

        </nav>

        
                
        

    );

}

