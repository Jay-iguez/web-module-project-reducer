export const ACTIONS = {
    ADD_ONE: 'add one',
    APPLY_NUMBER: 'apply number',
    CHANGE_OPERATION: 'change operator',
    CLEAR_DISPLAY: 'clear display',
    SET_MEMORY: 'set memory',
    CLEAR_MEMORY: 'clear memory'
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

export const setMemory = () => {
    return ({type:ACTIONS.SET_MEMORY})
}

export const clearMemory = () => {
    return ({type:ACTIONS.CLEAR_MEMORY})
}

export default {
    ACTIONS, addOne, applyNumber
}