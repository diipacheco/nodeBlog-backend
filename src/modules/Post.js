const mongoose = require("mongoose");
const Post = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true
		},
		content: {
			type: String,
			required: true
		},
		author: {
			type: String,
			required: true
		},
		coments: [{ type: mongoose.Schema.Types.String, ref: "Coments" }]
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model("Post", Post);
