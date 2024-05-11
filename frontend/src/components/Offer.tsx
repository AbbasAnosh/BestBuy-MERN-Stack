import React from "react";
import { Link } from "react-router-dom";

const Offer = () => {
  const data = [
    {
      title: "Smart Watch 2.0",
      description: "Space Gray Aluminum Case with Black/Volt Real Sport Band",
      text: "View Details",
      image: "/img/bag.png",
      background: "gray",
    },
    {
      title: "Smart Headphone",
      description:
        "Lorem ipsum dolor sit amet, eiusmod tempor incididunt ut labore.",
      text: "Shop Now",
      image: "/img/headphone.png",
      background: "#475569",
    },
  ];
  return (
    <div className="flex flex-col lg:flex lg:flex-row gap-4 max-w-7xl mx-auto">
      {data.map((offer) => (
        <div
          key={offer.text}
          className="flex h-72 items-center p-5"
          style={{ backgroundColor: offer.background }}
        >
          <div className="w-1/2 flex flex-col space-y-3">
            <h1 className="text-xl font-semibold text-white ">{offer.title}</h1>
            <p className="text-lg font-medium text-slate-200">
              {offer.description}
            </p>
            <div className="pt-4">
              <Link to="" className="bg-blue-400 px-4 py-3 rounded-md">
                {offer.text}
              </Link>
            </div>
          </div>
          <img src={offer.image} alt="" className="object-cover w-1/2" />
        </div>
      ))}
    </div>
  );
};

export default Offer;
