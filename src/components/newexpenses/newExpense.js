
import ExpenseForm from "./expenseForm";
import "./newExpense.css";


const NewExpense = (props) => {

    const getData = (data) => {

        props.childData(data);
        console.log(data);
    };

    return (
        <>
        <div className="new-expense">
            <ExpenseForm getData={getData}/>
        </div>
        </>
    );
};

export default NewExpense;