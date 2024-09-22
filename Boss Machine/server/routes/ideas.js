const express = require('express');
const router = express.Router();
const { getAllFromDatabase, getFromDatabaseById, addToDatabase, updateInstanceInDatabase, deleteFromDatabasebyId } = require('../db');
const checkMillionDollarIdea = require('../checkMillionDollarIdea');



router.get('/', (req, res) => {
    const allIdeas = getAllFromDatabase('ideas');
    res.send(allIdeas);
});


router.get('/:ideaId', (req, res) => {
    const idea = getFromDatabaseById('ideas', req.params.ideaId);
    if (!idea) {
        return res.status(404).send();
    }
    res.send(idea);
});


router.put('/:ideaId', (req, res) => {
    const updatedIdea = updateInstanceInDatabase('ideas', req.body);
    if (!updatedIdea) {
        return res.status(404).send();
    }
    res.send(updatedIdea);
});


router.post('/', checkMillionDollarIdea, (req, res) => {
    const newIdea = addToDatabase('ideas', req.body);
    if (!newIdea) {
        return res.status(500).send();
    }
    res.status(201).send(newIdea);
});

router.post('/:ideaId', (req, res) => {
    const updatedIdea = updateInstanceInDatabase('ideas', req.body);
    res.status(201).send(updatedIdea);
});


router.delete('/:ideaId', (req, res) => {
    const ideaId = req.params.ideaId;
    if (isNaN(ideaId) || !Number.isInteger(+ideaId)) {
        return res.status(404).send();
    }

    const deleted = deleteFromDatabasebyId('ideas', req.params.ideaId);
    if (deleted) {
        return res.status(204).send();
    }
    res.status(404).send();
});


module.exports = router;