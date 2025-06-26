"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import Link from "next/link";
// import { useRouter } from 'next/navigation';
interface formdata {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  province: string;
  city: string;
  notes: string;
}

interface itemData {
  id: string | null;
  title: string | null;
  image: string | null;
  discountedPrice: string | null;
  price: string | null;
  color: string | null;
}

const page: React.FC = () => {
  const Searchparams = useSearchParams();
  const [placeOrder, setOrderPlace] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const itemData: itemData = {
    id: Searchparams.get("id"),
    title: Searchparams.get("title"),
    image: Searchparams.get("image"),
    discountedPrice: Searchparams.get("discountedPrice"),
    price: Searchparams.get("price"),
    color: Searchparams.get("color"),
  };
  const [formData, setFormData] = useState<formdata>({
    fullName: "",
    email: "",
    address: "",
    province: "",
    city: "",
    phone: "",
    notes: "",
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await axios
      .post("/api/order", { formData, itemData })
      .then((res) => {
        if (res.status === 200) {
          setOrderPlace(true);
          setError(null)
          
        } else {
          setError(res.data.message);
         
        }
      })
      .catch((err) => {
        console.log(err.response.data.message)
        setError(err.response.data.message);
      });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // console.log(formData);

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-2xl shadow-lg">
      {placeOrder ? (
        <div className="text-center">
          <h2 className="text-green-700 text-xl font-semibold bg-green-100 border border-green-300 rounded-lg px-4 py-2 shadow-sm text-center">
            Order Placed Successfully!
          </h2>
          <h2 className="mt-10">Thanks for choosing Hilyah</h2>
          <h2 className="mt-10">
            You Will receive your Order With in (2-4) working days
          </h2>
          <Link href={"/home"}>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition mt-10">
              Countinue Shopping
            </button>
          </Link>
        </div>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
            Place Your Order
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="fullName"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              placeholder="Email Address Optional"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="email"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Complete Delivery Address"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              name="address"
              onChange={handleChange}
            />

            <input
              type="text"
              placeholder="Province"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              name="province"
              onChange={handleChange}
            />

            <input
              type="text"
              placeholder="City"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              name="city"
              onChange={handleChange}
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              name="phone"
              onChange={handleChange}
            />
            <textarea
              placeholder="Additional Notes (Optional)"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="notes"
              onChange={handleChange}
            />
            <button
              onClick={handleSubmit}
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Place Order
            </button>
          </form>
        </>
      )}
      {error && (
        <div className="bg-blue-50 border border-blue-200 p-4 my-6 rounded-lg">
          <div className="flex items-center">
            <div className="bg-blue-100 rounded-full p-2 mr-3">
              <svg
                className="h-5 w-5 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className="text-blue-700">
            {error}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
