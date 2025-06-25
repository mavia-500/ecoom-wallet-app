'use client'

import React from "react";
import cardholderProducts from "@/data/carholderProducts";
import { useParams } from "next/navigation";
import WholeProductDetail from "@/components/WholeProductDetail";



const ProductPage = () => {
//   const params = useParams();
  
 const {product}=useParams()
 const products = cardholderProducts.find((p) => p.id === parseInt(product as string));

 return <WholeProductDetail products={products || null} />
};

export default ProductPage;
