const mongoose = require('mongoose');
let userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    project_name: String,
    project_code: String,
    customer: String,
    type_of_project: String,
    hourly_rate: String,
    start_date: String,
    end_date: String,
    project_manager: String,
    tech_lead: String,
    description: String
});
module.exports = mongoose.model('projects', userSchema);