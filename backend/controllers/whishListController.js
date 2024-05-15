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
      return res.status(404).json({ message: "Product not found" });
    }

    const wishlistItem = {
      product: product._id,
      addedAt: new Date(),
    };

    wishlist.wishlistItems.push(wishlistItem);
    await wishlist.save();
    res.status(201).json(wishlist);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding item to wishlist", error: error.message });
  }
});

export const removeItemFromWishlist = asyncHandler(async (req, res) => {
  const { productId } = req.params;
  const user = req.user._id;

  try {
    const wishlist = await Wishlist.findOne({ user });
    if (wishlist) {
      console.log("Product ID to remove:", productId);
      console.log("Current wishlist items:", wishlist.wishlistItems);

      wishlist.wishlistItems = wishlist.wishlistItems.filter(
        (item) => item._id.toString() !== productId
      );

      await wishlist.save();
      res.status(200).json("Product removed");
    } else {
      res.status(404).json({ message: "Wishlist not found" });
    }
  } catch (error) {
    console.error("Error removing item from wishlist:", error.message);
    res.status(500).json({
      message: "Error removing item from wishlist",
      error: error.message,
    });
  }
});

export const getWishlist = asyncHandler(async (req, res) => {
  const user = req.user._id;

  try {
    const wishlist = await Wishlist.findOne({ user }).populate(
      "wishlistItems.product"
    );
    if (!wishlist) {
      return res.status(404).json({ message: "Wishlist not found" });
    }
    res.status(200).json(wishlist);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving wishlist", error: error.message });
  }
});
