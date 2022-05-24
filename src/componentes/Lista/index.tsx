import React from "react";
import style4 from './Lista.module.scss';
import Item from './Item'

function Lista() {
    const tarefas = [{ tarefa: "React", tempo: "2:00:00" },
    { tarefa: "Javascript", tempo: "1:00:00" },
    { tarefa: "Java", tempo: "00:30" }]

    return (
        <aside className={style4.listaTarefas}>
            <h2>Estudos do dia:</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item key={index} tarefa={item.tarefa} tempo={item.tempo} />
                ))}
            </ul>
        </aside>
    )
}
export default Lista;

