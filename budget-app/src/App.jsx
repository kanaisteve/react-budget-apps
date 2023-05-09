import { Button, Stack } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import AddBudgetModal from "./components/AddBudgetModal"
import AddExpenseModal from "./components/AddExpenseModal"
import ViewExpensesModal from "./components/ViewExpensesModal"
import BudgetCard from "./components/BudgetCard"
import UncategorizedBudgetCard from "./components/UncategorizedBudgetCard"
import TotalBudgetCard from "./components/TotalBudgetCard"
import { useState } from "react"
import { useBudgets, UNCATEGORIZED_BUDGET_ID } from "./contexts/BudgetsContext"

function App() {
  const { budgets, getBudgetExpenses } = useBudgets()
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false)
  const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState(false)
  const [viewExpensesModalBudgetId, setViewExpensesModalBudgetId] = useState()

  function openAddExpenseModal(budgetId) {
    setShowAddExpenseModal(true)
    setAddExpenseModalBudgetId(budgetId)
  }

  return (
    <>
      <Container className="my-4">
        <Stack direction="horizontal" gap="2" className="mb-4">
          <h1 className="me-auto">Budgets</h1>
          <Button variant="outline-warning" onClick={() => setShowAddBudgetModal(true)}>Add Budget</Button>
          <Button variant="outline-danger" onClick={openAddExpenseModal}>Add Expense</Button>
        </Stack>

        <div style={
          {
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", 
            gap: "1rem", 
            alignItems: "flex-start"
          }
        }>

          {budgets.map(budget => {
            // get all expenses, add all expense amounts and return it in the amount variable
            const amount = getBudgetExpenses(budget.id).reduce(
              (total, expense) => total + expense.amount,
              0
            )

            return (
              <BudgetCard 
                key={budget.id}
                gray
                name={budget.name} 
                amount={amount} 
                max={budget.max}
                onAddExpenseClick ={() => openAddExpenseModal(budget.id)} 
                onViewExpensesClick ={() => setViewExpensesModalBudgetId(budget.id)}
              >
              </BudgetCard>
            )
          })}

          <UncategorizedBudgetCard 
            onAddExpenseClick = {openAddExpenseModal} 
            onViewExpensesClick ={() => setViewExpensesModalBudgetId(UNCATEGORIZED_BUDGET_ID)}
          />

          <TotalBudgetCard />

        </div>
      </Container>

      <AddBudgetModal 
        show = {showAddBudgetModal} 
        handleClose={() => setShowAddBudgetModal(false)} 
      />

      <AddExpenseModal 
        show = {showAddExpenseModal} 
        defaultBudgetId={addExpenseModalBudgetId}
        handleClose={() => setShowAddExpenseModal(false)} 
      />

      <ViewExpensesModal 
        budgetId={viewExpensesModalBudgetId}
        handleClose={() => setViewExpensesModalBudgetId()} 
      />
    </>
  )
}

export default App
