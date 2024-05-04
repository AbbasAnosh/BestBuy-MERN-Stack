import { useEffect, useState } from "react";
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
    });
    navigate("/admin/productlist");
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
      <div className="mb-10 flex font-semibold flex-col max-w-7xl mx-auto">
        <Link to="/admin/productlist" className="hover:text-[#E56A40]">
          Go Back
        </Link>
        {updateLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error</p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-3xl mx-auto my-10 p-8 shadow-lg rounded-lg"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Update Product
            </h2>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Name
              </label>
              <input
                type="name"
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
                  onChange={(e) => setImage}
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
        )}
      </div>
    </div>
  );
};

export default ProductEditPage;
