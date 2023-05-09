import React from 'react'
import Header from './components/Header'
import Balance from './components/Balance'
import './App.css'
import AddTransaction from './components/AddTransaction'
import IncomeList from './components/IncomeList'

function App() {

  return (
    <div className="container">
      <div className="app-wrapper">
        <Header />
        <Balance />
        <AddTransaction />
        <IncomeList />
      </div>
    </div>
  )
}

export default App
