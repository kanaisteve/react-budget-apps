import { useRef } from "react"
import { Form, Modal, Button } from 'react-bootstrap'
import { useBudgets } from "../contexts/BudgetsContext"

const AddBudgetModal = ({show, handleClose}) => {
    const nameRef = useRef()
    const maxRef = useRef()
    const { addBudget } = useBudgets()

    function handleSubmit(e) {
        e.preventDefault()
        // add budget
        addBudget({
            name: nameRef.current.value,
            max: parseFloat(maxRef.current.value)
        })
        // close modal
        handleClose()
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Form onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>New Budget</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form.Group className='mb-3'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                            ref={nameRef} 
                            type="text" 
                            required 
                        />
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Maximum Spending</Form.Label>
                        <Form.Control 
                            ref={maxRef}
                            type="number" 
                            min={0} 
                            stop={0.01} 
                            required 
                        />
                    </Form.Group>
                    <div className="d-flex justify-content-end">
                        <Button variant='primary' type="submit">Add</Button>
                    </div>
                </Modal.Body>
            </Form>
        </Modal>
    )
}

export default AddBudgetModal