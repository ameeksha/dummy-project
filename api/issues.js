const mongoose = require('mongoose');
let userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    project_id: String,
    issue_name: String,
    description: String,
    start_date: String,
    end_date: String,
    assignee: String,
    reporter: String,
});
module.exports = mongoose.model('issues', userSchema);