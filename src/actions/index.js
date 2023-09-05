export const ACTIONS = {
    ADD_ONE: 'add one',
    APPLY_NUMBER: 'apply number',
    CHANGE_OPERATION: 'change operator'
}

export const addOne = () => {
    return({type:ACTIONS.ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:ACTIONS.APPLY_NUMBER, payload:number});
}

export const changeOperator = (operator) => {
    return ({type:ACTIONS.CHANGE_OPERATION, payload:operator})
}

export default {
    ACTIONS, addOne, applyNumber
}