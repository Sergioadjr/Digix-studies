import Botao from '../Botao'
import Relogio from './Relogio';
import Style from './cronometro.module.scss';
import { tempoParaSegundos } from '../../common/utils/date';


export default function Cronometro() {
    console.log('conversao', tempoParaSegundos);
    return (
        <> <div className={Style.cronometro}>
            <p className={Style.titulo}> Escolha um card e inicie o cronometro</p>
            <div className={Style.relogioWrapper}>
                <Relogio />
            </div>
            <Botao>
                Começar
            </Botao>
        </div>
        </>
    );
}