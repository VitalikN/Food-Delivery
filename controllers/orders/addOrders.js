const { Orders } = require("../../models/orders");

const { ctrlWrapper } = require("../../decorators");

const addOrders = async (req, res) => {
  const result = await Orders.create(req.body);
  res.status(201).json(result);
};
module.exports = {
  addOrders: ctrlWrapper(addOrders),
};
