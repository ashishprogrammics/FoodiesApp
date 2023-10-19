const router = require('express').Router();
const User = require('../models/user');
const {isAdmin,authMiddleware} = require("../middleware/auth")

const {
    registerUserData,
    loginUserData,
    loginAdminData,
    verifyEmail,
    frogotPassword,
    verifyFrogotPassword,
    getAllUser,
    deleteUser,
    apploginUser,
    verifyAppLogin,
    editUserDetails
    
}=require('../controller/userRegistrationController');

router.get("/getAllUser",getAllUser)
router.post("/register", authMiddleware, registerUserData)
router.post("/loginAdmin",loginAdminData)
router.patch("/loginUser",loginUserData)
router.patch("/applogin",apploginUser)
router.patch("/verifyLogin",verifyAppLogin)
router.patch("/verify", verifyEmail);
router.post("/forgot", frogotPassword);
router.patch("/verifyForgot", verifyFrogotPassword);
router.delete("/:id", deleteUser);
router.patch("/editUser/:id", authMiddleware, editUserDetails)


router.get('/index', (req, res) => {
  res.render("index") 
})


router.get('/userPage', (req, res) => {
  User.find({})
  .then((x)=>{
    res.render("usersTable", {x}) 
    console.log(x)
  })
  .catch((y)=>{
    console.log(y)
  })
  })


router.get('/productPage', (req, res) => {
  User.find({})
  .then((x)=>{
    res.render("productsTable", {x}) 
    console.log(x)
  })
  .catch((y)=>{
    console.log(y)
  })
  })
  

module.exports = router;