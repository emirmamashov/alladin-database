let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ProducerShema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    keywords: { type: String },
    author: { type: String }
});

let Producer = mongoose.model('Producer', ProducerShema);

module.exports = (registry) => {
    registry['Producer'] = Producer;
}