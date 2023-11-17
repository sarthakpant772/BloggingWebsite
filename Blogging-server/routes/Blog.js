const express = require("express");
const { getAllPost, postPost, getSinglePost } = require("../controller/Blog");

const router = express.Router();

router.get("/allBlogs", getAllPost);
router.post("/postBlog", postPost);
router.get("/getBlogById/:id", getSinglePost);
module.exports = router;
