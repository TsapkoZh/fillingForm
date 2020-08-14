import { CLEAR } from "./types";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case CLEAR:
      return state = []

    default: return state;
  }
} 