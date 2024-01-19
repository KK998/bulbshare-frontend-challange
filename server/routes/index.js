const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

const parseAndReadFile = (fileName) => {
    const data = fs.readFileSync(path.join(__dirname,'..', 'data', fileName));
    // maybe some optimisation to store the parsed data in memory?
    // TODO: check if this is a good idea
    return JSON.parse(data);
}

// 1. /api/feed
router.get('/feed', (req, res) => {
    const pageSize = req.query.PAGE_SIZE ? parseInt(req.query.PAGE_SIZE) : 5;
    const currentPage = req.query.PAGE ? parseInt(req.query.PAGE) : 1;

    const items = parseAndReadFile('feed.json');

    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;

    res.json(items.slice(start, end));
});

// 2. /api/comments
// An endpoint to return the list of comments by `briefref`
/**
Example of the data structure:
{
    "bcommentref": "bcomment-50482994-E7EE-4628-A49E-43498771CE44",
    "briefref": "brief-DD650C75-1401-11ED-B757-0A9E4A196D19",
    "user": {
    "userref": "user-411817BB-2BF8-47ED-9729-715D49AA2E33",
    "name": "Bart",
    "avatar": "https://www.xtrafondos.com/wallpapers/vertical/bart-simpson-minimalista-3459.jpg",
    },
    "comment": "I like those shoes!",
    "submitted_on": "2022-10-27 10:10:58"
},
*/
router.get('/comments', (req, res) => {
    const comments = parseAndReadFile('comments.json');
    // as this is just a simple string comparison we don't need to be extra careful for any SQL injection
    const briefref = req.query.briefref || null;

    if (briefref) {
        return res.json(
            comments.filter(comment => comment.briefref === briefref)
        );
    }

    res.json(comments);
})

module.exports = router;