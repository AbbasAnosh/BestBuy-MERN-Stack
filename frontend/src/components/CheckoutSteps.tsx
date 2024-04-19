import { Link, useNavigate } from "react-router-dom";

const steps = [
  {
    label: "Sign In",
    step: 1,
    href: "/login",
  },
  {
    label: "Shipping",
    step: 2,
    href: "/shipping",
  },
  {
    label: "Payment",
    step: 3,
    href: "/payment",
  },
  {
    label: "Placeorder",
    step: 4,
    href: "/placeorder",
  },
];

const CheckoutSteps = ({ activeStep, onStepChange }: any) => {
  const navigate = useNavigate();

  const handleLinkClick = (step: number, href: string) => {
    onStepChange(step);
    navigate(href);
  };

  return (
    <div className="pr-4 pl-4 md:pr-6 md:pl-6 lg:pl-0 lg:pr-0">
      <div
        className="flex justify-between relative before:bg-slate-200 before:absolute
       before:h-1 before:top-1/2 before:transform-y-1/2 before:w-full before:left-0"
      >
        {steps.map(({ step, label, href }) => (
          <div
            className="relative z-10"
            key={step}
            onClick={() => handleLinkClick(step, href)}
          >
            <Link
              to={href}
              className={`size-12 lg:size-16 rounded-full border-2 bg-white border-zinc-200 flex justify-center items-center transition-all ease-in delay-200 ${
                activeStep >= step ? "border-white bg-[#064F48]" : ""
              }`}
            >
              {activeStep > step ? (
                <div className="text-3xl font-semibold text-[#E56A40] rotate-0 scale-x-100">
                  ✓
                </div>
              ) : (
                <span className="text-lg text-[#E56A40] font-medium">
                  {step}
                </span>
              )}
            </Link>
            <div className="absolute top-16 lg:top-24 left-1/2 -translate-y-2/4 -translate-x-2/4">
              <span className="text-sm md:text-md lg:text-lg text-[#064F48] font-semibold text-nowrap">
                {label}
              </span>
            </div>
          </div>
        ))}
        <div
          className="absolute h-1 bg-[#E56A40] w-full top-1/2 transform-y-1/2 transition-all ease-in delay-200 left-0"
          style={{ width: `${(100 / (steps.length - 1)) * (activeStep - 1)}%` }}
        ></div>
      </div>
    </div>
  );
};

export default CheckoutSteps;
