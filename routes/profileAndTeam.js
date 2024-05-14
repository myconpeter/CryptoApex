const express = require('express');
const { ensureAuthenticated } = require('../config/auth');
const router = express.Router();
const User = require("../models/user");
const withdrawal = require("../models/withdrawal");
const Deposit = require("../models/deposit");
const Withdrawal = require('../models/withdrawal');




// get profile
router.get('/profile',ensureAuthenticated, async(req, res)=>{
   res.render('profile')
  })


module.exports = router;



