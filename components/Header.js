import Link from "next/dist/client/link";
import styles from '../styles/Header.module.css'
import Image from 'next/image'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className="contenedor">
                <div className={styles.barra}>
                    <Link href="/">
                        <Image width={400} height={100} src="/img/logo.svg" alt="Imagen header" />
                    </Link>
                    <nav className={styles.navegacion}>
                        <Link href="/">Inicio</Link>
                        <Link href="/nosotros">Nosotros</Link>
                        <Link href="/">Blog</Link>
                        <Link href="/">Tienda</Link>

                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;