const express = require('express');
const router = express.Router();
const SubmitForm = require('../models/SubmitForm');

router.get('/', (req, res) => {
    SubmitForm.find({ })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error)  => {
            console.log('error: ', error);
        });
});

router.post('/save', (req, res) => {
            console.log('Body: ', req.body);
            const data = req.body;
            const newSubmitForm = new SubmitForm(data);
            newSubmitForm.save((error) => {
                if (error) {
                    res.status(500).json({
                        msg: 'Sorry man, server errors man'
                    });
                    return;
                } return res.json({
                        msg: 'Yo data was saved my bruh'
                    });
                });
            });

module.exports = router;