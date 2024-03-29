import style from './relogio.module.scss';

interface props {
    tempo: number | undefined
}

export default function Relogio({tempo=0}:props){
    const horas = Math.floor(tempo/3600) %60;
    const minutos = Math.floor(tempo/60) %60;
    const segundos = tempo%60;
    const [horasDezena, horasUnidade] =  String(horas).padStart(2,'0');
    const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, '0');
    const [segundoDezena, segundoUnidade] =  String(segundos).padStart(2,'0');


    return(
        <>
        <span className={style.relogioNumero}>{horasDezena}</span>
        <span className={style.relogioNumero}>{horasUnidade}</span>
        <span className={style.relogioDivisao}>:</span>
        <span className={style.relogioNumero}>{minutoDezena}</span>
        <span className={style.relogioNumero}>{minutoUnidade}</span>
        <span className={style.relogioDivisao}>:</span>
        <span className={style.relogioNumero}>{segundoDezena}</span>
        <span className={style.relogioNumero}>{segundoUnidade}</span>
        </>
    )
}