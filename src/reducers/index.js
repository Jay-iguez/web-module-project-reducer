import {ACTIONS, addOne, applyNumber} from '../actions/index'

export const initialState = {
    total: 0,
    operation: "+",
    memory: 0
}

const calculateResult = (num1, num2, operation) => {
    switch(operation) {
        case("+"):
            return num1 + num2;
        case("*"):
            return num1 * num2;
        case("-"):
            return num1 - num2;
    }
}

export const reducer = (state, action) => {
    switch(action.type) {
        case(ACTIONS.ADD_ONE):
            return({
                ...state,
                total: state.total + 1
            });

        case(ACTIONS.APPLY_NUMBER):
            return ({ 
                ...state, 
                total: calculateResult(state.total, action.payload, state.operation)
            });
        
        case(ACTIONS.CHANGE_OPERATION):
            return ({
                ...state,
                operation: action.payload
            });
        case ACTIONS.CLEAR_DISPLAY:
            return initialState
        default:
            return state;
    }
}

export default {reducer, initialState}