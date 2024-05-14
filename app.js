const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose= require('mongoose');
const passport = require ('passport');
const session = require('express-session');
const flash = require("connect-flash");
const ejs = require('ejs');

const PORT  = process.env.PORT

const app = express();

//passport config:
require('./config/passport')





// Get all routes

const indexRoutes = require("./routes/index");
const authRoutes = require("./routes/auth");
const changePasswordRoutes = require("./routes/changePassword");
const contactRoutes = require("./routes/contact");
const profileAndTeamRoutes = require("./routes/profileAndTeam");




// view engine setup
app.set('view engine', 'ejs');

// PASSPORT CONFIGURATION
app.use(session({
  secret : 'mycon',
  resave : true,
  saveUninitialized : true
}));

app.use(passport.initialize());
app.use(passport.session());


app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(session({
  secret : 'mycon',
  resave : true,
  saveUninitialized : true
}));

app.use(passport.initialize());
app.use(passport.session());

// req flash
app.use(flash());

app.use((req,res,next)=> {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error  = req.flash('error');
    next();
    })



    app.use(bodyParser.urlencoded({extended: true}));


app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next();
});


app.use('/', indexRoutes);
app.use('/', authRoutes);
app.use('/', changePasswordRoutes);
app.use('/', contactRoutes);
app.use('/', profileAndTeamRoutes);


app.get('*', (req, res, next)=>{
  res.render('error404')
})

let mongoURL = ''

if (process.env.NODE_ENV === 'production') {
    mongoURL = process.env.MONGO_URI_PROD
    console.log('Running in Production environment');
} else if (process.env.NODE_ENV === 'local') {
    mongoURL = process.env.MONGO_URI_LOCAL
    console.log('Running in local environment');
    
} else {
    console.log('ENVIRONMENT NOT SET CORRECTLY, PLEASE CHECK')

}

// MONGOOSE CONNECTION
mongoose.connect(mongoURL)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`connected to port: ${PORT} and dataBase ${mongoURL}`)
        })

    })
    .catch(err => console.log('err'))


