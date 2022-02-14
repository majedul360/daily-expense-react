import './expense.css';
import ExpenseIteam from './expenseIteam';

const Expense = (props) => {
    return (
        <>
         <div className='expenses'>

        {

            props.expense.map(
                expenseData => (
                    <ExpenseIteam
                        date ={expenseData.date}
                        title ={expenseData.title}
                        price ={expenseData.price}
                    />

                )
            )
        }
         </div>
        </>
    );
};

export default Expense;