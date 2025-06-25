import React from "react";
import { ProductCard } from "@/components/ProductCard";
import cardholderProducts from "@/data/carholderProducts";
// Define the Product interface for TypeScript


// Sample array of 10 products


// Main Page component
const Page: React.FC = () => {
  const category:string='cardholder'
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-6 sm:mb-10">
          Our Premium Wallets
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {cardholderProducts.map((product) => (
            <ProductCard key={product.id} product={product} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
