let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let filterSchema = new Schema({
    name: { type: String, required: true }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'update_at'
    }
});
let Filter = mongoose.model('Filter', filterSchema);
module.exports = (registry) => {
    registry['Filter'] = Filter;
}