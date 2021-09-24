import React from 'react';
import imagenProducto from '../../images/ImageProducto.svg';

import './Producto.scss';
import star from '../../images/Star.svg';
import stepper from '../../images/Stepper.svg';
import productoUno from '../../images/Producto1.svg';
import productoDos from '../../images/Producto2.svg';


export const Producto = () => {
    return (
        <>
          <div className="contProducto">
              <div className="contImage">
                  <img className="imageProducto" src={imagenProducto} alt="" />
              </div>

              <div className="contenidoSecUno">
              <div className="contDescripcion">
                  <p>Pantalones para Dama</p>
                  <p>“The Sideswept Dhoti”</p>
              </div>

              <div className="startDescripcion">
                  <div className="contSecStars">
                    <div className="contStars rigthGrid">
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                    </div>
                    <div className="contCounterStars">
                        <p>4 de 5</p>
                    </div>
                  </div>
              </div>
            <p className="price">
            $139.99 
            </p>
            </div>
            <hr />
            <div className="contenidoSecDos">
                <div className="btnTamano marginSectionButtons">
                    <p  className="valueDesc leftGrid">TAMAÑO</p>
                    <div className="contBotones">
                        <button disabled>S</button>
                        <button className="primary">M</button>
                        <button className="secondary">L</button>
                        <button disabled>XL</button>
                        <button disabled>XXL</button>
                    </div>
                </div>
                <div className="contKit marginSectionButtons">
                <p  className="valueDesc leftGrid">KIT</p>
                <div className="contBotonesKit">
                        <button className="secondary">HOME</button>
                        <button className="primary">AWAY</button>
                        <button className="primary">THIRD</button>
                    </div>
                </div>
                <div className="contStepper marginSectionButtons">
                <p  className="valueDesc leftGrid">CANTIDAD</p>
                <img src={stepper} alt="" />
                </div>
            </div>
            <button className="secondary marginSectionButtons fullWidth">AÑADIR AL CARRITO</button>
            <hr />
            <div className="contDescripcionFull">
                <p className="tituloDescripcionFull">
                Descripción 
                </p>
                <p className="descripcion">
                In eu blandit metus. Phasellus vitae consequat augue. Cras auctor lacus a purus convallis...   
                </p>
                <p  className="linkPalabra leftGrid fontBold">LEER MÁS</p>
            </div>
            <div className="contSugeridos">
                <div className="tituloSugeridos">
                También te podría gustar
                </div>
                <div className="sugeridos">
                    <img src={productoUno} alt="" />
                    <img src={productoDos} alt="" />
                    <img src={productoDos} alt="" />
                </div>
            </div>
          </div>  
        </>
    )
}
