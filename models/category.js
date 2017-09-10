let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let mongoosePaginate = require('mongoose-paginate');

let schema = new Schema({
    name: { type: String, required: true },
    parentCategory: { type: Schema.Types.ObjectId, ref: 'Category' },
    description: { type: String },
    keywords: { type: String },
    author: { type: String },
    image: { type: String },
    images: [
        { type: String }
    ],
    viewInMenu: { type: Boolean, default: false },
    viewInLikeBlock: { type: Boolean, default: false },
    showInMainPageLeft: {
        type: Boolean,
        default: false
    },
    showInMainPageRight: {
        type: Boolean,
        default: false
    }
});
schema.plugin(mongoosePaginate);

let Category = mongoose.model('Category', schema);

module.exports = (registry) => {
    registry['Category'] = Category;
};