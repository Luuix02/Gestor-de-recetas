import Link from 'next/link'
import Image from 'next/image'
import "../../src/styles/stylesNavbar/styles.css"

export default function Navbar() {

    return (

        <header>
            <nav className="navbar">
                <div className='logo'>
                    <Image src="https://cdn-icons-png.flaticon.com/256/6710/6710068.png" width={70} height={70} />
                </div>
                <div className='contenedorpaginas'>
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

                    <div className='misrecetas'>
                        <Link href={`/mireceta`} className="navbarLink">
                            Mis recetas
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
        

    );

}

