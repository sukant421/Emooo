import { INCREASE_COUNT, DECREASE_COUNT } from "./CountActionTypes";

const initialState = {
  count: 0,
};

const CountReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_COUNT: {
      console.log("Increase count called");
      return {
        ...state,
        count: state.count + 1,
      };
    }
    case DECREASE_COUNT: {
      return {
        ...state,
        count: state.count - 1,
      };
    }
    default:
      return state;
  }
};

export default CountReducer;
