const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Project = require('./projects');
const User = require('./users');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

mongoose.connect('mongodb+srv://ameeksha:oenYSqdvqpYcAXaL@cluster0.1j2uu.mongodb.net/dummy-project?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);
app.get('/projects', function (req, res) {
    Project.find().then((data) => {
        res.json(data);
    })
});

app.post('/projects', jsonParser, function (req, res) {
    const data = new Project({
        _id: new mongoose.Types.ObjectId(),
        project_name: req.body.project_name,
        project_code: req.body.project_code,
        customer: req.body.customer,
        type_of_project: req.body.type_of_project,
        hourly_rate: req.body.hourly_rate,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        project_manager: req.body.project_manager,
        tech_lead: req.body.tech_lead,
        description: req.body.description

    });
    data.save().then((result) =>
        res.status(201).json(result)
    )
        .catch((error) => console.warn(error))
})
// app.get('/projects/:Id', function (req, res) {
//     Project.find(req.params).then((data) => {
//         res.json(data);
//     })
// });
app.get('/users', function (req, res) {
    User.find().then((data) => {
        res.json(data);
    })
});

app.post('/users', jsonParser, function (req, res) {
    const data = new User({
        _id: new mongoose.Types.ObjectId(),
        project_id: req.body.project_id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email_address: req.body.email_address,
        time_zone: req.body.time_zone,
        shift: req.body.shift,
        holiday_group: req.body.holiday_group,

    });
    data.save().then((result) =>
        res.status(201).json(result)
    )
        .catch((error) => console.warn(error))
})
app.listen(5000)