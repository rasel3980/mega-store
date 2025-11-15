import React, { useContext } from "react";
import { CartContext } from "../Context/CreateContext";

const CartDetails = ({ cart }) => {
  const { increaseQuantity, decreaseQuantity,handleCheckOut } = useContext(CartContext);
  return (
    <div>
        
      <div className="flex items-center pr-5 justify-between bg-base-100 mt-12 shadow-sm">
        <div className="flex items-center">
          <div className="flex items-center ml-3 gap-5">
            <input onChange={()=>handleCheckOut(cart.id)} className="scale-200" type="checkbox" />
            <figure>
            <img className="w-40" src={cart?.image} alt="Shoes" />
          </figure>
          </div>
          <div>
            <div className="card-body">
              <h2 className="card-title">
                {cart.title}
                <div className="badge badge-secondary">{cart.category}</div>
              </h2>
              <p>Price: ${cart.price}</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-center gap-3">
            <div>
            <button className="px-4 py-1 cursor-pointer bg-red-600 text-white rounded">Cancel</button>
        </div>
          <div className="flex items-center justify-center gap-3">
            <button
            onClick={() => decreaseQuantity(cart.id)}
            className="text-4xl"
          >
            -
          </button>
          {cart.cartQuantity}
          <button
            onClick={() => increaseQuantity(cart.id)}
            className="text-2xl"
          >
            +
          </button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default CartDetails;
