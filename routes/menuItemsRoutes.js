const express = require('express');
const router = express.Router();

const menuItems = require('./../models/menuItems');


// post and get for menuItems

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newMenu = new menuItems(data);
        const response = await newMenu.save();
        console.log('data is saved');
        res.status(200).json(response);

    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });

    }

});


router.get('/', async (req, res) => {
    try {
        const data = await menuItems.find();
        console.log('data fetched');
        res.status(200).json(data);

    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });

    }
});

router.get('/:tasteType', async (req, res) => {
    try {
        const tasteType = req.params.tasteType;//Extract the taste from the url parameter

        if (tasteType == 'spicy' || tasteType == 'sweet' || tasteType == 'sour') {

            const response = await menuItems.find({ taste: tasteType });
            console.log('response fetched');
            res.status(200).json(response);
        }
        else {
            res.status(404).json({ error: 'Invalid taste Type' });
        }

    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });


    }
});

module.exports = router;