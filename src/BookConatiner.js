import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { purchageBook, sellBook } from "./reduxConatiner/BookAction";

export default function BookConatiner() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  return (
    <>
      <button
        onClick={() => {
          dispatch(purchageBook());
        }}
      >
        Increase count
      </button>
      <div>Books available : {books.numberOfBooks}</div>
      <button
        onClick={() => {
          dispatch(sellBook());
        }}
      >
        Decrease count
      </button>
    </>
  );
}
