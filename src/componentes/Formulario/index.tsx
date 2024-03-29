import { v4 as uuidv4 } from 'uuid';
import React from "react";
import { ITarefa } from "../../types/ITarefa";
import Botao from "../Botao";
import style3 from './Formulario.module.scss';

class Formulario extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}> {
    state = {
        tarefa: "",
        tempo: "00:00",
    }
    adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        this.props.setTarefas(tarefasAntigas => [
            ...tarefasAntigas,
            {
                ...this.state,
                selecionado: false,
                completado: false,
                id: uuidv4()
            }
        ]);
        this.setState({
            tarefa: "",
            tempo: "00:00"
        })

    };
    render() {
        return (
            <form className={style3.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style3.inputContainer}>
                    <label htmlFor="tarefa"> Adicione um novo estudo: </label>
                    <input type="text"
                        name="tarefa"
                        id="tarefa"
                        value={this.state.tarefa}
                        onChange={evento => this.setState({
                            ...this.state, tarefa: evento.target.value
                        })}
                        required
                        placeholder="O que você quer estudar?" /> </div>

                <div className={style3.inputContainer}>
                    <label htmlFor="tempo">O tempo da tarefa será de:</label>
                    <input
                        type="time"
                        step='1'
                        value={this.state.tempo}
                        onChange={evento => this.setState({
                            ...this.state, tempo: evento.target.value
                        })}
                        name="tempo"
                        id="tempo"
                        min="00:00:00"
                        max="02:30:00"
                        required /></div>
                <Botao type="submit">
                    Adicionar
                </Botao>
            </form>
        );
    }
}
export default Formulario;