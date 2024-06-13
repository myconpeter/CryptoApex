const Admin = require('../models/admin');
const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');

passport.use(
	'userLocal',
	new LocalStrategy(
		{ usernameField: 'email' },
		async (email, password, done) => {
			try {
				const user = await Admin.findOne({ email });

				if (!user) {
					return done(null, false, {
						message: 'This Email is not registered',
					});
				}

				if (user.password !== password) {
					return done(null, user);
				} else {
					return done(null, false, {
						message: 'Incorrect password!!!',
					});
				}
			} catch (err) {
				return done(err);
			}
		}
	)
);

passport.serializeUser(async (user, done) => {
	try {
		done(null, user.id);
	} catch (err) {
		done(err);
	}
});

passport.deserializeUser(async (id, done) => {
	try {
		const user = await Admin.findById(id);
		done(null, user);
	} catch (err) {
		done(err);
	}
});
