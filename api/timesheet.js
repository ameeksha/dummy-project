const mongoose = require('mongoose');
let userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user_id: String,
    day: String,
    date: Date,
    time_in: String,
    time_out: String,
    total_hour: String
});
module.exports = mongoose.model('timesheets', userSchema);


