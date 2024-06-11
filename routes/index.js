const express = require('express');
const router = express.Router();

// get homepage
router.get('/', async (req, res) => {
	res.render('index');
});

router.get('/realEstate', (req, res, next) => {
	res.render('realEstate');
});

router.get('/cashInvestment', (req, res, next) => {
	res.render('cashInvestment');
});

router.get('/cryptoInvestment', (req, res, next) => {
	res.render('cryptoInvestment');
});

router.get('/assetManagement', (req, res, next) => {
	res.render('assetManagement');
});

module.exports = router;
