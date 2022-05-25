import React from "react";
import { findRenderedComponentWithType } from "react-dom/test-utils";
import Style2 from './Botao.module.scss';

class Botao extends React.Component<{
    children:any,
    type?:"button" | "submit" | "reset" | undefined

}> {
    render() {
        const {type = "button" } = this.props;
        return (
            <button type={type} className={Style2.botao}>
                {this.props.children}
            </button>
        );
    }
}
export default Botao;