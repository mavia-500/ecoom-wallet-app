import React, { useState } from "react";
import Link from "next/link";
import ImageSlider from "./ImageSlider";

interface Review {
  id: number;
  username: string;
  comment: string;
  rating?: number;
}

interface Product {
  id: number;
  title: string;
  description: string;
  image: string[];
  color: string;
  price: number;
  discountedPrice: number;
  reviews: Review[];
}

interface WholeProductDetailProps {
  products: Product | null; // Allow null to handle not found case
}

const WholeProductDetail: React.FC<WholeProductDetailProps> = ({
  products,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 8;

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

  const finalPrice = products.price - products.discountedPrice;

  // Calculate pagination
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = products.reviews.slice(
    indexOfFirstReview,
    indexOfLastReview,
  );

  const totalPages = Math.ceil(products.reviews.length / reviewsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/bifoldwallet">
          <button className="mb-4 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-200 text-sm sm:text-base">
            Back to Products
          </button>
        </Link>

        <div className="bg-white rounded-lg shadow-md overflow-hidden w-full">
          <ImageSlider images={products.image} />

          <div className="p-4 sm:p-6">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
              {products.title}
            </h1>
            <p className="text-gray-600 text-sm sm:text-base mt-2">
              {products.description}
            </p>

            <div className="flex items-center mt-2 sm:mt-3">
              <span className="text-xs sm:text-sm font-medium text-gray-500">
                Color:{" "}
              </span>
              <span className="ml-2 text-xs sm:text-sm text-gray-700">
                {products.color}
              </span>
            </div>

            <div className="flex items-center mt-2 sm:mt-3">
              <span className="text-lg sm:text-xl font-bold text-green-600">
                Rs{finalPrice}
              </span>
              <span className="ml-2 sm:ml-3 text-sm sm:text-base text-gray-500 line-through">
                Rs{products.price}
              </span>
            </div>

            <Link href={`/placeorder?${queryParams}`}>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 sm:py-3 text-sm sm:text-base rounded-lg hover:bg-blue-700 transition duration-200 active:scale-95">
                Order Now!
              </button>
            </Link>

            {/* ------------------ Reviews Section ------------------ */}
            <div className="mt-8">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
                Customer Reviews
              </h2>

              {currentReviews.length === 0 ? (
                <p className="text-gray-600">No reviews yet.</p>
              ) : (
                <ul className="space-y-4">
                  {currentReviews.map((review) => (
                    <li
                      key={review.id}
                      className="p-4 border rounded-lg bg-gray-50"
                    >
                      <p className="font-medium text-gray-700">
                        {review.username}
                      </p>
                      <p className="text-black text-sm mt-1">
                        {review.comment}
                      </p>
                      {review.rating !== undefined && (
                        <div className="flex mt-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <span
                              key={star}
                              className={`text-xl ${
                                review.rating && star <= review.rating
                                  ? "text-yellow-500"
                                  : "text-gray-300"
                              }`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              )}

              {/* Pagination Buttons */}
              <div className="flex justify-between mt-4">
                <button
                  onClick={handlePrev}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === 1
                      ? "bg-gray-300 cursor-not-allowed"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  Previous
                </button>
                <button
                  onClick={handleNext}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === totalPages
                      ? "bg-gray-300 cursor-not-allowed"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  Next
                </button>
              </div>
            </div>
            {/* ------------------ End Reviews Section ------------------ */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WholeProductDetail;
