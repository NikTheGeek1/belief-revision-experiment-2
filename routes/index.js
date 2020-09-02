const path = require('path');

const expresss = require('express');

const router = expresss.Router();

// setting up a router for every get request
router.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../online-app/build/index.html'));
});

module.exports = router;