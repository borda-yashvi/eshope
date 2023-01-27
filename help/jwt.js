const expressJwt = require("express-jwt");

function authJwt() {
  const secret = process.env.secret;
  return console.log(
    expressJwt({
      secret,
      algorithms: ["HS256"],
    })
  );
}

module.exports = authJwt;