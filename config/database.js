const mongoose = require("mongoose");
// const Url = 'mongodb://localhost/FoodiesApp'
// const Url = 'mongodb://localhost:27017/dogsTinder'
const Url = 'mongodb+srv://ashish_foodies:ashish_foodies@firstcluster.yrutbmz.mongodb.net/?retryWrites=true&w=majority'

exports.connect = () => {
    mongoose.connect(Url)
        .then(() => {
            console.log("sucessfully connected to database");
        })
        .catch((error) => {
            console.log("database connection failed. existing now...");
            console.error(error);

        });
};
