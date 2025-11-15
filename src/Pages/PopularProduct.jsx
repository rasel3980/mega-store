import React from "react";
import { Link } from "react-router";

const PopularProduct = ({ product }) => {
  // console.log("product", product);
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={product?.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {product.title}
          <div className="badge badge-secondary">{product.quantity}</div>
        </h2>
        <p>{product.description}</p>
        <div className="card-actions justify-end">
          <Link to={`/product-details/${product.id}`}>
            <button className="px-4 py-1 cursor-pointer bg-blue-600 text-white rounded">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularProduct;
