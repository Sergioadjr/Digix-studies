import React from "react";
import { Interface } from "readline";
import { ITarefa } from "../../types/ITarefa";
import Item from './Item';
import style4 from './Lista.module.scss';

interface props {
    tarefas:ITarefa[],
    selecionarTarefa(tarefaSelecioada: ITarefa): void
}

function Lista({tarefas, selecionarTarefa}: props) {
    return (
        <aside className={style4.listaTarefas}>
            <h2> Estudos do dia:</h2>
            <ul>
                {tarefas.map((item) => (
                    <Item 
                    key={item.id} 
                    item={item}
                    selecionarTarefa={selecionarTarefa}/>
                ))}
            </ul>
        </aside>
    )
}
export default Lista;

