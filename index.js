const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors")
const app = express();
const PORT = process.env.PORT

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use("/api",require("./v1/routes/admin"));


app.listen(PORT, console.log(`Server is running at port: ${PORT}`));
