import React, { useState } from 'react';
import './Tabs.scss';

export const Tabs = () => {

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
      };

    return (
        <>
          <div className="contenedorTab">
              <div className="tabHeader">
                  <div className={ toggleState === 1 ? "tabs active-tabs-left" : "tabs" }
                  onClick={() => toggleTab(1)}>INGRESO</div>
                  <div className={toggleState === 2 ? "tabs active-tabs-rigth" : "tabs"}
                    onClick={() => toggleTab(2)}>REGISTRO</div>
              </div>
              <div className="tabContent">
                    <div className={toggleState === 1 ? "content  active-content" : "content"}>

                    <form action="">  
                        
                      <div className="material-form-field">
                        <input type="email" placeholder="ejemplo@email.com" required name="text" id="field-text"/>
                        <label className="material-form-field-label" for="field-text">EMAIL</label>
                      </div>

                      <div className="material-form-field">
                        <input type="password" placeholder="Ejemplo" required name="text" id="field-text"/>
                        <label className="material-form-field-label" for="field-text">CONTRASEÑA</label>
                      </div>

                      <div className="contSwitch">
                        <label className="switch rigthGrid">
                          <input type="checkbox"/>
                          <span className="slider round"></span>
                        </label>
                        <p>Suscribirse al Newsletter</p>
                      </div>

                      <button className="btnSubmit">Ingreso</button>
                      <a href="">
                        <p className="linkParrafo">Olvide Contraseña</p>
                      </a>

                    </form>

                    </div>
                    <div className={toggleState === 2 ? "content  active-content" : "content"}>
                    <form action="">  
                        
                        <div className="material-form-field">
                          <input type="text" placeholder="Camilo" required name="text" id="field-text"/>
                          <label className="material-form-field-label" for="field-text">NOMBRE</label>
                        </div>

                        <div className="material-form-field">
                          <input type="text" placeholder="Pérez" required name="text" id="field-text"/>
                          <label className="material-form-field-label" for="field-text">APELLIDO</label>
                        </div>

                        <div className="material-form-field">
                          <input type="email" placeholder="ejemplo@email.com" required name="text" id="field-text"/>
                          <label className="material-form-field-label" for="field-text">EMAIL</label>
                        </div>

                        <div className="material-form-field">
                          <input type="password" placeholder="Ejemplo" required name="text" id="field-text"/>
                          <label className="material-form-field-label" for="field-text">CONTRASEÑA</label>
                        </div>
  
                        
  
                        <button className="btnSubmit">Registro</button>
  
                      </form>
                    </div>
              </div>
          </div>  
        </>
    )
}
