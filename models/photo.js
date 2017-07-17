let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let photoSchema = new Schema({
    name: { type: String},
    htmlH1: { type: String },
    htmlTitle: { type: String },
    metaDescription: { type: String },
    metaKeywords: { type: String },
    description: { type: String },
    url: { type: String, required: true }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

let Photo = mongoose.model('Photo', photoSchema);

module.exports = (registry) => {
    registry['Photo'] = Photo;
};