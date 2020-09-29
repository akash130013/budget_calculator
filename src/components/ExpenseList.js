import React from 'react'
import Item from './ExpenseItem.js'
import { MdDelete } from "react-icons/md";



function ExpenseList({ expenses, handleDelete, handleEdit, handleClearItems }) {

    return (
        <>
            Expense List
            <ul className="list">
                {expenses.map((expense) => {
                    return <Item key={expense.id}
                        expense={expense}
                        handleDelete={handleDelete}
                        handleEdit={handleEdit}
                    />
                })}
            </ul>
            {expenses.length > 0 && <button className="btn" onClick={handleClearItems} >Clear
            <MdDelete className="btn-icon" />
            </button>}
        </>
    )
}

export default ExpenseList

