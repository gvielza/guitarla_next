import Image from 'next/image'
import Layout from '../components/Layout';
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
    return (
        <Layout
            pagina='Nosotros'>
            <main className='contenedor'>
                <h2 className='heading'>Nosotros</h2>
                <div className={styles.contenido}>
                    <Image layout='responsive' width={600} height={450} src="/../public/img/nosotros.jpg" alt='Nosotros'></Image>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum libero lorem,
                            id euismod libero tristique et. Integer vel metus eget est tincidunt auctor quis ut orci.
                            Vestibulum sodales enim sit amet ligula dignissim pretium. </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum libero lorem,
                            id euismod libero tristique et. Integer vel metus eget est tincidunt auctor quis ut orci.
                            Vestibulum sodales enim sit amet ligula dignissim pretium. </p>
                    </div>
                </div>
            </main>

        </Layout>
    );
};

export default Nosotros;