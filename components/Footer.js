import Link from "next/dist/client/link";
import styles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`contenedor ${styles.contenido}`}>
                <nav className={styles.navegacion}>
                    <Link href="/">Inicio</Link>
                    <Link href="/nosotros">Nosotros</Link>
                    <Link href="/">Blog</Link>
                    <Link href="/">Tienda</Link>

                </nav>
                <p className={styles.copyrigth}>Todos los derechos reservados</p>
            </div>
        </footer>
    );
};

export default Footer;