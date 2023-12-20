// ForYouItems.js

import React from "react";

const ForYouItems = ({ item }) => {
  const { image } = item || {};

  return (
    <div className="mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex w-90 bg-white p-4 rounded-lg shadow-md mx-auto">
          <div className="w-1/2">
            <img
              className="h-80 w-full object-cover rounded-lg"
              src={image}
              alt=""
            />
          </div>
          <div className="p-4">
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForYouItems;
