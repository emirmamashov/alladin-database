var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    cart: { type: Object, required: true },
    address: { type: String, required: true },
    name: { type: String, required: true },
    paymentId: { type: String, required: true },
    description: { type: String },
    keywords: { type: String },
    author: { type: String }
});
let Order = mongoose.model('Order', schema);
module.exports = (registry) => {
    registry['Order'] = Order;
}