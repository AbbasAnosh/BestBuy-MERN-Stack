import Single from "../components/SinglePage";
import { singleProduct } from "../data";

const Product = () => {
  return (
    <div className="product">
      <Single {...singleProduct} />
    </div>
  );
};

export default Product;
