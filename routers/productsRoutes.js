const router = require('express').Router();

const {
  getAllProducts
} = require('../controller/productsController');
const Products = require('../models/Products');


// router.get("/allproducts", getAllProducts);

router.get('/productPage', (req, res) => {
    Products.find({})
    .then((x)=>{
      res.render("productsTable", {x}) 
      console.log(x)
    })
    .catch((y)=>{
      console.log(y)
    })
    })
  

module.exports = router;