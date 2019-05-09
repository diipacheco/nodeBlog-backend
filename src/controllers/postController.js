const Post = require("../modules/Post");
class postController {
	async newPost(req, res) {
		try {
			const post = await Post.create(req.body);
			return res.json(post);
		} catch (error) {
			if (error) console.log(error);
			return res.status(404).send({ error: "Could not create the post" });
		}
	}

	async show(req, res) {
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
	}
}

module.exports = new postController();
