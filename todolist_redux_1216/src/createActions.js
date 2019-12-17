import { INPUT_CHANGE, SUBMIT, DELETE } from './actionTypes'

export const getInputChangeAction = (value) => ({ type: INPUT_CHANGE, value })
export const getSubmitAction = () => ({ type: SUBMIT })
export const getDeleteAction = (index) => ({ type: DELETE, index })
