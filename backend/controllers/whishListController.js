import { asyncHandler } from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";
import Wishlist from "../models/wishListModel.js";

export const addItemToWishlist = asyncHandler(async (req, res) => {
  console.log(req.body, "this is request body");
  const { _id: productId } = req.body;
  const user = req.user._id;

  try {
    let wishlist = await Wishlist.findOne({ user });
    if (!wishlist) {
      wishlist = new Wishlist({ user, wishlistItems: [] });
    }

    const productExists = wishlist.wishlistItems.some(
      (item) => item.product.toString() === productId
    );

    if (productExists) {
      return res
        .status(400)
        .json({ message: "Product is already in your wishlist" });
    }

    const product = await Product.findById(productId);
    if (!product) {
      res.status(404);
      throw new Error("Product not found", error.message);
    }

    const wishlistItem = {
      product: product._id,
      addedAt: new Date(),
    };

    wishlist.wishlistItems.push(wishlistItem);
    await wishlist.save();
    res.status(201).json(wishlist);
  } catch (error) {
    res.status(404);
    throw new Error("Error adding item to wishlist", error.message);
  }
});

export const removeItemFromWishlist = asyncHandler(async (req, res) => {
  const { productId } = req.params;
  const user = req.user._id;

  try {
    const wishlist = await Wishlist.findOne({ user });
    if (wishlist) {
      wishlist.wishlistItems = wishlist.wishlistItems.filter(
        (item) => item._id.toString() !== productId
      );

      await wishlist.save();
      res.status(200).json("Wishlist removed");
    } else {
      res.status(404);
      throw new Error("Wishlist not found", error.message);
    }
  } catch (error) {
    console.error("Error removing item from wishlist:", error.message);
    res.status(404);
    throw new Error("Error removing item from wishlist", error.message);
  }
});

export const getWishlist = asyncHandler(async (req, res) => {
  const user = req.user._id;

  try {
    const wishlist = await Wishlist.findOne({ user }).populate(
      "wishlistItems.product"
    );
    if (!wishlist) {
      res.status(404);
      throw new Error("Wishlist not found", error.message);
    }
    res.status(200).json(wishlist);
  } catch (error) {
    res.status(404);
    throw new Error("Error retrieving wishlist", error.message);
  }
});
