const bcrypt = require('bcrypt');
const User = require('../models/user');



// ... (Validation and hashing functions remain the same)
function validateInputData(reqBody) {
  const { fullname, username, email, telephone, password } = req.body;
  const errors = [];
  

  if (!fullname || !username || !email || !telephone|| !password) {
    errors.push({ msg: 'Please fill in all fields' });
  }

  
  if (password.length < 6) {
    errors.push({ msg: 'Password must be at least 6 characters' });
  }

  return errors;

  
}

// Function to hash the user's password
async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

// Registration route handler
async function registerUser(req, res) {
  const errors = validateInputData(req.body);
  

  if (errors.length > 0) {
    return res.render('register', {
      errors,
      ...req.body,
    });
  }

  const { email, username, referralCode } = req.body;



  try {
    const existingEmailUser = await User.findOne({ email }).exec();
    const existingUsernameUser = await User.findOne({username }).exec();

    if (existingEmailUser) {
      errors.push({ msg: 'Email already registered, please choose another' });
    }

    if (existingUsernameUser) {
      errors.push({ msg: 'Username already registered, please choose another' });
    }

    if (errors.length > 0) {
      return res.render('register', {
        errors,
        ...req.body,
      });
    }

    const hashedPassword = await hashPassword(req.body.password);
    const newUser = new User({
      ...req.body,
      password: hashedPassword,
    
    });

    await newUser.save();
    req.flash('success_msg', 'You have now registered, please login');
    res.redirect('/login');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}

module.exports = registerUser;
