import { 
  ADD_DOCUMENT_HEADER,
  ADD_NUMBER, ADD_TO_WHOM, 
  ADD_FROM_WHOM,
} from "./types";

export const addDate = date => ({
  type: ADD_DOCUMENT_HEADER,
  payload: date,
})

export const addNumber = number => ({
  type: ADD_NUMBER,
  payload: number,
})

export const addToWhom = toWhom => ({
  type: ADD_TO_WHOM,
  payload: toWhom,
})

export const addFromWhom = fromWhom => ({
  type: ADD_FROM_WHOM,
  payload: fromWhom,
})
