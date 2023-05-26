const mongoose = require("mongoose");

const app = require("./app");

const DB_HOST =
  "mongodb+srv://Vitalii:Ad8WtrhM3MDrKKvA@cluster0.ietjxtl.mongodb.net/food-delivery?retryWrites=true&w=majority";
mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3001);
    console.log("Database connection successful");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
