const express = require('express');
const router = express.Router();

router.get('/', async(req, res)=>
{
    res.status(200).render('pages/create');
})

module.exports = router;