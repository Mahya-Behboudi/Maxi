import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
const NewExpense =(props) => {
    const savedExpenseForm =(enteredExpenseData)=>{
        const expenseData ={
            ...enteredExpenseData,
            id:Math.random().toFixed(2).toString(),
        };
        console.log(expenseData);
        props.onAddExpenseData(expenseData);
    };

    return (
        <div className="new-expense">
            <ExpenseForm  onSavedExpenseForm={savedExpenseForm}/>
        </div>
    )
}
export default NewExpense