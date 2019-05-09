const Coment = require("../modules/Coment");

class comentController {
	async newComent(req, res) {
		try {
			const coment = await Coment.create(req.body);
			return res.json(coment); // Comentários ainda com relacionamento estático direto do mongo
		} catch (error) {
			if (error) console.log(error);
			return res.status(404).send({ error: "Canot create the commentary" });
		}
	}
}

module.exports = new comentController();
