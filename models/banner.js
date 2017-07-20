let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let bannaerSchema = new Schema({
    name: { type: String, required: true },
    photo: { type: Schema.Types.ObjectId, ref: 'Photo' },
    photos: [
        { type: Schema.Types.ObjectId, ref: 'Photo' }
    ]
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'update_at'
    }
});
let Banner = mongoose.model('Banner', bannaerSchema);
module.exports = (registry) => {
    registry['Banner'] = Banner;
}