import React, { useState, useEffect } from "react";
import { useStateContext } from "../context/StateContext";

import Card from "../components/Card";
import Spinner from "./../components/Spinner/Spinner";

const Products = () => {
  const {
    state: { products, cart },
  } = useStateContext();
  // console.log(cart);
  return (
    <div className="flex flex-wrap gap-10 justify-center my-10">
      {products.length > 0 ? (
        products?.map((product) => <Card key={product.id} product={product} />)
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Products;
