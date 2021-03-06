//cores
const cors = require("cors");

// express
const express = require("express");
const app = express();

// use PORT 3600
const port = process.env.PORT || 3600;

// routings
const api = require("./routes/api");

app.use(express.json());
app.use(cors());
app.use("/api", api);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
