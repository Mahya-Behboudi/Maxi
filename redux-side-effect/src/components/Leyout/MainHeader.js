import React from "react";
import CardButton from "../Cart/CartButton";
import style from './MainHeader.module.css';
const MainHeader = props =>{
    return(
        <header className={style.header}>
            <h1>ReduxCart</h1>
            <nav>
                <ul>
                    <li>
                        <CardButton/>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
export default MainHeader
