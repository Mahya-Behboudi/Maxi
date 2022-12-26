
import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expences = [
    { id:'e1',title: 'New TV' , amount: 94.67 , date:new Date(2021,2,28)},
    { id:'e2',title: 'Car Insurance' , amount: 4.67 , date:new Date(2021,3,28)},
    { id:'e3',title: 'Toilet paper' , amount: 120.67 , date:new Date(2021,12,28)},
    { id:'e4',title: ' New Desk' , amount: 998.67 , date:new Date(2021,6,28)}
  ]
  return (
    <div>
      <ExpenseItem title= {expences[0].title} amount= {expences[0].amount} date ={expences[0].date} ></ExpenseItem>
      <ExpenseItem title= {expences[1].title} amount= {expences[1].amount} date ={expences[1].date} ></ExpenseItem>
      <ExpenseItem title= {expences[2].title} amount= {expences[2].amount} date ={expences[2].date} ></ExpenseItem>
      <ExpenseItem title= {expences[3].title} amount= {expences[3].amount} date ={expences[3].date} ></ExpenseItem>
      
    </div>
  );
}

export default App;
