import React from "react";
import { menu } from "../data";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="flex flex-col gap-[10px] mb-[20px]">
      {menu.map((item) => (
        <div className="flex flex-col gap-[10px] mb-[20px]" key={item.id}>
          <span className="text-[12px] font-[200] text-soft-color uppercase">
            {item.title}
          </span>
          {item.listItems.map((listItem) => (
            <Link
              to={listItem.url}
              className="flex items-center gap-[10px] p-[10px] rounded-[5px] hover:bg-soft-bg"
              key={listItem.id}
            >
              <img src={listItem.icon} alt="" />
              <span className="">{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
