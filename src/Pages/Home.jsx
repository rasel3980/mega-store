import React, { useEffect, useState } from 'react';
import PopularProduct from './PopularProduct';

const Home = () => {
    const [data,setData] = useState([]);
    console.log(data);
    
    useEffect(()=>{
        fetch('/data.json')
        .then(res=>res.json())
        .then(data=>{
            const filteredData = data.filter((popular)=>popular.isPopular===true);
            setData(filteredData)
        })
    },[])
    return (
        <div className='mt-12'>
            <h1 className='text-center text-3xl font-bold'>Here is a your Favourit pick</h1>
            <div className='mt-12 grid md:grid-cols-3 gap-5 justify-items-center'>
                {
                data.map((product)=><PopularProduct key={product.id} product={product}></PopularProduct>)
            }
            </div>
        </div>
    );
};

export default Home;