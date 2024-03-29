import express from "express";
const router = express.Router();
import { asyncHandler } from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    if (products) {
      res.status(200).json(products);
      res.json(products);
      console.log(products);
    } else {
      throw new Error("Product not found");
    }
  })
);
router.get(
  "/:id",

  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.status(200).json(product);
      console.log(product);
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  })
);

export default router;
