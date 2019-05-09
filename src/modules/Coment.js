const mongoose = require("mongoose");

const Coment = new mongoose.Schema(
	{
		author: {
			type: String,
			require: true
		},
		content: {
			type: String,
			require: true
		}
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model("Coment", Coment);
