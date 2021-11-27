import ExpenseItem from "./ExpenseItem";
function Expenses(props) {
  return (
    <div>
      {props.data.map((item) => (
        <ExpenseItem title={item.title} date={item.date} amount={item.amount} />
      ))}
    </div>
  );
}
export default Expenses;
