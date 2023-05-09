import { createContext, useReducer } from "react"

const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload],
            }
        
        case 'DELETE_EXPENSE':
            // return a new array with the deleted item in it
            return {
                ...state,
                expenses: state.expenses.filter(
                    (expense) => expense.id !== action.payload
                ),
            }
        default:
            return state
    }
} 

const initialState = {
    budget: 8000,
    expenses: [
        {id: 1, name: "Shopping", amount: 250},
        {id: 2, name: "Transportation", amount: 40},
        {id: 3, name: "Fuel", amount: 50},
        {id: 4, name: "Home Care", amount: 600},
        {id: 5, name: "Weekend", amount: 150}
    ]
}


export const AppContext = createContext() // create context: thing our componet imports and get the state

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    return(
        <AppContext.Provider 
            value={{
                budget: state.budget,
                expenses: state.expenses,
                dispatch,
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}