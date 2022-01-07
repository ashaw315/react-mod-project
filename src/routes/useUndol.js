import React, { useReducer } from "react";


const initialState = {
    history: [],
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'undo' : {
            const isEmpty = !state.history.length
            if(isEmpty) return state
            return {...state.history[state.history.length -1]}
        }
        default:
            return state
    }
}

const useUndo = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const onSubmit = (e) => {
        console.log("submitted")
    }
    const undo = () => {
        dispatch({type: 'undo'})
    }
    return {
        ...state,
        onSubmit,
        undo,
    }
}
export default useUndo;