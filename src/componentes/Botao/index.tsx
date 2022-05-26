import React from "react";
import { findRenderedComponentWithType } from "react-dom/test-utils";
import Style2 from './Botao.module.scss';

class Botao extends React.Component<{
    children:any,
    type?:"button" | "submit" | "reset" | undefined,
    onClick?: () => void
}> {
    render() {
        const {type = "button", onClick } = this.props;
        return (
            <button onClick={onClick} type={type} className={Style2.botao}>
                {this.props.children}
            </button>
        );
    }
}
export default Botao;