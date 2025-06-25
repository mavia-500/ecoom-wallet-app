'use client'

import React from "react";
import longwalletProducts from "@/data/longwalletProducts";
import { useParams } from "next/navigation";
import WholeProductDetail from "@/components/WholeProductDetail";



const ProductPage = () => {
//   const params = useParams();
  
 const {product}=useParams()
 const products = longwalletProducts.find((p) => p.id === parseInt(product as string));

 return <WholeProductDetail products={products || null} />
};

export default ProductPage;
