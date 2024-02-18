import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import router from "./routes/index.js";
import dbConnector from "./App.js";
import morgan from "morgan";
import cors from "cors";
const session = require("express-session");
const MemoryStore = require("memorystore")(session);

const app = express();
dotenv.config();

// Configurations
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  session({
    cookie: { maxAge: 86400000 },
    store: new MemoryStore({
      checkPeriod: 86400000, // prune expired entries every 24h
    }),
    resave: false,
    saveUninitialized: false,
    secret: "keyboard cat",

  })
);

app.use(express.json());
// Routes
app.use("/api", router);
dbConnector;
const PORT = process.env.PORT || 4200;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port: http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    author: "theyCallMeDeSaint",
    message: "Welcome to the IssaPortfolio API!",
  });
});
