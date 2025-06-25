"use client";

import React from "react";
import trifoldProducts from "@/data/trifoldProducts";
import { useParams } from "next/navigation";
import WholeProductDetail from "@/components/WholeProductDetail";


const ProductPage = () => {
  //   const params = useParams();

  const { product } = useParams();
  const products = trifoldProducts.find(
    (p) => p.id === parseInt(product as string)
  );

  // If product not found, show a fallback
  return <WholeProductDetail products={products || null} />;
};

export default ProductPage;
