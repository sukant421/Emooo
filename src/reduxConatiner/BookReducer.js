import { BUY_BOOK, SELL_BOOK } from "./BookTypes";

const initialState = {
  numberOfBooks: 20,
};

const BookReducer = (state = initialState, action) => {
  // console.log("state:::::", state);
  switch (action.type) {
    case BUY_BOOK:
      return {
        ...state,
        numberOfBooks: state.numberOfBooks - 1,
      };
    case SELL_BOOK:
      return {
        ...state,
        numberOfBooks: state.numberOfBooks + 1,
      };
    default:
      return state;
  }
};
export default BookReducer;
