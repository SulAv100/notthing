const express = require("express");
const cors = require("cors");

const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const connectDB = require("./utils/db");
const corsOptions = {
  origin: "*",
  methods: "GET,HHEAD,PUT,PATCH,POST",
  credentials: true,
  allowedHeaders: "Content-Type,Authorization",
};

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors(corsOptions));

connectDB().then(() => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
  });
});
