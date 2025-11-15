import React, { useContext } from 'react';
import { CartContext } from '../Context/CreateContext';

const ProductsCard = ({product}) => {
    const {handleCartProduct} = useContext(CartContext)
    console.log("products",product);
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={product?.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {product.title}
          <div className="badge badge-secondary">{product.category}</div>
        </h2>
        <p>{product.description}</p>
        <p>Brand: {product.brand}</p>
        <p>Price: ${product.price}</p>
        <div className='flex justify-between items-center'>
            <button onClick={()=>handleCartProduct(product)} className='px-4 py-1 bg-blue-600 text-white rounded cursor-pointer'>Add to Cart</button>
            <button className='px-4 py-1 bg-blue-600 text-white rounded cursor-pointer'>Buy Now</button>
        </div>

      </div>
    </div>
    );
};

export default ProductsCard;