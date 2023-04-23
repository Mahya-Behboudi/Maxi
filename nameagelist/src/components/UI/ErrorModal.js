import React, { Fragment } from "react";
import Card from "./Card";
import styles from './ErrorModal.module.css';


import Button from "./Button";  
const ErrorModal = props =>{
    return(
        <Fragment>
            <div className={styles.backdrop} onClick={props.onConfirm}/>
                <Card className={styles.modal}>
                    <hearder className={styles.header}>
                        <h2>
                            {props.title}
                        </h2>
                    </hearder>
                    <div className={styles.content}>
                        <p>{props.message}</p>
                    </div>
                    <footer className={styles.actions}>
                        <Button onClick={props.onConfirm}>Okey</Button>
                    </footer>
                </Card>
        
        </Fragment>
    )
};
export default ErrorModal;