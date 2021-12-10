import "./ExpenseForm.css";
function ExpenseForm() {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Title</label>
            <input type='text'/>
        </div>
        <div className="new-expense__control">
            <label>Amount</label>
            <input type='text' min="0.01" step="0.01"/>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;