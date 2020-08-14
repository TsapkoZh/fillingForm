import { ADD_PRODUCT, CLEAR } from "./types";

export const addProduct = products => ({
  type: ADD_PRODUCT,
  payload: products,
})

export const clearDoc = () => ({
  type: CLEAR
})