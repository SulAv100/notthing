require("dotenv").config;
const express = require("express");
const cors = require("cors");

const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const connectDB = require("./utils/db");
const http = require("http");
const socketIo = require("socket.io");

const app = express();

const server = http.createServer(app);
const io = socketIo(server);

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,HHEAD,PUT,PATCH,POST",
  credentials: true,
  allowedHeaders: "Content-Type,Authorization",
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));


app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));



connectDB().then(() => {
  const PORT = process.env.PORT || 3000;
  server.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
  });
});

const userSockets = {};

io.on("connection", (socket) => {
  console.log("User connected with id", socket.id);
});
