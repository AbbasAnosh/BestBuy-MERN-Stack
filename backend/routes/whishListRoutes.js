import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  addItemToWishlist,
  getWishlist,
  removeItemFromWishlist,
} from "../controllers/whishListController.js";

const router = express.Router();

router.get("/", protect, getWishlist);
router.post("/add", protect, addItemToWishlist);
router.delete("/:productId", protect, removeItemFromWishlist);

export default router;
