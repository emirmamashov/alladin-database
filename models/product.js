var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name: { type: String, required: true },
    htmlH1: { type: String },
    htmlTitle: { type: String },
    metaDescription: { type: String },
    metaKeywords: { type: String },
    description: { type: String },
    tegs: { type: String },
    phone: { type: Number },
    price: { type: Number },
    priceStock: { type: Number },
    seoUrl: { type: String },
    promoStickers: { type: String },
    image: { type: String },
    producer: { type: Schema.Types.ObjectId, ref: 'Producer' },
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    categories: [
        { type: Schema.Types.ObjectId, ref: 'Category' }
    ]
});
let Product = mongoose.model('Product', schema);
module.exports = (registry) => {
    registry['Product'] = Product;
}