const { Orders } = require("../../models/orders");

const { ctrlWrapper } = require("../../decorators");

const getAllOrders = async (req, res) => {
  const result = await Orders.find();
  res.json(result);
};

module.exports = {
  getAllOrders: ctrlWrapper(getAllOrders),
};
