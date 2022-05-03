import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layaout from '../components/Layaout'


export default function Home() {
  return (
    <div className="">
      
      <Layaout
      pagina='Inicio'
      ><h1 className=''>Desde Inicio</h1>
        <Link href="/nosotros">Ir a nosotros</Link>
        </Layaout>

    </div>
  )
}
