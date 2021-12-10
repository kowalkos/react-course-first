import React,{useState} from "react";
import Card from "../Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
function Expenses(props) {
  const [filteredYear,setFilteredYear]=useState('2020');
  function filterChangeHandler(selectedYear)
  {
    setFilteredYear(selectedYear);

  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        {props.data.map((item) => (
          <ExpenseItem title={item.title} date={item.date} amount={item.amount} />
        ))}
      </Card>
    </div>
  );
}
export default Expenses;