const expressJwt = require("express-jwt") ;
const dotenv = require('dotenv')
dotenv.config();
export const requiresSignin = expressJwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
});

