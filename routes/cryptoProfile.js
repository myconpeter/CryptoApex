const express = require('express');
const { ensureAuthenticated } = require('../config/auth');
const router = express.Router();
const User = require('../models/admin');

router.get('/cryptoProfile', ensureAuthenticated, async (req, res) => {
	res.render('cryptoProfile');
});

module.exports = router;
