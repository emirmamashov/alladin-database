var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var userSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    phone: { type: Number, required: true },
    address: { type: String },
    email: { type: String },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'update_at'
    }
});

userSchema.methods.encryptPassword = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
};

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};
let User = mongoose.model('User', userSchema);
module.exports = (registry) => {
    registry['User'] = User;
}