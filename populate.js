require("dotenv").config();

const connectDB = require("./db/conne ct");
const Product = require("./models/product");

const jsonProducts = require("./products.json");

const start = async () => {
  try {
    //connect to db to upload the items
    await connectDB(process.env.MONGO_URI);
    //delete all the items if present
    await Product.deleteMany();
    //create a new dB
    await Product.create(jsonProducts);
    console.log("Successful");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
