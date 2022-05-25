import { ITarefa } from '../../../types/ITarefa';
import style from './Item.module.scss';

interface props{
    item: ITarefa,
    selecionarTarefa(tarefaSelecioada:ITarefa):void
}

export default function Item({item, selecionarTarefa}: props)
    {
        return (
            <li className={`${style.item} ${item.selecionado ? style.itemSelecionado : ''}`}
            onClick={() =>selecionarTarefa(item)}>
            <h3>{item.tarefa}</h3>
            <span>{item.tempo}</span>
        </li>
    );
}