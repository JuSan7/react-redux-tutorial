import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer } from "./productsReducer";

const rootReducer = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  // Add more reducers as needed
});
export default rootReducer;
