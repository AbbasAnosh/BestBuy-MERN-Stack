import { BiSolidPackage } from "react-icons/bi";
import { ImHeadphones } from "react-icons/im";
import { FaTruckFast } from "react-icons/fa6";

const Services = () => {
  const data = [
    {
      title: "Free shipping",
      description: "On all orders over $30",
      icon: BiSolidPackage,
    },
    {
      title: "Always available",
      description: "24/7 call center available",
      icon: ImHeadphones,
    },
    {
      title: "Free returns",
      description: "30 days free return policy",
      icon: FaTruckFast,
    },
  ];
  return (
    <div className="flex flex-col space-y-4 justify-center items-center  md:flex-row md:px-2 md:items-center md:justify-between max-w-7xl mx-auto py-12">
      {data.map((pro) => {
        const Icon = pro.icon;
        return (
          <div className="flex items-center space-x-5">
            <Icon className="text-3xl text-[#064F48]" />
            <div className="space-y-1">
              <p className="text-xl font-semibold text-[#064F48]">
                {pro.title}
              </p>
              <p className="text-lg text-gray-600">{pro.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
