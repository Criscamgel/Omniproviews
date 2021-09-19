import React, { useState } from 'react';
import './Menu.scss';

export const Menu = () => {


    const [openMenu, setOpenMenu] = useState(false);
    
    const handleMenu = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <>
          <div className="ContMenu">
              <button className="btnMenu rigthGrid" onClick={ handleMenu }>Click</button>
              <div className={ openMenu ? "menu menu--open" : "menu" }></div>
          </div>  
        </>
    )
}
