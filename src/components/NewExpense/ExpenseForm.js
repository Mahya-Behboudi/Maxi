import React , {useState} from "react";
import './ExpenseForm.css';

const ExpenseForm= (props) =>{
    // multi States are here but( we an have) one object initaial useState!
    const [enteredTitle , setEnteredTitle]=useState('');
    const [enteredAmount , setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');

    
    const titleChangeHandler =(event)=>{
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = (event) =>{ 
        setEnteredAmount(event.target.value)
    };
    const dateChangeHandler = (event) =>{ 
        setEnteredDate(event.target.value)
    };
    const submitHandler=(event)=>{
        event.preventDefault();
        const expenseData = {
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        };
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
        // console.log(expenseData);
        props.onSavedExpenseForm(expenseData);

    };
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler} placeholder="Title"/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler} placeholder="amount of title"/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2023-01-15' value={enteredDate} onChange={dateChangeHandler} placeholder="the Date"/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit" >Add Expense</button>
            </div>
        </form>
    )
}
export default ExpenseForm;
