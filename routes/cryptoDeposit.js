const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

// get homepage
router.get('/cryptoDeposit', ensureAuthenticated, async (req, res) => {
	res.render('cryptoFundAccount');
});

router.get('/cryptoWithdraw', ensureAuthenticated, async (req, res) => {
	res.render('cryptoWithdraw');
});

module.exports = router;
