import React from "react";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  color: string;
  price: number;
  discountedPrice: number;
}

interface WholeProductDetailProps {
  products: Product | null; // Allow null to handle not found case
}

const WholeProductDetail: React.FC<WholeProductDetailProps> = ({
  products,
}) => {
  if (!products) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Product Not Found
          </h1>
          <p className="text-gray-600 mt-2">Sorry, Out of Stock</p>
          <Link href="/home">
            <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    );
  }
  const queryParams = new URLSearchParams({
    id: products.id.toString(),
    title: products.title,
    image: products.image[0],
    color: products.color,
    price: products.price.toString(),
    discountedPrice: products.discountedPrice.toString(),
  }).toString();

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/bifoldwallet">
          <button className="mb-4 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-200 text-sm sm:text-base">
            Back to Products
          </button>
        </Link>
        <div className="bg-white rounded-lg shadow-md overflow-hidden w-full">
          <img
            src={products?.image}
            alt={products?.title}
            className="w-full h-64 sm:h-80 object-cover"
          />
          <div className="p-4 sm:p-6">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
              {products?.title}
            </h1>
            <p className="text-gray-600 text-sm sm:text-base mt-2">
              {products?.description}
            </p>
            <div className="flex items-center mt-2 sm:mt-3">
              <span className="text-xs sm:text-sm font-medium text-gray-500">
                Color:{" "}
              </span>
              <span className="ml-2 text-xs sm:text-sm text-gray-700">
                {products?.color}
              </span>
            </div>
            <div className="flex items-center mt-2 sm:mt-3">
              <span className="text-lg sm:text-xl font-bold text-green-600">
                Rs{products?.discountedPrice}
              </span>
              <span className="ml-2 sm:ml-3 text-sm sm:text-base text-gray-500 line-through">
                Rs{products?.price}
              </span>
            </div>
            <Link href={`/placeorder?${queryParams}`}>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 sm:py-3 text-sm sm:text-base rounded-lg hover:bg-blue-700 transition duration-200 active:scale-95">
                Oder Now!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WholeProductDetail;
