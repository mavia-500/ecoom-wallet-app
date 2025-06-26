"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

// ProductCard component to display each product
interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  color: string;
  price: number;
  discountedPrice: number;
}

interface ProductCardProps {
  product: Product;
  category: string; // This is where the 'category' prop is defined
}


export const ProductCard: React.FC<ProductCardProps> = ({ product,category }) => {
  const router = useRouter();

const finalPrice=product.price-product.discountedPrice
  return (
    <Link href={`${category}/${product.id}`}>
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg w-full max-w-sm mx-auto">
      <img
        src={product.image[0]}
        alt={product.title}
        className="w-full h-40 sm:h-48 object-cover"
      />
      <div className="p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 line-clamp-1">
          {product.title}
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mt-2 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center mt-2 sm:mt-3">
          <span className="text-xs sm:text-sm font-medium text-gray-500">
            Color:{" "}
          </span>
          <span className="ml-2 text-xs sm:text-sm text-gray-700">
            {product.color}
          </span>
        </div>
        <div className="flex items-center mt-2 sm:mt-3">
          <span className="text-base sm:text-lg font-bold text-green-600">
            Rs:{finalPrice}
          </span>
          <span className="ml-2 sm:ml-3 text-xs sm:text-sm text-gray-500 line-through">
            Rs:{product.price}
          </span>
        </div>
        <button
          className="mt-3 sm:mt-4 w-full bg-blue-600 text-white py-2 sm:py-2.5 text-sm sm:text-base rounded-lg hover:bg-blue-700 transition duration-200 active:scale-95"
          
        >
          Order Now
        </button>
      </div>
    </div>
    </Link>
  );
};
