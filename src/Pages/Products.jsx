import React, { useEffect, useState } from 'react';
import ProductsCard from './ProductsCard';

const Products = () => {
    const [data,setData] = useState([]);
    const [filtered,setFiltered] = useState([]);
    console.log("filtered",filtered);

    const handleSearch =(e)=>{
        const searchTerm = e.target.value;
        if(searchTerm){
            const result = data.filter((p)=>p.title.toLowerCase().includes(searchTerm.toLowerCase()));
            setFiltered(result)
        }
        else{
            setFiltered(data)
        }
    }

    useEffect(()=>{
        fetch('/data.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])

    useEffect(()=>{
        setFiltered(data)
    },[data])
    return (
        <div>
            <h1 className='text-center font-bold text-3xl mt-5'>Here is All Data</h1>
            <form onChange={handleSearch} className='flex justify-center mt-4'>
                <input className='outline-1 outline-red-600 px-4 py-2 rounded w-1/2 ' type="text" placeholder='Search your product'/>
            </form>
            <div className='grid mt-12 md:grid-cols-3 gap-5 justify-items-center'>
                {
                    filtered.map((product)=><ProductsCard key={product.id} product={product}></ProductsCard>)
                }
            </div>
        </div>
    );
};

export default Products;