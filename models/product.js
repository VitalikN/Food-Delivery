const { Schema, model } = require("mongoose");
const Joi = require("joi");

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
const Product = model("product", productSchema);

const productSchemaJoi = Joi.object({
  title: Joi.string().required(),
  price: Joi.number().required(),
});

const schemas = {
  productSchemaJoi,
};

module.exports = { Product, schemas };
