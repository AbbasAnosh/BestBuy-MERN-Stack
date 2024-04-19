import { asyncHandler } from "../middleware/asyncHandler.js";
import Order from "../models/orderModel.js";

const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(401);
    throw new Error("Please provide at least one order item");
  } else {
    const order = await Order.create({
      orderItems: orderItems.map((orderItem) => ({
        ...orderItem,
        product: orderItem._id,
        _id: undefined,
      })),
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });
    const createOrder = await order.save();
    res.status(201).json(createOrder);
  }
});

const getOrderItems = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.status(201).json(orders);
});

const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );
  if (order) {
    res.status(201).json(order);
  } else {
    res.status(401);
    throw new Error("Order not found");
  }
});

const updateOrderToPaid = asyncHandler(async (req, res) => {
  res.send("update order");
});

const updateOrderToDelivered = asyncHandler(async (req, res) => {
  res.send("update order");
});

const getOrders = asyncHandler(async (req, res) => {
  res.send("get orders");
});

export {
  addOrderItems,
  getOrderItems,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
};
