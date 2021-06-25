const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');
const Codepen = require('../models/Codepen');

// Route    POST /api/post/addcodepen
// Takes in a JSON body as a new project and posts it to the MongoDB Cloud Database
router.post('/addcodepen', async (req, res) => {

    const { 
    codepen_title,
    codepen_description,
    codepen_url 
    } = req.body;

    // If good URL
    if(validUrl.isUri(codepen_url)) {
        try {

        // Do a database search for whether the URL already exists 
        let codepen = await Codepen.findOne({ codepen_url });

        // It exists -- so return it
        if(codepen) {
            res.json({message: 'This codepen URL already exists. No post was made. See JSON below for existing post.', codepen});
        // It does not exist -- so create it
        } else {
            codepen = new Codepen({
                codepen_title,
                codepen_description,
                codepen_url,
                Date: new Date()
            });

            await codepen.save();
            res.json({ message: 'Success. Post below.', codepen});
        }

    } catch(error) {
        console.error(error);
        res.status(500).json('Could not talk to database.');
    }
    
    } else {
        res.status(401).json('Invalid URL.');
    }

});

module.exports = router;