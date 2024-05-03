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
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto my-10 p-8 shadow-lg rounded-lg"
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Product</h2>
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="price"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Price
        </label>
        <input
          type="number"
          id="price"
          name="price"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <div className="mb-4">
          <label
            htmlFor="imageUrl"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Image URL
          </label>
          <input
            type="text"
            id="imageUrl"
            name="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="imageFile"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Choose File
          </label>
          <input
            type="file"
            id="imageFile"
            name="imageFile"
            onChange={uploadFileHandler}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            //   accept="image/*"
          />
        </div>
      </div>
      <div className="mb-4">
        <label
          htmlFor="brand"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Brand
        </label>
        <input
          type="text"
          id="brand"
          name="brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="category"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Category
        </label>
        <input
          type="text"
          id="category"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="countInStock"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Count in Stock
        </label>
        <input
          type="number"
          id="countInStock"
          name="countInStock"
          value={countInStock}
          onChange={(e) => setCountInStock(Number(e.target.value))}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          rows={3}
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </form>
  );
}

export default ProductForm;
