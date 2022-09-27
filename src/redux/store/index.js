import { createStore } from "redux";
import { lockerReducer } from "../reducer/lockerReducer";

const store = createStore(lockerReducer);

export default store;