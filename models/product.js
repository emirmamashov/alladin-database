let mongoose = require('mongoose');
let mongoosePaginate = require('mongoose-paginate');

let Schema = mongoose.Schema;

let schema = new Schema({
    name: { type: String, required: true },
    htmlH1: { type: String },
    htmlTitle: { type: String },
    metaDescription: { type: String },
    metaKeywords: { type: String },
    description: { type: String },
    tegs: { type: String },
    phone: { type: Number },
    price: { type: Number },
    priceTrade: { type: Number }, // оптовая цена
    comments: { type: String },
    priceStock: { type: Number }, // цена акция
    seoUrl: { type: String },
    promoStickerId: { type: Schema.Types.ObjectId, ref: 'PromoSticker' },
    producerId: { type: Schema.Types.ObjectId, ref: 'Producer' },
    categoryId: { type: Schema.Types.ObjectId, ref: 'Category' },
    category: { type: Schema.Types.Mixed },
    filters: [
        {   type: Schema.Types.ObjectId, 
            ref: 'Filter',
            default: []
        }
    ],
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
schema.plugin(mongoosePaginate);
let Product = mongoose.model('Product', schema);
module.exports = (registry) => {
    registry['Product'] = Product;
}