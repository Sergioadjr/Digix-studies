import React from 'react';
import Cronometro from '../componentes/Cronometro';
// import Botao from './componentes/Botao';
import Formulario  from '../componentes/Formulario';
import Lista from '../componentes/Lista';
import StyleApp from './App.module.scss';




function App(){
    
    return (
        <div className={StyleApp.AppStyle}>
        <Formulario/>
        <Lista/>
        <Cronometro/>
        </div>
        );
}
export default App;
