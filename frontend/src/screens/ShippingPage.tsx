import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveShippingAddress } from "../slices/cartSlice";
import CheckoutSteps from "../components/CheckoutSteps";

const ShippingPage = () => {
  const cart = useSelector((state: any) => state.cart);
  const { shippingAddress } = cart;
  const [address, setAddress] = useState(shippingAddress?.address || "");
  const [city, setCity] = useState(shippingAddress?.city || "");
  const [postalCode, setPostalCode] = useState(
    shippingAddress?.postalCode || ""
  );
  const [country, setCountry] = useState(shippingAddress?.country || "");

  const [activeStep, setActiveStep] = useState(2);

  const handleStepChange = (step: any) => {
    setActiveStep(step);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    navigate("/payment");
  };
  return (
    <div className="">
      <div className="max-w-4xl max-h-screen mx-auto p-4 ">
        <div className="mb-[6rem]">
          <CheckoutSteps
            activeStep={activeStep}
            onStepChange={handleStepChange}
          />
        </div>
        <form className="mb-20 mt-20 " onSubmit={handleSubmit}>
          <div className="mt-6">
            <h3 className="text-2xl font-bold text-[#064F48] mb-6">
              Shipping Address
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                id="address"
                placeholder="Address Line"
                className="px-4 py-3.5 bg-white rounded-md text-[#333] w-full text-sm border-b-2 focus:border-[#064F48] outline-none"
              />
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                id="city"
                type="text"
                placeholder="City"
                className="px-4 py-3.5 bg-white rounded-md text-[#333] w-full text-sm border-b-2 focus:border-[#064F48] outline-none"
              />
              <input
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                type="text"
                id="postalcode"
                placeholder="Postal Code"
                className="px-4 py-3.5 bg-white rounded-md text-[#333] w-full text-sm border-b-2 focus:border-[#064F48] outline-none"
              />
              <input
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                type="text"
                id="country"
                placeholder="Country"
                className="px-4 py-3.5 bg-white rounded-md text-[#333] w-full text-sm border-b-2 focus:border-[#064F48] outline-none"
              />
            </div>
            <div className="flex gap-6 max-sm:flex-col mt-10">
              <button
                type="submit"
                className="rounded-md px-6 py-3 w-full text-sm font-semibold bg-[#064F48] text-white hover:bg-[#E56A40]"
              >
                Complete Purchase
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShippingPage;
