import { legacy_createStore as createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.getElementById("number"); // 수량
const quantity = document.getElementById("quantity"); // 페이지 하단에 총 수량
const totalPrice = document.getElementById("total"); // 페이지 하단에 총 가격

const PRICE = 17500;

// State Change
const addNumber = () => {
  store.dispatch({ type: "ADD" });
};

// State Change
const substractNumber = () => {
  store.dispatch({ type: "SUBSTRACT" });
};

//Reducer
const countReducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD":
      minus.disabled = false;
      return state + 1;
    case "SUBSTRACT":
      plus.disabled = false;
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(countReducer);

const handleWrite = () => {
  number.innerHTML = store.getState();
  quantity.innerHTML = store.getState();
  totalPrice.innerHTML = store.getState() * PRICE;
  console.log(store.getState());
};

//update UI
store.subscribe(handleWrite);

// Event
plus.addEventListener("click", addNumber);
minus.addEventListener("click", substractNumber);
