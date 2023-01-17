import React,{useState} from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import '../Expenses/Expenses.css';



function Expenses(props){
  const  [filterYear , setFilterYear] = useState('2023');
  const filterChangeHandler = selectedYear =>{
    setFilterYear(selectedYear);
  };
  const filterExpenses = props.item.filter(expense =>{
    return expense.date.getFullYear().toString() === filterYear;
  });

  
      return (
        <li>
          <Card className="expenses">
            <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler}/>
            <ExpensesChart expenses={filterExpenses}/>
            <ExpensesList items ={filterExpenses}/>
          </Card>
        </li>
      );
}
export default Expenses