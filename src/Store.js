import { legacy_createStore as createStore, combineReducers } from "redux";

import BookReducer from "./reduxConatiner/BookReducer";
import CountReducer from "./count/CountReducer";

const rootStore = combineReducers({ books: BookReducer, count: CountReducer });

const store = createStore(rootStore);
export default store;
