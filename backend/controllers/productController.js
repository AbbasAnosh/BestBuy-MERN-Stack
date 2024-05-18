import { asyncHandler } from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

export const getProducts = asyncHandler(async (req, res) => {
  const pageSize = 12;
  const page = Number(req.query.pageNumber) || 1;
  const category = req.query.category;
  const brand = req.query.brand;
  const minPrice = Number(req.query.minPrice) || 0;
  const maxPrice = Number(req.query.maxPrice) || 10000;
  const priceRanges = req.query.priceRanges;
  const sort = req.query.sort;

  let query = {
    ...(category && { category }),
    ...(brand && { brand }),
    price: { $gte: minPrice, $lte: maxPrice },
  };

  if (minPrice && maxPrice) {
    query.price = { $gte: minPrice, $lte: maxPrice };
  }
  if (priceRanges) {
    const ranges = priceRanges.split(",").map((range) => {
      const [min, max] = range.split("-").map(Number);
      return { price: { $gte: min, $lte: max } };
    });
    query.$or = ranges;
  }
  if (req.query.rangeValue) {
    const rangeValue = Number(req.query.rangeValue);
    query.price = { $gte: minPrice, $lte: rangeValue };
  }
  let sortOptions = {};
  switch (sort) {
    case "Top Products":
      sortOptions.rating = -1;
      break;
    case "New Arrival":
      sortOptions.createdAt = -1;
      break;
    case "Featured":
      sortOptions.isFeatured = -1;
      break;
    case "All Products":
    default:
      sortOptions = {};
  }

  const count = await Product.countDocuments(query);

  const products = await Product.find(query)
    .sort(sortOptions)
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({ products, page, pages: Math.ceil(count / pageSize) });
});

export const getSearchProducts = asyncHandler(async (req, res) => {
  const keyword = req.query.keyword
    ? { name: { $regex: req.query.keyword, $options: "i" } }
    : {};
  const products = await Product.find({ ...keyword });
  res.json({ products });
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
  const {
    name,
    price,
    description,
    image,
    brand,
    category,
    countInStock,
    isNewArrival,
    isFeatured,
  } = req.body;

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
      isNewArrival,
      isFeatured,
    });

    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export const updateProduct = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    description,
    image,
    brand,
    category,
    countInStock,
    isNewArrival,
    isFeatured,
  } = req.body;

  const product = await Product.findById(req.params.id);
  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.image = image;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;
    product.isNewArrival = isNewArrival;
    product.isFeatured = isFeatured;
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
  const minNumberOfReviews = 5;

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

export const getWomenProducts = asyncHandler(async (req, res) => {
  const pageSize = 8;
  const page = Number(req.query.pageNumber) || 1;

  const count = await Product.countDocuments({ category: "Women" });

  try {
    const womenProducts = await Product.find({ category: "Women" })
      .sort({ createdAt: -1 })
      .limit(pageSize)
      .skip(pageSize * (page - 1));

    res.json({
      womenProducts,
      page,
      pages: Math.ceil(count / pageSize),
    });
  } catch (error) {
    res.status(404);
    throw new Error("Can't get the women products.");
  }
});

export const getMenProducts = asyncHandler(async (req, res) => {
  const pageSize = 8;
  const page = Number(req.query.pageNumber) || 1;

  const count = await Product.countDocuments({ category: "Men" });

  try {
    const menProducts = await Product.find({ category: "Men" })
      .sort({ createdAt: -1 })
      .limit(pageSize)
      .skip(pageSize * (page - 1));

    res.json({
      menProducts,
      page,
      pages: Math.ceil(count / pageSize),
    });
  } catch (error) {
    res.status(404);
    throw new Error("Can't get the men products.");
  }
});

export const getKidsProducts = asyncHandler(async (req, res) => {
  const pageSize = 8;
  const page = Number(req.query.pageNumber) || 1;

  const count = await Product.countDocuments({ category: "Kids" });

  try {
    const kidsProducts = await Product.find({ category: "Kids" })
      .sort({ createdAt: -1 })
      .limit(pageSize)
      .skip(pageSize * (page - 1));

    res.json({
      kidsProducts,
      page,
      pages: Math.ceil(count / pageSize),
    });
  } catch (error) {
    res.status(404);
    throw new Error("Can't get the kids products.");
  }
});
export const getTravelProducts = asyncHandler(async (req, res) => {
  const pageSize = 8;
  const page = Number(req.query.pageNumber) || 1;

  const count = await Product.countDocuments({ category: "Travel" });

  try {
    const travelProducts = await Product.find({ category: "Travel" })
      .sort({ createdAt: -1 })
      .limit(pageSize)
      .skip(pageSize * (page - 1));

    res.json({
      travelProducts,
      page,
      pages: Math.ceil(count / pageSize),
    });
  } catch (error) {
    res.status(404);
    throw new Error("Can't get the travel products.");
  }
});
