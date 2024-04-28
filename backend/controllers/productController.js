import { asyncHandler } from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  if (!products) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.status(200).json(products);
});

export const getProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    return res.status(200).json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

export const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: "",
    price: 0,
    user: req.user._id,
    image: "",
    brand: "",
    category: "",
    countInStock: 0,
    description: "",
    numReviews: 0,
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

export const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, description, image, brand, category, countInStock } =
    req.body;
  console.log(req, "bodydddddd");
  const product = await Product.findById(req.params.id);
  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.image = image;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;
    const updatedProduct = await product.save();
    res.status(200).json(updatedProduct);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});
