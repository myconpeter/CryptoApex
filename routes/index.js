const express = require('express');
const router = express.Router();
const {ensureAuthenticated} = require('../config/auth');


// get homepage
router.get('/', async (req, res) => {
  res.render('index');
});

router.get('/realEstate', ensureAuthenticated,(req, res, next)=>{
  res.render('realEstate')
})

router.get('/cashInvestment', ensureAuthenticated,(req, res, next)=>{
  res.render('cashInvestment')
})

router.get('/cryptoInvestment', ensureAuthenticated,(req, res, next)=>{
  res.render('cryptoInvestment')
})

router.get('/assetManagement', ensureAuthenticated,(req, res, next)=>{
  res.render('assetManagement')
})











module.exports = router;
