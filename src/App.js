import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { fetchCustomers } from "./asyncActions/customers";
import {
  addCustomerAction,
  removeCustomerAction,
} from "./store/customerReducer";

function App() {
  const dispatch = useDispatch();

  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);
  console.log(cash);

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };
  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer));
  };
  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  };
  return (
    <div className="App">
      <div style={{ fontSize: "3rem" }}>{cash}</div>
      <div style={{ display: "flex" }}>
        <button
          onClick={() => addCash(Number(prompt()))}
          className="waves-effect waves-light btn "
        >
          put money on account
        </button>
        <button
          onClick={() => getCash(Number(prompt()))}
          className="waves-effect waves-light btn "
        >
          {" "}
          get money
        </button>
        <button
          onClick={() => addCustomer(prompt())}
          className="waves-effect waves-light btn "
        >
          Add Customer
        </button>
        <button
          onClick={() => dispatch(fetchCustomers())}
          className="waves-effect waves-light btn "
        >
          Get clients from DB
        </button>
      </div>
      {customers.length > 0 ? (
        <div>
          {customers.map((customer) => (
            <div
              onClick={() => removeCustomer(customer)}
              style={{
                fontSize: "2rem",
                border: "1px solid black",
                padding: "10px",
                marginTop: 5,
              }}
            >
              {customer.name}
            </div>
          ))}
        </div>
      ) : (
        <div style={{ fontSize: "2rem" }}>There is no clients</div>
      )}
    </div>
  );
}

export default App;
