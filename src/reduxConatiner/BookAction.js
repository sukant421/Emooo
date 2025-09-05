import { BUY_BOOK, SELL_BOOK } from "./BookTypes";

export const purchageBook = () => {
  return {
    type: BUY_BOOK,
  };
};

export const sellBook = () => {
  return {
    type: SELL_BOOK,
  };
};
