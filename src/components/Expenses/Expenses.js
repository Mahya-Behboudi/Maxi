import React,{useState} from "react";
import ExpenseItem from "../Expenses/ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import '../Expenses/Expenses.css';
function Expenses(props){
  const  [filterYear , setFilterYear] = useState('2023');
  const filterChangeHandler = selectedYear =>{
    setFilterYear(selectedYear);
  };
    
      return (
        <Card className="expenses">
          <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler}/>
          {props.item.map((expense)=>(<ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>))}
        </Card>
      );
}
export default Expenses