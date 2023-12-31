require("dotenv").config();

const Blog = require("../model/Blog");

const getAllPost = async (req, res) => {
  try {
    const data = await Blog.find().sort({ _id: -1 });
    const modifiedData = data.map((item) => ({
      _id: item._id,
      createdAt: item.createdAt,
      title: item.title,
      content: item.content,
      description: item.description,
    }));
    res.status(200).json(modifiedData);
  } catch (err) {
    res.status(500).json(err);
  }
};

const postPost = async (req, res) => {
  try {
    if (req.body.pin != process.env.PIN) {
      res.status(500).json({ text: "PIN Is Incorrect" });
    }
    const data = new Blog({
      title: req.body.title,
      content: req.body.content,
      description: req.body.description,
    });
    const responce = await data.save();
    res.status(200).json(responce);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getSinglePost = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Blog.findById(id);
    // console.log(data);
    res.status(200).json({ title: data.title, content: data.content });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

module.exports = { getAllPost, postPost, getSinglePost };
