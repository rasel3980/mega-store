import React, { useState } from 'react';
import { CartContext } from './CreateContext';

const CartProvider = ({children}) => {
    const [carts,setCarts] = useState([]);

    const handleCheckOut =(id)=>{
        setCarts((prev)=>{
            return prev.map((prod)=>prod.id===id?{...prod, selected: !prod.selected}:prod)
        })
    }

    const increaseQuantity =(productId)=>{
        setCarts((prev)=>{
            return prev.map((prod)=>prod.id===productId?{...prod,cartQuantity:(prod.cartQuantity || 0) +1,}: prod)
        })
    }   

    const decreaseQuantity = (productId)=>{
        setCarts((prev)=>{
            return prev.map((prod)=>prod.id===productId?{...prod, cartQuantity: Math.max((prod.cartQuantity || 0) -1,1)}:prod)
        })
    }

    const handleCartProduct=(product)=>{
        setCarts((prev)=>{
            const exists = prev.some((prod)=>prod.id===product.id);
            if(exists){
                return prev.map((prod)=>prod.id===product.id?{...prod, cartQuantity:(prod.cartQuantity + 1 || 0)}:prod)
            }
            else{
                return [...prev,{...product,cartQuantity:1, selected:false}]
            }
        })
    }
    const userInfo = {
        carts,
        setCarts,
        handleCartProduct,
        increaseQuantity,
        decreaseQuantity,
        handleCheckOut,
    }
    return (
        <CartContext.Provider value={userInfo}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;