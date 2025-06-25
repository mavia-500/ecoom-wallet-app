import React from "react";

const Announcement = () => {
  const announcements = [
    "Up to 20% off for a limited time!",
    "Free delivery on orders over $50!",
    "Unforgettable and unbeatable deals!",
    "Get delivery within 3 days!",
    "Lifetime warranty on leather products!",
    "Elegant and stylish designs!",
  ];

  return (
    <div className="overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-3 shadow-lg">
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {announcements.map((announcement, index) => (
          <span
            key={index}
            className="inline-block mx-8 text-lg font-semibold text-white transition-transform duration-300 ease-in-out hover:scale-110 hover:text-yellow-300"
          >
            {announcement} ⭐
          </span>
        ))}
      </div>
    </div>
  );
};

export default Announcement;