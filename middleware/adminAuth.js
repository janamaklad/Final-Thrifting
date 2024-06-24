import jwt from "jsonwebtoken";

export default (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET_PHRASE, (err, decodedToken) => {
      if (decodedToken.user.role == "admin") next();
      else res.redirect(`/`);
    });
  } else res.redirect(`/`);
};
