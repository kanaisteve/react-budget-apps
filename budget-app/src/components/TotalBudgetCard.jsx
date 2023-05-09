import BudgetCard from "./BudgetCard"
import { useBudgets } from "../contexts/BudgetsContext"

const TotalBudgetCard = () => {
    const { budgets, expenses } = useBudgets()

    // get all expenses, add all expense amounts and return it in the amount variable
    const amount = expenses.reduce((total, expense) => total + expense.amount, 0)

    const max = budgets.reduce((total, budget) => total + budget.max, 0)

    // dont show card if we dont have expenses or budget setup
    if (max === 0) return null
            
    return (
      <BudgetCard name="Total" amount={amount} gray max={max} hideButtons />
    )
}

export default TotalBudgetCard