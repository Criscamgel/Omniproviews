import React from 'react';
import './Encabezado.scss';

import logo from '../../images/Logo.svg';
import lupa from '../../images/Search.svg';
import corazon from '../../images/Hearth.svg';
import bolsa from '../../images/shopping-bag.svg';
import barras from '../../images/Open.svg';

export const Encabezado = () => {
    return (
        <>
          <div className="contenedorEnc">
            <div className="contLogo leftGrid">
                <img src={logo} alt="" />
            </div>
            <div className="contItemsImg rigthGrid">
                <div className="itemUno">
                    <img src={lupa} alt="" />
                </div>
                <div className="itemDos">
                    <img src={corazon} alt="" />
                </div>
                <div className="itemTres">
                    <img src={bolsa} alt="" />
                </div>
                <div className="itemMenuHamburguesa">
                    <img src={barras} alt="" />
                </div>
            </div>
          </div>  
        </>
    )
}
