const express = require('express');
const { ensureAuthenticated } = require('../config/auth');
const router = express.Router();
const User = require("../models/user");





// get profile
router.get('/profile',ensureAuthenticated, async(req, res)=>{
   res.render('profile')
  })


module.exports = router;



