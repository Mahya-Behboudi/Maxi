import React from "react";
import style from './Header.module.css';
import { useDispatch, useSelector } from "react-redux";
import {authAction} from '../store/authentication';

const Header = props =>{
    const dispatch = useDispatch();
    const isAuth = useSelector(state=>state.auth.isAuthenticates);
    const authHandler = e=> {
        e.preventDefault();
        dispatch(authAction.logout())
    }
    return(
        <header className={style.header}>
            <h1>Redux Auth!</h1>
            {isAuth && <nav>
                <ul>
                    <li><a href='/'/>My products</li>
                    <li><a href="/"/>My sales</li>
                    <li>
                        <button onClick={authHandler}>Logout</button>
                    </li>
                </ul>
            </nav>}
        </header>
    )
}
export default Header;