const mongoose = require("mongoose");

const Commentary = new mongoose.Schema(
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

module.exports = mongoose.model("Commentary", Commentary);
