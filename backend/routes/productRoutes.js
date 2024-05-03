import express from "express";
const router = express.Router();
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
import upload from "../utils/storage.js";
router
  .route("/")
  .get(getProducts)
  .post(protect, admin, upload.single("file"), createProduct);
router
  .route("/:id")
  .get(getProduct)
  .put(protect, admin, upload.single("file"), updateProduct);

export default router;
