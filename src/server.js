const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors());

mongoose.connect("mongodb://192.168.99.100:27012/scienceComics", {
	useNewUrlParser: true
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", require("./routes.js"));

app.listen(3000, () => {
	return console.log("Server Working!");
});
