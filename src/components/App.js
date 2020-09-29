import React, { useState, useEffect } from 'react';
import '../App.css';
import ExpenseForm from './ExpenseForm.js'
import ExpenseList from './ExpenseList.js'
import Alert from './Alert.js'
import { v4 as uuidv4 } from 'uuid';


// const initialExpense = [
//   { id: uuidv4(), amount: 200, charge: 'rent' },
//   { id: uuidv4(), amount: 400, charge: 'car payment' },
//   { id: uuidv4(), amount: 600, charge: 'credit card' },
// ];

const initialExpense = localStorage.getItem("expenses") ? JSON.parse(localStorage.getItem("expenses")) : [];


function App() {

  const [expense, setExpense] = useState(initialExpense);
  const [amount, setAmount] = useState('');
  const [charge, setCharge] = useState('');
  const [alert, setAlert] = useState({ show: false })
  const [edit, setEdit] = useState(false)
  const [id, setId] = useState(0)


  useEffect(() => {
    console.log("use effect called");
    localStorage.setItem("expenses", JSON.stringify(expense))
  },[expense])

  const handleAmount = e => {
    setAmount(e.target.value);
  }
  const handleCharge = e => {
    setCharge(e.target.value);
  }
  const handleSubmit = e => {
    e.preventDefault();
    if (charge !== '' && amount !== 0) {

      if (edit) {
        let tempExpense = expense.map((item) => {
          return item.id == id ? { ...item, amount, charge } : item
        })
        setExpense(tempExpense)
        setEdit(false)
        handleAlert({ type: 'success', text: 'Item updated successfully' })

      } else {
        let newExpense = { id: uuidv4(), amount, charge };
        setExpense([...expense, newExpense])
        handleAlert({ type: 'success', text: 'Item added' })
      }
      setCharge('');
      setAmount('');
    } else {
      //handling error messages
      handleAlert({ type: 'danger', text: 'All fields are required' })

    }

  }

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text })
    setTimeout(() => {
      setAlert({ show: false, type, text })
    }, 3000)
  }

  //handle edit
  const handleEdit = (id) => {
    let editExpense = expense.find(item => item.id === id)
    const { amount, charge } = editExpense
    setAmount(amount)
    setCharge(charge)
    setEdit(true)
    setId(id)
  }

  //handle delete
  const handleDelete = (id) => {
    const expenses = expense.filter(item => item.id !== id)
    setExpense(expenses);
    handleAlert({ type: 'danger', text: 'Item removed!' })

  }

  //handle clear items
  const handleClearItems = () => {
    setExpense([]);
    handleAlert({ type: 'danger', text: 'All Item removed!' })

  }

  let Total = expense.reduce((acc, curr) => {
    return acc += parseInt(curr.amount);
  }, 0)




  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}

      <h2>Budget Calculater</h2>
      <main className="App">
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleCharge={handleCharge}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
          edit={edit}
          id={id}
        />
        <ExpenseList
          expenses={expense}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleClearItems={handleClearItems}
        />
      </main>

      <h1>Total Spending:
    ${Total}
      </h1>

    </>
  );
}

export default App;
