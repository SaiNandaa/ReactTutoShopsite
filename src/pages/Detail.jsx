import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getData } from "./../api";
import { AiFillStar } from "react-icons/ai";
import { useStateContext } from "../context/StateContext";
import Spinner from "./../components/Spinner/Spinner";

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
  const { dispatch } = useStateContext();
  const getProductDetail = async () => {
    setProduct(await getData(`/products/${id}`));
  };
  const getProductsbyCat = async () => {
    const data = await getData(`/products/category/${product.category}`);
    // const filterdata = data?.filter((item) => item.id !== product.id);
    setProducts(data);
  };

  useEffect(() => {
    getProductDetail();
    getProductsbyCat();
  }, [products, product]);
  // console.log(products);
  return (
    <>
      {product && products.length > 0 ? (
        <div>
          <div className="flex gap-5 items-start my-20">
            <img
              src={product?.image}
              alt="No Photo"
              className="h-96 border-2 shadow-lg p-10"
            />
            <div className="flex flex-col gap-5 mt-5">
              <p className="bg-blue-400 text-primary px-2 py-1 text-xs rounded-full w-40 text-center">
                {product?.category}
              </p>
              <h3 className="text-2xl font-semibold text-header">
                {product?.title}
              </h3>
              <div>
                <p className="text-header font-semibold text-lg">Description</p>
                <p className="text-gray-600 tracking-wider leading-6 mt-1">
                  {product?.description}
                </p>
              </div>
              <p className="flex items-center gap-2">
                <AiFillStar className="text-xl text-danger" />
                <small className="text-gray-500 font-bold">
                  ({product?.rating?.rate})
                </small>
              </p>
              <p className="text-header text-xl font-semibold">
                {product?.price}
              </p>
              <div className="">
                <button
                  onClick={() =>
                    dispatch({ type: "ADD_TO_CART", payload: product })
                  }
                  className="mr-5 bg-info text-primary px-5 py-2 rounded shadow-lg transform transition hover:scale-90"
                >
                  Add To Cart
                </button>
                <Link to="/success">
                  <button className="bg-green-600 text-primary py-2 rounded shadow-lg w-40 transform transition hover:scale-90">
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="my-20">
            <h1 className="text-2xl font-semibold text-header">
              You may also like
            </h1>
            <div className="flex flex-wrap gap-7 my-10">
              {products
                ?.filter((item) => item.id !== product.id)
                .map((pat) => (
                  <div key={pat.id}>
                    <Link to={`/detail/${pat.id}`}>
                      <img
                        src={pat.image}
                        className="h-52 border-2 shadow-lg p-5 rounded"
                        alt=""
                      />
                      <p className="text-gray-700 font-semibold mt-1">
                        $ {pat.price}
                      </p>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Detail;
