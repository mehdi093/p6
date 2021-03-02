const mongoose = require('mongoose');

const sauceSchema = mongoose.Schema({
    name: { type: String, required: true },
    manufacturer: { type: String, required: true },
    description: { type: String, required: true },
    mainPepper: { type: String, required: true },
    imageUrl: { type: String, required: false },
    heat: { type: Number, required: true },
    likes: { type: Number, required: false },
    dislikes: { type: String, required: false },
    usersLiked: { type: String, required: false },
    usersDislikes: { type: String, required: false },
    userId:{type: String, required: true},
    // id:{type: ObjectID, required: true},
});
   


module.exports = mongoose.model('Sauce', sauceSchema);

// const mongoose = require('mongoose');

// const sauceSchema = mongoose.Schema({
//   title: { type: String, required: true },
//   description: { type: String, required: true },
//   imageUrl: { type: String, required: true },
//   userId: { type: String, required: true },
//   price: { type: Number, required: true },
// });

// module.exports = mongoose.model('Sauce', sauceSchema);