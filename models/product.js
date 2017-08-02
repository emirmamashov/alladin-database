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
    promoStickerId: { type: Schema.Types.ObjectId, ref: 'PromoSticker' },
    producerId: { type: Schema.Types.ObjectId, ref: 'Producer' },
    categoryId: { type: Schema.Types.ObjectId, ref: 'Category' },
    categories: [
        {   type: Schema.Types.ObjectId, 
            ref: 'Category',
            default: []
        }
    ],
    image: { type: String },
    images: [
        { type: String }
    ],
    isHot: { type: Boolean, default: false }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'update_at'
    }
});
let Product = mongoose.model('Product', schema);
module.exports = (registry) => {
    registry['Product'] = Product;
}