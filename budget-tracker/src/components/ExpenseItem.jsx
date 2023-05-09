import React, { useContext } from 'react'
import { TiDelete } from 'react-icons/ti'
import { AppContext } from '../context/AppContext'

const ExpenseItem = (expense) => {
  const { dispatch } = useContext(AppContext)

  const handleDeleteExpense = () => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: expense.id,
    })
  }

  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
        {expense.name}
        <div>
            <span className='badge bg-primary rounded-pill'>
                ${expense.amount}
            </span>
            <TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete>
        </div>
    </li>
  )
}

export default ExpenseItem