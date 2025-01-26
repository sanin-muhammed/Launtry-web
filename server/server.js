const express = require("express");
const colors = require("colors");
const cors = require("cors");
const morgan = require("morgan");
const authRoutes = require("./routes/authRoutes");
const otherRoutes = require("./routes/routes");
const addressRoutes = require("./routes/addressRoutes");
const orderRoutes = require("./routes/orderRoutes");
const ratingRoutes = require("./routes/ratingRoutes");
const chatRoutes = require("./routes/chatRoutes");
const connectDB = require("./config/database");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT ||2001;
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(morgan("dev"));
connectDB();

app.use("/api", authRoutes);
app.use("/api", otherRoutes);
app.use("/api", addressRoutes);
app.use("/api", orderRoutes);
app.use("/api", ratingRoutes);
app.use("/api", chatRoutes);

app.listen(PORT, () => {
    console.log("server running on port".bold, PORT.yellow.bold);
});
