import React from 'react';
import { Menu } from './Menu';

import './Encabezado.scss';

export const Encabezado = () => {
    return (
        <>
         <Menu />
         <div className="ContLogo">
             <div className="logo centerGrid">R</div>
         </div>   
        </>
    )
}
