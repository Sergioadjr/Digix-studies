import React from "react";
import Style2 from './Botao.module.scss';

class Botao extends React.Component<{children:any}> {
    render() {
        return (
            <button className={Style2.botao}>
                {this.props.children}
            </button>
        );
    }
}
export default Botao;