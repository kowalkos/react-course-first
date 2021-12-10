import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
function NewExpense(props)
{
    function onSaveExpenseDataHandler(enteredExpenseData)
    {
        const expenseData={
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpenseHandler(expenseData);
    }
    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}/>
    </div>
};
export default NewExpense;