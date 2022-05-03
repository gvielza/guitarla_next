import React from 'react';
import Link from 'next/dist/client/link';
import Layaout from '../components/Layaout';

const Nosotros = () => {
    return (
        <Layaout
        pagina='Nosotros'>
            <h1>Desde nosotros</h1>
            <Link href="/">Ir a Home</Link>
        </Layaout>
    );
};

export default Nosotros;