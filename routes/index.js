const express = require('express');
const router = express.Router();
const Codepen = require('../models/Codepen');

// Web Browser requests will automatically request a favicon ico which doesn't exist atm -- consider blocking request with middleware

// Route GET by ID
// Looks for one post by the ID provided and returns it if found
router.get('/:id', async (req, res) => {
    try {
        const id = await Codepen.findOne({ _id: req.params.id });

        // If the id is found in mongoDB database
        if(id) {
            return res.json(id);
        } 
        // If not
        else {
            return res.status(404).json('I found no post with that ID. Sorry.');
        }
    } catch (err) {
        console.error(err);
    }
});

// Route GET ALL -- Grabs all documents in Database and returns as JSON
router.get('/', async (req, res) => {
    try {
        const allPosts = await Codepen.find({});
        res.json(allPosts);

    } catch (err) {
        console.error(err);
    }
});


module.exports = router;