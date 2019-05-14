const Post = require("../modules/Post");

// Criar post
exports.newPost = async function(req, res) {
	try {
		const post = await Post.create(req.body);
		return res.json(post);
	} catch (error) {
		if (error) console.log(error);
		return res.status(404).send({ error: "Could not create the post" });
	}
};
// Mostra posts por ID
exports.show = async function(req, res) {
	try {
		const post = await Post.findById(req.params.id).populate({
			path: "files",
			options: { sort: { createdAt: -1 } }
		});
		return res.json(post);
	} catch (error) {
		if (error) console.log(error);
		return res.status(404).send({ error: "Could not get any post" });
	}
};
// Acha todos posts do mongo
exports.index = async function(req, res) {
	try {
		const post = await Post.find();
		return res.json(post);
	} catch (error) {
		console.log(error);
		if (error)
			return res.status(404).send({ error: "Could not find any post" });
	}
};
