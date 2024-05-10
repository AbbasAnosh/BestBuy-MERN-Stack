import React from "react";

const Trends = () => {
  const data = [
    {
      title: "TV & Audios",
      Image: "/img/headphone.png",
    },
    {
      title: "Desktop & Laptop",
      Image: "/img/bag.png",
    },
    {
      title: "Cctv Camera",
      Image: "/img/sneakers.png",
    },
    {
      title: "Dslr Camera",
      Image: "/img/sneakers.png",
    },
    {
      title: "Smart Phones",
      Image: "/img/bag.png",
    },
    {
      title: "Game Console",
      Image: "/img/headphone.png",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center max-w-7xl mx-auto min-h-screen">
      <div className="text-center flex flex-col space-y-7">
        <p className="text-3xl font-bold">Featured Categories</p>
        <p className="text-xl font-semibolds max-w-3xl pb-16">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center w-full p-4">
        {data.map((info) => (
          <div className="border border-[#6FA9FA] flex items-center justify-between p-4">
            <p>{info.title}</p>
            <img src={info.Image} alt="" className="h-44 w-64 object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trends;
