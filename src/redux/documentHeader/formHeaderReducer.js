import { ADD_DOCUMENT_HEADER, ADD_NUMBER, ADD_TO_WHOM, ADD_FROM_WHOM } from "./types";

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_DOCUMENT_HEADER:
      return {...state,
        date: action.payload
      }

    case ADD_NUMBER:
      return {...state,
        number: action.payload
      }

    case ADD_TO_WHOM:
      return {...state,
        toWhom: action.payload
      }

    case ADD_FROM_WHOM:
      return {...state,
        fromWhom: action.payload
      }

    default: return state;
  }
} 