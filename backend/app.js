const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});
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

app.listen(3001, () => {
  console.log("Server is starting on port 3001");
});