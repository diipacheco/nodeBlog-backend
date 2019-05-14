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
		comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comments" }]
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model("Post", Post);
