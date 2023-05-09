import React from 'react'

const AddTransaction = () => {
  return (
    <div className="form-wrapper">
        {/* Add Income */}
        <form >
            <div className="input-group income">
                <input type="text" placeholder='Add Income...' autoComplete="off"  />
                <input type="number" placeholder='Amount' autoComplete="off"  />
                <input type="submit" placeholder='Submit'  />
            </div>
        </form>

        {/* Add Expense */}
        <form >
            <div className="input-group expense">
                <input type="text" placeholder='Add Expense...' autoComplete="off"  />
                <input type="number" placeholder='Amount' autoComplete="off"  />
                <input type="submit" placeholder='Submit'  />
            </div>
        </form>
    </div>
  )
}

export default AddTransaction