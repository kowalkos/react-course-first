import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
function NewExpense()
{
    function onSaveExpenseDataHandler(enteredExpenseData)
    {
        const expenseData={
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData);
    }
    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}/>
    </div>
};
export default NewExpense;