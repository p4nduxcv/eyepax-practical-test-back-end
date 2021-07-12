const express = require("express");
const app = express();

// use PORT 3600
const port = process.env.PORT || 3600;

app.use(express.json());

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
