import React from "react";

const Categories = () => {
  const data = [
    {
      id: 1,
      link: "Computers & Accessories(1138)",
    },
    {
      id: 2,
      link: "Smartphones & Tablets(2356)",
    },
    {
      id: 3,
      link: "TV, Video & Audio(420)",
    },
    {
      id: 4,
      link: "Cameras, Photo & Video(874)",
    },
    {
      id: 5,
      link: "Headphones(1239)",
    },
    {
      id: 6,
      link: "Wearable Electronics(340)",
    },
    {
      id: 7,
      link: "Printers & Ink(512)",
    },
  ];
  return (
    <div className="bg-slate-400 p-8 space-y-6">
      <div>
        <p className="text-xl border-b-2 pb-4">All Categories</p>
      </div>
      <div className="space-y-2">
        {data.map((category) => (
          <div>{category.link}</div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
