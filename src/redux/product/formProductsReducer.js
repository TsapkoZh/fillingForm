import { ADD_PRODUCT, CLEAR } from "./types";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.payload];

    case CLEAR:
      return state = []
    
    default: return state;
  }
} 