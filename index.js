const express = require("express");
const app = express();

// define port
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("welcome to messenger chat app");
});
app.listen(PORT, () => {
  console.log(`Node js server running at port : ${PORT}`);
});
