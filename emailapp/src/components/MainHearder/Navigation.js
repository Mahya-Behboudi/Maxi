import React,{useContext} from "react";
import AuthContext from "../store/auth-contex";
import classes from './Navigation.module.css';
import Button from "../UI/Button/Button";

const Navigation  =() =>{
    const ctx = useContext(AuthContext)
    

            return (
                <nav className={classes.nav}>
                   <ul>
                {ctx.isLoggedIn && (
                    <li>
                        <a href="/">User</a>
                    </li>
                )}
                {ctx.isLoggedIn && (
                    <li>
                        <a href="/">Admin</a>
                    </li>
                )}
                {ctx.isLoggedIn && (
                    <li>
                        <Button onClick={ctx.onlogout}>Logout</Button>
                    </li>
                )}
            </ul>
        </nav>
            
         
      )
       
    }
export default  Navigation