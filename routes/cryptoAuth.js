const express = require('express');
const router = express.Router();
const passport = require('passport');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const request = require('request');
const { response } = require('express');
const registerUser = require('../config/registerUser'); // Import the registration function
//login get

router.get('/cryptoLogin', (req, res, next) => {
	res.render('cryptoLogin');
});

//login post

router.post('/cryptoLogin', (req, res, next) => {
	passport.authenticate('userLocal', {
		successRedirect: '/cryptoProfile',
		failureRedirect: '/cryptoLogin',
		failureFlash: true,
	})(req, res, next);
});

//signup get

router.get('/cryptoRegister', (req, res, next) => {
	res.render('cryptoRegister');
});

router.post('/cryptoRegister', registerUser);

// user sign out

router.get('/logout', (req, res) => {
	// Use a callback function for req.logout() to ensure it completes before continuing
	req.logout(function (err) {
		if (err) {
			console.error(err);
		}
		req.flash('success_msg', 'You have successfully logged out');
		res.redirect('/');
	});
});
module.exports = router;
