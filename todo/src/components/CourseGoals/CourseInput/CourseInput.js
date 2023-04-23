import React, { useState } from "react";
import Button from '../../UI/Button';
import styled from 'styled-components'
const Formcontral = styled.div`
    margin: 0.5rem 0;
& label {
    font-weight: bolder;
    color: ${props => (props.invalidity ? 'red': 'green')};
    display: block;
    margin-bottom: 0.5rem;
}
& input {
    display: block;
    width: 100%;
    border: 1px solid ${props => (props.invalidity ? 'red' : 'green')};
    font: inherit;
    line-height: 1.5rem;
    background: ${props => (props.invalidity ? "salmon":'transparent')};
    padding:  0 0 0.25rem;

}
& nput:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
}
invalid input{
    color: red;
    background: salmon;
}
.invalid label {
    color: red;

}`

const CourseInput = (props) =>{
    const [enteredValue , setEnteredValue]= useState('');
    const [valid , setValid] = useState(true);
    const goalInputChangeHandler = (event) => {
        setEnteredValue(event.target.value);
        if(event.target.value.trim().length > 0) {
            setValid(true);
        }
        console.log(event);

    };
    const formSubmitHandler = (event) =>{
        event.preventDefault();
        setEnteredValue(' ');
        if (enteredValue.trim().length ===  0 ){
            setValid(false);
            return;
        };
        props.onAddGoal(enteredValue);

    };
        return(
        <form onSubmit={formSubmitHandler}>
            <Formcontral invalidity={!valid}>
                <label>Course Goal</label>
                <input  type="text" onChange={goalInputChangeHandler}/>
            </Formcontral>
            <Button type='submit'>Add Goal</Button>
        </form>
    );
}
export default CourseInput;