import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import customersReducer from "./customersReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  customers: customersReducer
});
