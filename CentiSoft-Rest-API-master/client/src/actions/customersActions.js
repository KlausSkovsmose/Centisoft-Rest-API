import axios from "axios";
import {
  GET_CUSTOMERS,
  LOADING_CUSTOMERS,
  GET_ERRORS,
  CREATE_CUSTOMER
} from "./types";

export const getCustomers = () => dispatch => {
  dispatch(setLoadingCustomers());
  axios
    .get("/api/customers")
    .then(res =>
      dispatch({
        type: GET_CUSTOMERS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_CUSTOMERS,
        payload: {}
      })
    );
};

export const createCustomer = customerData => dispatch => {
  axios
    .post("api/customers/", customerData)
    .then(res => dispatch({ type: CREATE_CUSTOMER, payload: res.data }))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const setLoadingCustomers = () => {
  return {
    type: LOADING_CUSTOMERS
  };
};
