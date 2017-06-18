var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    title: { type: String, required: true },
    href: { type: String },
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    bgcolor: { type: String },
    children: []
        /*children: [{
         category: {type: Schema.Types.ObjectId, ref: 'Category'},
         href: {type: string},
         title: {type: string}
         }]*/
});
let Menu = mongoose.model('Menu', schema);
module.exports = (registry) => {
    registry['Menu'] = Menu;
};