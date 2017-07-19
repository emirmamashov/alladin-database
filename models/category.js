var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name: { type: String, required: true },
    parentCategory: { type: Schema.Types.ObjectId, ref: 'Category' },
    description: { type: String },
    keywords: { type: String },
    author: { type: String },
    image: { type: String },
    viewInMenu: { type: Boolean, default: false },
    photo: { type: Schema.Types.ObjectId, ref: 'Photo' }
});

let Category = mongoose.model('Category', schema);

module.exports = (registry) => {
    registry['Category'] = Category;
};