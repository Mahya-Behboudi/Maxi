import React from "react";
import style from './Auth.module.css';
import { useDispatch } from "react-redux";
import {authAction} from '../store/authentication'
const Auth = () =>{
    const dispatch = useDispatch();
    const loginHAndler = (e) =>{
        e.preventDefault();
        dispatch(authAction.login())
    }
    return(
        <main className={style.auth}>
            <section>
                <form onSubmit={loginHAndler}>
                    <div className={style.control}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" />
                    </div>
                    <div className={style.control}>
                        <label htmlFor="password">password</label>
                        <input type='password' id="password"/>
                    </div>
                    <button>Login</button>
                </form>
            </section>
        </main>
    );

}
export default Auth;