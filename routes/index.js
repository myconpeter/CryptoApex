const express = require('express');
const router = express.Router();

// get homepage
router.get('/', async (req, res) => {
	res.render('cryptoInvestment');
});

module.exports = router;
