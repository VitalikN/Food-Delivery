const express = require("express");

const { ordersList, addOrders } = require("../controllers/orders");

const { userOrdersSchema } = require("../models/orders");

const { validateBody } = require("../decorators");

const router = express.Router();

router.get("/", ordersList.getAllOrders);

router.post("/", validateBody(userOrdersSchema), addOrders.addOrders);

module.exports = router;
