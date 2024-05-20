import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import Rating from "../components/Rating";
import { IoChevronForward } from "react-icons/io5";

import {
  useCreateReviewMutation,
  useGetProductDetailsQuery,
} from "../slices/productsApiSlice";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { ReviewProps, userInfo } from "../types/ProductType";

const ProductsScreen = () => {
  const { id: productId } = useParams<{ id: string }>();
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const [selectedButton, setSelectedButton] = useState("Description");
  const [active, setActive] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    data: Product,
    isLoading,
    error,
    refetch,
  } = useGetProductDetailsQuery(productId);

  const [createReview] = useCreateReviewMutation();
  const { userInfo } = useSelector((state: userInfo) => state.auth);

  const isError: any = error;

  const addToCartHandler = () => {
    dispatch(addToCart({ ...Product, qty }));
    navigate("/cart");
  };

  const submitHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    try {
      await createReview({
        productId,
        rating,
        comment,
      }).unwrap();
      refetch();
      toast.success("Review Submitted");
      setRating(0);
      setComment("");
    } catch (err: any) {
      toast.error(err.data.message || err.error);
    }
  };

  return (
    <div className="bg-[#EEE1D1]">
      <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
        <div className="mb-10 flex items-center space-x-2 font-semibold">
          <Link to="/" className="hover:text-[#E56A40]">
            Home
          </Link>
          <IoChevronForward className="text-[#E56A40]" />
          <p>Product Page</p>
        </div>
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{isError?.data.message}</div>
        ) : (
          <>
            <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="w-full  top-0 sm:flex gap-2">
                <img
                  src={Product?.image}
                  alt="Product"
                  className="lg:w-4/5 rounded object-cover shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-[#0B514B]">
                  {Product?.name}
                </h2>
                <div className="flex flex-wrap justify-between mt-4">
                  <p className="text-lg font-bold  text-[#0B514B]">Price: </p>
                  <p className="text-[#514C49] text-xl font-bold">
                    ${Product?.price}
                  </p>
                </div>

                <Rating value={Product?.rating} review={Product?.numReviews} />

                {Product.countInStock > 0 && (
                  <div className="flex items-center justify-between mt-4">
                    <p className="text-lg font-bold  text-[#0B514B]">
                      Quantity
                    </p>
                    <form className="border-0 w-[7rem]">
                      <select
                        value={qty}
                        id="qty"
                        onChange={(e) => setQty(Number(e.target.value))}
                        className="bg-[#E56A40] border-0 focus:border-0 focus:ring-0  outline-none text-[#D3D1C2] text-sm
                              block w-full p-2.5 rounded-md custom-select"
                      >
                        {[...Array(Product.countInStock).keys()].map((p) => (
                          <option key={p + 1} value={p + 1}>
                            {p + 1}
                          </option>
                        ))}
                      </select>
                    </form>
                  </div>
                )}
                <div className="mt-8">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold  text-[#0B514B]">
                      Status:{" "}
                    </h3>
                    <p className="text-md font-semibold bg-[#E56A40] text-[#EEE1D1] p-3 rounded-lg">
                      {Product?.countInStock! > 0 ? "In Stock" : "Out of Stock"}
                    </p>
                  </div>
                  <button
                    type="button"
                    disabled={Product?.countInStock === 0}
                    onClick={addToCartHandler}
                    className="w-full mt-4 px-4 py-3 bg-[#0B514B] hover:bg-[#E56A40] text-[#EEE1D1]
                                cursor-pointer font-bold rounded"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-10 max-w-7xl">
              <ul className="flex border-b pb-1 border-[#0B514B] gap-1">
                <li
                  onClick={() => {
                    setSelectedButton("Description");
                    setActive(!active);
                  }}
                  className={`${
                    active
                      ? "text-[#0B514B] font-bold text-sm hover:bg-gray-100 py-3 px-8 border-2 border-[#E56A40] rounded-md cursor-pointer transition-all"
                      : "text-white font-bold text-sm bg-[#0B514B] py-3 px-8 border-b-2 border-[#E56A40] cursor-pointer transition-all rounded-md"
                  }`}
                >
                  Description
                </li>
                <li
                  onClick={() => {
                    setSelectedButton("Reviews");
                    setActive(!active);
                  }}
                  className={`${
                    active
                      ? "text-white font-bold text-sm bg-[#0B514B] py-3 px-8 border-b-2 border-[#E56A40] cursor-pointer transition-all rounded-md"
                      : "text-[#0B514B] font-bold text-sm hover:bg-gray-100 py-3 px-8 border-2 border-[#E56A40] rounded-md cursor-pointer transition-all"
                  }`}
                >
                  Reviews
                </li>
              </ul>
              <div className="mt-8">
                {selectedButton === "Description" && (
                  <>
                    <h3 className="text-lg font-bold text-[#0B514B]">
                      Product Description
                    </h3>
                    <p className="text-sm text-gray-700 mt-4">
                      {Product?.description}
                    </p>
                  </>
                )}

                {selectedButton === "Reviews" && (
                  <>
                    <h3 className="text-lg font-bold text-[#0B514B]">
                      Product Reviews
                    </h3>
                    <div className="mt-8 ">
                      {Product.reviews.length === 0 && <h1>No Reviews</h1>}

                      <div className="mb-16 gap-6 flex flex-col lg:flex-row lg:justify-between">
                        <div className="flex-1 flex-col gap-3">
                          {/* <h2 className="text-md font-bold text-[#0B514B]">
                            Write a Customer review
                          </h2> */}
                          {userInfo ? (
                            <div>
                              <form
                                onSubmit={submitHandler}
                                className="relative mb-10 flex flex-col gap-5"
                              >
                                <div className="mb-10">
                                  <select
                                    value={rating}
                                    onChange={(e) =>
                                      setRating(Number(e.target.value))
                                    }
                                    className="absolute bg-white py-2 min-w-full w-max divide-y border-[#0B514B] rounded-md outline-[#E56A40]"
                                  >
                                    <option className="py-3 px-6 hover:bg-gray-100 text-black text-sm cursor-pointer">
                                      Review options
                                    </option>
                                    <option
                                      value="1"
                                      className="py-3 px-6 hover:bg-gray-100 text-black text-sm cursor-pointer"
                                    >
                                      1 - Poor
                                    </option>
                                    <option
                                      value="2"
                                      className="py-3 px-6 hover:bg-gray-100 text-black text-sm cursor-pointer"
                                    >
                                      2 - Fair
                                    </option>
                                    <option
                                      value="3"
                                      className="py-3 px-6 hover:bg-gray-100 text-black text-sm cursor-pointer"
                                    >
                                      3 - Good
                                    </option>
                                    <option
                                      value="4"
                                      className="py-3 px-6 hover:bg-gray-100 text-black text-sm cursor-pointer"
                                    >
                                      4 - Very Good
                                    </option>
                                    <option
                                      value="5"
                                      className="py-3 px-6 hover:bg-gray-100 text-black text-sm cursor-pointer"
                                    >
                                      5 - Excellent
                                    </option>
                                  </select>
                                </div>
                                <textarea
                                  placeholder="Leave a comment"
                                  className="p-4  bg-white w-full block text-sm border
                                       border-[#0B514B] focus:outline-0 focus:ring-0 rounded"
                                  rows={4}
                                  value={comment}
                                  onChange={(e) => setComment(e.target.value)}
                                ></textarea>
                                <button
                                  type="submit"
                                  className="px-8 py-2.5 rounded text-sm font-semibold bg-[#064F48] text-white hover:bg-[#D76A40]"
                                >
                                  Submit
                                </button>
                              </form>
                            </div>
                          ) : (
                            <>
                              <h1 className="text-lg font-semibold">
                                Please{" "}
                                <Link
                                  to="/login"
                                  className="underline underline-[#064F48] hover:text-[#E56A40] "
                                >
                                  sign in
                                </Link>{" "}
                                to write a review
                              </h1>
                            </>
                          )}
                        </div>
                        <div className="flex-1">
                          {Product.reviews.map((review: ReviewProps) => (
                            <div
                              key={review._id}
                              className="flex flex-col gap-2"
                            >
                              <h1 className="bg-white p-2 rounded-md text-md font-normals">
                                {review.name}
                              </h1>
                              <Rating
                                value={review.rating}
                                review={review.numReviews}
                              />
                              <p className="bg-white p-2 rounded-md text-md font-normal">
                                {review.createdAt.substring(0, 10)}
                              </p>
                              <p className="bg-white p-2 rounded-md text-md font-normal">
                                {review.comment}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductsScreen;
