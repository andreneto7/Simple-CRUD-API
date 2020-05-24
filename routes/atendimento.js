const express = require('express');
const router = express.Router();

const Antendimentos = require('../models/Atendimento');


// @Route   POST api/person/new
// @desc    Creating a new person
// @access  Public
router.post('/', (req, res) => {

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
