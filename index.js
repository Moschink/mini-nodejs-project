const express = require('express');
const shopRouter = require("./router");
require("dotenv").config();
const app = express();
const port = 3000;
app.use(express.json());

app.use("/shop", shopRouter);
// app.get('/', (req, res) => {
//   res.send('Hello Moshy my guy, howfa!');
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
