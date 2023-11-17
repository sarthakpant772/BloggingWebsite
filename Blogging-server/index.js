require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

const Blog = require("./routes/Blog");
const { default: mongoose } = require("mongoose");
app.use("/blog", Blog);

const PORT = process.env.PORT || 5000;

mongoose.set("bufferCommands", true);
mongoose.connect(process.env.MONGO_URL, () => {
  console.log("databse connected");
  app.listen(PORT, () => {
    console.log("server is running at port 5000");
  });
});
