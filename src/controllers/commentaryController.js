const Commentary = require("../modules/Commentary");
const Post = require("../modules/Post");

exports.newCommentary = async function(req, res) {
	try {
		const post = await Post.findById(req.params.id);
		const commentary = await Commentary.create(req.body);
		post.comments.push(commentary);
		await post.save();
		return res.json(commentary);
	} catch (error) {
		if (error) console.log(error);
		res.status(404).send({ error: "Could not create the commentary" });
	}
};

exports.editCommentary = async function(req, res) {
	try {
		const commentary = await Commentary.findOneAndUpdate(
			req.params.id,
			req.body
		);
		return res.json(commentary);
	} catch (error) {
		console.log(error);
	}
};

exports.deleteCommentary = async function(req, res) {
	try {
		const commentary = await Commentary.findOneAndDelete(req.params.id);
		res.json(commentary);
	} catch (error) {
		console.log(error);
	}
};
