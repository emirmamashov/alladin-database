let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let exchangeSchema = new Schema({
    dollar: { type: Number, default: 49 },
    euro: { type: Number },
    ruble: { type: Number },
    tenge: { type: Number },
    yen: { type: Number },
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'update_at'
    }
});
let Exchange = mongoose.model('Exchange', ConvertSchema);
module.exports = (registry) => {
    registry['Exchange'] = Exchange;
}