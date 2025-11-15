import React, { useEffect, useState } from 'react';
import DetailsCard from './DetailsCard';

const ProductDetails = () => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch('/data.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    return (
        <div className='grid mt-12 md:grid-cols-3 gap-5 justify-items-center'>
            {
                data.map((product)=><DetailsCard key={product.id} product={product}></DetailsCard>)
            }
        </div>
    );
};

export default ProductDetails;