import ExpenseItem from "./ExpenseItem";
function Expenses(props) {
  return (
    <div>
      {props.data.map((item, index) => (
        <ExpenseItem title={item.title} date={item.date} amount={item.amount}></ExpenseItem>
      ))}
    </div>
  );
}
export default Expenses;
