let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let bannaerSchema = new Schema({
    name: { type: String, required: true },
    image: { type: String},
    images: [
        { type: String }
    ],
    buttonLink: { type: String },
    buttonName: { type: String },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    isShowInMainPage: {
        type: Boolean,
        default: false
    },
    showInMainPageLeft: {
        type: Boolean,
        default: false
    },
    showInMainPageRight: {
        type: Boolean,
        default: false
    }
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