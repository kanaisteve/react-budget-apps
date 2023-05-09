import React from 'react'

const Balance = () => {
  return (
    <div className="balance">
        <h2>Your Balance</h2>
        <h5>$0.00</h5>
        <div className="income-expense">
            {/* Incomes */}
            <div className="plus">
                <h3>Income</h3>
                <p>+$0.00</p>
            </div>

            {/* Expenses */}
            <div className="minus">
                <h3>Expenses</h3>
                <p>-$0.00</p>
            </div>
        </div>
    </div>
  )
}

export default Balance