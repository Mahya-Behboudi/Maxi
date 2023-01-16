import React , {useState} from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import './App.css'
// import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  { id:'e1',title: 'New TV' , amount: 94.67 , date:new Date(2021,2,28)},
  { id:'e2',title: 'Car Insurance' , amount: 4.67 , date:new Date(2021,3,28)},
  { id:'e3',title: 'Toilet paper' , amount: 120.67 , date:new Date(2021,12,28)},
  { id:'e4',title: ' New Desk' , amount: 998.67 , date:new Date(2021,6,28)}
]
function App() {
  const [expenses , setExpenses]=useState(DUMMY_EXPENSES);
  const addExpenseDataHandler = (expense)=>{
   setExpenses((prevExpenses)=>{
    return [expense , ...prevExpenses];
   })
  };

 
  return (
    <div>
    <NewExpense onAddExpenseData={addExpenseDataHandler}></NewExpense>
     <Expenses item={expenses}></Expenses>
    </div>
  );
}
  
export default App;
