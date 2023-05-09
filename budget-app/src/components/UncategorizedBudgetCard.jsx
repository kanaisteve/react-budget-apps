import BudgetCard from "./BudgetCard"
import { useBudgets, UNCATEGORIZED_BUDGET_ID } from "../contexts/BudgetsContext"

const UncategorizedBudgetCard = (props) => {
    const { budgets, getBudgetExpenses } = useBudgets()
    // get all expenses, add all expense amounts and return it in the amount variable
    const amount = getBudgetExpenses(UNCATEGORIZED_BUDGET_ID).reduce(
      (total, expense) => total + expense.amount,
      0
    )

    // dont show card if amount = 0
    if (amount === 0) return null
            
    return (
      <BudgetCard name="Uncategorized" amount={amount} gray {...props} />
    )
}

export default UncategorizedBudgetCard