import React, { useContext } from 'react';
import { CartContext } from '../Context/CreateContext';
import CartDetails from './CartDetails';

const Cart = () => {
    const {carts} = useContext(CartContext)
  const selectedQuantity = carts.reduce((acc,product)=> product.selected? acc + product.cartQuantity:acc,0)
  const selectedPrice = carts.reduce((acc,prod)=>prod.selected? acc + (prod.price*prod.cartQuantity):acc,0).toFixed(2)
    console.log('Cartss',carts); 
    return (
        <div>
            <div className='grid gap-4'>
            {
                carts.map((cart)=><CartDetails key={cart.id} cart={cart}></CartDetails>)
            }
        </div>
        <div className='my-4 flex justify-between'>
            <button className='font-bold px-4 py-1 bg-blue-600 text-white rounded'>Total Price: ${selectedPrice}</button>
            <button className='font-bold px-4 py-1 bg-blue-600 text-white rounded cursor-pointer'>Buy Now</button>
        <button className='font-bold px-4 py-1 bg-blue-600 text-white rounded'>Check Out:- {selectedQuantity}</button>
      </div>
        </div>
        
    );
};

export default Cart;