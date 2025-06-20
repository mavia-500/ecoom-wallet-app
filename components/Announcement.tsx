import React from "react";

const Announcement = () => {
  const announcements: string[] = [
    "up do 20% off for limited time",
    "get free delivery over 2 orders",
    "no forgetable un beataable",
    "get deleiver with in 3 days",
    "life time warranty of leather",
    "very ellegent to use",
  ];
  return (
    <div className="overflow-hidden bg-gray-100 py-2">
      <div className="animate-marquee whitespace-nowrap">
        {announcements.map((announcement, index) => (
          <span
            key={index}
            className="inline-block mx-18 text-lg font-medium text-red-800"
          >
            {announcement}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Announcement;
