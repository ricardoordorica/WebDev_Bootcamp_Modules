const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('All shelters')
})
router.get('/:id', (req, res) => {
    res.send('Id shelters')
})
router.get('/:id/edit', (req, res) => {
    res.send('Edit shelters')
})

module.exports = router;