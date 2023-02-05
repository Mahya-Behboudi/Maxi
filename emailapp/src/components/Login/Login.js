import React, { useEffect, useState ,useReducer , useContext , useRef} from "react";
import Card from "../UI/Card/Card";
import classes from './Login.module.css';
import Button from "../UI/Button/Button";
import AuthContext from "../store/auth-contex";
import Input from "../UI/Input/Input";



//  reducer function is out of the componets function !

const emailReducer = (state , action) =>{
    if(action.type === 'USER_INPUT' ) {
        return {value: action.payoad, isValid: action.payoad.includes('@')}
    }
    if(action.type ===   'INPUT_BLUR') {
        return {value: state.value , isValid: state.value.includes('@')}
    }
    return {value: " " ,isValid:false};
};
const passwordReducer = (state , action) =>{
    if(action.type === "USER_INPUT") {
        return {value: action.paload , isValid:action.paload.trim().length > 6};

    };
    if(action.type === "INPUT_BLUR") {
        return{value: state.value , isValid:state.value.trim().length > 6}
    }
    return {value:"" , isValid:false}

};
const Login = props =>{
    const authCtx = useContext(AuthContext);
//    const [enteredEmail , setEnteredEmail] = useState('');
//    const [emailIsValid , setEmailIsValid] = useState('');
    // const [enteredPassword , setEnteredPassword] = useState('');
    // const [passwordIsValis , setPasswordIsValid] = useState('');
 
    const [formIsValid , setFormIsValid] = useState(false);
    const [emailState , dispatchEmail] = useReducer(emailReducer ,{

        value: "",
        isValid: false,
    });

    const [passwordState , dispatchPassword] = useReducer(passwordReducer, {
        value:"",
        isValid:false
    })

    // //  instead of notaion dependency using destructuring:  =>
    //   const {isValid :emailIsValid} = emailState;
    //   const {isValid :passworIsVali}  = passwordState;
    useEffect(() =>{
        const  identifier = setTimeout(()=>{
            console.log("checking Validity !");
            setFormIsValid(emailState.isValid && passwordState.isValid)
        },500);
        return () =>{
            console.log("cleanUP");
            clearTimeout(identifier);
        };
    }, [emailState.isValid , passwordState.isValid])
    const emailChangeHandler = event => {
        dispatchEmail({type: 'USER_INPUT' ,payoad: event.target.value});
        // setFormIsValid(emailState.isValid && passwordState.isValid)

    }
    const passwordChangeHandler = event =>{
        dispatchPassword({type:"USER_INPUT" , paload:event.target.value});
        // setFormIsValid(emailState.isValid && passwordState.isValid)

    };
    const validateEmailHandler = () =>{
        dispatchEmail({type:'INPUT_BLUR'})
    };
    const validatePasswordHandler =()=>{
        // setPasswordIsValid(passwordState.trim().length > 6 )
        dispatchPassword({type:"INPUT_BLUR"})
    };
    const submitHandler = event =>{
        event.preventDefault();
        authCtx.onLogin(emailState.value , passwordState.value);
        
    }
    return(
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                    <Input 
                    id="email" 
                    label="E-mail" 
                    type="email"
                    isValid={emailState.isValid } 
                    value={emailState.value}
                    onChange={emailChangeHandler}
                    onBlur={validateEmailHandler}/>
                    <Input
                        label="password"
                        isValid={passwordState.isValid}
                        type="password"
                        id="password"
                        value={passwordState.value}
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler}
                    />
            
                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    )
}
export default Login;