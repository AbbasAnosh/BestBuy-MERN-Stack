import express from "express";
const router = express.Router();
import {
  getProducts,
  getProduct,
  createProduct,
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
router.route("/").get(getProducts).post(protect, admin, createProduct);
router.route("/:id").get(getProduct);

export default router;
