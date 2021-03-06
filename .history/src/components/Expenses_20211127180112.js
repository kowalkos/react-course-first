import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
function Expenses(props) {
  return (
    <div className="expenses">
      {props.data.map((item) => (
        <ExpenseItem title={item.title} date={item.date} amount={item.amount} />
      ))}
    </div>
  );
}
export default Expenses;
