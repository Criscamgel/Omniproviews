import React from 'react'

import { Encabezado } from '../components/primeravista/Encabezado';
import { Tabs } from '../components/primeravista/Tabs';

export const PrimeraVista = () => {
    return (
        <>  
            <div className="contenedorPrimeraVista">
                    <Encabezado />
                    <div className="contenedorForm">
                        <div className=""></div>
                            <Tabs />
                        <div className=""></div>
                    </div>
            </div>
        </>
    )
}
