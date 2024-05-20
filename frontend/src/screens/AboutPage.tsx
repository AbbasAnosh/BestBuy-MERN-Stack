import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../components/shopComponent/ComponentName";
import Button from "../constants/Button";

const AboutPage = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-7xl mx-auto px-4">
      <Breadcrumbs title="About" prevLocation={prevLocation} />
      <div className="flex gap-7 flex-col lg:flex-row">
        <div className="pb-10">
          <h1 className="max-w-[600px] text-base mb-5 text-justify">
            <span className="text-[#064F48] font-semibold text-lg">
              BestBuy
            </span>{" "}
            is a well-known online store that people all over the world love for
            its cool and up-to-date styles.{" "}
            <span className="text-[#064F48] font-semibold text-lg">
              Abbas Anosh
            </span>{" "}
            is the smart person who made this website work so well. He used
            tools like TypeScript, React, Tailwind CSS, MongoDB, Express.js, and
            Node.js to build a website that's easy and fun to shop on. Abbas
            made sure everything on the site works smoothly, from looking at
            products to buying them. Thanks to his hard work, shopping at
            BestBuy feels easy and safe, just like talking to a good friend.
            It's a place where you can find what you need and feel great about
            your style.
          </h1>
          <Link to="/shop">
            <Button text="Continue Shopping"></Button>
          </Link>
        </div>
        <div>
          <img src="/about.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
