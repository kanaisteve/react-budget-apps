import React, { useContext } from 'react'
import ExpenseItem from './ExpenseItem'
import { AppContext } from '../context/AppContext'

const ExpenseList = () => {
    const { expenses } = useContext(AppContext)

    return (
        <ul className='list-group'>
            {console.log(expenses)}
            {expenses.map((expense) => {
                return (
                    <ExpenseItem 
                    key={expense.id}
                    id={expense.id}
                    name={expense.name} 
                    amount={expense.amount} 
                />
                )
            })}
        </ul>
    )
}

export default ExpenseList