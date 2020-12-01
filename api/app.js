const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Project = require('./projects');
const Issue = require('./issues');
const Admin = require('./admins');
const User = require('./users');
const Timesheet = require('./timesheet');
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
app.get('/projects/:id', function (req, res) {
    Project.findById(req.params.id).then((data) => {
        res.json(data);
    })
});


app.get('/users', function (req, res) {
    User.find().then((data) => {
        res.json(data);
    })
});

app.get('/users/:project_id', function (req, res) {
    User.find(req.params).then((data) => {
        res.json(data);
    })
});

app.get('/user/:_id', function (req, res) {
    User.find(req.params).then((data) => {
        res.json(data);
    })
});

app.post('/users', jsonParser, function (req, res) {
    const data = new User({
        _id: new mongoose.Types.ObjectId(),
        project_id: req.body.project_id,
        name: req.body.name,
        // last_name: req.body.last_name,
        email_address: req.body.email_address,
        time_zone: req.body.time_zone,
        shift: req.body.shift,
        holiday_group: req.body.holiday_group

    });
    data.save().then((result) =>
        res.status(201).json(result)
    )
        .catch((error) => console.warn(error))
})

app.get('/projects/:project_id/users', function (req, res) {
    User.find(req.params).then((data) => {
        res.json(data);
    })
});


app.get('/issues', function (req, res) {
    Issue.find().then((data) => {
        res.json(data);
    })
});


app.post('/issues', jsonParser, function (req, res) {
    const data = new Issue({
        _id: new mongoose.Types.ObjectId(),
        project_id: req.body.project_id,
        issue_name: req.body.issue_name,
        description: req.body.description,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        assignee: req.body.assignee,
        reporter: req.body.reporter,

    });
    data.save().then((result) =>
        res.status(201).json(result)
    )
        .catch((error) => console.warn(error))
})

app.get('/issues/:project_id', function (req, res) {
    Issue.find(req.params).then((data) => {
        res.json(data);
    })
});

app.get('/signup', function (req, res) {
    Admin.find().then((data) => {
        res.json(data);
    })
});

app.post('/signup', jsonParser, function (req, res) {
    const data = new Admin({
        _id: new mongoose.Types.ObjectId(),
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    data.save().then((result) =>
        res.status(201).json(result)
    )
        .catch((error) => console.warn(error))
});

app.post('/login', jsonParser, function (req, res) {
    var email = req.body.email;
    var password = req.body.password;
    Admin.findOne({ email: email, password: password }, function (err, user) {
        if (err) {
            console.log(err)
            return res.status(500).send();
        }
        if (!user) {
            return res.status(404).send('Incorrect email or password');
        }

        return res.status(200).send('User logged in');
    })
});

app.get('/timesheet/:user_id', function (req, res) {
    Timesheet.find(req.params).then((data) => {
        res.json(data);
    })
});

app.post('/timesheet', jsonParser, function (req, res) {
    const data = new Timesheet({
        _id: new mongoose.Types.ObjectId(),
        user_id: req.body.user_id,
        day: req.body.day,
        date: req.body.date,
        time_in: req.body.time_in,
        time_out: req.body.time_out,
        total_hour: req.body.total_hour
    });
    data.save().then((result) =>
        res.status(201).json(result)
    )
        .catch((error) => console.warn(error))
})


app.listen(10000)