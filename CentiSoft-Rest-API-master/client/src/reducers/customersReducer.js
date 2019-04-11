import {
  GET_CUSTOMERS,
  LOADING_CUSTOMERS,
  CREATE_CUSTOMER
} from "../actions/types";

const initialState = {
  customers: null,
  loading: false,
  openModel: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_CUSTOMERS:
      return {
        ...state,
        loading: true,
        openModel: false
      };
    case GET_CUSTOMERS:
      return {
        ...state,
        customers: action.payload,
        loading: false,
        openModel: false
      };
    case CREATE_CUSTOMER:
      return {
        ...state,
        customers: action.payload
      };
    default:
      return state;
  }
}
