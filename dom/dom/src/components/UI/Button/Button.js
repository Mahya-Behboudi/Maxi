import React from "react";
import style from './Button.module.css';

const Button = props =>{
    console.log('BUTTON IS RUNNIG ');
return (
    <button
        type={props.type || 'button'}
        className={`${style.button} ${props.className}`}
        onClick={props.onClick}
        disabled={props.disabled}
    
    >
        {props.children}
    </button>
)
}
export default React.memo(Button);