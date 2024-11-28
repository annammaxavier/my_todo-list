"use client";

import PropTypes from "prop-types";
export default function Button(props){
    return <button className={props.class} onClick={props.handleClick} >{props.btnText}</button>
}

Button.PropTypes = {
    class:PropTypes.string,
    handleClick:PropTypes.func,
    btnText:PropTypes.string
}