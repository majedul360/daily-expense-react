import React,{useState} from "react";
import Expense from "./components/expenses/expense";
import NewExpense from "./components/newexpenses/newExpense";



function App() {

  const dummyExpense = [
      
          {
            date : new Date(2021, 5, 25),
            title : "bike",
            price : 500
          },
          {
            date : new Date(2021, 5, 20),
            title : "private",
            price : 1000
          },
          {
            date : new Date(2021, 5, 12),
            title : "shopping",
            price : 5000
          },
          {
            date : new Date(2021, 5, 5),
            title : "travel",
            price : 5000
          },
  ];




  const [expense, setExpense] = useState(dummyExpense);



  const childrenData = (expenses) => {
      const finalData = [expenses, ...expense];
      setExpense(finalData);
  }


  return (
    <>
      <NewExpense childData={childrenData}/>
      <Expense expense={expense}/>
       
    </>
  );
};

export default App;
