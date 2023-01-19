const express = require("express");
const router = express.Router();
const { generateImage } = require("../controllers/openaiController");

router.post("/generateImage", (req, res) => {
	res.status(200).json({
		success: true,
	});
});

module.exports = router;
