import { useState } from "react"
import BalanceReview from "./components/BalanceReview"
import { BalanceContext, amount } from "./context/BalanceContext"

function App() {
  const [balance, setBalance] = useState(amount)

  const updateBalance = (balance) => {
    setBalance(balance)
  }

  return (
    <div className="App">
      <BalanceContext.Provider value={{balance, updateBalance}}>
        <BalanceReview 
          currency="$"
        />
      </BalanceContext.Provider>
    </div>
  )
}

export default App
