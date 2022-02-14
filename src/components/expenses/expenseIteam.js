import React from "react";
import "./expenseIteam.css";
import ExpenseDate from "./expenseDate";

const ExpenseIteam = (props) => {


    return (
        <div className="expense-iteam">
            <div className="expense-iteam-description">
                <ExpenseDate date = {props.date}/>
                <h2>{props.title}</h2>
            </div>
        <div className="expense-iteam-price">{props.price}</div>
        </div>

    );
};

export default ExpenseIteam;