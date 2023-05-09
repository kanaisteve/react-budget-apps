import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const ExpenseTotal = () => {
  const { expenses } = useContext(AppContext)

  // use reduce method to get all the amounts from each expenses and add them together
  // note: 0 indicates the starting value
  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total += item.amount)
  }, 0)

  return (
    <div className='alert alert-primary'>
        <span>Total Expenses: ${totalExpenses}</span>
    </div>
  )
}

export default ExpenseTotal