const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");
const cors = require("cors");
const errorMiddleware = require("./middleware/error");

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "config/config.env" });
}

// Add headers
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

// const corsOptions = {
//   origin: "http://localhost:3000",
//   credentials: true,
//   allowedHeaders: ["Content-Type", "Authorization"],
//   allowedMethods: ["GET", "POST", "PUT", "DELETE"],
//   optionSuccessStatus: 200,
// };

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
// app.use(cors(corsOptions));

// Route Imports

const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");
const payment = require("./routes/paymentRoute");
const orderSystem = require("./routes/orderSystemRoute");
const coupon = require("./routes/couponRoute");
const brand = require("./routes/brandRoute");
const supplier = require("./routes/supplierRoute");
const categories = require("./routes/categoriesRoute");
const banner = require("./routes/bannerRoute");
const feedback = require("./routes/feedbackRoute");
const newFeed = require("./routes/newFeedRoute");
const statistical = require("./routes/statisticalRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);
app.use("/api/v1", orderSystem);
app.use("/api/v1", coupon);
app.use("/api/v1", brand);
app.use("/api/v1", banner);
app.use("/api/v1", feedback);
app.use("/api/v1", newFeed);
app.use("/api/v1", statistical);
app.use("/api/v1", supplier);
app.use("/api/v1", categories);
// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;
