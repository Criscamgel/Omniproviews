import React from 'react';
import './App.scss';
import { Encabezado } from './components/Encabezado';
import { Tabs } from './components/Tabs';

export const App = () => {
  return (
    <>
      <Encabezado />
      <div className="contenedorForm">
        <div className=""></div>
          <Tabs />
        <div className=""></div>
      </div>
    </>
  )
}

