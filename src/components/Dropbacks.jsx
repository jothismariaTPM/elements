import React, { useEffect, useState } from "react";
import { assets } from "../assets/asset";

const Dropback_Images = [
  assets.image1,
  assets.image2,
  assets.image3,
  assets.image4,
  assets.image5,
  assets.image6,
  assets.image7,
  assets.image8,
  assets.image9,
  assets.image10,
  assets.image11,
  assets.image12
];

const Dropbacks = () => {

  return (
     <div className="max-w-7xl mx-auto px-4 py-6 mt-10">
      <h2 className="text-4xl md:text-5xl text-center font-semibold mb-6 tracking-wide font-['Cinzel']">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {Dropback_Images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden  shadow-md"
          >
            <img
              src={img}
              alt={`dropback-${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropbacks;
