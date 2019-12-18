import { INPUT_CHANGE, BTN_SUBMIT,GET_USER,GET_SCHOOL } from './actionTypes'

export const getInputChangeAction = (value) => ({ type: INPUT_CHANGE, value })

export const getUserAction = () => ({ type: GET_USER })

export const getSchoolAction = () => ({ type: GET_SCHOOL })
