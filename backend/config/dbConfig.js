const mongoose = require("mongoose");

mongoose.connect(process.env.mongo_URL);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log(" mongoDB is connection");
});

connection.on("error", (error) => {
  console.log("Error in mongoDB connection", error);
});
module.exports = mongoose;
