let mongoose = require('mongoose');
let mongoosePaginate = require('mongoose-paginate');

let Schema = mongoose.Schema;
// просмотренные пролдукты пользователяы
let schema = new Schema({
    productId: { type: Schema.Types.ObjectId, ref: 'Product' },
    userId: { type: Schema.Types.ObjectId, ref: 'User' }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'update_at'
    }
});
schema.plugin(mongoosePaginate);
let ViewedProduct = mongoose.model('ViewedProduct', schema);
module.exports = (registry) => {
    registry['ViewedProduct'] = ViewedProduct;
}