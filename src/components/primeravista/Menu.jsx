import React, { useEffect, useState } from 'react';
import './Menu.scss';

export const Menu = () => {


    const [openMenu, setOpenMenu] = useState(false);
    const [menus, setMenus] = useState([]);

    useEffect(() => {
        getMenus();
    }, [])
    
    const handleMenu = () => {
        setOpenMenu(!openMenu);
    }

    const getMenus = async() => {
        const url = 'https://demo0453307.mockable.io/menu';
        const resp = await fetch(url);
        const { data } = await resp.json();
        await setMenus(data);
    }

    return (
        <>
          <div className="ContMenu">
              <div className={ openMenu ? "btnMenu--open rigthGrid" : "btnMenu rigthGrid" } onClick={ handleMenu }></div>
              <div className={ openMenu ? "menu menu--open" : "menu" }>
                  { 
                    menus.length > 0 && menus.map(menu => (<div className="contItem"><div className="bullet"></div><li key={ menu.id }>{ menu.name }</li></div>)) 
                  }
              </div>
          </div>  
        </>
    )
}
