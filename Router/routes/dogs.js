const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('ALL DOGS');
})

router.get('/:id', (req, res) => {
    res.send('VIEWING DOGS');
})

router.get('/:id/edit', (req, res) => {
    res.send('EDITING DOGS');
})

module.exports = router;