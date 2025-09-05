import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseCount, decreaseCount } from "./count/CountAction";

export default function CountComponent() {
  const countData = useSelector((state) => state.count.count);
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(increaseCount())}>Increase</button>
      <div>CountComponent : {countData}</div>
      <button onClick={() => dispatch(decreaseCount())}>Decrease</button>
    </>
  );
}
