import express from "express";
import upload from "../utils/storage.js";
import Product from "../models/productModel.js";

const router = express.Router();

router.post("/:productId", upload.single("image"), async (req, res) => {
  console.log(req.body); // Log text fields
  console.log(req.files);
  const { productId } = req.params;
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    product.image = req.file.path || req.file.url;
    await product.save();

    res.json({ message: "Image uploaded successfully", image: product.image });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
