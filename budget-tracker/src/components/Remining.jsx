import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Remining = () => {
  const { expenses, budget } = useContext(AppContext)

  // use reduce method to get all the amounts from each expenses and add them together
  // note: 0 indicates the starting value
  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total += item.amount)
  }, 0)

  const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success'

  return (
    <div className={`alert ${alertType}`}>
       <span> Remining: ${budget - totalExpenses}</span>
    </div>

  )
}

export default Remining