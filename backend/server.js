const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const mongoUrl = "mongodb+srv://AliDehissy:07498497ali@admin.xpj4ps0.mongodb.net/users";

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  });

  const User = mongoose.model("UserInfo", {
    firstname: String,
    lastname: String,
    email: String,
    password: String,
  });
  
  app.post("/register", async (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    try {
      console.log("got a register request");
      await User.create({
        firstname,
        lastname,
        email,
        password,
      });
      res.send({ status: "Ok" });
    } catch (error) {
      console.error("Error during signup:", error);
      res.status(500).send({ status: "Error" });
    }
  });
  
  app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
      console.log("got a login request");
      const user = await User.findOne({ email });
      if (user && user.password === password) {
        res.send({ status: "Ok" });
      } else {
        res.send({ status: "Error" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send({ status: "Error" });
    }
  });

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  category: String,
});

const Product = mongoose.model("Product", productSchema);

app.get("/api/products", async (req, res) => {
    try {
      const category = req.query.category;
      const filter = category ? { category } : {};
      const products = await Product.find(filter);
      res.json(products);
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).send({ status: "Error" });
    }
  });

app.get("/api/gloves", async (req, res) => {
  try {
    const gloves = await Product.find({ category: "gloves" });
    res.json(gloves);
  } catch (error) {
    console.error("Error fetching gloves:", error);
    res.status(500).send({ status: "Error" });
  }
});

app.get("/api/jeans", async (req, res) => {
    try {
      const jeans = await Product.find({ category: "jeans" });
      res.json(jeans); // Use 'jeans' instead of 'Jeans'
    } catch (error) {
      console.error("Error fetching jeans:", error);
      res.status(500).send({ status: "Error" });
    }
  });

app.listen(3001, () => {
  console.log("Server is starting on port 3001");
});
