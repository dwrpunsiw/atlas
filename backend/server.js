// setup dependency
const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const path = require("path");
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

const dirname = path.resolve();
app.use("/uploads", express.static(path.join(dirname, "/uploads")));

// setup frontend static file frontend for production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(dirname, "/frontend/build")));

  app.get("*", (req, res) => {
    console.log(dirname);
    res.sendFile(path.resolve(dirname, "frontend", "build", "index.html"));
  });
} else {
  app.use("/", homeRoutes);
}

// routes error handler
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3001;
const ENV = process.env.NODE_ENV;

app.listen(PORT, () => {
  console.log(`Server running ${ENV} mode on port ${PORT}`.yellow.bold);
});
