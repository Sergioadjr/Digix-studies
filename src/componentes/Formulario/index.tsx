import React from "react";
import Botao from "../Botao";
import style3 from './Formulario.module.scss';

class Formulario extends React.Component {
    render() {
        return (
            <form className={style3.novaTarefa}>
                <div className={style3.inputContainer}>
                    <label htmlFor="tarefa"> Adicione um novo estudo: </label>
                    <input type="text" name="tarefa" id="tarefa" placeholder="O que você quer estudar" required /> </div>

                <div className={style3.inputContainer}><label htmlFor="tempo">O tempo da tarefa será de:</label>
                    <input type="time" name="tempo" id="tempo" min="0:00:00" max="1:30:00" required /></div>
                <Botao>
                    Adicionar
                </Botao>
            </form>
        );
    }
}
export default Formulario;