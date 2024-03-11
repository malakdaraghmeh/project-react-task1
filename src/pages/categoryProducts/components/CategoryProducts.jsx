import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function CategoryProducts() {
    const {id}=useParams('id');
    const [products,setProducts]=useState([]);
    const getProducts=async()=>{
        const {data}= await axios.get(`https://ecommerce-node4.vercel.app/products/category/${id}`);
        setProducts(data.products);
    }
    useEffect(()=>{
        getProducts();
    },[]);

  return (
   <>
   {products.map(product=>
   <div className='products' key={product.id}>
    <h2>{product.name}</h2>
    <img className='card-img-top' src={product.mainImage.secure_url}></img>
    </div>
    )}
   </>
  )
}
