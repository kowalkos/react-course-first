import Card from "../Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
    return ( <
        div >
        <
        ExpensesFilter / >
        <
        Card className = "expenses" > {
            props.data.map((item) => ( <
                ExpenseItem title = { item.title }
                date = { item.date }
                amount = { item.amount }
                />
            ))
        } <
        /Card> <
        /div>
    );
}
export default Expenses;