import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import router from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorHandler.js";

connectDB();
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/products", router);

app.use(notFound);
app.use(errorHandler);

const Port = process.env.PORT || 5000;
app.listen(Port, () => {
  console.log(`listening on port ${Port}`);
});
