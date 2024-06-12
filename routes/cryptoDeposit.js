const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

// get homepage
router.get('/cryptoDeposit', ensureAuthenticated, async (req, res) => {
	res.render('cryptoFundAccount');
});

module.exports = router;
