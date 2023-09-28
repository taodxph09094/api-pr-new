const app = require("./app");
const cloudinary = require("cloudinary");
const connectDatabase = require("./config/database");
const cors = require("cors");

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "config/config.env" });
}

// Connecting to database
connectDatabase();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});

// Add headers
// const corsOptions = {
//   origin: "http://localhost:3000",
//   credentials: true,
//   allowedHeaders: ["Content-Type", "Authorization"],
//   allowedMethods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
//   optionSuccessStatus: 200,
// };
// app.use(cors(corsOptions));
// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
