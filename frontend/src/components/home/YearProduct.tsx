import { Link } from "react-router-dom";
import productOfTheYear from "/img/bag.png";
import Button from "../../constants/Button";

const YearProduct = () => {
  return (
    <Link to="/shop">
      <div className="w-full h-80 mb-20 bg-[#EFD29B] flex flex-col md:flex-row items-center justify-between p-6 md:p-16 font-titleFont">
        <div className="hidden md:block w-full h-full md:w-1/2">
          <img className="w-full h-64 object-cover" src={productOfTheYear} />
        </div>
        <div className="flex flex-col gap-6 md:w-1/2 ">
          <h1 className="text-2xl md:text-3xl font-semibold text-primeColor">
            Product of The year
          </h1>
          <p className="text-base font-normal text-primeColor max-w-[600px] mr-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
            cupiditate modi amet! Facilis, aperiam quaerat.
          </p>
          <Button text="Shop Now"></Button>
        </div>
      </div>
    </Link>
  );
};

export default YearProduct;
