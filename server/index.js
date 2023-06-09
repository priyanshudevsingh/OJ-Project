const dotenv = require("dotenv");
const express = require("express");
const cookieParser = require('cookie-parser')
const app = express();

dotenv.config({ path: "./config.env" });

require("./db/connect");

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));

app.use(require("./router/auth"));

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
