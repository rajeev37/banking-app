const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

// DB Connection.
const uri = process.env.DB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection established Successfull");
})

// Routes.
const customerRoute = require("./routes/customer");
app.use("/customer", customerRoute);

app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
});