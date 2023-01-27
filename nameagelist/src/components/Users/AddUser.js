import React, { useState ,useRef } from "react";
import Card from "../UI/Card";
import style from './Add.module.css';
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
const AddUser  =(props) =>{
   
    const [error , setError] = useState();
    const enteredUserAgeRef = useRef();
    const enteredUserNameRef = useRef();
    const addUseHandler = (event)=>{
        const enteredUserAge = enteredUserAgeRef.current.value;
        const enteredUserName = enteredUserNameRef.current.value;
        console.log(enteredUserAge);
        console.log(enteredUserName);
        event.preventDefault();
        if(enteredUserName.trim().length === 0 || enteredUserAge.trim().length ===0) { 
           setError({
                title:"Invalid input",
                message:"Please enter a valid name and age (non-empty values)"     
             });
             return;

        }
        if(+enteredUserAge < 1 ) {
            setError({
                title:"Invalid age",
                message:"Please enter a valid age (> 0 )"     
             });
             return;
        }
        props.onAddUser(enteredUserName , enteredUserAge);
        enteredUserAgeRef.current.value = '';
        enteredUserNameRef.current.value = '';
    };
   
    const errorHandler  = (event) =>{
    
        setError(null);
    }
        return (
       <>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className={style.input} >
                <form onSubmit={addUseHandler}>
                    <label htmlFor="username">
                        Username
                    </label>
                    <input type="text" id="username"  ref={enteredUserAgeRef}/>
                    <label htmlFor="age">
                        Age (Years)
                    </label>
                    <input type="number" id="age"  ref={enteredUserNameRef}/>
                    <Button type="submit">Add User</Button>
                </form>
          </Card>
       </>
            
        
    )
};
export default AddUser;