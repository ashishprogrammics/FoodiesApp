const { json } = require('body-parser');

const User = require('../models/user')
const nodemailer = require('nodemailer');
var fs = require('fs');
var path = require('path');
const Products = require('../models/Products');
const Payments = require('../models/Products');


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

const deleteProduct = async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    await product.deleteOne();
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const editProduct = async (req, res) => {
  const { Name, Price, Type, Description, Category, status, rating, image, size, discount } = req.body;

  try {
    const updatedProduct = await Products.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { Name, Price, Type, Description, Category, status, rating, image, size, discount } },
      { new: true }
    );

    if (!updatedProduct) {
      return res.json({ success: false, message: 'Product not found' });
    }

    return res.json({ success: true, product: updatedProduct });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: 'An error occurred' });
  }
};



const createProductData = async (req, res) => {
  const { Name, Price, Type, Description, Category, status, rating, image, size, discount } = req.body;

  try {
    const newProduct = await Products.create({
      Name,
      Price,
      Type,
      Description,
      Category,
      discount,
      status,
      rating,
      image,
      size
    });

    return res.json({ success: true, product: newProduct });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: 'An error occurred' });
  }
};




module.exports = {
  getAllProducts,
  deleteProduct,
  editProduct,
  createProductData
}

