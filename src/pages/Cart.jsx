import React, { useEffect, useState } from "react";
import { useStateContext } from "../context/StateContext";
import {
  AiFillDelete,
  AiFillMinusSquare,
  AiFillPlusSquare,
} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";
const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = useStateContext();
  const [total, setTotal] = useState(0);

  const navigate = useNavigate();
  const checkoutHandler = () => {
    dispatch({ type: "CART_EMPTY" });
    navigate("/success");
  };
  const increasePrice = (price) => {
    setTotal(total + price);
  };
  const decreasePrice = (price) => {
    setTotal(total - price);
  };
  // const increaseQty = () => {
  //   setQty((prev) => prev + 1);
  //   increasePrice(item.price);
  // };
  // const decreaseQty = () => {
  //   if (qty > 1) {
  //     setQty((prev) => prev - 1);
  //     decreasePrice(item.price);
  //   }
  // };
  useEffect(() => {
    setTotal(cart.reduce((initial, current) => initial + current.price, 0));
  }, []);
  return cart.length == 0 ? (
    <div className="flex justify-center">
      <div className="bg-secondary p-20 rounded shadow-lg mt-20 animate__animated animate__bounce">
        <h1 className="text-4xl font-semibold tracking-wider my-5 text-primary">
          The Cart is Empty
        </h1>
        <button
          onClick={() => navigate("/")}
          className="text-primary bg-danger px-5 py-2 shadow-lg uppercase rounded transition hover:scale-105"
        >
          Go back to Shopping
        </button>
      </div>
    </div>
  ) : (
    <div className="grid grid-cols-4">
      <div className="col-span-3 flex flex-col gap-5">
        {cart?.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            increasePrice={increasePrice}
            decreasePrice={decreasePrice}
          />
        ))}
      </div>
      <div className="col-span-1">
        <div className="bg-gray-50 p-10 rounded shadow-lg">
          <h1 className="text-3xl text-info font-semibold">
            Total Price - ${total.toFixed(2)}
          </h1>

          <button
            onClick={checkoutHandler}
            className="px-5 py-2 bg-info text-primary rounded shadow-lg uppercase my-5"
          >
            Checkout
          </button>
        </div>
        <button
          onClick={() => dispatch({ type: "CART_EMPTY" })}
          className="px-5 py-2 bg-danger text-primary rounded shadow-lg uppercase my-5"
        >
          Cart Empty
        </button>
      </div>
    </div>
  );
};

export default Cart;
