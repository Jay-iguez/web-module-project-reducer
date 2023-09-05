export const ACTIONS = {
    ADD_ONE: 'add one',
    APPLY_NUMBER: 'apply number',
    CHANGE_OPERATION: 'change operator',
    CLEAR_DISPLAY: 'clear display',
    SET_MEMORY: 'set memory',
    CLEAR_MEMORY: 'clear memory',
    SELECT_DIGITS: 'select digits',
    CLEAR_DIGITS: 'clear digits',
    CLEAR_TOTAL: 'clear total'
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

export const clearDisplay = () => {
    return ({type:ACTIONS.CLEAR_DISPLAY})
}

export const clearTotal = () => {
    return ({type:ACTIONS.CLEAR_TOTAL})
}

export const setMemory = () => {
    return ({type:ACTIONS.SET_MEMORY})
}

export const clearMemory = () => {
    return ({type:ACTIONS.CLEAR_MEMORY})
}

export const selectDigits = (digit) => {
    return ({type:ACTIONS.SELECT_DIGITS, payload:digit})
}

export const clearDigits = () => {
    return ({type:ACTIONS.CLEAR_DIGITS})
}

export default {
    ACTIONS, addOne, applyNumber, changeOperator, clearDisplay, setMemory, clearMemory, selectDigits, clearDigits, clearTotal
}