const passport = require('passport');
const Auth0Strategy = require('passport-auth0');

exports.decorate = (app) => {
  app.use(passport.initialize());
  app.use(passport.session());
  passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.AUTH_CALLBACK_URL
  }, (...args) => {
    args.done();
  }));

  passport.serializeUser((id, done) => {
    /** @todo - hit our db */
    done(null, id);
  });

  passport.deserializeUser((id, done) => {
    /** @todo - hit our db */
    done(null, id);
  });

  app.get('/auth', passport.authenticate('auth0'));

  app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: process.env.REACT_APP_HOME
  }));
  
  app.get('/auth/me', (request, response) => {
    if (!request.session.user) {
      response.status(404).send('No user logged in!');
    } else {
      response.status(200).send(request.session.user);
    }
  });

  app.get('/logout', (request, response) => {
    request.logout();
    response.redirect(process.env.REACT_APP_LANDING);
  });

  console.log(` ====== AUTH INITIALIZED`);
  return Promise.resolve(app);
}