import React, { useState } from "react";
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
    };

    try {
      const result = await createProduct(productData).unwrap();
      console.log("Product creation result:", result);
      toast.success("Product created successfully");
    } catch (error) {
      console.error("Product creation error:", error);
      toast.error("Product creation failed");
    }
  };

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("image", file);
      try {
        const res = await uploadAllProductImage({ formData }).unwrap();
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
    <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
      <h1 className="text-xl font-bold text-white capitalize dark:text-white">
        Add New Product
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label className="text-white dark:text-gray-200" htmlFor="username">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="text-white dark:text-gray-200" htmlFor="price">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="text-white dark:text-gray-200" htmlFor="password">
              Brand
            </label>
            <input
              type="text"
              id="brand"
              name="brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label
              className="text-white dark:text-gray-200"
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
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label
              className="text-white dark:text-gray-200"
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
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label
              className="text-white dark:text-gray-200"
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
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-white">
              Image
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-white"
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
                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
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
                  <p className="pl-1 text-white">or drag and drop</p>
                </div>
                <p className="text-xs text-white">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </section>

    // <form
    //   onSubmit={handleSubmit}
    //   className="max-w-lg mx-auto my-10 p-8 shadow-lg rounded-lg"
    // >
    //   <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Product</h2>
    //   <div className="mb-4">
    //     <label
    //       htmlFor="name"
    //       className="block text-gray-700 text-sm font-bold mb-2"
    //     >
    //       Name
    //     </label>
    //     <input
    //       type="text"
    //       id="name"
    //       name="name"
    //       value={name}
    //       onChange={(e) => setName(e.target.value)}
    //       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //       required
    //     />
    //   </div>
    //   <div className="mb-4">
    //     <label
    //       htmlFor="price"
    //       className="block text-gray-700 text-sm font-bold mb-2"
    //     >
    //       Price
    //     </label>
    //     <input
    //       type="number"
    //       id="price"
    //       name="price"
    //       value={price}
    //       onChange={(e) => setPrice(Number(e.target.value))}
    //       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //       required
    //     />
    //   </div>
    //   <div className="mb-4">
    //     <div className="mb-4">
    //       <label
    //         htmlFor="imageUrl"
    //         className="block text-gray-700 text-sm font-bold mb-2"
    //       >
    //         Image URL
    //       </label>
    //       <input
    //         type="text"
    //         id="imageUrl"
    //         name="image"
    //         value={image}
    //         onChange={(e) => setImage(e.target.value)}
    //         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //       />
    //     </div>
    //     <div className="mb-4">
    //       <label
    //         htmlFor="imageFile"
    //         className="block text-gray-700 text-sm font-bold mb-2"
    //       >
    //         Choose File
    //       </label>
    //       <input
    //         type="file"
    //         id="imageFile"
    //         name="imageFile"
    //         onChange={uploadFileHandler}
    //         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //         //   accept="image/*"
    //       />
    //     </div>
    //   </div>
    //   <div className="mb-4">
    //     <label
    //       htmlFor="brand"
    //       className="block text-gray-700 text-sm font-bold mb-2"
    //     >
    //       Brand
    //     </label>
    //     <input
    //       type="text"
    //       id="brand"
    //       name="brand"
    //       value={brand}
    //       onChange={(e) => setBrand(e.target.value)}
    //       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //     />
    //   </div>
    //   <div className="mb-4">
    //     <label
    //       htmlFor="category"
    //       className="block text-gray-700 text-sm font-bold mb-2"
    //     >
    //       Category
    //     </label>
    //     <input
    //       type="text"
    //       id="category"
    //       name="category"
    //       value={category}
    //       onChange={(e) => setCategory(e.target.value)}
    //       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //     />
    //   </div>
    //   <div className="mb-4">
    //     <label
    //       htmlFor="countInStock"
    //       className="block text-gray-700 text-sm font-bold mb-2"
    //     >
    //       Count in Stock
    //     </label>
    //     <input
    //       type="number"
    //       id="countInStock"
    //       name="countInStock"
    //       value={countInStock}
    //       onChange={(e) => setCountInStock(Number(e.target.value))}
    //       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //     />
    //   </div>
    //   <div className="mb-4">
    //     <label
    //       htmlFor="description"
    //       className="block text-gray-700 text-sm font-bold mb-2"
    //     >
    //       Description
    //     </label>
    //     <textarea
    //       id="description"
    //       name="description"
    //       value={description}
    //       onChange={(e) => setDescription(e.target.value)}
    //       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //       rows={3}
    //     ></textarea>
    //   </div>

    //   <button
    //     type="submit"
    //     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    //   >
    //     Submit
    //   </button>
    // </form>
  );
}

export default ProductForm;
