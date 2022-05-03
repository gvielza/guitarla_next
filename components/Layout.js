import React from 'react';
import  Head  from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, pagina}) => {
    return (
        <div>
            <Head>
                <title>GuitarLa-{pagina}</title>
                <meta name='description' content='Sitio web de ventas de guitarra'/>
            </Head>
            <Header />
            {children}
            <Footer/>
        </div>
    );
};

export default Layout;