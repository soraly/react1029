import { INPUT_CHANGE, CHECKBOX_CHANGE } from './actionTypes'

export const getInputChangeAction = (value)=>({type: INPUT_CHANGE,value})
export const getStockChangeAction = (value)=>({type: CHECKBOX_CHANGE,value})