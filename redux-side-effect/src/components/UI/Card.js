import React from "react";
import style from './Card.module.css';
const Card = props =>{
    return(
        <section
            className={`${style.card} ${props.className ? props.className : ""}`}
        >   
            {props.children}
        </section>
    );
};
export default  Card