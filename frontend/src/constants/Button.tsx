const Button = ({ text }: { text: string }) => {
  return (
    <button className="mt-4 bg-[#064F48] text-white text-md md:text-lg w-28 h-10 lg:w-[185px] lg:h-[50px] hover:bg-[#E56A40] duration-100 font-bold">
      {text}
    </button>
  );
};

export default Button;
