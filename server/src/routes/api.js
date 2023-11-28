const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const bodyParser = require("body-parser");

// Use body-parser middleware
router.use(bodyParser.json());

// Get all products
router.get("/api/get-products", async (req, res) => {
  try {
    const products = await Product.find();
    console.log("Products:", products); // Log the products array
    res.json(products);
  } catch (err) {
    console.error("Error fetching products:", err.message);
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
