import React from 'react'
import {MdEdit,MdDelete} from 'react-icons/md'

export const ExpenseItem = ({ expense,handleEdit,handleDelete }) => {

    const { amount, charge,id } = expense

    return (
        <li className="item">
            <div className="info">
                <span className="expense">{charge}</span>
                <span className="amount">{amount}</span>
            </div>
            <div className="">
                 <button className="edit-btn" onClick={()=>handleEdit(id)}>
                     <MdEdit />
                 </button>
                 <button className="delete-btn" onClick={()=>handleDelete(id)}>
                     <MdDelete />
                 </button>
            </div>

        </li>
    )
}

export default ExpenseItem
