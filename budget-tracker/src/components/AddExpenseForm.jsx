import React, { useState, useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { v4 as uuidv4 } from 'uuid'

const AddExpenseForm = () => {
    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')

    const { dispatch } = useContext(AppContext)

    const handleSubmit = (event) => {
        event.preventDefault()
        // alert('name' + name + ' amount' + amount)

        const expense = {
            id: uuidv4(),
            name: name,
            amount: parseInt(amount)
        }

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        })
    }

    return (
        <form className='row' onSubmit={handleSubmit}>
            <div className="col-sm">
                <label for="name">Name</label>
                <input 
                    type="text" 
                    id='name' 
                    className="form-control shadow-none" 
                    required='required' 
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </div>
            <div className="col-sm">
                <label htmlFor="amount">Amount</label>
                <input 
                    type="text" 
                    id='amount' 
                    className="form-control shadow-none" 
                    required='required'
                    value={amount}
                    onChange={(event) => setAmount(event.target.value)}
                />
            </div>
            <div className="col-sm">
                <button 
                    type='submit' 
                    className='btn btn-primary shadow-none mt-3'>
                    Save
                </button>
            </div>
        </form>
    )
}

export default AddExpenseForm