import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";

import products from "./data/products.js";
connectDB();
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/products", (req, res) => {
  res.json(products);
});
app.get("/api/products/:id", (req, res) => {
  const product = products.find((pro) => pro._id === req.params.id);
  res.json(product);
});

const Port = process.env.PORT || 5000;
app.listen(Port, () => {
  console.log(`listening on port ${Port}`);
});
