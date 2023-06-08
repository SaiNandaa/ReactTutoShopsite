import React, { useState } from "react";
import { useStateContext } from "../context/StateContext";
import {
  AiFillDelete,
  AiFillMinusSquare,
  AiFillPlusSquare,
} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const CartItem = ({ item, increasePrice, decreasePrice }) => {
  const [qty, setQty] = useState(1);
  const { dispatch } = useStateContext();
  const increaseQty = () => {
    setQty((prev) => prev + 1);
    increasePrice(item.price);
  };
  const decreaseQty = () => {
    if (qty > 1) {
      setQty((prev) => prev - 1);
      decreasePrice(item.price);
    }
  };
  const removeHandler = () => {
    decreasePrice(item?.price * qty);
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };
  return (
    <div key={item.id} className="flex items-center gap-4">
      <img src={item?.image} className="h-32 border-2 rounded p-4" alt="" />
      <div className="">
        <h3 className="text-2xl font-semibold">{item?.title}</h3>
        <p className="text-gray-500 text-3xl my-3">
          $ {(item?.price * qty).toFixed(2)}
        </p>
        <div className="flex items-center gap-3">
          <AiFillMinusSquare
            onClick={decreaseQty}
            className="text-3xl text-danger cursor-pointer"
          />
          <p className="text-2xl">{qty}</p>
          <AiFillPlusSquare
            onClick={increaseQty}
            className="text-3xl text-info cursor-pointer"
          />
          <button onClick={removeHandler}>
            <AiFillDelete className="text-danger text-2xl cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
