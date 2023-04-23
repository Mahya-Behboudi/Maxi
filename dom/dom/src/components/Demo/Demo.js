import React from "react";
import style from './Demo.module.css';
 

const Demo = props =>{
    const sortedList  = props.items.sort((a,b) => a-b);
    return(
        <div className={style.list}>
            <h2>{props.titke}</h2>
            <ul>
                {sortedList.map((item)=>(<li key={item}>{item}</li>))}
            </ul>
        </div>
    );
};
export default React.memo(Demo);