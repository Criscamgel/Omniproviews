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
                  <div className={ toggleState === 1 ? "tabs active-tabs" : "tabs" }
                  onClick={() => toggleTab(1)}>INGRESO</div>
                  <div className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}>REGISTRO</div>
              </div>
              <div className="tabContent">
                    <div className={toggleState === 1 ? "content  active-content" : "content"}>
                        <h2>Contenido 1</h2>
                    </div>
                    <div className={toggleState === 2 ? "content  active-content" : "content"}>
                    <h2>Contenido 2</h2>
                    </div>
              </div>
          </div>  
        </>
    )
}
