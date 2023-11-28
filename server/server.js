const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();

const cors = require("cors");
const connectDB = require("./src/config/db");
const apiRoutes = require("./src/routes/api");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(cors());

// Use API routes
app.use(apiRoutes);

connectDB();

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
