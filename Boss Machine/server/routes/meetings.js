const express = require('express');
const { getAllFromDatabase, getFromDatabaseById, addToDatabase, updateInstanceInDatabase, deleteFromDatabasebyId, createMeeting, deleteAllFromDatabase } = require('../db');
const router = express.Router();


router.get('/', (req, res) => {
    const allMeetings = getAllFromDatabase('meetings');
    res.send(allMeetings);
});


router.post('/', (req, res) => {

    const newMeeting = createMeeting();
    const addMeeting = addToDatabase('meetings', newMeeting);

    if(addMeeting) {
       return res.status(201).send(addMeeting);
    }

    res.status(500).send({Error: 'could not add meeting'});

});

router.delete('/', (req, res) => {

    const deleted = deleteAllFromDatabase('meetings');
    if(deleted) {
       return res.status(204).send();
    }
    res.status(500).send({Error: 'could not delete meeting'});

})






module.exports = router;