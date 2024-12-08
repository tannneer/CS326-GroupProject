import passport from "passport";
//import { Strategy as GoogleStrategy } from "passport-google-oauth20";
//import dotenv from "dotenv";
import User from "./user.js";

// This function is called when a user is successfully authenticated with
// Google. It serializes the user's ID and passes it to the done callback.
// The ID is stored in the session and is used to retrieve the user object
// in subsequent requests.
passport.serializeUser((user, done) => done(null, user.id));

// This function is called to retrieve the user object from the session.
// It deserializes the user's ID and passes it to the done callback. The
// user object is then available in the req.user property in the request
// handler.
passport.deserializeUser(async (id, done) => {
  const user = await User.findByPk(id);
  done(null, user);
});

export default passport;
