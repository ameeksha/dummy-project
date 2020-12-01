const mongoose = require('mongoose');
let userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    project_id: String,
    name: String,
    email_address: String,
    time_zone: String,
    shift: String,
    holiday_group: String

   
});
module.exports = mongoose.model('users', userSchema);
