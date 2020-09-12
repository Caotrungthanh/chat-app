const express = require('express');
const router = express.Router();

router.get('/', (request, responsive) => {
    responsive.send('Server is up and running!');
});

module.exports = router;