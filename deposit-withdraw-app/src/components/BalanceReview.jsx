import React, { useState, useContext } from 'react'
import TransactionForm from './TransactionForm'
import { BalanceContext } from '../context/BalanceContext'

const BalanceReview = ({ currency }) => {
  const [modalOpen, setModalOpen] = useState('')
  const balanceFromContext = useContext(BalanceContext)

  const onTransactionSubmit = (transactionAmount) => {
    let updatedBalance

    switch (modalOpen) {
      case "Deposit":
        updatedBalance = balanceFromContext.balance + parseInt(transactionAmount)
        break;
      case "Withdraw":
        updatedBalance = balanceFromContext.balance - parseInt(transactionAmount)
        break;
      default:
        break;
    }

    balanceFromContext.updateBalance(updatedBalance)
    setModalOpen('')
  }

  return (
    <div className="balance-review-container light-grey">
        {/* balance info */}
        <div className="balance-info">
            <h1>Balance</h1>
            <p>{currency} {balanceFromContext.balance}</p>
        </div>

        {/* buttons */}
        <div className="buttons-wrapper">
            {modalOpen !== "Deposit" && (<button className="green" onClick={() => setModalOpen('Deposit')}>Deposit</button>)}
            {modalOpen !== "Withdraw" && (<button className="red" onClick={() => setModalOpen('Withdraw')}>Withdraw</button>)}
        </div>

        {/* txn form */}
        {modalOpen !== "" && (<TransactionForm 
          title={modalOpen}
          onSubmit={onTransactionSubmit}  
        />
        )}
    </div>
  )
}

export default BalanceReview