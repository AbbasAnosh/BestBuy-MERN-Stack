import { asyncHandler } from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

export const getProducts = asyncHandler(async (req, res) => {
  const pageSize = 8;
  const page = Number(req.query.pageNumber) || 1;
  const count = await Product.countDocuments();

  const products = await Product.find({})
    .limit(pageSize)
    .skip(pageSize * (page - 1));
  res.json({ products, page, pages: Math.ceil(count / pageSize) });
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
  const { name, price, description, image, brand, category, countInStock } =
    req.body;

  try {
    const product = new Product({
      user: req.user._id,
      name,
      price,
      description,
      image,
      brand,
      category,
      countInStock,
    });

    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, description, image, brand, category, countInStock } =
    req.body;

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

export const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await Product.deleteOne({ _id: product._id });
    res.status(200).json({ message: "Product deleted" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export const createProductReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;
  const product = await Product.findById(req.params.id);
  if (product) {
    const alreadyReviewed = product.reviews.find(
      (review) => review.user.toString() === req.user._id.toString()
    );
    if (alreadyReviewed) {
      res.status(400);
      throw new Error("Product already reviewed");
    }
    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    };
    product.reviews.push(review);
    product.numReviews = product.reviews.length;
    product.rating =
      product.reviews.reduce((acc, review) => acc + review.rating, 0) /
      product.reviews.length;
    await product.save();
    res.status(201).json({ message: "Review Added" });
  } else {
    res.status(404);
    throw new Error("Resources not found");
  }
});

export const getNewArrivals = asyncHandler(async (req, res) => {
  try {
    const newProducts = await Product.find({ isNewArrival: true }).sort({
      createdAt: -1,
    });
    res.json(newProducts);
  } catch (error) {
    res.status(404);
    throw new Error("Can't get the new arrivals.");
  }
});

export const getFeaturedProducts = asyncHandler(async (req, res) => {
  try {
    const featuredProducts = await Product.find({ isFeatured: true }).sort({
      createdAt: -1,
    });
    res.json(featuredProducts);
  } catch (error) {
    res.status(404);
    throw new Error("Can't get the featured products.");
  }
});

export const getTopRatedProducts = asyncHandler(async (req, res) => {
  const minNumberOfReviews = 10;

  try {
    const topProducts = await Product.find({
      numReviews: { $gte: minNumberOfReviews },
    })
      .sort({ rating: -1 })
      .limit(8);
    res.json(topProducts);
  } catch (error) {
    res.status(404);
    throw new Error("Can't get the top rated products.");
  }
});
