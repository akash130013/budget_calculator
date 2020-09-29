import React from 'react'
import { MdSend } from 'react-icons/md'

export const ExpenseForm = ({ charge, amount, handleCharge, handleAmount, handleSubmit,edit,id }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-center">
                <div className="form-group">
                    <label htmlFor="charge">Charge</label>
                    <input
                        type="text"
                        id="charge"
                        name="charge"
                        className="form-control"
                        placeholder="e.q. rent"
                        value={charge}
                        onChange={handleCharge}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="amount">amount</label>
                    <input
                        type="text"
                        id="amount"
                        name="amount"
                        className="form-control"
                        placeholder="e.q. 100"
                        value={amount}
                        onChange={handleAmount}
                    />
                </div>
            </div>
            <button type="submit" className="btn">
               {edit ? 'Edit' : 'Submit'}  
                <MdSend className="btn-icon" />
            </button>
        </form>
    )
}

export default ExpenseForm