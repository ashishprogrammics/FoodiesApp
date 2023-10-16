const jwt = require('jsonwebtoken');
const User = require("../models/user");

const authMiddleware = (async (req, res, next) => {
  const { authorization } = req.headers;

  if (authorization && authorization.startsWith("Bearer")) {
    const token = authorization.split(" ")[1];

    try {
      const decoded = jwt.verify(token, "apple");
      const user = await User.findById(decoded.id);
      if (user) {
        req.user = user;
        return next();
      } else {
        return res.status(401).json({ success: false, message: 'User not found' });

      }
    } catch (error) {
      
      return res.status(401).json({ success: false, message: 'Token expired or invalid' });

    }
  } else {
    // res.status(401);
    // throw new Error("No token provided");
    return res.status(401).json({ success: false, message: 'No token provided' });

  }
});

// const isAdmin = asyncHandler(async(req,res,next) => {
//    const {email} = req.user;
//   try {
//     const isAdmin = await User.findOne({email});
//     if(isAdmin.role !=="admin"){
//         throw new Error("You are not admin");
//     } else{
//         next();
//     }
//   } catch (error) {
//     throw new Error(error);
//   }
// })

module.exports = { authMiddleware, };
