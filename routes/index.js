const express = require('express');
const router = express.Router();

// get homepage
router.get('/', async (req, res) => {
	res.render('index');
});

router.get('/about', async (req, res) => {
	res.render('about');
});

router.get('/contact', async (req, res) => {
	res.render('contact');
});

module.exports = router;
