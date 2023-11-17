const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");

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

// const client = new MongoClient(
//   "mongodb+srv://sarthakpant31:hondabrio@cluster1.0eaee7y.mongodb.net/?retryWrites=true&w=majority",
//   {
//     serverApi: {
//       version: ServerApiVersion.v1,
//       strict: true,
//       deprecationErrors: true,
//     },
//     connectTimeoutMS: 30000, // 30 seconds
//     socketTimeoutMS: 30000, // 30 seconds
//   }
// );

// async function run() {
//   try {
//     await client.connect();
//     await client.db("admin").command({ ping: 1 });
//     console.log("Connected to MongoDB!");

//     // Start the Express app after a successful connection
//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`);
//     });
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error.message);
//     process.exit(1);
//   }
// }
// run().catch(console.dir);
mongoose.set("bufferCommands", true);
mongoose.connect(process.env.MONGO_URL, () => {
  console.log("databse connected");
  app.listen(PORT, () => {
    console.log("server is running at port 5000");
  });
});
