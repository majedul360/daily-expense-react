import React,{useState} from "react";
import "./expenseForm.css";

const ExpenseForm = (props) => {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    
    const titleHandler = (event) => {
        setTitle(event.target.value);
    };

    const amountHandler = (event) => {
        setAmount(event.target.value);
    };

    const dateHandler = (event) => {
        setDate(event.target.value);
    };


    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title : title,
            price : amount,
            date : new Date(date)
        }

        props.getData(expenseData);
        console.log(expenseData);

        setTitle('');
        setAmount('');
        setDate('');
    };

    return (
        <>
        <form onSubmit={submitHandler}>
            <div className="expense-form">
                <div className="input-controls">
                    <label>title</label> <br></br>
                    <input type="text" value={title} onChange={titleHandler}></input>
                </div>

                <div className="input-controls">
                    <label>amount</label> <br></br>
                    <input type="number" value={amount} onChange={amountHandler}></input>
                </div>

                <div className="input-controls">
                    <label>date</label> <br></br>
                    <input type="date" value={date} onChange={dateHandler}></input>
                </div>
                <button>new add</button>
            </div>
        </form>
        </>
    );
};


export default ExpenseForm;