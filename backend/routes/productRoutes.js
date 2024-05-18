import express from "express";
const router = express.Router();
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getNewArrivals,
  getFeaturedProducts,
  getTopRatedProducts,
  getSearchProducts,
  getWomenProducts,
  getMenProducts,
  getKidsProducts,
  getTravelProducts,
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
import upload from "../utils/storage.js";
router
  .route("/")
  .get(getProducts)
  .post(protect, admin, upload.single("file"), createProduct);
router.route("/search").get(getSearchProducts);
router.route("/women").get(getWomenProducts);
router.route("/men").get(getMenProducts);
router.route("/kids").get(getKidsProducts);
router.route("/travel").get(getTravelProducts);
router.route("/new-arrival").get(getNewArrivals);
router.route("/featured-products").get(getFeaturedProducts);
router.route("/top-products").get(getTopRatedProducts);
router
  .route("/:id")
  .get(getProduct)
  .put(protect, admin, upload.single("file"), updateProduct)
  .delete(protect, admin, deleteProduct);
router.route("/:id/reviews").post(protect, createProductReview);

export default router;
