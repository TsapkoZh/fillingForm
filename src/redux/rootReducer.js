import { combineReducers } from "redux";

import formHeaderReducer from "./documentHeader/formHeaderReducer.js";
import formProductsReducer from "./product/formProductsReducer.js";

export default combineReducers({
	documentHeader: formHeaderReducer,
	products: formProductsReducer,
})