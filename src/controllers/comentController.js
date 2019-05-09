const Coment = require("../modules/Coment");

class comentController {
	async newComent(req, res) {
		const coment = await Coment.create(req.body);
		return res.json(coment); // Comentários ainda com relacionamento estático direto do mongo
	}
}

module.exports = new comentController();
