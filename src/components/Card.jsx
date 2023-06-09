import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useStateContext } from "../context/StateContext";
const Card = ({ product }) => {
  const { dispatch } = useStateContext();
  // const { title, image, price, rating } = product;
  // console.log(product);
  return (
    <div className="w-80 border-2 p-5 rounded-lg hover:shadow-xl transform transition hover:scale-105">
      {<img className="h-[200px] mx-auto my-3" src={product?.image} alt="" />}
      <h3 className="text-header font-bold tracking-wider my-3">
        {product?.title?.substring(0, 25)}...
      </h3>
      <div className="flex items-center gap-1">
        <AiFillStar className="text-danger" />
        <small className="text-info font-semibold">
          ({product?.rating?.rate})
        </small>
      </div>
      <p className="text-gray-400 text-xl my-3">{product?.price}$</p>
      <div className="flex items-center justify-around">
        <button
          onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
          className="bg-info text-primary px-5 py-2 rounded shadow-lg transform transition hover:scale-90"
        >
          Add To Cart
        </button>
        <Link to={`/detail/${product?.id}`}>
          <button className="bg-header text-primary px-5 py-2 rounded shadow-lg transform transition hover:scale-90">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Card;
