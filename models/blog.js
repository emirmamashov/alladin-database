let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let schema = new Schema({
    name: { type: String, required: true },
    htmlH1: { type: String },
    htmlTitle: { type: String },
    metaDescription: { type: String },
    metaKeywords: { type: String },
    text: { type: String },
    seoUrl: { type: String }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'update_at'
    }
});
let Blog = mongoose.model('Blog', schema);
module.exports = (registry) => {
    registry['Blog'] = Blog;
}