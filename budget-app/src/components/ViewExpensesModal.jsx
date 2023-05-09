import { Modal, Stack, Button, Alert } from 'react-bootstrap'
import { useBudgets, UNCATEGORIZED_BUDGET_ID } from "../contexts/BudgetsContext"
import { currencyFormatter } from '../utils'

const ViewExpensesModal = ({budgetId, handleClose}) => {
    const { getBudgetExpenses, budgets, deleteBudget, deleteExpense } = useBudgets()

    const expenses = getBudgetExpenses(budgetId)

    const budget = UNCATEGORIZED_BUDGET_ID === budgetId 
        ? { name: "Uncategoried", id: UNCATEGORIZED_BUDGET_ID } 
        : budgets.find(b => b.id === budgetId)

    return (
        <Modal show={budgetId} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <Stack direction="horizontal" gap="2">
                            <div>Expenses - {budget?.name}</div>
                            {budgetId !== UNCATEGORIZED_BUDGET_ID && (
                                <Button variant="outline-danger btn-sm" onClick={() => {
                                    deleteBudget(budget)
                                    handleClose()
                                }}>Delete</Button>
                            )}
                        </Stack>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                   <Stack direction="vertical" gap="3">
                    {/* check for whether expenses is true and has a length greater than 0  */}
                    {expenses && expenses.length > 0 ? (
                        // if true, map over expenses
                        expenses.map(expense => {
                        return (
                            <Stack direction="horizontal" gap="2" key={expense.id}>
                                <div className="me-auto fs-4">{expense.description}</div>
                                <div className="fs-5">{currencyFormatter.format(expense.amount)}</div>
                                <Button 
                                    variant="outline-danger" 
                                    size="sm"
                                    onClick={() => deleteExpense(expense)}
                                >&times;</Button>
                            </Stack>
                        );
                        })
                    ) : (
                        // return alert if budget does not have expenses
                        <Alert status="warning">
                            No expenses have been added yet. Please add some expenses to see them here.
                        </Alert>
                    )}
                   </Stack>
                </Modal.Body>
        </Modal>
    )
}

export default ViewExpensesModal

// Notes
// if (budgetId != null) show the view expenses modal