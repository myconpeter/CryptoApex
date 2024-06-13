const express = require('express');
const router = express.Router();
const Admin = require('../models/admin');

const passport = require('passport');
const request = require('request');
const { response } = require('express');
const { ensureAuthenticated } = require('../config/auth');

//login get

router.get('/admin', (req, res, next) => {
	res.render('AdminLogin');
});

//login post

router.post('/admin-login', (req, res, next) => {
	passport.authenticate('userLocal', {
		successRedirect: '/adminLanding',
		failureRedirect: '/admin',
		failureFlash: true,
	})(req, res, next);
});

//   try {
//     const allUsers = await User.find();
//     res.render('admin', { tickets: allUsers });
// } catch (err) {
//     console.error(err);
//     res.status(500).send('Server Error');
// }
//   })

//   router.get('/editUser/:id', async(req,res)=>{
//     // find through the req.params
//     const ticket = await User.findById(req.params.id);
//     if(!ticket){
//         res.send('error, cannot get item')
//     }
//     res.render('editUserForm', { ticket });

router.get('/adminLanding', ensureAuthenticated, async (req, res) => {
	res.render('adminLanding');
});

router.post('/editedUser/:id', async (req, res) => {
	const { id } = req.params;
	console.log(req.body);
	const user = await User.findById(id);
	const {
		fullname,
		email,
		telephone,
		username,
		cashInvestment,
		assetIncome,
		realEstate,
		cryptoInvestment,
	} = req.body;

	if (!user) {
		res.send('error, cannot get item');
	}
	const editUser = await User.findByIdAndUpdate(id, {
		fullname,
		email,
		telephone,
		username,
		cashInvestment,
		assetIncome,
		realEstate,
		cryptoInvestment,
	});

	if (!editUser) {
		return res.send('error');
	}

	req.flash('success_msg', 'You have successfully update ' + fullname);
	res.redirect('/admin');
});

router.get('/deleteUser/:id', async (req, res) => {
	const ticketId = req.params.id;

	try {
		// Find the ticket by its ID and remove it from the database
		await User.findByIdAndDelete(ticketId);

		// Redirect back to the page displaying all tickets after deletion
		req.flash('success_msg', 'Deleted successfully.');

		res.redirect('/admin');
	} catch (err) {
		console.error(err);
		res.status(500).send('Server Error');
	}
});

// post contact

module.exports = router;
