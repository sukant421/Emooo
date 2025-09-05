import { INCREASE_COUNT, DECREASE_COUNT } from "./CountActionTypes";

export const increaseCount = () => {
  return { type: INCREASE_COUNT };
};

export const decreaseCount = () => {
  return { type: DECREASE_COUNT };
};
