import "./ExpenseItem.css";
function ExpenseItem(props) {
  const expenseDate = new Date(2021, 2, 27);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 295.75;

  return (
    <div className="expense-item">
      <div>{expenseDate.toUTCString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{expenseAmount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
