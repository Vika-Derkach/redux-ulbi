const initialState = {
  customers: [],
};
const ADD_CUSTOMER = "ADD_CUSTOMER";
const DELETE_CUSTOMER = "DELETE_CUSTOMER";
const ADD_MANY_CUSTOMERS = "ADD_MANY_CUSTOMERS";
export const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MANY_CUSTOMERS:
      return {
        ...state,
        customers: [...state.customers, ...action.payload],
      };
    case ADD_CUSTOMER:
      return { ...state, customers: [...state.customers, action.payload] };
    case DELETE_CUSTOMER:
      return {
        ...state,
        customers: state.customers.filter(
          (customer) => customer.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
export const addCustomerAction = (payload) => ({ type: ADD_CUSTOMER, payload });
export const removeCustomerAction = (payload) => ({
  type: DELETE_CUSTOMER,
  payload,
});
export const getManyCustomersAction = (payload) => ({
  type: ADD_MANY_CUSTOMERS,
  payload,
});
