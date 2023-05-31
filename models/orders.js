const { Schema, model } = require("mongoose");
const Joi = require("joi");

const ordersSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    totalPrice: String,

    product: [
      {
        totalPrice: String,
        restaurant: String,
        title: String,
        price: String,
        count: Number,
      },
    ],
  },
  { versionKey: false }
);
const userOrdersSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  address: Joi.string().required(),
  product: Joi.array(),
  // totalPrice: Joi.number(),
});

const Orders = model("orders", ordersSchema);

module.exports = { Orders, userOrdersSchema };
