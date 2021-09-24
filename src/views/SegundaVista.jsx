import React from 'react'
import { Encabezado } from '../components/segundavista/Encabezado'
import { Footer } from '../components/segundavista/Footer'
import { Producto } from '../components/segundavista/Producto'

export const SegundaVista = () => {
    return (
        <>
          <div className="contenedorSegundaVista">
            <Encabezado />
            <Producto />
            <Footer />
          </div>
        </>
    )
}
