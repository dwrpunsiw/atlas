// setup dependency
const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

// routes
const homeRoutes = require("./routes/homeRoutes");

// setup dotenv
dotenv.config();

const app = express();

// handling parsing json middleware
app.use(express.json());

// routes
app.use("/api", homeRoutes);

// routes error handler
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3001;
const ENV = process.env.NODE_ENV;

app.listen(PORT, () => {
  console.log(`Server running ${ENV} mode on port ${PORT}`.yellow.bold);
});
