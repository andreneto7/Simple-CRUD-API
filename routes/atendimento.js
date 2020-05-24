const express = require('express');
const router = express.Router();

const Antendimentos = require('../models/Atendimento');


router.get('/', (req, res) => {
    // Sending html in response with message
    // res.send('Hello from persons');

    // Query all documents in db
    Antendimentos.find()
        .then(a => {
            // Returning documents to client
            return res.json(a);
        })
        .catch(error => {
            // Error handling
            return res.status(500).json(error);
        });
});

// @Route   POST api/person/new
// @desc    Creating a new person
// @access  Public
router.post('/', (req, res) => {

    console.log(req.body);

    // Creating a new Person (Model)
    const atendimento = req.body;

    // Saving the new Person in the db
    atendimento
        .save()
        .then(a => res.json(a))
        .catch(error => res.status(500).json(error));
});

// Export the routes of person
module.exports = router;
