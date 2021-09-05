const express = require("express");
const cors = require("cors");
require("dotenv").config();
// const { connectMongoDB } = require("./db/connect");
const AuthRoute = require("../src/routes/auth");

const main = async () => {
  const app = express();
  const port = process.env.PORT || '4000';
  app.use(cors());
  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true,
    })
  );
  app.get("/", function (req, res) {
    res.send("Server is up and running");
  });
  app.use("/api/auth", AuthRoute);
  app.listen(port, () => {
    console.log("Server Running at port", port);
  });
};

main();