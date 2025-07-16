import React from 'react';

const Page = () => {
  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md space-y-6 text-gray-800">
      <h2 className="text-3xl font-bold text-center text-blue-600">Contact Information</h2>

      <div className="space-y-2">
        <p><span className="font-semibold text-gray-700">Trade Name:</span> Hilyah.pk</p>
        <p><span className="font-semibold text-gray-700">Phone Number:</span> <a href="tel:+923285478737" className="text-blue-600 hover:underline">+92 328 5478737</a></p>
        <p><span className="font-semibold text-gray-700">WhatsApp:</span> <a href="https://wa.me/923285478737" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">+92 328 5478737</a></p>
        <p><span className="font-semibold text-gray-700">Email:</span> <a href="mailto:hilyah967@gmail.com" className="text-blue-600 hover:underline">hilyah967@gmail.com</a></p>
      </div>

      <div className="text-center mt-4">
        <p className="text-lg text-gray-700">Feel free to reach out to us if you have any questions or concerns.</p>
      </div>
    </div>
  );
};

export default Page;
