import { useEffect, useState } from "react";
import classNames from "classnames";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useGetProductDetailsQuery,
  useUpdateProductMutation,
  useUploadProductImageMutation,
} from "../../slices/productsApiSlice";
import { toast } from "react-toastify";

const ProductEditPage = () => {
  const { id: productId } = useParams();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [isNewArrival, setIsNewArrival] = useState(false);
  const [isFeatured, setIsFeatured] = useState(false);

  const { data: Product, error } = useGetProductDetailsQuery(productId);

  const [updateProduct, { isLoading: updateLoading }] =
    useUpdateProductMutation();

  const [uploadProductImage] = useUploadProductImageMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (Product) {
      setName(Product.name);
      setPrice(Product.price);
      setDescription(Product.description);
      setImage(Product.image);
      setBrand(Product.brand);
      setCategory(Product.category);
      setCountInStock(Product.countInStock);
      setIsNewArrival(Product.isNewArrival);
      setIsFeatured(Product.isFeatured);
    }
  }, [Product]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await updateProduct({
      productId,
      name,
      price,
      description,
      image,
      brand,
      category,
      countInStock,
      isNewArrival,
      isFeatured,
    });
    navigate("/admin/dashboard");
  };

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("image", file);
      try {
        const res = await uploadProductImage({ productId, formData }).unwrap();
        toast.success(res.message);
        setImage(res.image);
      } catch (err) {
        toast.error(
          err.response?.data?.message || err.message || "An error occurred"
        );
      }
    } else {
      toast.error("No file selected");
    }
  };

  return (
    <div>
      <div className="mb-10 mt-10 flex font-semibold flex-col max-w-7xl mx-auto">
        <Link to="/admin/dashboard" className="hover:text-[#E56A40]">
          Go Back
        </Link>
        {updateLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label className="text-[#064F48]" htmlFor="username">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 border border-[#064F48] rounded-md focus:outline-none focus:ring-0 outline-none ring-0 focus:border-[#E56A40]"
                />
              </div>

              <div>
                <label className="text-[#064F48]" htmlFor="price">
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={price}
                  onChange={(e) =>
                    setPrice(e.target.value ? Number(e.target.value) : "")
                  }
                  className="block w-full px-4 py-2 mt-2 text-gray-700 border border-[#064F48] rounded-md focus:outline-none focus:ring-0 outline-none ring-0 focus:border-[#E56A40]"
                />
              </div>

              <div>
                <label className="text-[#064F48]" htmlFor="password">
                  Brand
                </label>
                <input
                  type="text"
                  id="brand"
                  name="brand"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 border border-[#064F48] rounded-md focus:outline-none focus:ring-0 outline-none ring-0 focus:border-[#E56A40]"
                />
              </div>

              <div>
                <label
                  className="text-[#064F48]"
                  htmlFor="passwordConfirmation"
                >
                  Category
                </label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 border border-[#064F48] rounded-md focus:outline-none focus:ring-0 outline-none ring-0 focus:border-[#E56A40]"
                />
              </div>
              <div>
                <label
                  className="text-[#064F48]"
                  htmlFor="passwordConfirmation"
                >
                  Count In Stock
                </label>
                <input
                  type="number"
                  id="countInStock"
                  name="countInStock"
                  value={countInStock}
                  onChange={(e) => setCountInStock(Number(e.target.value))}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 border border-[#064F48] rounded-md focus:outline-none focus:ring-0 outline-none ring-0 focus:border-[#E56A40]"
                />
              </div>
              <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div
                  className={classNames("flex items-center", {
                    "col-span-1": true,
                  })}
                >
                  <input
                    type="checkbox"
                    id="isNewArrival"
                    name="isNewArrival"
                    checked={isNewArrival}
                    onChange={(e) => setIsNewArrival(e.target.checked)}
                    className="mr-2"
                  />
                  <label className="text-[#064F48]" htmlFor="isNewArrival">
                    Is New Arrival
                  </label>
                </div>
                <div
                  className={classNames("flex items-center", {
                    "col-span-1": true,
                  })}
                >
                  <input
                    type="checkbox"
                    id="isFeatured"
                    name="isFeatured"
                    checked={isFeatured}
                    onChange={(e) => setIsFeatured(e.target.checked)}
                    className="mr-2"
                  />
                  <label className="text-[#064F48]" htmlFor="isFeatured">
                    Is Featured
                  </label>
                </div>
              </div>
              <div>
                <label
                  className="text-[#064F48]"
                  htmlFor="passwordConfirmation"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={description}
                  rows={3}
                  onChange={(e) => setDescription(e.target.value)}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 border border-[#064F48] rounded-md focus:outline-none focus:ring-0 outline-none ring-0 focus:border-[#E56A40]"
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#064F48]">
                  Image
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-[#064F48] border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-[#064F48]"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="imageFile"
                        className="relative cursor-pointer font-medium bg-white p-1 text-gray-700 border border-[#064F48] rounded-md focus:outline-none focus:ring-0 outline-none ring-0 focus:border-[#E56A40]"
                      >
                        <span className="">Upload a file</span>
                        <input
                          type="file"
                          id="imageFile"
                          name="imageFile"
                          onChange={uploadFileHandler}
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1 text-[#064F48]">or drag and drop</p>
                    </div>
                    <p className="text-xs text-[#064F48]">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                type="submit"
                className="bg-[#064F48] hover:bg-[#E56A40] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ProductEditPage;
