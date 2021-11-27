import ExpenseItem from "./ExpenseItem";
function Expenses(props) {
  return (
    <div>
      {props.map((item, index) => (
        <ExpenseItem title={item.title} date={item.date} amount={item.amount} />
      ))}
    </div>
  );
}
export default Expenses;
