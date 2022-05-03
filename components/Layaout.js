import React from 'react';
import  Head  from 'next/head';
import Header from './Header';

const Layaout = ({ children, pagina}) => {
    return (
        <div>
            <Head>
                <title>GuitarLa-{pagina}</title>
                <meta name='description' content='Sitio web de ventas de guitarra'/>
            </Head>
            <Header />
            {children}
        </div>
    );
};

export default Layaout;