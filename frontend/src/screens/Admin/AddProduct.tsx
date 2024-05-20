import React, { useState } from "react";
import classNames from "classnames";
import {
  useCreateProductMutation,
  useUploadAllProductImageMutation,
} from "../../slices/productsApiSlice";
import { toast } from "react-toastify";

function ProductForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [isNewArrival, setIsNewArrival] = useState(false);
  const [isFeatured, setIsFeatured] = useState(false);

  const [createProduct] = useCreateProductMutation();
  const [uploadAllProductImage] = useUploadAllProductImageMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const productData = {
      name,
      price,
      description,
      image,
      brand,
      category,
      countInStock,
      isNewArrival,
      isFeatured,
    };

    try {
      const result = await createProduct(productData).unwrap();
      console.log("Product creation result:", result);
      toast.success("Product created successfully");
      setName("");
      setPrice(0);
      setDescription("");
      setImage("");
      setBrand("");
      setCategory("");
      setCountInStock(0);
      setIsNewArrival(false);
      setIsFeatured(false);
    } catch (error) {
      console.error("Product creation error:", error);
      toast.error("Product creation failed");
    }
  };

  const uploadFileHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("image", file);
      try {
        const res = await uploadAllProductImage({ formData }).unwrap();
        toast.success(res.message);
        setImage(res.image);
      } catch (err: any) {
        toast.error(
          err.response?.data?.message || err.message || "An error occurred"
        );
      }
    } else {
      toast.error("No file selected");
    }
  };

  return (
    <div className="py-4">
      <div className="flex items-center justify-between py-7 px-7 ">
        <div>
          <h1 className="text-2xl font-semibold leading-relaxed text-gray-800">
            Create Product
          </h1>
          <p className="text-sm font-medium text-gray-500">
            Prodcuts to be added
          </p>
        </div>
      </div>
      <section className="p-6">
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
                  setPrice(e.target.value ? Number(e.target.value) : 0)
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
              <label className="text-[#064F48]" htmlFor="passwordConfirmation">
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
              <label className="text-[#064F48]" htmlFor="passwordConfirmation">
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
              <label className="text-[#064F48]" htmlFor="passwordConfirmation">
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
      </section>
    </div>
  );
}

export default ProductForm;
