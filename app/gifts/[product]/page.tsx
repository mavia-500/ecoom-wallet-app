'use client'

import React from "react";
import giftProducts from "@/data/giftProducts";
import { useParams } from "next/navigation";
import WholeProductDetail from "@/components/WholeProductDetail";



const ProductPage = () => {
//   const params = useParams();
  
 const {product}=useParams()
 const products = giftProducts.find((p) => p.id === parseInt(product as string));

 return <WholeProductDetail products={products || null} />
};

export default ProductPage;
