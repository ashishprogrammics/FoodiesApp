const { json } = require('body-parser');

const User = require('../models/user')
const speakeasy = require('speakeasy');
const nodemailer = require('nodemailer');
var fs = require('fs');
var path = require('path');
const Products = require('../models/Products');


const getAllProducts = async (req, res) => {
  try {
    const allProducts = await Products.find({})
      // .populate({
      //   path: 'user',
      //   select: 'fullName', // Populate the 'user' field with 'fullName'
      // })
      // .populate({
      //   path: 'round_2',
        // populate: {
        //   path: 'chosenDog', // Populate the 'chosenDog' reference in 'rounds'
        //   model: 'Dog', // Specify the model to use (assuming it's 'Dog')
        // },
      // });
    res.json({ Products: allProducts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};







module.exports = {
  getAllProducts,
}

