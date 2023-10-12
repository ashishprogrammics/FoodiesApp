const jwt = require('jsonwebtoken')
const cookie = require('cookie-parser')

const authMiddleware = asyncHandler(async (req, res, next) => {
    const { authorization } = req.headers;
  
    if (authorization && authorization.startsWith("Bearer")) {
      const token = authorization.split(" ")[1];
  
      try {
        const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
        const user = await User.findById(decoded.id);
        if (user) {
          req.user = user;
          return next();
        } else {
          throw new Error("User not found");
        }
      } catch (error) {
        res.status(401);
        throw new Error("Token expired or invalid");
      }
    } else {
      res.status(401);
      throw new Error("No token provided");
    }
  });
  
module.exports = { loginrequired }